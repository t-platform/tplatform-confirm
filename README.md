# TplatForm Email Confirmation Website

A professional Next.js website for handling TplatForm email confirmations and providing user support.

## 🚀 Features

- **Email Confirmation**: Secure Supabase integration for email verification
- **Professional Design**: Clean, modern UI with TplatForm branding
- **Mobile Responsive**: Optimized for all device sizes
- **Deep Link Support**: Automatic app opening after confirmation
- **Contact & Support**: Comprehensive FAQ and contact form
- **Privacy Focused**: Professional privacy policy with legal language
- **Analytics Ready**: Vercel Analytics integration
- **Futuristic Effects**: Smooth animations and transitions

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animation**: Framer Motion
- **Backend**: Supabase for email confirmation
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
website/
├── app/                    # Next.js App Router pages
│   ├── confirm/           # Email confirmation handler
│   ├── contact/           # Contact page with form & FAQ
│   ├── privacy/           # Privacy policy page
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Landing page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility libraries
│   └── supabase.ts        # Supabase client configuration
├── styles/                # CSS styles
│   └── globals.css        # Global styles with animations
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# App Configuration
NEXT_PUBLIC_APP_NAME=TplatForm
NEXT_PUBLIC_APP_SCHEME=tplatform
NEXT_PUBLIC_DEEP_LINK_BASE=tplatform://

# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

### 3. Supabase Configuration

Update your Supabase project settings:

**Authentication → URL Configuration:**
- Site URL: `https://your-domain.vercel.app`
- Redirect URLs: `https://your-domain.vercel.app/**`

**Authentication → Email Templates:**
- Update confirmation email template to use your domain
- Redirect URL: `https://your-domain.vercel.app/confirm`

### 4. Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add all environment variables to Vercel dashboard
3. **Custom Domain** (optional): Configure custom domain in Vercel settings
4. **Deploy**: Automatic deployment on every push to main branch

### Post-Deployment Steps

1. **Update Supabase URLs**: Replace localhost URLs with production domain
2. **Test Email Flow**: Verify email confirmation works end-to-end
3. **Configure Analytics**: Set up tracking for confirmation success rates
4. **Monitor Performance**: Use Vercel Analytics for site performance

## 📧 Email Confirmation Flow

1. **User Signs Up**: In TplatForm mobile app
2. **Email Sent**: Supabase sends confirmation email with token
3. **User Clicks Link**: Redirected to `/confirm?token=xxx`
4. **Token Verification**: Website verifies token with Supabase
5. **Success Page**: Shows confirmation success + app deep link
6. **App Opening**: Attempts to open TplatForm app automatically

## 🎨 Customization

### Branding Colors

Update `tailwind.config.js` to modify brand colors:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Main blue
    // ... other shades
  },
  secondary: {
    500: '#a855f7', // Main purple
    // ... other shades
  },
}
```

### Animations

Custom animations are defined in `styles/globals.css`:
- Fade in/out effects
- Slide transitions
- Floating animations
- Gradient animations
- Glow effects

### Components

All components are TypeScript React components with:
- Framer Motion animations
- Responsive design
- Accessibility features
- Professional styling

## 📊 Analytics & Monitoring

### Tracked Events

- Email confirmation success/failure
- Deep link app opening attempts
- Contact form submissions
- Page views and user engagement

### Performance Monitoring

- Core Web Vitals tracking
- Page load performance
- Error monitoring
- User experience metrics

## 🔒 Security Features

- **CSP Headers**: Content Security Policy implementation
- **HTTPS Only**: Secure connections enforced
- **Input Validation**: Form validation and sanitization
- **Rate Limiting**: Protection against abuse
- **Error Handling**: Secure error messages

## 📱 Mobile Optimization

- **Responsive Design**: Works on all screen sizes
- **Touch Friendly**: Large touch targets
- **Fast Loading**: Optimized images and code splitting
- **PWA Ready**: Progressive Web App capabilities

## 🧪 Testing

### Manual Testing Checklist

- [ ] Email confirmation flow end-to-end
- [ ] Deep link app opening
- [ ] Contact form submission
- [ ] Mobile responsiveness
- [ ] Privacy policy display
- [ ] FAQ functionality
- [ ] Error handling

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## 📞 Support

For technical support or questions:

- **Email**: support@tplatform.com
- **Documentation**: This README
- **Issues**: GitHub repository issues

## 📄 License

Copyright © 2025 TplatForm. All rights reserved.

---

Built with ❤️ for secure and user-friendly currency exchange.
