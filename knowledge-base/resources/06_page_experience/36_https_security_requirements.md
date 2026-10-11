# Why HTTPS Matters & Site Security Requirements

* **Source URL:** [https://web.dev/articles/why-https-matters](https://web.dev/articles/why-https-matters)
* **Category:** `06_page_experience`
* **Downloaded At:** 2026-10-11T11:31:34.133Z
* **Raw HTML Archive:** `html/36_https_security_requirements.html`

---

* 

 [Home](https://web.dev/)

* 

 [Articles](https://web.dev/articles)

* 

 [Resources](https://web.dev/explore/ai)

* 

 [Safe and secure](https://web.dev/explore/secure)

# 
 Why HTTPS matters

 Stay organized with collections

 Save and categorize content based on your preferences.

 Kayce Basques

 [X](https://twitter.com/kaycebasques)

 [GitHub](https://github.com/kaycebasques)

Always protect all your websites with HTTPS, even if they don't handle
sensitive communications. In addition to providing critical security and data
integrity for both your websites and your users' personal information, HTTPS is
required for many new browser features, especially those required for
[progressive web apps](https://developers.google.com/progressive-web-apps).

## HTTPS protects your website's integrity

HTTPS helps prevent intruders from tampering with communication between your
sites and your users' browsers. Intruders include both intentionally malicious
attackers and legitimate but intrusive companies, such as ISPs that inject ads
into pages.

Intruders exploit unprotected communications to trick your users into giving up
sensitive information or installing malware, or to insert their own
resources. For example, some third parties inject ads that can break your user
experience and create security vulnerabilities.

Intruders exploit every unprotected resource that travels between your
websites and your users. Images, cookies, scripts, and HTML are all
exploitable. Intrusions can occur at any point in the network, including a
user's machine, a Wi-Fi hotspot, or a compromised ISP, just to name a few.
HTTPS makes it harder for intruders to get access to your sites' resources.

## HTTPS protects your users' privacy and security

HTTPS prevents intruders from passively listening to communications between your
websites and your users.

One common misconception about HTTPS is that the only websites that need HTTPS
are those that handle sensitive communications. In fact, every unprotected HTTP
request can potentially reveal information about your users' behaviors and
identities.

A single visit to one of your unprotected websites might seem benign, but some
intruders look at your users' aggregate browsing activities to make inferences
about their behaviors and intentions, and to [de-anonymize](https://en.wikipedia.org/wiki/De-anonymization) their identities.
For example, employees might inadvertently disclose sensitive health conditions
to their employers just by reading unprotected medical articles.

## HTTPS is the future of the web

Powerful new web platform features, such as taking pictures or recording audio
with `getUserMedia()`, enabling offline app experiences with [service workers](https://developers.google.com/service-workers-cache-storage),
or building [progressive web apps](https://developers.google.com/progressive-web-apps), require explicit permission from the
user through HTTPS. Many older APIs are also being updated to require permission
to execute, such as the [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation/Using_geolocation). HTTPS is a key component of the
permission workflows for both new and updated features.

 [Next
 
 Enabling HTTPS on your servers

 arrow_forward](https://developers.google.com/articles/enable-https)
