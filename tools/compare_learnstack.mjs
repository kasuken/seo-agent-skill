async function compareLearnstack() {
  const tCloud = await (await fetch('https://learnstack.cloud')).text();
  const tApp = await (await fetch('https://learnstack.app')).text();

  const titleCloud = tCloud.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const canonCloud = tCloud.match(/rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                     tCloud.match(/href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);

  const titleApp = tApp.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const canonApp = tApp.match(/rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                   tApp.match(/href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);

  console.log('--- LEARNSTACK.CLOUD ---');
  console.log('Title:', titleCloud ? titleCloud[1].trim() : 'NONE');
  console.log('Canonical:', canonCloud ? canonCloud[1].trim() : 'NONE');

  console.log('--- LEARNSTACK.APP ---');
  console.log('Title:', titleApp ? titleApp[1].trim() : 'NONE');
  console.log('Canonical:', canonApp ? canonApp[1].trim() : 'NONE');

  const h1Cloud = [...tCloud.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('H1 (Cloud):', h1Cloud);
}

compareLearnstack();
