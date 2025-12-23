const fs = require('fs');

/**
 * Creates an SVG comparison grid for ARR visualizations from all three libraries
 * Uses vector graphics for perfect scaling at any resolution
 */

console.log('🎨 Creating SVG comparison grid for ARR visualizations...');

// Define Financial Authority colors
const colors = {
  navyDark: '#1B2D4D',
  tealAccent: '#2D7B8C',
  creamBg: '#F5F4F0',
  slateGray: '#64748b',
  white: '#FFFFFF'
};

// SVG dimensions
const width = 1800;
const height = 600;
const colWidth = width / 3;
const padding = 40;

// Chart titles and descriptions
const charts = [
  {
    title: 'Chart.js ARR Trend',
    description: 'Line chart with filled area',
    library: 'Chart.js',
    features: ['Simple & Fast', 'Responsive', 'Touch-friendly']
  },
  {
    title: 'Plotly.js ARR',
    description: 'Interactive with range selector',
    library: 'Plotly.js',
    features: ['Zoom & Pan', 'Range Slider', 'Export Options']
  },
  {
    title: 'D3.js ARR Gradient',
    description: 'Gradient area with smooth curve',
    library: 'D3.js',
    features: ['Fully Custom', 'Animations', 'Brand Styling']
  }
];

// Create SVG content
let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      .title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: bold; }
      .description { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 16px; }
      .feature { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 14px; }
      .footer { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 14px; }
      .library-badge { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 12px; font-weight: 600; }
    </style>
    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.white};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colors.creamBg};stop-opacity:1" />
    </linearGradient>
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
  <rect width="${width}" height="${height}" fill="${colors.creamBg}"/>
  
`;

// Create each column
charts.forEach((chart, i) => {
  const x = i * colWidth;
  const centerX = x + colWidth / 2;
  
  // Column separator (except for the first column)
  if (i > 0) {
    svgContent += `  <line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${colors.slateGray}" stroke-width="1" opacity="0.3"/>\n`;
  }
  
  // Card background with shadow
  const cardX = x + padding;
  const cardY = 120;
  const cardWidth = colWidth - padding * 2;
  const cardHeight = height - 200;
  
  svgContent += `  <rect x="${cardX}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" 
    fill="url(#cardGradient)" rx="8" filter="url(#shadow)"/>\n`;
  svgContent += `  <rect x="${cardX}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" 
    fill="none" stroke="${colors.navyDark}" stroke-width="2" rx="8"/>\n`;
  
  // Library badge
  const badgeWidth = 80;
  const badgeX = centerX - badgeWidth / 2;
  svgContent += `  <rect x="${badgeX}" y="40" width="${badgeWidth}" height="24" fill="${colors.tealAccent}" rx="12"/>\n`;
  svgContent += `  <text x="${centerX}" y="56" text-anchor="middle" fill="${colors.white}" class="library-badge">${chart.library}</text>\n`;
  
  // Title
  svgContent += `  <text x="${centerX}" y="100" text-anchor="middle" fill="${colors.navyDark}" class="title">${chart.title}</text>\n`;
  
  // Description
  svgContent += `  <text x="${centerX}" y="140" text-anchor="middle" fill="${colors.slateGray}" class="description">${chart.description}</text>\n`;
  
  // Placeholder visualization icon (simplified chart representation)
  const chartCenterY = cardY + cardHeight / 2;
  const iconSize = 80;
  const iconX = centerX - iconSize / 2;
  const iconY = chartCenterY - iconSize / 2;
  
  // Simple line chart icon
  svgContent += `  <g opacity="0.3">\n`;
  svgContent += `    <circle cx="${iconX + 10}" cy="${iconY + 60}" r="4" fill="${colors.navyDark}"/>\n`;
  svgContent += `    <circle cx="${iconX + 30}" cy="${iconY + 40}" r="4" fill="${colors.navyDark}"/>\n`;
  svgContent += `    <circle cx="${iconX + 50}" cy="${iconY + 25}" r="4" fill="${colors.navyDark}"/>\n`;
  svgContent += `    <circle cx="${iconX + 70}" cy="${iconY + 20}" r="4" fill="${colors.navyDark}"/>\n`;
  svgContent += `    <polyline points="${iconX + 10},${iconY + 60} ${iconX + 30},${iconY + 40} ${iconX + 50},${iconY + 25} ${iconX + 70},${iconY + 20}" 
      fill="none" stroke="${colors.navyDark}" stroke-width="2"/>\n`;
  svgContent += `    <path d="M ${iconX + 10} ${iconY + 60} L ${iconX + 10} ${iconY + 70} L ${iconX + 70} ${iconY + 70} L ${iconX + 70} ${iconY + 20} L ${iconX + 70} ${iconY + 70} L ${iconX + 50} ${iconY + 70} L ${iconX + 50} ${iconY + 25} L ${iconX + 30} ${iconY + 70} L ${iconX + 30} ${iconY + 40} L ${iconX + 10} ${iconY + 70} Z" 
      fill="${colors.tealAccent}" opacity="0.2"/>\n`;
  svgContent += `  </g>\n`;
  
  // Features list
  const featuresY = cardY + cardHeight - 100;
  chart.features.forEach((feature, j) => {
    const featureY = featuresY + j * 24;
    svgContent += `  <circle cx="${cardX + 20}" cy="${featureY - 4}" r="3" fill="${colors.tealAccent}"/>\n`;
    svgContent += `  <text x="${cardX + 30}" y="${featureY}" fill="${colors.navyDark}" class="feature">${feature}</text>\n`;
  });
});

// Footer
const footerText = 'Belissima SaaS Metrics Dashboard - Annual Recurring Revenue (ARR) Visualization Comparison';
svgContent += `  <text x="${width / 2}" y="${height - 30}" text-anchor="middle" fill="${colors.navyDark}" class="footer">${footerText}</text>\n`;

// Close SVG
svgContent += `</svg>`;

// Write the SVG file
fs.writeFileSync('screenshots/comparison-grid.svg', svgContent);

console.log('✅ SVG comparison grid created successfully!');
console.log('📁 Saved to: screenshots/comparison-grid.svg');
console.log('💡 Benefits of SVG:');
console.log('   - Scales perfectly at any resolution');
console.log('   - Smaller file size than high-res PNG');
console.log('   - Can be styled with CSS');
console.log('   - Crisp on retina/4K displays');
