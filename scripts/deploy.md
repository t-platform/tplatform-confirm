# TplatForm Website Deployment Guide

## 🚀 Quick Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free)
- Supabase project configured

### Step 1: Repository Setup
```bash
# Initialize git repository in website folder
cd website
git init
git add .
git commit -m "Initial TplatForm email confirmation website"

# Create GitHub repository and push
gh repo create tplatform-confirm --public
git remote add origin https://github.com/yourusername/tplatform-confirm.git
git push -u origin main
```

### Step 2: Vercel Deployment
1. **Connect to Vercel**: Go to [vercel.com](https://vercel.com) and sign in
2. **Import Project**: Click "New Project" → Import from GitHub
3. **Select Repository**: Choose `tplatform-confirm`
4. **Configure**: 
   - Framework: Next.js (auto-detected)
   - Root directory: Leave empty
   - Build command: `npm run build` (auto-detected)

### Step 3: Environment Variables
Add these in Vercel Dashboard → Project → Settings → Environment Variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_NAME=TplatForm
NEXT_PUBLIC_APP_SCHEME=tplatform
NEXT_PUBLIC_DEEP_LINK_BASE=tplatform://
```

### Step 4: Deploy
Click "Deploy" - Your site will be live at: `https://tplatform-confirm.vercel.app`

## 🔧 Supabase Configuration Update

After deployment, update your Supabase project:

### Authentication Settings
```
Project → Authentication → URL Configuration

Site URL: https://tplatform-confirm.vercel.app
Redirect URLs: 
- https://tplatform-confirm.vercel.app/**
- http://localhost:3000/** (for development)
```

### Email Template Update
```
Project → Authentication → Email Templates → Confirm signup

Update the confirmation URL to:
https://tplatform-confirm.vercel.app/confirm?token={{ .Token }}&type=signup
```

## ✅ Testing Checklist

After deployment, test these features:

- [ ] Home page loads correctly
- [ ] Email confirmation flow works end-to-end
- [ ] Deep link app opening attempts work
- [ ] Contact form submits successfully
- [ ] Privacy policy displays correctly
- [ ] Mobile responsiveness works
- [ ] FAQ section expands/collapses
- [ ] All animations work smoothly

## 🎯 Custom Domain Setup (Optional)

1. **Purchase Domain**: Buy a domain like `confirm.tplatform.com`
2. **Add to Vercel**: Project → Settings → Domains
3. **Configure DNS**: Point domain to Vercel
4. **Update Supabase**: Change URLs to use custom domain
5. **Test**: Verify everything works with new domain

## 📊 Analytics Setup

### Vercel Analytics (Automatic)
- Enabled by default for all deployments
- View metrics in Vercel dashboard

### Custom Analytics (Optional)
Add Google Analytics or other tracking:

```javascript
// In app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
  strategy="afterInteractive"
/>
```

## 🔄 Continuous Deployment

Every push to `main` branch automatically deploys:

1. **Make Changes**: Edit files locally
2. **Commit**: `git add . && git commit -m "Update message"`
3. **Push**: `git push origin main`
4. **Deploy**: Vercel automatically builds and deploys

## 🚨 Troubleshooting

### Common Issues

**Build Fails**: Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Check TypeScript errors
- Verify environment variables

**Email Confirmation Not Working**: 
- Check Supabase URL configuration
- Verify environment variables
- Test with browser developer tools

**Deep Links Not Working**:
- Ensure app URL scheme is correct
- Test on actual mobile device
- Check if app is installed

### Support Contacts
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Supabase Support**: [supabase.com/support](https://supabase.com/support)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

## 📈 Performance Optimization

### After Launch
- Monitor Core Web Vitals in Vercel Analytics
- Optimize images using Next.js Image component
- Review and optimize CSS/JavaScript bundles
- Set up monitoring alerts for downtime

### SEO Optimization
- Verify meta tags are correct
- Submit sitemap to Google Search Console
- Add structured data for better search results
- Monitor search performance

---

🎉 **Congratulations!** Your TplatForm email confirmation website is now live and ready to handle user verifications!
