#!/usr/bin/env node

/**
 * Quick Setup Script for Developer Universe Portfolio
 * Run: node scripts/setup.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setup() {
  console.log('\n🌌 Welcome to Developer Universe Portfolio Setup!\n');
  console.log('This script will help you customize your portfolio.\n');

  const answers = {};

  // Collect information
  answers.name = await question('👤 Your full name: ');
  answers.title = await question('💼 Your job title (e.g., Full-Stack Developer): ');
  answers.email = await question('📧 Your email: ');
  answers.github = await question('🐙 GitHub URL (e.g., https://github.com/username): ');
  answers.linkedin = await question('💼 LinkedIn URL: ');
  answers.location = await question('📍 Your location (e.g., San Francisco, CA): ');

  console.log('\n✅ Got it! Updating your portfolio...\n');

  // Update lib/data.ts
  const dataPath = path.join(process.cwd(), 'lib', 'data.ts');
  let dataContent = fs.readFileSync(dataPath, 'utf8');

  dataContent = dataContent
    .replace(/name: ".*?"/, `name: "${answers.name}"`)
    .replace(/title: ".*?"/, `title: "${answers.title}"`)
    .replace(/email: ".*?"/, `email: "${answers.email}"`)
    .replace(/github: ".*?"/, `github: "${answers.github}"`)
    .replace(/linkedin: ".*?"/, `linkedin: "${answers.linkedin}"`)
    .replace(/location: ".*?"/, `location: "${answers.location}"`);

  fs.writeFileSync(dataPath, dataContent, 'utf8');

  console.log('✨ Portfolio customized successfully!\n');
  console.log('📝 Next steps:');
  console.log('   1. Edit lib/data.ts to add your projects and skills');
  console.log('   2. Run: npm run dev');
  console.log('   3. Visit: http://localhost:3000\n');
  console.log('📚 Read CUSTOMIZATION.md for more options!\n');

  rl.close();
}

setup().catch(console.error);

