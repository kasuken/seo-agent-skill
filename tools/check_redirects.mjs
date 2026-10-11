async function checkRedirects() {
  const domains = [
    { name: 'Brainy', apex: 'https://brainy-me.com', www: 'https://www.brainy-me.com', http: 'http://brainy-me.com' },
    { name: 'LearnStack', apex: 'https://learnstack.cloud', www: 'https://www.learnstack.cloud', http: 'http://learnstack.cloud' },
    { name: 'Relio', apex: 'https://relio.club', www: 'https://www.relio.club', http: 'http://relio.club' }
  ];

  for (const d of domains) {
    console.log(`\n--- ${d.name} Redirects ---`);
    for (const [k, url] of Object.entries(d)) {
      if (k === 'name') continue;
      try {
        const res = await fetch(url, { redirect: 'manual' });
        console.log(`${k} (${url}) -> HTTP ${res.status} Location: ${res.headers.get('location') || 'NONE'}`);
      } catch (err) {
        console.log(`${k} (${url}) -> ERROR: ${err.message}`);
      }
    }
  }
}

checkRedirects();
