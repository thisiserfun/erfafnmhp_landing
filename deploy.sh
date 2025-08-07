#!/bin/bash

# Deployment script for erfanmohammadpour.mokhtal.xyz

echo "🚀 Starting deployment..."

# Stop existing containers
echo "📦 Stopping existing containers..."
docker compose down

# Clean build cache (optional, uncomment if needed)
# docker system prune -f

# Build and start services
echo "🔨 Building and starting services..."
docker compose up -d --build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Show running containers
    echo "📊 Running containers:"
    docker compose ps
    
    # Initialize SSL if needed
    if [ ! -d "./ssl-certs/live/erfanmohammadpour.mokhtal.xyz" ]; then
        echo "🔐 Initializing SSL certificate..."
        
        # Create directories
        mkdir -p ./ssl-certs
        mkdir -p ./www
        
        # Get SSL certificate
        docker compose run --rm certbot certonly \
            --webroot \
            --webroot-path=/var/www/certbot \
            --email thisiserfun@gmail.com \
            --agree-tos \
            --no-eff-email \
            --force-renewal \
            -d erfanmohammadpour.mokhtal.xyz
            
        # Restart nginx to load certificate
        docker compose restart app
    fi
    
    echo "🎉 Deployment complete!"
    echo "🌐 Visit: https://erfanmohammadpour.mokhtal.xyz"
else
    echo "❌ Build failed! Check the logs:"
    docker compose logs --tail=50
fi