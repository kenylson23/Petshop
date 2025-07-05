const { execSync } = require('child_process');
const { mkdirSync } = require('fs');

try {
  console.log('Building for Netlify...');
  
  // Build the frontend
  console.log('Building frontend...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  // Netlify functions already exist
  console.log('Netlify functions ready!');
  
  console.log('Netlify build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}