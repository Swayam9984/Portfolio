# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env.local

# 3. Edit .env.local with your email settings
# (See README.md for Gmail setup instructions)

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Quick Customization

### 1. Update Hero Section
Edit `components/Hero.tsx`:
- Change name, title, description
- Update social media links
- Modify resume download link

### 2. Update About Section
Edit `components/About.tsx`:
- Adjust skill levels (0-100%)
- Update tech tags list
- Modify bio text

### 3. Add Your Projects
Edit these files:
- `components/Projects.tsx` - General projects
- `components/AIMLProjects.tsx` - AI/ML projects
- `components/FullStackProjects.tsx` - Backend projects

### 4. Update Experience
Edit `components/Experience.tsx`:
- Replace with your work history
- Update job descriptions
- Modify tech stacks

### 5. Update Contact Info
Edit `components/Contact.tsx`:
- Change email, phone, location
- Update social media links

### 6. Add Resume
1. Create your resume PDF
2. Save as `public/resume.pdf`
3. The download button will work automatically

## 🎨 Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  neon: {
    cyan: '#00f0ff',    // Change these
    purple: '#a855f7',  // hex colors
    pink: '#ec4899',    // to match
    blue: '#3b82f6',    // your brand
  },
}
```

## 📧 Email Setup (Gmail)

1. Enable 2FA on Google Account
2. Generate App Password:
   - Google Account → Security → App passwords
   - Create password for "Mail"
3. Add to `.env.local`:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   ```

## 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "My portfolio"
git remote add origin <your-repo-url>
git push -u origin main

# 2. Go to vercel.com
# 3. Import GitHub repo
# 4. Add environment variables
# 5. Deploy!
```

## ✅ Checklist

- [ ] Updated personal information
- [ ] Added your projects
- [ ] Updated experience
- [ ] Added resume PDF
- [ ] Configured email settings
- [ ] Tested contact form
- [ ] Customized colors (optional)
- [ ] Deployed to Vercel

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- See `DEPLOYMENT.md` for deployment guides
- Review component files for inline comments

---

**That's it!** Your portfolio is ready to showcase your work. 🎉

