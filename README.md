# Ganesh Founder Portfolio — React + Vite

A responsive standalone founder portfolio for Thirumalapudi Mano Ganesh, Founder of MA Innovex Technologies.

## Run locally

1. Install Node.js 18 or newer.
2. Extract this folder and open a terminal inside it.
3. Run `npm install`
4. Run `npm run dev`
5. For a production build, run `npm run build` and test with `npm run preview`.

## Before deployment — important SEO configuration

This project currently assumes the page will be published at:
`https://mainnovextechnologies.lovable.app/founder/ganesh-thirumalapudi`

If deploying as a separate website or to a different domain:

1. Set `VITE_SITE_URL` to the final public origin (no trailing slash), for example in your hosting environment variables.
2. Update the canonical, Open Graph and Twitter URLs in `index.html` to the final absolute page/image URLs. Vite's `index.html` is served before React runs, so these static tags matter for crawlers and social previews.
3. Update `public/robots.txt` and `public/sitemap.xml` with the final production URLs.
4. Deploy the site and verify the canonical URL, page source, image URL, JSON-LD, and HTTP status.
5. If using a separate domain, configure DNS and hosting, and ensure the web host serves the app on direct navigation. This app's current UI is a single-page landing page; if you need the founder page under an existing site's nested route, configure a rewrite to `index.html` or deploy at the site root and set the canonical URL to the actual URL.
6. Add/verify the final domain in Google Search Console and submit its sitemap.

## Image

The provided founder portrait is included at:
`public/images/thirumalapudi-mano-ganesh-founder-ma-innovex-technologies.jpg`

It is the user's supplied image. For best Google Images presentation, consider replacing the supplied small compressed version with a higher-resolution original while retaining a stable URL.

## SEO notes

- Includes page title and description, canonical, Open Graph/Twitter tags, Person + ProfilePage + Organization JSON-LD, accessible portrait alt text, robots file and an image sitemap entry.
- Google can choose different snippets and images and does not guarantee rankings or a particular image for every query.
- `alternateName` lists common name variants as identifiers, not as a reason to repeat keywords unnaturally throughout the page.
- Add only real social profile URLs to `sameAs`; do not invent profiles or credentials.


### Founder portrait
The founder portrait at `public/images/thirumalapudi-mano-ganesh-founder-ma-innovex-technologies.jpg` uses the supplied high-resolution 1312 × 1199 image. The hero image is displayed with `object-fit: contain` and natural height so the complete photograph is visible without cropping.
