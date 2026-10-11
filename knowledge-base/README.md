# Google Search Knowledge Base Corpus

This directory houses the **evidence corpus** of 56 foundational sources used to engineer and calibrate the [SEO Agent Skill](../skills/seo/SKILL.md).

---

## Contents

* [`SOURCES.md`](SOURCES.md) – Comprehensive catalog of all 56 sources, including descriptions, key topics, and official URLs.
* [`resources/`](resources/) – Locally archived files organized into 10 structured categories:
  * `01_search_architecture/` – Crawling, indexing, serving, and the SEO Starter Guide.
  * `02_ranking_systems/` – Active Google ranking systems (RankBrain, BERT, MUM, Helpful Content, Reviews, Freshness).
  * `03_quality_and_eeat/` – E-E-A-T, YMYL, Core Updates, and the complete **September 2025 Search Quality Evaluator Guidelines PDF (182 pages)**.
  * `04_essentials_and_spam/` – Google Search Essentials, Spam Policies, Link Schemes, Scaled Content Abuse, Parasite SEO.
  * `05_crawling_and_indexing/` – Robots.txt specs, canonicalization, sitemaps, HTTP status codes, crawl budget.
  * `06_page_experience/` – Core Web Vitals (INP, LCP, CLS), HTTPS, and mobile page experience.
  * `07_structured_data/` – Schema.org JSON-LD (Articles, Products, Breadcrumbs), snippet extraction rules.
  * `08_javascript_and_links/` – JavaScript SEO rendering pipeline, links, images, and video optimization.
  * `09_specialized_verticals/` – International SEO (`hreflang`), Ecommerce, Discover, and AI Overviews.
  * `10_diagnostics_and_disclosures/` – Search Console diagnostics, Content Warehouse API Leak Dossier, DOJ Trial Exhibits Dossier, PageRank Patent.

---

## How to Re-Download and Recreate From Scratch

To re-fetch all 56 sources and regenerate the markdown and raw HTML mirrors:

```bash
# From repository root
node tools/download_all.mjs
```

The script will:
1. Stream all active documentation endpoints from Google Search Central, web.dev, and official blogs.
2. Convert rich HTML into clean Markdown with frontmatter and navigation links.
3. Cache and preserve binary assets (such as the 8.55 MB Quality Rater Guidelines PDF).
4. Generate technical dossiers for internal disclosures.
