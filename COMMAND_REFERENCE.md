# Legal Pages - Command Reference

## Development Commands

### Start Development Server
```bash
npm run dev
```
Access at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Output: `dist/` folder (ready to deploy)

### Preview Production Build
```bash
npm run preview
```

## Legal Page URLs

### Development Server
- http://localhost:5173/#legal
- http://localhost:5173/#tos
- http://localhost:5173/#privacy
- http://localhost:5173/#cookies
- http://localhost:5173/#aup

### Production (after deployment)
- https://yourdomain.com/#legal
- https://yourdomain.com/#tos
- https://yourdomain.com/#privacy
- https://yourdomain.com/#cookies
- https://yourdomain.com/#aup

## Documentation Files to Read

### Essential Reading (Start Here)
1. [LEGAL_IMPLEMENTATION_OVERVIEW.md](./LEGAL_IMPLEMENTATION_OVERVIEW.md) - Overview
2. [LEGAL_PAGES_CHECKLIST.md](./LEGAL_PAGES_CHECKLIST.md) - What was built

### Detailed References
3. [LEGAL_PAGES.md](./LEGAL_PAGES.md) - Full implementation guide
4. [LEGAL_COMPONENTS_REFERENCE.md](./LEGAL_COMPONENTS_REFERENCE.md) - Component specs
5. [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Summary details

### Deployment & Operations
6. [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Pre-launch checklist

## Files Created

### Components (6)
```
components/
├── LegalDocument.tsx
├── LegalHub.tsx
├── TermsOfService.tsx
├── PrivacyPolicy.tsx
├── CookiePolicy.tsx
└── AcceptableUsePolicy.tsx
```

### Types (1)
```
types/
└── legal.ts
```

### Updated (2)
```
├── App.tsx
└── components/Footer.tsx
```

### Documentation (5)
```
├── LEGAL_PAGES.md
├── IMPLEMENTATION_SUMMARY.md
├── LEGAL_COMPONENTS_REFERENCE.md
├── DEPLOYMENT_CHECKLIST.md
├── LEGAL_IMPLEMENTATION_OVERVIEW.md
└── LEGAL_PAGES_CHECKLIST.md
```

## Quick Links

### Document Statistics
- **Total Sections**: 34
- **Total Words**: ~11,200
- **Est. Read Time**: ~45 minutes
- **Components**: 6
- **Routes**: 5
- **Supported Devices**: All modern browsers

### Support Emails
- legal@gignite.com
- privacy@gignite.com
- security@gignite.com
- compliance@gignite.com
- appeals@gignite.com

## Development Workflow

### Add New Section to Document
1. Open relevant component (e.g., `TermsOfService.tsx`)
2. Edit the `sections` array
3. Add new `ContentSection` object
4. Save and refresh (dev server auto-reloads)

### Update Document Date
```tsx
<LegalDocument
  lastUpdated="January 1, 2025"
  // ...
/>
```

### Change Colors
Edit in `index.html`:
```javascript
colors: {
  "primary": "#0df259",
  "primary-dark": "#0bbd45",
  // ... edit colors here
}
```

## Testing Checklist

### Manual Testing
```bash
# 1. Start dev server
npm run dev

# 2. Test routes
# - http://localhost:5173/#legal
# - http://localhost:5173/#tos
# - http://localhost:5173/#privacy
# - http://localhost:5173/#cookies
# - http://localhost:5173/#aup

# 3. Test features
# - Click table of contents
# - Test print button
# - Test PDF download
# - Test on mobile

# 4. Verify build
npm run build
```

### Build Verification
```bash
npm run build
# Expected output:
# ✓ 42 modules transformed
# ✓ dist/index.html 3.57 kB
# ✓ dist/assets/index-*.js 276.47 kB
# ✓ built in 1.7s
```

## Troubleshooting

### Routes Not Working
- Clear browser cache (Ctrl+F5)
- Check hash format: `#legal` not `#/legal`
- Verify App.tsx routing logic

### Styling Issues
- Check Tailwind classes are spelled correctly
- Verify colors in index.html
- Clear node_modules and reinstall

### Build Errors
- Run `npm install` to ensure dependencies
- Check TypeScript for type errors
- Verify all imports are correct

## Performance Monitoring

### Bundle Size Check
```bash
npm run build
# Check output file size in dist/
```

### Load Time Check
1. Open DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Check load time and bundle size

## Deployment Steps

### 1. Verify Build
```bash
npm run build
```

### 2. Deploy to Hosting
```bash
# Option A: Vercel
vercel

# Option B: Netlify
netlify deploy

# Option C: Manual to S3
aws s3 sync dist/ s3://your-bucket/
```

### 3. Test Live Site
- Visit #legal
- Test all routes
- Verify styling
- Test print functionality

## Git Workflow (if using version control)

### Commit Legal Pages
```bash
git add components/Legal*.tsx
git add components/*Service.tsx
git add components/*Policy.tsx
git add types/legal.ts
git add App.tsx
git commit -m "feat: implement legal pages system"
```

### Push to Repository
```bash
git push origin main
```

## Monitoring & Analytics

### Google Analytics Setup
Add to your GA initialization:
```javascript
gtag('event', 'page_view', {
  page_path: '/#legal',
  page_title: 'Legal Hub'
});
```

### Key Metrics to Track
- Page views per legal document
- Average time on page
- Bounce rate
- Document downloads
- Print interactions

## Hosting Recommendations

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure server to serve `index.html`

## Support Resources

### Internal Docs
- [LEGAL_PAGES.md](./LEGAL_PAGES.md) - Technical details
- [LEGAL_COMPONENTS_REFERENCE.md](./LEGAL_COMPONENTS_REFERENCE.md) - API reference
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Launch checklist

### External Resources
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Material Symbols](https://fonts.google.com/icons)

## FAQ

### Q: Can I change the colors?
**A:** Yes, edit in `index.html` Tailwind config

### Q: How do I add a new legal document?
**A:** See LEGAL_PAGES.md "Adding New Documents" section

### Q: Can I translate to Bengali?
**A:** Yes, future enhancement suggested in docs

### Q: How do I enable PDF download?
**A:** Integrate a PDF library like pdfkit or react-pdf

### Q: Can I have user acceptance tracking?
**A:** Yes, future enhancement with backend integration

## Quick Reference Card

| Task | Command/Action |
|------|-----------------|
| Start Dev | `npm run dev` |
| Build Prod | `npm run build` |
| View Legal Hub | Go to `#legal` |
| Edit Content | Open component, edit `sections` array |
| Change Colors | Edit `index.html` Tailwind config |
| Add Document | Create new component, update routing |
| Test Routes | Visit each `#tos`, `#privacy`, etc. |
| Deploy | `npm run build` then upload `dist/` |

---

## Last Updated
February 15, 2024

## Version
1.0.0 - Initial Release

## Status
✅ Production Ready
