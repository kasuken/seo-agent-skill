# Contributing to the SEO Agent Skill

Thank you for your interest in improving the **SEO Agent Skill**! This project provides an open-source, evidence-first SEO skill following the [Agent Skills standard](https://agentskills.io/specification).

---

## Architecture Guidelines

To maintain accuracy, efficiency, and cross-client compatibility:

1. **Host & Model Agnostic:**
   * Never assume a specific tool name, host environment, API key, or MCP server.
   * Work exclusively through relative paths within the skill directory (`references/`, `assets/`).
2. **Progressive Disclosure:**
   * Keep `SKILL.md` under 250 lines to avoid bloating the model's initial context window.
   * Place deep-dive technical guidance into modular markdown files in `references/`.
3. **Evidence-First SEO:**
   * Only cite official Google documentation, verified specifications (W3C, Schema.org), or sworn legal disclosures.
   * Explicitly distinguish confirmed facts from hypotheses.
   * Reject SEO folklore (arbitrary keyword density quotas, fake domain authority formulas, guaranteed rankings).

---

## Updating the Knowledge Base & Skill

The skill was constructed and audited against Google's official documentation corpus (56 key sources). As Google updates its Search documentation:

### 1. Re-scrape and Refresh Documentation
Run the automated downloader to fetch the latest Search Central guidance:
```bash
node tools/download_all.mjs
```
This updates the raw HTML and clean Markdown archives in `knowledge-base/resources/`.

### 2. Audit Provenance
Inspect any changed documentation or redirect destinations. Record findings and caveats in:
* `knowledge-base/SOURCES.md`
* `skills/seo/references/sources.md`

### 3. Update Relevant Topic Guides
Make targeted updates to the appropriate guide in `skills/seo/references/`:
* `crawling-and-indexing.md`
* `ranking-and-intent.md`
* `search-appearance.md`
* `content-quality.md`
* `page-experience.md`
* `rendering-and-media.md`
* `policies.md`
* `specialized-surfaces.md`
* `diagnostics.md`

### 4. Build and Package the Distribution
Run the packaging tool to sync mirror directories and regenerate the distribution archive:
```bash
node tools/package_skill.mjs
```
This updates `.github/skills/seo/`, `.agents/skills/seo/`, and `dist/seo.zip`.

---

## Submitting a Pull Request

1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/update-inp-guidelines
   ```
2. Ensure all links in Markdown use relative paths.
3. Test your changes against the scenarios in `skills/seo/assets/evaluation-scenarios.md`.
4. Run `node tools/package_skill.mjs`.
5. Commit and open a PR with clear explanations of what changed and why.
