#!/bin/bash

# Erfan Mohammadpour Portfolio - Startup Script
# This script sets up and starts the portfolio website with SSL

set -e

echo "🚀 Starting Erfan Mohammadpour Portfolio Setup..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="ErfanMohammadpour.mokhtal.xyz"
EMAIL="thisiserfun@gmail.com"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_success "Prerequisites check completed"
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    mkdir -p ssl-certs/conf
    mkdir -p www
    print_success "Directories created"
}

# Stop existing containers
stop_existing() {
    print_status "Stopping existing containers..."
    docker-compose down 2>/dev/null || true
    print_success "Existing containers stopped"
}

# Download SSL configuration files
download_ssl_configs() {
    print_status "Downloading SSL configuration files..."
    
    if [ ! -e "ssl-certs/conf/options-ssl-nginx.conf" ]; then
        curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > ssl-certs/conf/options-ssl-nginx.conf
    fi
    
    if [ ! -e "ssl-certs/conf/ssl-dhparams.pem" ]; then
        curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > ssl-certs/conf/ssl-dhparams.pem
    fi
    
    print_success "SSL configuration files downloaded"
}

# Create dummy certificate
create_dummy_cert() {
    print_status "Creating dummy certificate for $DOMAIN..."
    
    path="/etc/letsencrypt/live/$DOMAIN"
    mkdir -p "ssl-certs/live/$DOMAIN"
    
    docker-compose run --rm --entrypoint "openssl req -x509 -nodes -newkey rsa:4096 -days 1 -keyout '$path/privkey.pem' -out '$path/fullchain.pem' -subj '/CN=localhost'" certbot
    
    print_success "Dummy certificate created"
}

# Start nginx temporarily
start_nginx() {
    print_status "Starting Nginx temporarily..."
    docker-compose up --force-recreate -d nginx
    sleep 10
    print_success "Nginx started"
}

# Get real certificate
get_real_certificate() {
    print_status "Requesting Let's Encrypt certificate for $DOMAIN..."
    
    # Remove dummy certificate
    docker-compose run --rm --entrypoint "rm -Rf /etc/letsencrypt/live/$DOMAIN && rm -Rf /etc/letsencrypt/archive/$DOMAIN && rm -Rf /etc/letsencrypt/renewal/$DOMAIN.conf" certbot
    
    # Request real certificate
    docker-compose run --rm --entrypoint "certbot certonly --webroot -w /var/www/certbot --email $EMAIL -d $DOMAIN --rsa-key-size 4096 --agree-tos --force-renewal" certbot
    
    print_success "SSL certificate obtained"
}

# Start all services
start_services() {
    print_status "Starting all services..."
    docker-compose up -d --build
    print_success "All services started"
}

# Reload nginx
reload_nginx() {
    print_status "Reloading Nginx with SSL certificate..."
    sleep 5
    docker-compose exec nginx nginx -s reload
    print_success "Nginx reloaded"
}

# Health check
health_check() {
    print_status "Performing health check..."
    sleep 10
    
    if curl -f -s https://$DOMAIN/health > /dev/null; then
        print_success "Health check passed - Website is live!"
    else
        print_warning "Health check failed - Website might still be starting..."
    fi
}

# Display final information
display_info() {
    echo ""
    echo "════════════════════════════════════════════"
    print_success "🎉 Erfan Mohammadpour Portfolio is now live!"
    echo ""
    echo -e "🌐 Website: ${GREEN}https://$DOMAIN${NC}"
    echo -e "🔒 SSL: ${GREEN}Enabled with Let's Encrypt${NC}"
    echo -e "📧 Contact: ${BLUE}$EMAIL${NC}"
    echo ""
    echo "📊 Monitor your services:"
    echo "  docker-compose ps"
    echo "  docker-compose logs -f"
    echo ""
    echo "🔄 To update:"
    echo "  git pull && docker-compose up -d --build"
    echo "════════════════════════════════════════════"
}

# Main execution
main() {
    echo "🚀 Erfan Mohammadpour Portfolio - Production Deployment"
    echo "Domain: $DOMAIN"
    echo "Email: $EMAIL"
    echo ""
    
    check_prerequisites
    create_directories
    stop_existing
    download_ssl_configs
    create_dummy_cert
    start_nginx
    get_real_certificate
    start_services
    reload_nginx
    health_check
    display_info
}

# Run main function
main "$@"