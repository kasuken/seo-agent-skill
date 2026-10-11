# SEO Agent Skill 🚀

[![Agent Skills Standard](https://img.shields.io/badge/standard-Agent%20Skills-blue?style=flat-square)](https://agentskills.io/specification)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Google Search Documentation](https://img.shields.io/badge/docs-Google%20Search%20Central-4285F4?style=flat-square&logo=google)](https://developers.google.com/search)
[![Multi-Platform](https://img.shields.io/badge/supports-Claude%20%7C%20Codex%20%7C%20Copilot%20%7C%20Antigravity-success?style=flat-square)](#installation--setup)

A production-grade, evidence-first **SEO skill for AI coding assistants** (Claude Code, OpenAI Codex, GitHub Copilot, and Google Antigravity). 

Trained and calibrated on Google's official Search Central documentation, human quality rater guidelines, algorithm updates, and internal architectural disclosures, this skill equips your AI assistant to audit websites, write high-intent content briefs, and implement technical SEO fixes directly in your codebase—without relying on SEO folklore or manipulative black-hat tactics.

---

## 🌟 Why This Skill is the Best for SEO

Most AI prompts and SEO plugins produce generic, outdated advice—such as stuffing arbitrary keyword percentages, fabricating domain authority metrics, or recommending obsolete rich results. 

This skill is engineered from the ground up to operate like an elite, Google-aligned technical SEO architect:

1. **Grounded in 56 Authoritative Google Sources (2024–2026):**
   * Built from Google Search Central documentation, Webmaster Guidelines, Core Web Vitals specifications, and the official **September 2025 Search Quality Evaluator Guidelines (182 pages)**.
   * Cross-verified with insights from the **2024 Google Content Warehouse API leak** and unsealed **DOJ Antitrust trial exhibits** (detailing *NavBoost*, *Tangram*, and *Twiddlers*).
2. **Strictly Evidence-Based (Zero Hallucinations):**
   * Forces the AI to distinguish between **confirmed site observations**, **working hypotheses**, and **untested areas**.
   * Debunks prevalent SEO myths: explicitly rejects fixed word-count quotas, keyword-density targets, third-party "domain authority" ranking guarantees, and obsolete markup (such as deprecated FAQ rich results).
3. **Dependency-Order Diagnosis:**
   * Solves problems in the exact order search engines process pages:
     $$\text{Eligibility \& Crawl Access} \longrightarrow \text{Rendering} \longrightarrow \text{Indexing \& Consolidation} \longrightarrow \text{Search Intent \& Quality} \longrightarrow \text{Appearance \& Experience}$$
   * Prevents wasting hours tweaking meta tags when a hidden `robots.txt` or `noindex` tag is blocking indexation at the root.
4. **Context-Optimized Progressive Disclosure:**
   * Keeps the root `SKILL.md` fast and lightweight (~200 lines). Specialized guidance (rendering, schema, international `hreflang`, Core Web Vitals) is partitioned across 10 on-demand references so your agent's context window stays clean.
5. **Non-Destructive Engineering Safeguards:**
   * Mandates strict rollback and verification steps. Prohibits hardcoding URLs, breaking client-side hydration, or deploying blanket 301 redirects to homepages without explicit authorization.

---

## 📂 Repository Layout

```
.
├── skills/
│   └── seo/                         # Primary skill definition (Agent Skills format)
│       ├── SKILL.md                 # Entrypoint: trigger description & core workflows
│       ├── README.md                # Skill package documentation
│       ├── references/              # 10 modular deep-dive guides + source audit map
│       │   ├── search-fundamentals.md
│       │   ├── crawling-and-indexing.md
│       │   ├── ranking-and-intent.md
│       │   ├── content-quality.md   # E-E-A-T, YMYL, Core Updates
│       │   ├── search-appearance.md # Schema, title links, snippets
│       │   ├── page-experience.md   # Core Web Vitals (INP, LCP, CLS)
│       │   ├── rendering-and-media.md # JS rendering, SSR/SSG, links, video
│       │   ├── policies.md          # SpamBrain, link schemes, parasite SEO
│       │   ├── specialized-surfaces.md # hreflang, ecommerce, Discover, AI Overviews
│       │   ├── diagnostics.md       # Search Console coverage & traffic drops
│       │   └── sources.md           # 56-source audit, provenance & caveats
│       └── assets/
│           ├── output-templates.md  # Standardized audit, brief, and migration templates
│           └── evaluation-scenarios.md # Test cases & guardrail acceptance criteria
├── .github/skills/seo/              # Pre-configured mirror for GitHub Copilot auto-discovery
├── .agents/skills/seo/              # Pre-configured mirror for Codex / Antigravity auto-discovery
├── knowledge-base/                  # Evidence corpus (56 Google sources)
│   ├── SOURCES.md                   # Full catalog of 56 Google sources with URLs
│   ├── resources/                   # Locally archived Markdown, HTML, and QRG PDF
│   └── README.md                    # Knowledge base architecture & notes
├── tools/                           # Maintenance and automation scripts
│   ├── download_all.mjs             # Re-scrapes and updates all 56 sources from Google
│   ├── audit_sites.mjs              # Automated live HTTP header, robots & schema auditor
│   └── package_skill.mjs            # Bundles dist/seo.zip and syncs client directories
├── dist/
│   └── seo.zip                      # Standalone archive for Claude custom skill upload
├── CONTRIBUTING.md                  # How to propose updates and maintain sources
├── LICENSE                          # MIT License
└── README.md                        # Master repository guide
```

---

## 💻 Installation & Setup

You can install this skill for your preferred AI coding assistant in seconds.

### 1. Claude Code
Claude Code discovers skills placed in `.claude/skills/` (project-level) or `~/.claude/skills/` (global).

**For your current project:**
```bash
# PowerShell (Windows)
New-Item -ItemType Directory -Path ".\.claude\skills" -Force
Copy-Item -Path ".\skills\seo" -Destination ".\.claude\skills\seo" -Recurse -Force

# Bash (macOS / Linux)
mkdir -p ./.claude/skills
cp -r ./skills/seo ./.claude/skills/seo
```

**For all projects globally:**
```bash
# PowerShell (Windows)
New-Item -ItemType Directory -Path "$HOME\.claude\skills" -Force
Copy-Item -Path ".\skills\seo" -Destination "$HOME\.claude\skills\seo" -Recurse -Force

# Bash (macOS / Linux)
mkdir -p ~/.claude/skills
cp -r ./skills/seo ~/.claude/skills/seo
```

---

### 2. GitHub Copilot (CLI & Agent Mode)
GitHub Copilot natively supports skills located in `.github/skills/seo` (already included in this repository) or in your personal CLI configuration.

**For project-level use:**
Simply commit the `.github/skills/seo` directory to your repository. Copilot will automatically discover the skill.

**For personal Copilot CLI use:**
```bash
# PowerShell (Windows)
New-Item -ItemType Directory -Path "$HOME\.copilot\skills" -Force
Copy-Item -Path ".\skills\seo" -Destination "$HOME\.copilot\skills\seo" -Recurse -Force

# Bash (macOS / Linux)
mkdir -p ~/.copilot/skills
cp -r ./skills/seo ~/.copilot/skills/seo
```
*Reload in Copilot CLI using:* `/skills reload` followed by `/skills info seo`.

---

### 3. OpenAI Codex CLI / IDE
Codex looks for skills inside `.agents/skills/` (project-level) or `$HOME/.agents/skills/` (personal).

**Project-level:**
The pre-configured `.agents/skills/seo` folder in this repo is automatically detected.

**Global / Personal installation:**
```bash
# PowerShell (Windows)
New-Item -ItemType Directory -Path "$HOME\.agents\skills" -Force
Copy-Item -Path ".\skills\seo" -Destination "$HOME\.agents\skills\seo" -Recurse -Force

# Bash (macOS / Linux)
mkdir -p ~/.agents/skills
cp -r ./skills/seo ~/.agents/skills/seo
```

---

### 4. Google Antigravity
Google Antigravity automatically discovers skills inside `.agents/skills/` within your workspace or globally in your user configuration directory.

**Workspace install:**
Keep or copy the `.agents/skills/seo` folder at the root of your project workspace.

**Global machine install:**
```bash
# PowerShell (Windows)
New-Item -ItemType Directory -Path "$HOME\.gemini\config\skills" -Force
Copy-Item -Path ".\skills\seo" -Destination "$HOME\.gemini\config\skills\seo" -Recurse -Force
```

---

### 5. Web Claude (Custom Skill Upload)
If your Claude web or desktop account supports custom skill uploads:
1. Download or locate [`dist/seo.zip`](dist/seo.zip) in this repository.
2. Go to your Claude account settings $\to$ **Skills / Custom Skills**.
3. Upload `dist/seo.zip` and enable the **SEO** skill.

---

## 🎯 How to Use the Skill

Once installed, your agent will automatically activate the skill whenever you ask an SEO-related question, or you can trigger it directly:

```text
/seo Audit https://example.com and prioritize evidence-backed fixes.
```
```text
Review our Next.js App Router metadata and sitemap implementation for canonical consistency.
```
```text
Analyze why this JavaScript-heavy catalog page is missing from Google Search.
```
```text
Write a people-first content brief for our upcoming product feature based on E-E-A-T guidelines.
```
```text
Investigate this organic traffic drop without assuming an algorithmic penalty.
```

### Standardized Deliverable Format
Every audit finding delivers an actionable table formatted by urgency:

| Priority | Finding & Scope | Direct Evidence | Proposed Fix | Acceptance Check | Effort | Confidence |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **P0** | Homepage blocked | `robots.txt: Disallow /` | Remove directive | Fetch `/robots.txt` $\to$ `200` | Low | Confirmed |
| **P1** | Canonical mismatch | `<link rel=canonical>` points to staging | Align canonical helper | Verify served HTML | Med | Confirmed |
| **P2** | Missing Product Schema | No JSON-LD on product detail routes | Inject `schema.org/Product` | Rich Results Test pass | Med | High |

---

## 🔄 How to Recreate & Update the Skill From Scratch

As Google releases core algorithm updates or new Search Central specifications, you can easily refresh the entire repository:

### Step 1: Re-Fetch the 56 Google Sources
Run the automated downloader tool:
```bash
node tools/download_all.mjs
```
*This downloads the latest HTML and PDF specifications, converts web pages to clean Markdown, and preserves raw mirrors in `knowledge-base/resources/`.*

### Step 2: Review Changes & Update Provenance
Check any modified files or redirected URLs and note updates in:
* `knowledge-base/SOURCES.md`
* `skills/seo/references/sources.md`

### Step 3: Update Topic Reference Guides
Reflect any updated policies or metrics in the corresponding guide inside `skills/seo/references/` (e.g. updating metric thresholds in `page-experience.md`).

### Step 4: Re-Package & Sync Client Mirrors
Run the packaging utility:
```bash
node tools/package_skill.mjs
```
*This automatically synchronizes changes across `.github/skills/seo/`, `.agents/skills/seo/`, and regenerates `dist/seo.zip`.*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) &copy; 2026 Emanuele Bartolesi (kasuken).
