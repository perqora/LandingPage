# Perqora SEO Setup

Implemented:

- Primary routes: `/`, `/services`, `/platform-engineering`, `/kubernetes-consulting`, `/cloud-cost-optimization`, `/ai-devops`, `/contact`
- Global title and meta description in `app/layout.jsx` and explicit `app/head.jsx`
- Open Graph and Twitter image metadata
- OG image at `public/og/perqora-og.png` sized for 1200x630 previews
- `public/sitemap.xml`
- `public/robots.txt`
- Structured JSON-LD on service pages for Perqora and founder expertise

After deploy:

- Submit `https://perqora.in/sitemap.xml` in Google Search Console
- Submit `https://perqora.in/sitemap.xml` in Bing Webmaster Tools
- Inspect the home page and core service URLs in both tools so indexing starts quickly
- Test the social preview image with LinkedIn Post Inspector and X Card Validator
