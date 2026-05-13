# Al Azhar Tex — Production-Ready Static Website (FIXED)

## What Changed in This Fix Release

### Critical Fixes
- **Gallery lightbox**: Replaced direct event listeners with event delegation on `.gallery-grid` container. Eliminates memory leak and duplicate handler stacking on re-renders.
- **Contact form guard**: Added `onsubmit` check that alerts admin if `YOUR_FORM_ID` placeholder is still present, preventing user-facing 404s.

### High Priority Fixes
- **Admin panel duplicate listeners**: Added `panelsInitialized` flag so `initPanels()` only runs once per session. Logout resets the flag.
- **URL hash tab activation**: `products.html#women` now automatically opens the Women's tab on load via `activateTabFromHash()`.
- **Hero slider data validation**: `initHeroSlider()` now validates that `slidesData` is an array before using `.map()`, with fallback to defaults.
- **Google Maps admin notice**: Added prominent yellow banner below map reminding to replace generic coordinates with exact showroom location.

### Medium Priority Fixes
- **Content Security Policy**: Added `Content-Security-Policy` header to `vercel.json` covering scripts, styles, fonts, images, and Formspree connections.
- **Arabic `lang` attributes**: All Arabic text now wrapped with `lang="ar" dir="rtl"` for correct screen reader pronunciation.
- **Mobile toggle `aria-expanded`**: Toggle button now announces open/closed state to assistive technology.
- **Passive scroll listener**: Header scroll handler uses `{ passive: true }` to prevent main-thread blocking on mobile.
- **Skip-to-content link**: Added as first focusable element on every page for keyboard accessibility (WCAG 2.4.1).
- **Active nav `aria-current="page"`**: Current page marked for screen reader context.
- **Footer admin link hidden from AT**: `aria-hidden="true" tabindex="-1"` prevents screen readers from announcing the hidden admin link.
- **Tab data-target attributes**: Product tabs use `data-target` for robust panel matching instead of fragile index alignment.
- **Lightbox ARIA roles**: Added `role="dialog"`, `aria-label="Image lightbox"`, `aria-modal="true"`.

### Low Priority Fixes
- **`admin-btn-outline` CSS class**: Defined properly in stylesheet (was missing, relied on inline styles).
- **Image `width`/`height` attributes**: Added to reduce Cumulative Layout Shift (CLS).
- **Focus-visible styles**: Added `:focus-visible` ring for keyboard navigation clarity.
- **`aria-hidden` on hidden views**: Login/dashboard views toggle `aria-hidden` when shown/hidden.
- **Reduced motion support**: `@media (prefers-reduced-motion: reduce)` disables animations for accessibility.
- **WhatsApp SVG `aria-hidden`**: Decorative icon hidden from assistive tech.

---

## Project Structure
```
alazhartex/
├── index.html          # Homepage with hero slider, featured products, about preview
├── products.html       # Full product catalogue (Women 11, Men 8, Trending 12)
├── gallery.html        # Showroom gallery with lightbox
├── about.html          # Company story, owner profile, values
├── contact.html        # Contact form (Formspree), info cards, Google Maps
├── admin.html          # Admin control panel (7 tabs)
├── vercel.json         # Vercel deployment config with clean URLs + CSP
├── css/
│   └── style.css       # Complete stylesheet with gold/black palette
├── js/
│   ├── main.js         # Site engine: slider, tabs, lightbox, products, gallery
│   └── admin.js        # Admin auth, 7 panels, reset functionality
└── images/
    ├── logo.png        # Replace with your actual logo
    ├── logo-badge.jpg  # Replace with your badge logo
    ├── logo-alt.jpg    # Replace with alternate logo
    ├── catalog-1.jpg   # Replace with catalog poster 1
    ├── catalog-2.jpg   # Replace with catalog poster 2
    ├── catalog-3.jpg   # Replace with catalog poster 3
    └── catalog-4.jpg   # Replace with catalog poster 4
```

## Deployment Checklist

### Before First Deploy
- [ ] **Formspree**: Sign up at https://formspree.io → Create form → Copy endpoint → Replace `YOUR_FORM_ID` in `contact.html`
- [ ] **Google Maps**: Get exact embed code for your Zagazig showroom → Replace iframe in `contact.html`
- [ ] **Images**: Replace all placeholder files in `/images/` with real photos (keep filenames)
- [ ] **Admin password**: Log in at `/admin` → Change from default `admin`/`admin`

### Deploy to Vercel
1. Go to https://vercel.com and sign up (free)
2. Drag and drop the `alazhartex` folder into the Vercel dashboard
3. `vercel.json` handles clean URLs automatically (`/products` → `products.html`)
4. Custom domain: Add in project settings

## Admin Panel

- Access: `your-site.vercel.app/admin`
- Default login: `admin` / `admin` (change immediately)
- 7 control panels: Password, Logo, Slider, Texts, Backgrounds, Products, Reset
- All customizations stored in browser localStorage
- Session expires after 1 hour

## Color Palette

| Name | Value | Usage |
|------|-------|-------|
| Gold | #C9A84C | Primary accent, buttons, highlights |
| Gold Light | #E8D5A3 | Subtle accents, hover states |
| Gold Dark | #8B7355 | Secondary text, borders |
| Black | #1A1A1A | Header, dark sections, text |
| Charcoal | #2D2D2D | Body text |
| Cream | #F5F0E8 | Page background |
| Navy | #1B2A4A | CTA sections |
| Red | #B22222 | Warnings, errors |

---
Woven in Zagazig, Egypt — Al Azhar Tex


---

## Vercel Deployment (2026)

This project is optimized for deployment on **Vercel** with the following features:

### Configuration
- **Clean URLs**: All pages are accessible without `.html` extensions (`/products` instead of `/products.html`)
- **Trailing Slash**: Disabled for canonical URLs
- **Security Headers**: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Cache Control**: Static assets cached for 1 year, images cached for 30 days with stale-while-revalidate
- **Image Optimization**: WebP/AVIF format support with responsive sizes

### Deploy Steps
1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Framework Preset: **Other** (static site)
4. Build Command: *(leave empty)*
5. Output Directory: *(leave empty)*
6. Click **Deploy**

### Environment Variables (Optional)
- `NODE_VERSION`: `22.x`

### Post-Deploy Checklist
- [ ] Replace `YOUR_FORM_ID` in `contact.html` with your Formspree endpoint
- [ ] Update Google Maps embed with exact showroom coordinates
- [ ] Replace placeholder Unsplash images with real product photos in `/images/`
- [ ] Add custom domain in Vercel project settings
- [ ] Test all clean URLs (`/products`, `/about`, `/contact`, etc.)
- [ ] Verify admin panel at `/admin` and change default password

### File Structure for Vercel
```
alazhartex/
├── index.html          →  /
├── products.html       →  /products
├── gallery.html        →  /gallery
├── about.html          →  /about
├── contact.html        →  /contact
├── admin.html          →  /admin
├── vercel.json         #  Vercel configuration
├── package.json        #  Project metadata
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── admin.js
└── images/
    └── logo.png
```
