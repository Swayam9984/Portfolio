# 🚀 Deployment Guide

This guide provides detailed instructions for deploying your portfolio to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] Update all personal information in components
- [ ] Replace placeholder projects with your actual work
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Configure environment variables
- [ ] Test contact form locally
- [ ] Optimize images and assets
- [ ] Review and update README

## 🌐 Vercel Deployment (Recommended)

### Step 1: Prepare Your Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial portfolio setup"

# Push to GitHub
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy on Vercel

1. **Sign up/Login** to [Vercel](https://vercel.com)
2. **Import Project** from GitHub
3. **Configure Project**:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add the following:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-password
     CONTACT_EMAIL=contact@example.com
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live! 🎉

### Step 3: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

## ☁️ Netlify Deployment

### Step 1: Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x

### Step 2: Environment Variables

Add in Netlify dashboard:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`

### Step 3: Deploy

1. Connect GitHub repository
2. Configure build settings
3. Add environment variables
4. Deploy

## 🐳 Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
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

### Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Add this for Docker
}

module.exports = nextConfig
```

### Build and Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 --env-file .env.local portfolio
```

## ☁️ AWS Amplify

1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables
4. Deploy

## 🔧 Environment Variables Setup

### Gmail App Password

1. Enable 2-Factor Authentication
2. Go to Google Account → Security
3. Under "Signing in to Google" → App passwords
4. Select "Mail" and device
5. Copy the 16-character password
6. Use it as `SMTP_PASS`

### SendGrid

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
CONTACT_EMAIL=contact@example.com
```

### Mailgun

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
CONTACT_EMAIL=contact@example.com
```

## 🐛 Troubleshooting

### Build Fails

1. Check Node.js version (18+ required)
2. Clear cache: `rm -rf .next node_modules`
3. Reinstall: `npm install`
4. Check for TypeScript errors: `npm run lint`

### Contact Form Not Working

1. Verify environment variables are set
2. Check SMTP credentials
3. Review server logs
4. Test with a service like Mailtrap for development

### Performance Issues

1. Enable Next.js Image Optimization
2. Reduce particle count
3. Lazy load heavy components
4. Use Vercel Analytics for monitoring

## 📊 Post-Deployment

- [ ] Test all links and forms
- [ ] Verify mobile responsiveness
- [ ] Check page load speed
- [ ] Set up analytics (optional)
- [ ] Configure SEO meta tags
- [ ] Submit to search engines

## 🔒 Security Best Practices

1. **Never commit** `.env.local` to git
2. Use **App Passwords** for Gmail (not regular password)
3. Enable **Rate Limiting** on contact form (future enhancement)
4. Use **HTTPS** (automatic on Vercel/Netlify)
5. Regularly **update dependencies**

## 📈 Monitoring & Analytics

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

Happy Deploying! 🚀

