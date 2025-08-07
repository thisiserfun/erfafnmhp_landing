#!/bin/bash

# Simple deployment script
echo "🚀 Deploying Erfan Portfolio..."

# Stop and remove existing container
echo "🛑 Stopping existing container..."
docker stop erfan-app 2>/dev/null
docker rm erfan-app 2>/dev/null

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -f Dockerfile.production -t erfan-app .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Run the container
    echo "🚀 Starting container..."
    docker run -d \
        --name erfan-app \
        --restart unless-stopped \
        -p 8080:80 \
        erfan-app
    
    # Wait a moment for container to start
    sleep 2
    
    # Check if container is running
    if docker ps | grep -q erfan-app; then
        echo "✅ Container is running!"
        echo "🌐 Your app is available at:"
        echo "   http://$(hostname -I | awk '{print $1}'):8080"
        echo "   http://localhost:8080"
        
        # Show container logs
        echo ""
        echo "📋 Container logs (last 10 lines):"
        docker logs --tail 10 erfan-app
    else
        echo "❌ Container failed to start. Checking logs..."
        docker logs erfan-app
    fi
else
    echo "❌ Build failed!"
    exit 1
fi