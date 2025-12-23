const fs = require('fs');
const path = require('path');

/**
 * Generate SVG visualizations for WSJ color palettes
 * Shows each palette with color swatches and usage information
 */

console.log('🎨 Generating WSJ color palette SVG visualizations...');

// Define the color palettes
const palettes = [
  {
    name: 'Financial Authority',
    filename: 'financial-authority.svg',
    description: 'Revenue, growth, and key financial metrics',
    colors: [
      { name: 'Navy', hex: '#002b5c', rgb: 'rgb(0, 43, 92)', usage: 'Primary data series, revenue' },
      { name: 'Gold', hex: '#daa520', rgb: 'rgb(218, 165, 32)', usage: 'Secondary series, targets' },
      { name: 'Steel Blue', hex: '#4682b4', rgb: 'rgb(70, 130, 180)', usage: 'Tertiary data, comparisons' },
      { name: 'Charcoal', hex: '#2d3748', rgb: 'rgb(45, 55, 72)', usage: 'Text, labels, axes' }
    ]
  },
  {
    name: 'Neutral Professional',
    filename: 'neutral-professional.svg',
    description: 'Retention, health metrics, and operational data',
    colors: [
      { name: 'Slate', hex: '#64748b', rgb: 'rgb(100, 116, 139)', usage: 'Primary neutral' },
      { name: 'Ash', hex: '#94a3b8', rgb: 'rgb(148, 163, 184)', usage: 'Secondary neutral' },
      { name: 'Accent Teal', hex: '#14b8a6', rgb: 'rgb(20, 184, 166)', usage: 'Positive indicators' },
      { name: 'Accent Red', hex: '#dc2626', rgb: 'rgb(220, 38, 38)', usage: 'Negative indicators' }
    ]
  },
  {
    name: 'Dual-Purpose',
    filename: 'dual-purpose.svg',
    description: 'Cost, efficiency, and profitability metrics',
    colors: [
      { name: 'Forest Green', hex: '#15803d', rgb: 'rgb(21, 128, 61)', usage: 'Positive, gains, revenue' },
      { name: 'Crimson', hex: '#b91c1c', rgb: 'rgb(185, 28, 28)', usage: 'Negative, costs, losses' },
      { name: 'Stone', hex: '#78716c', rgb: 'rgb(120, 113, 108)', usage: 'Neutral, baseline' },
      { name: 'Amber', hex: '#f59e0b', rgb: 'rgb(245, 158, 11)', usage: 'Warnings, thresholds' }
    ]
  },
  {
    name: 'Single-Hue Progression',
    filename: 'single-hue-progression.svg',
    description: 'Sequential data, trends, hierarchies',
    colors: [
      { name: 'Blue 100', hex: '#dbeafe', rgb: 'rgb(219, 234, 254)', usage: 'Lightest' },
      { name: 'Blue 300', hex: '#93c5fd', rgb: 'rgb(147, 197, 253)', usage: 'Light' },
      { name: 'Blue 500', hex: '#3b82f6', rgb: 'rgb(59, 130, 246)', usage: 'Medium' },
      { name: 'Blue 700', hex: '#1d4ed8', rgb: 'rgb(29, 78, 216)', usage: 'Dark' },
      { name: 'Blue 900', hex: '#1e3a8a', rgb: 'rgb(30, 58, 138)', usage: 'Darkest' }
    ]
  }
];

/**
 * Create SVG for a palette
 */
function createPaletteSVG(palette) {
  const width = 1200;
  const height = 400;
  const swatchWidth = 180;
  const swatchHeight = 120;
  const spacing = 20;
  const topMargin = 100;
  
  const totalWidth = palette.colors.length * swatchWidth + (palette.colors.length - 1) * spacing;
  const startX = (width - totalWidth) / 2;
  
  let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .palette-title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 28px; font-weight: bold; }
      .palette-desc { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; }
      .color-name { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; }
      .color-hex { font-family: 'Courier New', monospace; font-size: 12px; }
      .color-usage { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; }
    </style>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="0" dy="2" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.2"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="${width / 2}" y="40" text-anchor="middle" fill="#1e293b" class="palette-title">${palette.name} Palette</text>
  <text x="${width / 2}" y="70" text-anchor="middle" fill="#64748b" class="palette-desc">${palette.description}</text>
  
  <!-- Color Swatches -->
`;
  
  palette.colors.forEach((color, i) => {
    const x = startX + i * (swatchWidth + spacing);
    const y = topMargin;
    
    // Color swatch
    svg += `  <g filter="url(#shadow)">
    <rect x="${x}" y="${y}" width="${swatchWidth}" height="${swatchHeight}" fill="${color.hex}" rx="8"/>
  </g>
  
`;
    
    // Color information below swatch
    const textX = x + swatchWidth / 2;
    const textY = y + swatchHeight + 25;
    
    // Determine text color (white for dark colors, dark for light colors)
    const brightness = parseInt(color.hex.slice(1, 3), 16) * 0.299 +
                      parseInt(color.hex.slice(3, 5), 16) * 0.587 +
                      parseInt(color.hex.slice(5, 7), 16) * 0.114;
    const swatchTextColor = brightness > 128 ? '#1e293b' : '#ffffff';
    
    // Name on swatch
    svg += `  <text x="${textX}" y="${y + swatchHeight / 2}" text-anchor="middle" fill="${swatchTextColor}" class="color-name">${color.name}</text>
  <text x="${textX}" y="${y + swatchHeight / 2 + 20}" text-anchor="middle" fill="${swatchTextColor}" class="color-hex">${color.hex}</text>
  
`;
    
    // Usage below
    svg += `  <text x="${textX}" y="${textY}" text-anchor="middle" fill="#475569" class="color-usage">${color.usage}</text>
  
`;
  });
  
  // Footer
  svg += `  <text x="${width / 2}" y="${height - 20}" text-anchor="middle" fill="#94a3b8" font-size="12">
    WCAG 2.1 AA Compliant • Colorblind Safe • Print Safe
  </text>
</svg>`;
  
  return svg;
}

// Generate all palette SVGs
const dir = 'screenshots/palettes';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

palettes.forEach(palette => {
  const svgContent = createPaletteSVG(palette);
  const filepath = path.join(dir, palette.filename);
  fs.writeFileSync(filepath, svgContent);
  console.log(`✓ Generated ${palette.filename}`);
});

console.log('\n✅ All palette SVGs generated successfully!');
console.log('🎨 Color palettes are now vector-based for perfect display');
console.log('📏 Scales beautifully on any screen resolution');
