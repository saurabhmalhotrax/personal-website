# Deployment Instructions

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to the project directory**:
   ```bash
   cd /Users/smx/Saurabh-Malhotra-EA/personal-website
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select "Yes" to deploy to production when ready

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   cd /Users/smx/Saurabh-Malhotra-EA/personal-website
   git init
   git add .
   git commit -m "Initial commit - Personal branding website"
   git remote add origin https://github.com/saurabhmalhotrax/personal-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `personal-website` repository
   - Click "Deploy"

3. **Custom Domain** (optional):
   - In Vercel dashboard, go to your project settings
   - Click "Domains"
   - Add your custom domain (e.g., saurabhmalhotra.com)
   - Follow DNS instructions

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm run start
```

---

## Customization Checklist

Before deploying, update these items:

### 1. Add Your Photo
Replace the placeholder in `/src/components/Hero.tsx`:
- Add your professional photo to `/public/` folder
- Update the Image component to use your photo

### 2. Update Metadata
Edit `/src/app/layout.tsx`:
- Update `title` and `description`
- Add your actual domain to `openGraph` config

### 3. Project Screenshots
In `/src/components/Projects.tsx`:
- Add screenshots of Lean Audit and AI-PPA
- Place images in `/public/` folder

### 4. Analytics (Optional)
Add Google Analytics or Vercel Analytics:
```bash
npm install @vercel/analytics
```

Then in `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// Add inside <body>:
<Analytics />
```

---

## Recommended Domain Names

Consider these domain options:
- saurabhmalhotra.com
- saurabhmalhotra.ca
- malhotrasaurabh.com

---

## Post-Deployment

1. Test all links work
2. Verify mobile responsiveness
3. Submit to Google Search Console
4. Add to LinkedIn profile
5. Include in email signature
