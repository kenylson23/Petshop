#!/usr/bin/env node

import { execSync } from 'child_process';
import { rmSync, existsSync } from 'fs';

console.log('🧪 Testing static build process...');

// Clean dist directory
if (existsSync('dist')) {
  rmSync('dist', { recursive: true, force: true });
  console.log('✓ Cleaned dist directory');
}

try {
  // Build with Vite (timeout after 2 minutes)
  console.log('📦 Building with Vite...');
  execSync('timeout 120s npx vite build --mode production', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  console.log('✅ Build test completed!');
  
} catch (error) {
  console.error('❌ Build test failed:', error.message);
  process.exit(1);
}