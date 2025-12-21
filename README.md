# 🚀 Modern Developer Portfolio

A premium, futuristic portfolio website showcasing full-stack development, AI/ML expertise, and cutting-edge frontend animations. Built with Next.js, Framer Motion, Tailwind CSS, and Three.js.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0a/00f0ff?text=Developer+Portfolio)

## ✨ Features

### 🎨 Design & Animations
- **Smooth Framer Motion animations** - Professional, fluid transitions throughout
- **Scroll-triggered animations** - Elements animate as you scroll
- **Parallax effects** - Depth and dimension with layered animations
- **Dynamic particle background** - Interactive canvas-based particle system
- **Cursor reactive effects** - Custom cursor with glow effects
- **Glassmorphism UI** - Modern glass-like design elements
- **Neon gradients** - Vibrant color schemes with gradient effects
- **3D effects** - Three.js integration for immersive experiences

### 📱 Sections
1. **Hero Section** - Animated landing with gradient blobs and social links
2. **About Me** - Animated skill bars and floating tech tags
3. **Projects Gallery** - Interactive project cards with hover effects
4. **AI/ML Showcase** - Animated cards with metrics and visualizations
5. **Full-Stack Projects** - API diagrams and architecture visualizations
6. **Experience Timeline** - Scroll-animated professional timeline
7. **Contact Form** - Working backend integration with email support
8. **Resume Download** - PDF download functionality

### 🛠️ Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber
- React Icons

**Backend:**
- Next.js API Routes
- Nodemailer (Email service)
- Node.js / Express patterns

**DevOps:**
- Vercel deployment ready
- Environment variable configuration
- Responsive design (mobile-first)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd floating-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=contact@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
floating-chatbot/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Main page
├── components/
│   ├── About.tsx                  # About section
│   ├── AIMLProjects.tsx           # AI/ML projects showcase
│   ├── Contact.tsx                # Contact form
│   ├── CursorEffect.tsx           # Custom cursor
│   ├── Experience.tsx             # Experience timeline
│   ├── FullStackProjects.tsx      # Full-stack projects
│   ├── Hero.tsx                   # Hero section
│   ├── Navigation.tsx             # Navigation bar
│   ├── ParticleBackground.tsx     # Particle system
│   └── Projects.tsx               # Projects gallery
├── lib/
│   └── animations.ts              # Reusable animation variants
├── public/
│   └── resume.pdf                 # Resume file (add your own)
├── .env.example                   # Environment variables template
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

## 🎯 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`)
   - Update name, title, and description
   - Add your social media links
   - Update resume file path

2. **About Section** (`components/About.tsx`)
   - Modify skill levels and technologies
   - Update bio text
   - Add/remove tech tags

3. **Projects** (`components/Projects.tsx`, `components/AIMLProjects.tsx`, `components/FullStackProjects.tsx`)
   - Replace with your actual projects
   - Update links, descriptions, and tech stacks
   - Add real project images

4. **Experience** (`components/Experience.tsx`)
   - Update work history
   - Modify job descriptions and technologies

5. **Contact** (`components/Contact.tsx`)
   - Update contact information
   - Modify social media links

### Styling

- **Colors**: Edit `tailwind.config.js` for theme colors
- **Animations**: Modify `lib/animations.ts` for animation variants
- **Global Styles**: Update `app/globals.css` for base styles

### Resume

1. Create your resume PDF
2. Place it in the `public/` folder as `resume.pdf`
3. The download button will automatically link to it

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to Google Account → Security → App passwords
   - Create a new app password for "Mail"
   - Copy the generated password
3. Use the app password in `.env.local` as `SMTP_PASS`

### Other Email Providers

Update SMTP settings in `.env.local`:
- **SendGrid**: Use their SMTP settings
- **Mailgun**: Use their SMTP settings
- **Custom SMTP**: Configure with your provider's details

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `SMTP_HOST`
     - `SMTP_PORT`
     - `SMTP_USER`
     - `SMTP_PASS`
     - `CONTACT_EMAIL`
   - Click "Deploy"

3. **Your site is live!** 🎉

### Other Platforms

**Netlify:**
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variables

**AWS Amplify:**
- Connect repository
- Configure build settings
- Add environment variables

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🎨 Animation Customization

### Adjust Animation Speed

Edit `lib/animations.ts`:
```typescript
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Adjust this value
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}
```

### Disable Animations

Set `prefers-reduced-motion` in `app/globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 🔧 Troubleshooting

### Email Not Sending

1. Check environment variables are set correctly
2. Verify SMTP credentials
3. Check spam folder
4. Review server logs for errors

### Build Errors

1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run lint`

### Performance Issues

1. Optimize images (use Next.js Image component)
2. Reduce particle count in `ParticleBackground.tsx`
3. Disable heavy animations on mobile

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or support, please open an issue on GitHub or contact via the portfolio contact form.

## 🎯 Future Improvements

- [ ] Add blog section
- [ ] Integrate CMS for content management
- [ ] Add dark/light theme toggle
- [ ] Implement analytics (Google Analytics, Plausible)
- [ ] Add internationalization (i18n)
- [ ] Optimize for SEO
- [ ] Add PWA support
- [ ] Implement more Three.js 3D effects
- [ ] Add project filtering/search
- [ ] Integrate with GitHub API for live stats

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

---

Built with ❤️ by a Senior Full-Stack & AI/ML Developer

