#!/bin/bash

# SSL Setup Script for erfanmohammadpour.mokhtal.xyz

DOMAIN="erfanmohammadpour.mokhtal.xyz"
EMAIL="thisiserfun@gmail.com"

echo "🔐 Setting up SSL for $DOMAIN..."

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p ssl-certs
mkdir -p www

# Stop all containers first
echo "🛑 Stopping existing containers..."
docker compose down
docker stop $(docker ps -aq) 2>/dev/null
docker rm $(docker ps -aq) 2>/dev/null

# Check and stop services on port 80
echo "🔍 Checking port 80..."
sudo systemctl stop nginx 2>/dev/null
sudo systemctl stop apache2 2>/dev/null
sudo systemctl stop httpd 2>/dev/null

# Start only the app container first
echo "🚀 Starting app container..."
docker compose up -d app

# Get initial certificate (HTTP challenge)
echo "📜 Getting SSL certificate..."
docker run -it --rm \
  -v $(pwd)/ssl-certs:/etc/letsencrypt \
  -v $(pwd)/www:/var/www/certbot \
  -p 80:80 \
  certbot/certbot certonly \
  --standalone \
  --preferred-challenges http \
  --email $EMAIL \
  --agree-tos \
  --no-eff-email \
  -d $DOMAIN

# Check if certificate was created
if [ -d "./ssl-certs/live/$DOMAIN" ]; then
    echo "✅ SSL certificate created successfully!"
    
    # Now start the proxy with SSL
    echo "🚀 Starting nginx proxy with SSL..."
    docker compose up -d nginx-proxy
    
    # Start certbot for auto-renewal
    echo "🔄 Starting auto-renewal service..."
    docker compose up -d certbot
    
    echo "🎉 Setup complete!"
    echo "📊 Container status:"
    docker compose ps
    
    echo ""
    echo "🌐 Your site should be available at:"
    echo "   HTTP:  http://$DOMAIN"
    echo "   HTTPS: https://$DOMAIN"
else
    echo "❌ Failed to create SSL certificate"
    echo "Please check your domain DNS settings and try again"
fi