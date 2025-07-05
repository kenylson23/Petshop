#!/usr/bin/env node

import { execSync } from 'child_process';
import { rmSync, existsSync } from 'fs';

console.log('🚀 Building static site for Netlify...');

// Clean dist directory
if (existsSync('dist')) {
  rmSync('dist', { recursive: true, force: true });
  console.log('✓ Cleaned dist directory');
}

try {
  // Build with Vite
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build --mode production', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Static files ready in dist/ directory');
  console.log('🌐 Ready for Netlify deployment');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}