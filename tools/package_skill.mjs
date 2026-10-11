import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sourceSkillDir = path.join(rootDir, 'skills', 'seo');
const githubSkillDir = path.join(rootDir, '.github', 'skills', 'seo');
const agentsSkillDir = path.join(rootDir, '.agents', 'skills', 'seo');
const distDir = path.join(rootDir, 'dist');
const zipPath = path.join(distDir, 'seo.zip');

console.log('Packaging SEO Agent Skill...');

if (!fs.existsSync(sourceSkillDir)) {
  console.error(`Error: Skill directory not found at ${sourceSkillDir}`);
  process.exit(1);
}

// 1. Sync to .github/skills/seo and .agents/skills/seo
fs.mkdirSync(githubSkillDir, { recursive: true });
fs.mkdirSync(agentsSkillDir, { recursive: true });
fs.cpSync(sourceSkillDir, githubSkillDir, { recursive: true });
fs.cpSync(sourceSkillDir, agentsSkillDir, { recursive: true });
console.log('✓ Synced skills/seo to .github/skills/seo and .agents/skills/seo');

// 2. Create dist/seo.zip
fs.mkdirSync(distDir, { recursive: true });
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

try {
  // Use powershell Compress-Archive for reliable zip on Windows
  execSync(`powershell -NoProfile -Command "Compress-Archive -LiteralPath '${sourceSkillDir}' -DestinationPath '${zipPath}' -Force"`, {
    cwd: rootDir,
    stdio: 'inherit'
  });
  console.log(`✓ Generated standalone distribution archive: ${zipPath}`);
} catch (err) {
  console.error('Failed to create zip archive:', err.message);
}

console.log('Build and package completed successfully.');
