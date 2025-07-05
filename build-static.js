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
  // Build with Vite with optimizations for faster build
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build --mode production --minify false --sourcemap false', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' },
    timeout: 300000 // 5 minutes timeout
  });
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Static files ready in dist/public directory');
  console.log('🌐 Ready for Netlify deployment');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}