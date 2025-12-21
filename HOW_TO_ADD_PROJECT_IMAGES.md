# 📸 How to Add Project Images

## Quick Steps

### Option 1: Use Your Own Screenshots (Recommended)

1. **Take Screenshots** of your projects:
   - Social Media Website: Visit https://project1.great-site.net/ and take a screenshot
   - Amazon Clone: Visit https://amazon-clone-flax-phi-91.vercel.app/signup and take a screenshot
   - DSA Instructor: Visit https://swayam9984.github.io/DSA-Instructor/ and take a screenshot
   - Religious App: Take a screenshot of your app

2. **Save Images** in `public/projects/` folder:
   ```
   public/
   └── projects/
       ├── social-media.jpg
       ├── amazon-clone.jpg
       ├── dsa-instructor.jpg
       └── religious-app.jpg
   ```

3. **Update** `components/Projects.tsx`:
   ```typescript
   {
     title: 'Social Media Website',
     // ... other fields
     image: '/projects/social-media.jpg', // Add this line
   }
   ```

### Option 2: Use External Image URLs

Update the `image` field in `components/Projects.tsx` with direct URLs:

```typescript
{
  title: 'Social Media Website',
  image: 'https://your-image-host.com/social-media.jpg',
}
```

## Image Specifications

- **Size**: 800x400px (16:9 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: Under 500KB
- **Quality**: High resolution for crisp display

## Current Setup

Right now, I've added placeholder images from Unsplash. To replace them:

1. Take screenshots of your actual projects
2. Save them in `public/projects/` folder
3. Update the `image` field in each project object

## Example Update

```typescript
{
  title: 'Social Media Website',
  description: '...',
  tech: ['React', 'Node.js', ...],
  github: 'https://github.com/swayamtosscs-svg',
  live: 'https://project1.great-site.net/',
  color: 'from-blue-500 to-cyan-500',
  featured: true,
  image: '/projects/social-media.jpg', // Your screenshot here
}
```

## Tools for Screenshots

- **Browser Extensions**: Full Page Screen Capture, Awesome Screenshot
- **Online Tools**: Screenshot.guru, Page2Images
- **Desktop**: Snipping Tool (Windows), Screenshot (Mac)

---

**Note**: The images will automatically optimize using Next.js Image component for better performance! 🚀

