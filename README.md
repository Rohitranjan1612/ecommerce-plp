# SEO-Friendly Ecommerce Product Listing Page

This project implements a **SEO-friendly Product Listing Page (PLP)** using **Next.js App Router**.  
The goal is to demonstrate **frontend engineering judgment**, with a focus on **SEO fundamentals, performance, accessibility, and scalable architecture**, rather than visual design.

---

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm

### Run Locally

```bash
git clone https://github.com/Rohitranjan1612/ecommerce-plp.git
cd ecommerce-plp
npm install
npm run dev
```

---

## Technical & Architectural Decisions

### Framework

* **Next.js (App Router)** was chosen for:

  * Server Components by default
  * Static Site Generation (SSG)
  * Built-in SEO and performance optimizations

### Rendering Strategy

* The Product Listing Page (`/products`) and Product Detail Pages (`/products/[slug]`) are **statically generated (SSG)**.
* Dynamic routes are pre-rendered using `generateStaticParams`.

This ensures fast load times and full HTML availability for search engines.

### Data Architecture

* Product data lives in a shared module (`data/products.ts`).
* A small data access layer (`lib/products.ts`) is used by pages.
* API routes (`/api/products`) reuse the same data source but are **not used during static generation**, avoiding build-time fetch issues.

This mirrors real-world production patterns.

### Styling & Accessibility

* Lightweight global CSS focused on layout stability and readability.
* Semantic HTML, meaningful alt text, and keyboard-friendly navigation are used throughout.

---

## SEO & Performance Questions

### 1. What makes this page SEO-friendly?

* Static HTML rendering via **SSG**, so crawlers receive fully rendered content
* Semantic HTML structure (`<main>`, `<section>`, `<article>`)
* One clear `<h1>` per page
* Descriptive metadata using `generateMetadata`
* Clean, readable URLs (`/products/vitamin-c`)
* Fixed image dimensions to prevent layout shift
* Optional structured data (JSON-LD) for product pages

---

### 2. What would you change if the catalog had 100,000 products?

* Introduce pagination or cursor-based navigation
* Use **Incremental Static Regeneration (ISR)** instead of full SSG
* Fetch data from a backend or search service
* Add faceted filters (category, price, brand) reflected in the URL
* Cache responses at the CDN/edge level
* Pre-render only high-value pages

---

### 3. What SEO mistakes do frontend engineers commonly make?

* Relying entirely on client-side rendering
* Missing or duplicated `<h1>` tags
* Overusing non-semantic elements
* Causing CLS due to unstyled images or late-loading fonts
* Blocking important content behind JavaScript execution
* Missing or generic metadata
* Creating duplicate URLs without canonical handling

---

### 4. How does SEO differ between a client-side React SPA and an SSR/SSG approach?

| Client-side React SPA           | SSR / SSG                        |
| ------------------------------- | -------------------------------- |
| Content rendered after JS loads | HTML rendered on server or build |
| Slower first paint              | Faster LCP                       |
| Crawlers may miss content       | Crawlers see full content        |
| Larger JS bundle                | Minimal JS required              |
| SEO requires extra tooling      | SEO-friendly by default          |

This project uses **SSG** to ensure crawlability and predictable indexing.

---

### 5. How would you measure SEO and performance in production?

* Google Lighthouse (SEO, Performance, Accessibility)
* Core Web Vitals (LCP, CLS, INP)
* Google Search Console (indexing, crawl errors, queries)
* Vercel Analytics / Web Vitals
* Monitoring build and runtime errors

---

## Deployment

The project is deployed on **Vercel** using GitHub integration, enabling automatic builds and deployments on every push to the main branch.

---

## Summary

This project prioritizes:

* SEO-first rendering
* Performance-aware frontend decisions
* Maintainable and scalable architecture
* Clear reasoning over SEO tricks

The implementation focuses on **fundamentals that scale in real-world applications**.
