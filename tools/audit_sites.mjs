async function detailedInspect(url) {
  console.log(`\n========================================`);
  console.log(`DETAILED AUDIT FOR: ${url}`);
  console.log(`========================================`);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    console.log(`Status: ${res.status} ${res.statusText}`);
    const text = await res.text();
    console.log(`Content length: ${text.length}`);

    const titleMatch = text.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    console.log(`Title: ${titleMatch ? titleMatch[1].trim() : 'NONE'}`);

    const descMatch = text.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                      text.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
    console.log(`Meta Description: ${descMatch ? descMatch[1].trim() : 'NONE'}`);

    const canonMatch = text.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                       text.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
    console.log(`Canonical: ${canonMatch ? canonMatch[1].trim() : 'NONE'}`);

    const robotsMatch = text.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
    console.log(`Robots Meta: ${robotsMatch ? robotsMatch[1].trim() : 'None (index, follow)'}`);

    const h1s = [...text.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log(`H1 count ${h1s.length}:`, h1s);

    const h2s = [...text.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log(`H2 count ${h2s.length}:`, h2s.slice(0, 5));

    const jsonLds = [...text.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1].trim());
    console.log(`JSON-LD count: ${jsonLds.length}`);
    jsonLds.forEach((s, idx) => {
      console.log(`--- JSON-LD #${idx + 1} ---`);
      console.log(s);
    });

    const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyText = bodyMatch ? bodyMatch[1]
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() : '';
    console.log(`Visible text chars: ${bodyText.length}`);
    console.log(`Preview: ${bodyText.slice(0, 300)}...`);

    // robots.txt
    const origin = new URL(url).origin;
    const rRes = await fetch(`${origin}/robots.txt`);
    console.log(`robots.txt Status: ${rRes.status}`);
    if (rRes.ok) console.log(await rRes.text());

    // sitemap.xml
    const sRes = await fetch(`${origin}/sitemap.xml`);
    console.log(`sitemap.xml Status: ${sRes.status}`);
    if (sRes.ok) {
      const sXml = await sRes.text();
      console.log(`sitemap preview: ${sXml.slice(0, 300)}`);
    }

  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

async function main() {
  await detailedInspect('https://learnstack.cloud');
  await detailedInspect('https://www.brainy-me.com');
  await detailedInspect('https://www.relio.club');
}

main();
