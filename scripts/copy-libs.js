#!/usr/bin/env node
// Script to copy library files from node_modules to lib directory

const fs = require('fs');
const path = require('path');

const libs = [
    { src: 'plotly.js-dist/plotly.js', dest: 'lib/plotly.js' },
    { src: 'd3/dist/d3.min.js', dest: 'lib/d3.min.js' }
];

console.log('📦 Copying library files from node_modules to lib/...');

libs.forEach(lib => {
    const srcPath = path.join(__dirname, '..', 'node_modules', lib.src);
    const destPath = path.join(__dirname, '..', lib.dest);
    
    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Copied ${lib.src} -> ${lib.dest}`);
    } catch (err) {
        console.error(`❌ Failed to copy ${lib.src}:`, err.message);
        process.exit(1);
    }
});

console.log('✨ All library files copied successfully!');
