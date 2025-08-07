# 🚀 Deployment Guide - Erfan Mohammadpour Portfolio

## Prerequisites
- Docker & Docker Compose installed
- Domain `erfanmohammadpour.mokhtal.xyz` pointing to your server IP
- Ports 80 and 443 open on your server

## 🛠️ Quick Setup

### 1. Clone and Prepare
```bash
git clone <your-repo>
cd ErfanMhpLanding
```

### 2. Set Permissions (Linux/macOS)
```bash
chmod +x init-letsencrypt.sh
```

### 3. Initialize SSL Certificate
```bash
# For production (recommended)
./init-letsencrypt.sh

# For testing (to avoid rate limits)
# Edit init-letsencrypt.sh and set staging=1, then run:
# ./init-letsencrypt.sh
```

### 4. Start the Application
```bash
docker-compose up -d --build
```

## 🔍 Verify Deployment

### Check Services Status
```bash
docker-compose ps
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f nginx
docker-compose logs -f app
docker-compose logs -f certbot
```

### Test SSL Certificate
```bash
curl -I https://erfanmohammadpour.mokhtal.xyz
```

## 🔧 Management Commands

### Update Application
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose up -d --build
```

### Renew SSL Certificate (Automatic)
The certificate will auto-renew. To manually renew:
```bash
docker-compose run --rm certbot renew
docker-compose exec nginx nginx -s reload
```

### Stop Services
```bash
docker-compose down
```

### Clean Up (Remove all data)
```bash
docker-compose down -v
docker system prune -a
```

## 📁 Project Structure
```
ErfanMhpLanding/
├── Dockerfile                 # Vue.js app container
├── docker-compose.yml        # Multi-service orchestration
├── nginx-ssl.conf            # Nginx config with SSL
├── init-letsencrypt.sh       # SSL setup script
├── .dockerignore             # Docker ignore file
├── ssl-certs/                # SSL certificates (auto-generated)
├── www/                      # Certbot challenge files
└── src/                      # Vue.js source code
```

## 🌐 Nginx Features
- ✅ HTTP to HTTPS redirect
- ✅ SSL/TLS encryption (Let's Encrypt)
- ✅ Gzip compression
- ✅ Static file caching
- ✅ Security headers
- ✅ Rate limiting
- ✅ SPA routing support
- ✅ Health checks

## 🔒 Security Features
- SSL/TLS encryption with auto-renewal
- Security headers (HSTS, XSS Protection, etc.)
- Rate limiting for API endpoints
- Content Security Policy (CSP)
- Hidden sensitive files
- Server tokens disabled

## 🚨 Troubleshooting

### SSL Certificate Issues
```bash
# Check certificate status
docker-compose logs certbot

# Re-run certificate setup
./init-letsencrypt.sh
```

### Application Not Loading
```bash
# Check app health
docker-compose exec app wget -qO- http://localhost/health

# Restart app
docker-compose restart app
```

### Nginx Issues
```bash
# Test nginx config
docker-compose exec nginx nginx -t

# Reload nginx
docker-compose exec nginx nginx -s reload
```

## 📊 Monitoring

### Health Checks
- App: `https://erfanmohammadpour.mokhtal.xyz/health`
- SSL: Use SSL checker tools online

### Performance
- Lighthouse: Test performance scores
- GTmetrix: Analyze load times
- SSL Labs: Test SSL configuration

## 🔄 Auto-Renewal Schedule
- SSL certificates auto-renew every 12 hours (check)
- Nginx reloads every 6 hours to pick up new certificates
- Certbot checks for renewal twice daily

## 📞 Support
For issues or questions, contact: thisiserfun@gmail.com