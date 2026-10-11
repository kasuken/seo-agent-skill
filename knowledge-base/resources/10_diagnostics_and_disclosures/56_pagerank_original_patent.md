# Larry Page PageRank Patent US6285999B1: Algorithmic Foundations

* **Source Classification:** United States Patent & Fundamental Computer Science Paper
* **Patent Number:** US 6,285,999 B1
* **Inventors:** Lawrence Page
* **Assignee:** The Board of Trustees of the Leland Stanford Junior University (Licensed exclusively to Google)
* **Filing Date:** January 10, 1998 | Issue Date: September 4, 2001

---

## 1. Mathematical Foundation
PageRank revolutionized web search by treating hyperlinks as objective democratic votes, weighted by the importance of the voting page.

### The PageRank Formula
```
PR(A) = (1 - d) + d * ( PR(T1)/C(T1) + ... + PR(Tn)/C(Tn) )
```
Where:
* **PR(A)** is the PageRank of page A.
* **d** is the damping factor (typically set to 0.85), representing the probability that an imaginary surfer continues clicking links rather than jumping to a random URL.
* **T1...Tn** are pages linking to page A.
* **C(Ti)** is the number of outbound links on page Ti.

## 2. Core Concepts & Properties

### 2.1 The Random Surfer Model
PageRank models a web surfer who randomly clicks links on pages. Eventually, the surfer gets bored and requests a new random page (governed by damping factor `d`). PageRank represents the stationary probability distribution of this Markov chain.

### 2.2 Link Dilution & Equity Distribution
* A link from a page with high PageRank passes significant authority.
* However, if that page has 1,000 outbound links, the authority passed to each link is divided by 1,000 (`PR(Ti) / C(Ti)`).
* Concentrated internal linking architectures preserve and direct PageRank to priority conversion pages.

### 2.3 Spider Traps & Dead Ends
Pages with no outbound links (dangling nodes) absorb PageRank without passing it on. In the algorithm, dangling nodes distribute their PageRank equally across all pages in the database.

---

## 3. Evolution of PageRank in Modern Google Search
While Google hid public Toolbar PageRank in 2016, internal PageRank remains an active foundational signal in candidate retrieval and crawl prioritization.
* Modern PageRank incorporates topical clustering (Reasonable Surfer model: links more likely to be clicked pass more equity).
* Anti-spam layers (TrustRank, SpamBrain) prune link graph anomalies.
