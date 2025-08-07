# Stage 1: Build the Vue.js application
FROM node:20-alpine as build-stage

# Set working directory
WORKDIR /app

# Add package file
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Production Nginx server
FROM nginx:alpine as production-stage

# Install wget for health checks
RUN apk add --no-cache wget

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built application from build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create nginx user and set permissions
RUN addgroup -g 101 -S nginx \
    && adduser -S -D -H -u 101 -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx \
    && chown -R nginx:nginx /usr/share/nginx/html \
    && chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/log/nginx

# Add health check script
RUN echo '#!/bin/sh' > /healthcheck.sh \
    && echo 'wget --no-verbose --tries=1 --spider http://localhost/health || exit 1' >> /healthcheck.sh \
    && chmod +x /healthcheck.sh

# Switch to non-root user
USER nginx

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD /healthcheck.sh

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]