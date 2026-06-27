# WhiskerBeacon

Astro site (homepage + Insights blog) deployed free to GitHub Pages.

## Local development
```
npm install
npm run dev      # preview at localhost:4321
npm run build    # outputs to /dist
```

## Add a blog article
Create a Markdown file in `src/content/insights/`, for example `my-article.md`:
```
---
title: "Your title"
description: "One-sentence summary, used for SEO and the card."
pubDate: 2026-07-01
tags: ["Topic"]
heroImage: "/img/photo2.jpg"
---

Your article body in Markdown.
```
That's it. The page, the blog card, and the sitemap entry are generated automatically on the next build.

## Deploy (free)
Pushing to the `main` branch triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages automatically. In the repo: Settings → Pages → Build and deployment → Source = GitHub Actions.

Custom domain `whiskerbeacon.com` is set via `public/CNAME`.
