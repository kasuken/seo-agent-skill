import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '..');
const resourcesDir = path.join(baseDir, 'knowledge-base', 'resources');

const SOURCES = [
  // Category 1: Search Architecture & Fundamentals (1-5)
  {
    id: 1,
    slug: '01_how_search_works',
    title: 'How Google Search Works - Overview',
    category: '01_search_architecture',
    url: 'https://developers.google.com/search/docs/fundamentals/how-search-works',
    type: 'html'
  },
  {
    id: 2,
    slug: '02_google_crawlers_overview',
    title: 'Overview of Google Crawlers and Fetchers',
    category: '01_search_architecture',
    url: 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers',
    type: 'html'
  },
  {
    id: 3,
    slug: '03_crawling_indexing_pipeline',
    title: 'Crawling and Indexing Pipeline Overview',
    category: '01_search_architecture',
    url: 'https://developers.google.com/search/docs/crawling-indexing',
    type: 'html'
  },
  {
    id: 4,
    slug: '04_ranking_results_overview',
    title: 'How Search Works: Ranking Results',
    category: '01_search_architecture',
    url: 'https://www.google.com/search/howsearchworks/how-search-works/ranking-results/',
    type: 'html'
  },
  {
    id: 5,
    slug: '05_seo_starter_guide',
    title: 'Google SEO Starter Guide',
    category: '01_search_architecture',
    url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    type: 'html'
  },

  // Category 2: Core Ranking Systems & AI Models (6-13)
  {
    id: 6,
    slug: '06_ranking_systems_guide',
    title: 'A Guide to Google Search Ranking Systems',
    category: '02_ranking_systems',
    url: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide',
    type: 'html'
  },
  {
    id: 7,
    slug: '07_rankbrain_system',
    title: 'RankBrain Machine Learning Ranking System',
    category: '02_ranking_systems',
    url: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide#rankbrain',
    type: 'html'
  },
  {
    id: 8,
    slug: '08_bert_neural_matching',
    title: 'Understanding Searches Better with BERT & Neural Matching',
    category: '02_ranking_systems',
    url: 'https://blog.google/products/search/search-language-understanding-bert/',
    type: 'html'
  },
  {
    id: 9,
    slug: '09_mum_multitask_unified_model',
    title: 'MUM: A Multitask Unified Model for Search',
    category: '02_ranking_systems',
    url: 'https://blog.google/products/search/introducing-mum/',
    type: 'html'
  },
  {
    id: 10,
    slug: '10_helpful_content_system',
    title: 'Creating Helpful, Reliable, People-First Content',
    category: '02_ranking_systems',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
    type: 'html'
  },
  {
    id: 11,
    slug: '11_reviews_system',
    title: 'Google Search Reviews System & Quality Product Reviews',
    category: '02_ranking_systems',
    url: 'https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews',
    type: 'html'
  },
  {
    id: 12,
    slug: '12_passage_ranking',
    title: 'How AI Powers Search Results and Passage Ranking',
    category: '02_ranking_systems',
    url: 'https://blog.google/products/search/how-ai-powers-great-search-results/',
    type: 'html'
  },
  {
    id: 13,
    slug: '13_freshness_original_reporting',
    title: 'Original Reporting and Freshness Ranking Systems',
    category: '02_ranking_systems',
    url: 'https://blog.google/products/search/original-reporting/',
    type: 'html'
  },

  // Category 3: Quality Guidelines, E-E-A-T & Evaluation (14-18)
  {
    id: 14,
    slug: '14_search_quality_evaluator_guidelines',
    title: 'Google Search Quality Evaluator Guidelines (QRG)',
    category: '03_quality_and_eeat',
    url: 'https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf',
    type: 'pdf'
  },
  {
    id: 15,
    slug: '15_eeat_framework',
    title: 'Our Advice on E-E-A-T and Page Quality Evaluation',
    category: '03_quality_and_eeat',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content#experience-expertise-authoritativeness-trust',
    type: 'html'
  },
  {
    id: 16,
    slug: '16_ymyl_standards',
    title: 'Your Money or Your Life (YMYL) Standards and High-Risk Topics',
    category: '03_quality_and_eeat',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content#ymyl-topics',
    type: 'html'
  },
  {
    id: 17,
    slug: '17_core_updates_guidance',
    title: 'Google Search Ranking Updates and Core Updates Guidance',
    category: '03_quality_and_eeat',
    url: 'https://developers.google.com/search/updates/core-updates',
    type: 'html'
  },
  {
    id: 18,
    slug: '18_forum_perspectives',
    title: 'Surfacing Perspectives and Real Experiences in Search',
    category: '03_quality_and_eeat',
    url: 'https://blog.google/products/search/google-search-perspectives/',
    type: 'html'
  },

  // Category 4: Search Essentials & Spam Policies (19-24)
  {
    id: 19,
    slug: '19_google_search_essentials',
    title: 'Google Search Essentials (Webmaster Guidelines)',
    category: '04_essentials_and_spam',
    url: 'https://developers.google.com/search/docs/essentials',
    type: 'html'
  },
  {
    id: 20,
    slug: '20_spam_policies_overview',
    title: 'Spam Policies for Google Web Search',
    category: '04_essentials_and_spam',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies',
    type: 'html'
  },
  {
    id: 21,
    slug: '21_link_spam_guidelines',
    title: 'Link Spam and Link Manipulation Policies',
    category: '04_essentials_and_spam',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies#link-spam',
    type: 'html'
  },
  {
    id: 22,
    slug: '22_cloaking_sneaky_redirects',
    title: 'Cloaking, Sneaky Redirects and Hidden Text Policies',
    category: '04_essentials_and_spam',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies#cloaking',
    type: 'html'
  },
  {
    id: 23,
    slug: '23_scaled_content_abuse',
    title: 'Scaled Content Abuse and Algorithmic Spam Overhauls',
    category: '04_essentials_and_spam',
    url: 'https://blog.google/products/search/google-search-update-march-2024/',
    type: 'html'
  },
  {
    id: 24,
    slug: '24_site_reputation_abuse',
    title: 'Site Reputation Abuse Policy (Parasite SEO)',
    category: '04_essentials_and_spam',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies#site-reputation',
    type: 'html'
  },

  // Category 5: Crawling, Indexing & URL Controls (25-30)
  {
    id: 25,
    slug: '25_robots_txt_specifications',
    title: 'Introduction to Robots.txt and Robots Directives',
    category: '05_crawling_and_indexing',
    url: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro',
    type: 'html'
  },
  {
    id: 26,
    slug: '26_canonicalization_duplicate_urls',
    title: 'Consolidate Duplicate URLs (Canonicalization)',
    category: '05_crawling_and_indexing',
    url: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls',
    type: 'html'
  },
  {
    id: 27,
    slug: '27_sitemaps_overview_best_practices',
    title: 'Sitemaps Overview and Best Practices',
    category: '05_crawling_and_indexing',
    url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview',
    type: 'html'
  },
  {
    id: 28,
    slug: '28_http_network_errors_status_codes',
    title: 'HTTP Status Codes and Network Errors for Google Search',
    category: '05_crawling_and_indexing',
    url: 'https://developers.google.com/search/docs/crawling-indexing/http-network-errors',
    type: 'html'
  },
  {
    id: 29,
    slug: '29_url_structure_best_practices',
    title: 'URL Structure Best Practices for Google Webmasters',
    category: '05_crawling_and_indexing',
    url: 'https://developers.google.com/search/docs/crawling-indexing/url-structure',
    type: 'html'
  },
  {
    id: 30,
    slug: '30_large_site_crawl_budget',
    title: 'Large Site Crawl Budget Management',
    category: '05_crawling_and_indexing',
    url: 'https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget',
    type: 'html'
  },

  // Category 6: Page Experience & Technical Performance (31-36)
  {
    id: 31,
    slug: '31_page_experience_in_search',
    title: 'Understanding Page Experience in Google Search Results',
    category: '06_page_experience',
    url: 'https://developers.google.com/search/docs/appearance/page-experience',
    type: 'html'
  },
  {
    id: 32,
    slug: '32_core_web_vitals_overview',
    title: 'Core Web Vitals Guide',
    category: '06_page_experience',
    url: 'https://web.dev/vitals/',
    type: 'html'
  },
  {
    id: 33,
    slug: '33_interaction_to_next_paint_inp',
    title: 'Interaction to Next Paint (INP) Deep Dive',
    category: '06_page_experience',
    url: 'https://web.dev/inp/',
    type: 'html'
  },
  {
    id: 34,
    slug: '34_largest_contentful_paint_lcp',
    title: 'Optimize Largest Contentful Paint (LCP)',
    category: '06_page_experience',
    url: 'https://web.dev/lcp/',
    type: 'html'
  },
  {
    id: 35,
    slug: '35_cumulative_layout_shift_cls',
    title: 'Optimize Cumulative Layout Shift (CLS)',
    category: '06_page_experience',
    url: 'https://web.dev/cls/',
    type: 'html'
  },
  {
    id: 36,
    slug: '36_https_security_requirements',
    title: 'Why HTTPS Matters & Site Security Requirements',
    category: '06_page_experience',
    url: 'https://web.dev/articles/why-https-matters',
    type: 'html'
  },

  // Category 7: Structured Data & Search Appearance (37-42)
  {
    id: 37,
    slug: '37_structured_data_intro',
    title: 'Introduction to Structured Data and Schema',
    category: '07_structured_data',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data',
    type: 'html'
  },
  {
    id: 38,
    slug: '38_article_blogposting_schema',
    title: 'Article & BlogPosting Structured Data Guidelines',
    category: '07_structured_data',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/article',
    type: 'html'
  },
  {
    id: 39,
    slug: '39_product_merchant_structured_data',
    title: 'Product and Merchant Listing Structured Data',
    category: '07_structured_data',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/product',
    type: 'html'
  },
  {
    id: 40,
    slug: '40_faq_qa_structured_data',
    title: 'FAQ and Q&A Structured Data Guidelines',
    category: '07_structured_data',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/faqpage',
    type: 'html'
  },
  {
    id: 41,
    slug: '41_organization_breadcrumb_schema',
    title: 'Breadcrumb and Organization Structured Data',
    category: '07_structured_data',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/breadcrumb',
    type: 'html'
  },
  {
    id: 42,
    slug: '42_title_links_snippets',
    title: 'Title Links and Snippets in Google Search Results',
    category: '07_structured_data',
    url: 'https://developers.google.com/search/docs/appearance/title-link',
    type: 'html'
  },

  // Category 8: JavaScript, Multimedia & Link Architecture (43-48)
  {
    id: 43,
    slug: '43_javascript_seo_basics',
    title: 'JavaScript SEO Basics and Rendering Architecture',
    category: '08_javascript_and_links',
    url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics',
    type: 'html'
  },
  {
    id: 44,
    slug: '44_fixing_javascript_issues',
    title: 'Fixing JavaScript Search Issues and Hydration',
    category: '08_javascript_and_links',
    url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript',
    type: 'html'
  },
  {
    id: 45,
    slug: '45_image_seo_best_practices',
    title: 'Google Image SEO Best Practices',
    category: '08_javascript_and_links',
    url: 'https://developers.google.com/search/docs/appearance/google-images',
    type: 'html'
  },
  {
    id: 46,
    slug: '46_video_seo_best_practices',
    title: 'Video SEO Best Practices and VideoObject Markup',
    category: '08_javascript_and_links',
    url: 'https://developers.google.com/search/docs/appearance/video',
    type: 'html'
  },
  {
    id: 47,
    slug: '47_links_crawling_anchor_text',
    title: 'Making Links Crawlable & Anchor Text Best Practices',
    category: '08_javascript_and_links',
    url: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable',
    type: 'html'
  },
  {
    id: 48,
    slug: '48_qualify_outbound_links',
    title: 'Qualify Outbound Links (rel=nofollow, sponsored, ugc)',
    category: '08_javascript_and_links',
    url: 'https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links',
    type: 'html'
  },

  // Category 9: Specialized Search Verticals (49-52)
  {
    id: 49,
    slug: '49_managing_multi_regional_sites',
    title: 'Managing Multi-Regional and Multilingual Sites (hreflang)',
    category: '09_specialized_verticals',
    url: 'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites',
    type: 'html'
  },
  {
    id: 50,
    slug: '50_ecommerce_seo_guide',
    title: 'Google Search Central E-commerce SEO Guide',
    category: '09_specialized_verticals',
    url: 'https://developers.google.com/search/docs/specialty/ecommerce',
    type: 'html'
  },
  {
    id: 51,
    slug: '51_google_discover_guidelines',
    title: 'Google Discover Guidelines and Performance',
    category: '09_specialized_verticals',
    url: 'https://developers.google.com/search/docs/appearance/google-discover',
    type: 'html'
  },
  {
    id: 52,
    slug: '52_ai_and_google_search',
    title: 'Google Search Guidance About AI-Generated Content',
    category: '09_specialized_verticals',
    url: 'https://developers.google.com/search/blog/2023/02/google-search-and-ai-content',
    type: 'html'
  },

  // Category 10: Technical Diagnostics & Internal Disclosures (53-56)
  {
    id: 53,
    slug: '53_search_console_index_coverage',
    title: 'Google Search Console Index Coverage and Status Report Guide',
    category: '10_diagnostics_and_disclosures',
    url: 'https://support.google.com/webmasters/answer/9128668',
    type: 'html'
  },
  {
    id: 54,
    slug: '54_google_algorithm_leak_analysis',
    title: 'The 2024 Google Content Warehouse API Leak Technical Dossier',
    category: '10_diagnostics_and_disclosures',
    type: 'dossier',
    dossierType: 'leak'
  },
  {
    id: 55,
    slug: '55_doj_antitrust_trial_exhibits',
    title: 'DOJ Antitrust Trial Findings: Google Search Architecture, NavBoost & Twiddlers',
    category: '10_diagnostics_and_disclosures',
    type: 'dossier',
    dossierType: 'doj'
  },
  {
    id: 56,
    slug: '56_pagerank_original_patent',
    title: 'Larry Page PageRank Patent US6285999B1: Algorithmic Foundations',
    category: '10_diagnostics_and_disclosures',
    type: 'dossier',
    dossierType: 'pagerank'
  }
];

function htmlToMarkdown(html, sourceUrl) {
  let content = html;
  const articleMatch =
    html.match(/<article[\s\S]*?<\/article>/i) ||
    html.match(/<main[\s\S]*?<\/main>/i) ||
    html.match(/<devsite-content[\s\S]*?<\/devsite-content>/i) ||
    html.match(/<body[\s\S]*?<\/body>/i);

  if (articleMatch) {
    content = articleMatch[0];
  }

  // Remove unwanted elements
  content = content.replace(
    /<(script|style|noscript|nav|footer|devsite-feedback|devsite-toc|devsite-page-rating|devsite-language-selector)[\s\S]*?<\/\1>/gi,
    ''
  );

  // Convert headings
  content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n# $1\n\n');
  content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n\n');
  content = content.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n\n');
  content = content.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n\n#### $1\n\n');
  content = content.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n\n##### $1\n\n');

  // Convert code blocks
  content = content.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '\n\n```\n$1\n```\n\n');
  content = content.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '\n\n```\n$1\n```\n\n');
  content = content.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');

  // Convert bold and italics
  content = content.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, '**$2**');
  content = content.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, '*$2*');

  // Convert links
  content = content.replace(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, (match, href, text) => {
    const cleanText = text.replace(/<[^>]+>/g, '').trim();
    if (!cleanText) return '';
    let fullUrl = href;
    if (href.startsWith('/')) {
      fullUrl = 'https://developers.google.com' + href;
    }
    return `[${cleanText}](${fullUrl})`;
  });

  // Convert lists
  content = content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '\n* $1');
  content = content.replace(/<\/(ul|ol)>/gi, '\n\n');

  // Convert paragraphs & linebreaks
  content = content.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n\n$1\n\n');
  content = content.replace(/<br\s*\/?>/gi, '\n');
  content = content.replace(/<hr\s*\/?>/gi, '\n\n---\n\n');

  // Strip remaining tags
  content = content.replace(/<[^>]+>/g, '');

  // Entities
  content = content
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—');

  // Normalize whitespace
  content = content
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();

  return content;
}

function generateDossier(item) {
  if (item.dossierType === 'leak') {
    return `# ${item.title}

* **Source Classification:** Google Internal Documentation & Code Repository Leak (Content Warehouse API)
* **Date Leaked:** March–May 2024
* **Key Analyzers:** Erfan Azimi (EA Eagle Scanner), Rand Fishkin (SparkToro), Mike King (iPullRank)
* **Scope:** 2,596 modules, 14,014 attributes, internal repository: \`yapi.quickstart\`

---

## 1. Executive Summary & Significance
In May 2024, thousands of internal Google API documentations were leaked, offering the most comprehensive confirmation in history of Google's internal ranking mechanics. The leak proved that numerous Google public statements over two decades did not reflect the reality of internal ranking algorithms.

## 2. Key Internal Signals & Architectural Modules

### 2.1 siteAuthority
* **Internal Name:** \`siteAuthority\` / \`domainAuthority\`
* **Function:** Google previously claimed there is no "domain authority" metric. The leaked API docs directly confirmed a module dedicated to computing domain-level authority used in ranking calculations.
* **Impact:** High-authority root domains receive baseline scoring advantages for newly launched pages and broad query spaces.

### 2.2 NavBoost & Click Metrics
* **Internal Modules:** \`NavBoost\`, \`QualityClick\`, \`GoodClicks\`, \`BadClicks\`, \`UnsquashedClicks\`
* **Function:** NavBoost stores an extensive log of query-document click history spanning 13+ months.
* **Good vs. Bad Clicks:** 
  * "Good click": User clicks, dwells on the site, fulfills query intent without returning immediately.
  * "Bad click" (Squashed): Rapid pogo-sticking back to SERP. Google dampens or squashes signals from such visits.
* **Chrome Clickstream:** Google tracks user navigation streams and page impressions across sessions.

### 2.3 BabyPanda & Quality Scores
* **Internal Names:** \`BabyPanda\`, \`PandaScore\`
* **Function:** Panda lives on as micro-models evaluating low-quality, thin, and duplicate content. Documents are evaluated by host-level modifiers that drag down cluster visibility when site-wide quality dips.

### 2.4 Anchor Text Freshness & Decay
* **Mechanic:** Backlink anchor text loses power over time if newer links are not accumulated. Google calculates link recency and temporal freshness scores for backlink profiles.

### 2.5 Whitelists and Demotions
* **Features:** Google maintains explicit whitelists for sensitive queries (e.g., elections, pandemic topics, critical YMYL). Demotions exist for exact-match domains, anchor mismatches, and unconfirmed author identities.

---

## 3. Practical Knowledge Base Takeaways
1. User satisfaction post-click (dwell time, navigation) directly feeds back into algorithmic weights through NavBoost.
2. Building brand strength and domain authority (\`siteAuthority\`) provides compounding advantages across indexation and ranking.
3. Link acquisition requires ongoing velocity; older links experience algorithmic decay.
`;
  }

  if (item.dossierType === 'doj') {
    return `# ${item.title}

* **Source Classification:** Federal Court Trial Exhibits & Sworn Testimony
* **Case:** *United States v. Google LLC* (Civil Action No. 20-3010)
* **Key Witnesses:** Pandu Nayak (VP of Search), Eric Lehman (Former Google Search Engineer)
* **Scope:** Internal Engineering Architectures, Algorithmic Re-ranking, User Feedback Pipelines

---

## 1. Executive Summary & Background
During the 2023–2024 DOJ antitrust trial against Google, internal presentations, algorithmic architecture diagrams, and engineer depositions were unsealed. These documents provided sworn legal confirmation of how Google Search ranks pages.

## 2. The Core Algorithmic Framework

### 2.1 The Ranking Pipeline Layers
Google Search operates in sequential pipeline stages:
1. **Document Retrieval (Candidate Generation):** Fast matching of query terms to index partitions.
2. **Scoring & L1 Ranking:** Traditional PageRank, text-matching, BM25-variants, and basic relevance algorithms produce hundreds/thousands of candidates.
3. **Machine Learned Ranking (L2 / Deep Rank):** Large neural models (RankBrain, BERT, DeepRank) evaluate candidates.
4. **Twiddlers (Re-ranking Heuristics):** Post-retrieval algorithms that apply boosts, demotions, diversity filters, and business rules.
5. **Tangram & Glue:** SERP composition engines that assemble the final visual page layout (organic links, image packs, local packs, knowledge panels, AI overviews).

### 2.2 NavBoost Revealed
* **Testimony Insight:** Eric Lehman and Pandu Nayak confirmed that NavBoost is one of Google's most powerful ranking systems, operating since 2005.
* **Mechanism:** It maps queries to historical click logs. When users repeatedly query term X and click document Y, document Y is boosted for that query and semantic synonyms.
* **Localization:** NavBoost operates on geo-sliced indices, adjusting results based on locality and country patterns.

### 2.3 Twiddlers
* **Definition:** "Twiddlers" are small, modular algorithmic rules that take an ordered list of search results and rewrite scores or positions.
* **Examples:**
  * Host crowding Twiddlers: Prevents one domain from dominating top 10 positions unless navigational intent is absolute.
  * Freshness Twiddler: Boosts recently updated documents for breaking news or trending topics.
  * Commercial intent Twiddler: Detects shopping queries and inserts merchant blocks.

---

## 3. Practical Knowledge Base Takeaways
* Traditional SEO factors (titles, on-page text, PageRank) only get pages into the candidate pool.
* Machine-learned re-rankers and user interaction loops (NavBoost) determine long-term SERP retention.
`;
  }

  if (item.dossierType === 'pagerank') {
    return `# ${item.title}

* **Source Classification:** United States Patent & Fundamental Computer Science Paper
* **Patent Number:** US 6,285,999 B1
* **Inventors:** Lawrence Page
* **Assignee:** The Board of Trustees of the Leland Stanford Junior University (Licensed exclusively to Google)
* **Filing Date:** January 10, 1998 | Issue Date: September 4, 2001

---

## 1. Mathematical Foundation
PageRank revolutionized web search by treating hyperlinks as objective democratic votes, weighted by the importance of the voting page.

### The PageRank Formula
\`\`\`
PR(A) = (1 - d) + d * ( PR(T1)/C(T1) + ... + PR(Tn)/C(Tn) )
\`\`\`
Where:
* **PR(A)** is the PageRank of page A.
* **d** is the damping factor (typically set to 0.85), representing the probability that an imaginary surfer continues clicking links rather than jumping to a random URL.
* **T1...Tn** are pages linking to page A.
* **C(Ti)** is the number of outbound links on page Ti.

## 2. Core Concepts & Properties

### 2.1 The Random Surfer Model
PageRank models a web surfer who randomly clicks links on pages. Eventually, the surfer gets bored and requests a new random page (governed by damping factor \`d\`). PageRank represents the stationary probability distribution of this Markov chain.

### 2.2 Link Dilution & Equity Distribution
* A link from a page with high PageRank passes significant authority.
* However, if that page has 1,000 outbound links, the authority passed to each link is divided by 1,000 (\`PR(Ti) / C(Ti)\`).
* Concentrated internal linking architectures preserve and direct PageRank to priority conversion pages.

### 2.3 Spider Traps & Dead Ends
Pages with no outbound links (dangling nodes) absorb PageRank without passing it on. In the algorithm, dangling nodes distribute their PageRank equally across all pages in the database.

---

## 3. Evolution of PageRank in Modern Google Search
While Google hid public Toolbar PageRank in 2016, internal PageRank remains an active foundational signal in candidate retrieval and crawl prioritization.
* Modern PageRank incorporates topical clustering (Reasonable Surfer model: links more likely to be clicked pass more equity).
* Anti-spam layers (TrustRank, SpamBrain) prune link graph anomalies.
`;
  }

  return '';
}

async function run() {
  console.log(`Starting knowledge base download across ${SOURCES.length} sources...`);
  console.log(`Target Directory: ${resourcesDir}`);

  // Create category directories
  const categories = [...new Set(SOURCES.map(s => s.category))];
  for (const cat of categories) {
    const catDir = path.join(resourcesDir, cat);
    const htmlDir = path.join(catDir, 'html');
    fs.mkdirSync(catDir, { recursive: true });
    fs.mkdirSync(htmlDir, { recursive: true });
  }

  let successCount = 0;
  let failCount = 0;

  for (const item of SOURCES) {
    const catDir = path.join(resourcesDir, item.category);
    const mdPath = path.join(catDir, `${item.slug}.md`);
    const htmlPath = path.join(catDir, 'html', `${item.slug}.html`);

    console.log(`[${item.id}/56] Processing: ${item.title}...`);

    try {
      if (item.type === 'dossier') {
        const content = generateDossier(item);
        fs.writeFileSync(mdPath, content, 'utf8');
        console.log(`  -> Created dossier: ${mdPath}`);
        successCount++;
        continue;
      }

      if (item.type === 'pdf') {
        const pdfPath = path.join(catDir, `${item.slug}.pdf`);
        if (fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 1000000) {
          console.log(`  -> PDF already downloaded (${(fs.statSync(pdfPath).size / (1024 * 1024)).toFixed(2)} MB). Skipping redownload.`);
          successCount++;
          continue;
        }
        console.log(`  -> Downloading PDF from ${item.url}...`);
        const res = await fetch(item.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(pdfPath, Buffer.from(buffer));

        // Create companion guide markdown
        const companionMd = `# ${item.title}

* **Source URL:** ${item.url}
* **Format:** PDF Document (Downloaded locally: \`${item.slug}.pdf\`, Size: ${(buffer.byteLength / (1024 * 1024)).toFixed(2)} MB)
* **Date Downloaded:** ${new Date().toISOString()}

---

## Executive Overview
The Search Quality Evaluator Guidelines (QRG) is the official ~170-page manual used by human quality evaluators to evaluate the performance of Google's ranking algorithms.

### Key Sections:
1. **Part 1: Page Quality (PQ) Rating Guideline**
   - Understanding web page purpose and deceitful intent
   - Main Content (MC), Supplementary Content (SC), and Advertisements (Ads)
   - Finding the creator of the Main Content and Website Reputation
   - E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness)
   - YMYL (Your Money or Your Life) classification

2. **Part 2: Understanding Mobile User Needs**
   - Mobile device constraints and user intent
   - Queries with Device Action, Visit-in-Person, and Website intent

3. **Part 3: Needs Met (NM) Rating Guideline**
   - Fully Meets (FullyM) to Fails to Meet (FailsM) rating scales
   - Specific user intent satisfaction and query interpretation

*Refer to the local PDF file in this directory (\`${item.slug}.pdf\`) for complete verbatim reference.*
`;
        fs.writeFileSync(mdPath, companionMd, 'utf8');
        console.log(`  -> Saved PDF (${(buffer.byteLength / (1024 * 1024)).toFixed(2)} MB) and companion guide.`);
        successCount++;
        continue;
      }

      // HTML documents
      console.log(`  -> Fetching HTML from ${item.url}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP Status ${res.status} (${res.statusText})`);
      }

      const html = await res.text();
      fs.writeFileSync(htmlPath, html, 'utf8');

      // Convert to Markdown
      const cleanMarkdown = htmlToMarkdown(html, item.url);
      const fullDoc = `# ${item.title}

* **Source URL:** [${item.url}](${item.url})
* **Category:** \`${item.category}\`
* **Downloaded At:** ${new Date().toISOString()}
* **Raw HTML Archive:** \`html/${item.slug}.html\`

---

${cleanMarkdown}
`;
      fs.writeFileSync(mdPath, fullDoc, 'utf8');
      console.log(`  -> Saved HTML and generated clean Markdown (${cleanMarkdown.length} chars).`);
      successCount++;

      // Gentle pause
      await new Promise(r => setTimeout(r, 200));

    } catch (err) {
      console.error(`  [!] Failed to download ${item.slug}: ${err.message}`);
      failCount++;

      // Create fallback note
      const fallbackMd = `# ${item.title}

* **Source URL:** [${item.url}](${item.url})
* **Category:** \`${item.category}\`
* **Download Note:** Live fetch encountered an issue (${err.message}).
* **Action Required:** Please review the online URL or re-run the download script.
`;
      fs.writeFileSync(mdPath, fallbackMd, 'utf8');
    }
  }

  console.log(`\n========================================`);
  console.log(`Download complete!`);
  console.log(`Success: ${successCount} / ${SOURCES.length}`);
  console.log(`Failed: ${failCount} / ${SOURCES.length}`);
  console.log(`Resources saved in: ${resourcesDir}`);
  console.log(`========================================`);
}

run();
