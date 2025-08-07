#!/bin/bash

echo "🚀 Building and deploying erfanmohammadpour.mokhtal.xyz..."

# Option 1: Build locally first, then use Docker
echo "📦 Building Vue.js application locally..."
npm install --legacy-peer-deps
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Stop existing containers
    echo "🛑 Stopping existing containers..."
    docker compose down
    
    # Use the simple Dockerfile that doesn't build
    echo "🐳 Building Docker image with pre-built files..."
    docker build -f Dockerfile.simple -t erfan-portfolio .
    
    # Run with docker compose
    echo "🚀 Starting services..."
    docker run -d \
        --name erfan-portfolio \
        --restart unless-stopped \
        -p 80:80 \
        -p 443:443 \
        -v $(pwd)/ssl-certs:/etc/letsencrypt:ro \
        -v $(pwd)/www:/var/www/certbot:ro \
        -v $(pwd)/nginx-ssl.conf:/etc/nginx/nginx.conf:ro \
        erfan-portfolio
    
    echo "✅ Deployment complete!"
    echo "🌐 Visit: http://erfanmohammadpour.mokhtal.xyz"
    
    # Show container status
    docker ps | grep erfan-portfolio
else
    echo "❌ Build failed!"
    exit 1
fi