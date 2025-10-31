# 🚀 Deployment Guide

## Quick Deploy Options

### 🔷 Vercel (Recommended - 5 minutes)

**Why Vercel?**
- ✅ Free for personal projects
- ✅ Automatic CI/CD
- ✅ Built-in Next.js optimization
- ✅ Global CDN
- ✅ Automatic HTTPS

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Add Environment Variables** (Optional)
   - Go to Project Settings → Environment Variables
   - Add your `.env` variables:
     - `DATABASE_URL`
     - `OPENAI_API_KEY`
     - etc.

4. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records as shown

**That's it! Your site is live! 🎉**

---

### 🟢 Netlify

**Steps:**

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

2. **Deploy**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

3. **Configure**
   - Add environment variables in Netlify dashboard
   - Set up custom domain

---

### ☁️ AWS (Advanced)

#### Option 1: AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repo
   - Select branch

2. **Build Settings**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

#### Option 2: AWS EC2 + PM2

1. **Launch EC2 Instance**
   - Ubuntu 22.04 LTS
   - t2.micro (free tier)
   - Open ports 80, 443, 22

2. **Install Dependencies**
```bash
# SSH into instance
ssh -i your-key.pem ubuntu@your-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx
```

3. **Deploy Application**
```bash
# Clone repo
git clone your-repo-url
cd portfolio

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx**
```nginx
# /etc/nginx/sites-available/portfolio
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### 🐳 Docker

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=portfolio
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

**Deploy:**
```bash
docker-compose up -d
```

---

### 📦 DigitalOcean App Platform

1. **Create App**
   - Go to DigitalOcean
   - Apps → Create App
   - Connect GitHub repo

2. **Configure**
   - Detected as Node.js
   - Build command: `npm run build`
   - Run command: `npm start`

3. **Add Database** (Optional)
   - Add PostgreSQL database
   - Connection string auto-configured

---

## Database Deployment

### 🐘 PostgreSQL Options

#### Vercel Postgres
```bash
# Install
npm i @vercel/postgres

# Add to Vercel project
vercel link
vercel env add DATABASE_URL
```

#### Supabase (Free)
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string
4. Add to `.env`

#### Railway (Free)
1. Go to [railway.app](https://railway.app)
2. New Project → PostgreSQL
3. Copy connection string

#### Neon (Free - Serverless)
1. Go to [neon.tech](https://neon.tech)
2. Create database
3. Copy connection string

---

## Environment Variables

### Required
```env
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

### Optional
```env
DATABASE_URL="postgresql://..."
OPENAI_API_KEY="sk-..."
NEXT_PUBLIC_GA_ID="G-..."
```

### Setting in Vercel
```bash
vercel env add DATABASE_URL production
vercel env add OPENAI_API_KEY production
```

---

## Custom Domain

### Vercel
1. Project Settings → Domains
2. Add domain
3. Update DNS:
   - Type: A, Name: @, Value: 76.76.19.19
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### Netlify
1. Domain Settings → Add custom domain
2. Update DNS:
   - Type: A, Name: @, Value: 75.2.60.5
   - Type: CNAME, Name: www, Value: yoursite.netlify.app

### Cloudflare (CDN)
1. Add site to Cloudflare
2. Update nameservers
3. Enable proxy (orange cloud)
4. SSL: Full (strict)

---

## Performance Optimization

### Pre-deployment Checklist

- [ ] **Images optimized** (WebP, compressed)
- [ ] **Unused dependencies removed**
- [ ] **Environment variables set**
- [ ] **Error boundaries added**
- [ ] **Loading states implemented**
- [ ] **SEO meta tags added**
- [ ] **Lighthouse score > 90**

### Build Optimizations

**next.config.mjs:**
```javascript
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  
  // Analyze bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        three: {
          name: 'three',
          test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
          priority: 20,
        },
      };
    }
    return config;
  },
};
```

---

## Monitoring

### Vercel Analytics
```bash
npm i @vercel/analytics

# In app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
<Analytics />
```

### Sentry (Error Tracking)
```bash
npm i @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs
```

---

## CI/CD

### GitHub Actions

**.github/workflows/deploy.yml:**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### 3D Not Working

- Enable WebGL in deployment
- Check if Three.js is properly bundled
- Verify dynamic imports

### Database Connection Issues

- Check connection string format
- Verify SSL mode
- Test connection locally first

---

## Post-Deployment

### 1. Test Everything
- [ ] All pages load
- [ ] Forms work
- [ ] 3D renders
- [ ] Terminal functions
- [ ] Theme switching
- [ ] Mobile responsive

### 2. SEO Setup
- [ ] Submit to Google Search Console
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Open Graph images

### 3. Analytics
- [ ] Google Analytics configured
- [ ] Error tracking setup
- [ ] Performance monitoring

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Deploy Issues**: Check project README

---

**Your portfolio is now live! 🚀 Share it with the world!**

