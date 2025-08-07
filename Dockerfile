# Stage 1: Build the Vue.js application
FROM node:20-alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean cache and install dependencies
RUN npm cache clean --force && \
    npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Production Nginx server
FROM nginx:alpine AS production-stage

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built application from build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]