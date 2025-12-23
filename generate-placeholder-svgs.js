const fs = require('fs');
const path = require('path');

/**
 * Generate placeholder SVG screenshots for all metric visualizations
 * These are vector-based placeholders that display nicely at any resolution
 */

console.log('🎨 Generating placeholder SVG screenshots for all metrics...');

// Define color palettes
const palettes = {
  financialAuthority: {
    primary: '#002b5c',
    secondary: '#daa520',
    tertiary: '#4682b4',
    text: '#2d3748'
  },
  neutralProfessional: {
    primary: '#64748b',
    secondary: '#94a3b8',
    accent: '#14b8a6',
    text: '#2d3748'
  },
  dualPurpose: {
    positive: '#15803d',
    negative: '#b91c1c',
    neutral: '#78716c',
    warning: '#f59e0b'
  },
  singleHue: {
    light: '#dbeafe',
    medium: '#3b82f6',
    dark: '#1e3a8a'
  }
};

// Chart metadata for all metrics
const metrics = [
  // ARR
  { dir: 'arr', name: 'chartjs-arr.svg', title: 'ARR Trend', library: 'Chart.js', type: 'line', palette: 'financialAuthority' },
  { dir: 'arr', name: 'plotly-arr.svg', title: 'ARR with Range Slider', library: 'Plotly.js', type: 'line', palette: 'financialAuthority' },
  { dir: 'arr', name: 'd3-arr.svg', title: 'ARR Gradient Area', library: 'D3.js', type: 'area', palette: 'financialAuthority' },
  
  // NRR
  { dir: 'nrr', name: 'chartjs-gauge.svg', title: 'NRR Gauge', library: 'Chart.js', type: 'gauge', palette: 'neutralProfessional' },
  { dir: 'nrr', name: 'plotly-nrr-combo.svg', title: 'NRR Combo Chart', library: 'Plotly.js', type: 'combo', palette: 'neutralProfessional' },
  { dir: 'nrr', name: 'd3-custom-gauge.svg', title: 'NRR Custom Gauge', library: 'D3.js', type: 'gauge', palette: 'neutralProfessional' },
  
  // GRR
  { dir: 'grr', name: 'chartjs-grr.svg', title: 'GRR Trend', library: 'Chart.js', type: 'line', palette: 'financialAuthority' },
  { dir: 'grr', name: 'plotly-grr.svg', title: 'GRR with Confidence', library: 'Plotly.js', type: 'line', palette: 'financialAuthority' },
  { dir: 'grr', name: 'd3-grr.svg', title: 'GRR Area Chart', library: 'D3.js', type: 'area', palette: 'financialAuthority' },
  
  // CAC
  { dir: 'cac', name: 'chartjs-cac.svg', title: 'CAC by Month', library: 'Chart.js', type: 'bar', palette: 'dualPurpose' },
  { dir: 'cac', name: 'plotly-correlation.svg', title: 'CAC Correlation', library: 'Plotly.js', type: 'scatter', palette: 'dualPurpose' },
  { dir: 'cac', name: 'd3-cac-trend.svg', title: 'CAC with Trend', library: 'D3.js', type: 'bar', palette: 'dualPurpose' },
  
  // CAC Payback
  { dir: 'cac-payback', name: 'chartjs-payback.svg', title: 'CAC Payback Period', library: 'Chart.js', type: 'line', palette: 'dualPurpose' },
  { dir: 'cac-payback', name: 'plotly-payback-ci.svg', title: 'Payback with CI', library: 'Plotly.js', type: 'line', palette: 'dualPurpose' },
  { dir: 'cac-payback', name: 'd3-stepped.svg', title: 'Stepped Payback', library: 'D3.js', type: 'step', palette: 'dualPurpose' },
  
  // LTV
  { dir: 'ltv', name: 'chartjs-ltv-ratio.svg', title: 'LTV:CAC Ratio', library: 'Chart.js', type: 'bar', palette: 'singleHue' },
  { dir: 'ltv', name: 'plotly-ltv-3d.svg', title: 'LTV 3D Scatter', library: 'Plotly.js', type: 'scatter3d', palette: 'singleHue' },
  { dir: 'ltv', name: 'd3-bubble.svg', title: 'LTV Bubble Chart', library: 'D3.js', type: 'bubble', palette: 'singleHue' },
  
  // Churn
  { dir: 'churn', name: 'chartjs-churn.svg', title: 'Churn Rate', library: 'Chart.js', type: 'line', palette: 'neutralProfessional' },
  { dir: 'churn', name: 'plotly-churn-combo.svg', title: 'Churn Context', library: 'Plotly.js', type: 'combo', palette: 'neutralProfessional' },
  { dir: 'churn', name: 'd3-waterfall.svg', title: 'Churn Waterfall', library: 'D3.js', type: 'waterfall', palette: 'neutralProfessional' },
  
  // Expansion
  { dir: 'expansion', name: 'chartjs-expansion.svg', title: 'Expansion ARR', library: 'Chart.js', type: 'stackedBar', palette: 'financialAuthority' },
  { dir: 'expansion', name: 'plotly-sankey.svg', title: 'Expansion Sankey', library: 'Plotly.js', type: 'sankey', palette: 'financialAuthority' },
  { dir: 'expansion', name: 'd3-sunburst.svg', title: 'Expansion Sunburst', library: 'D3.js', type: 'sunburst', palette: 'financialAuthority' },
  
  // ARR per FTE
  { dir: 'arr-fte', name: 'chartjs-fte.svg', title: 'ARR per Employee', library: 'Chart.js', type: 'line', palette: 'singleHue' },
  { dir: 'arr-fte', name: 'plotly-fte-scatter.svg', title: 'FTE Efficiency', library: 'Plotly.js', type: 'scatter', palette: 'singleHue' },
  { dir: 'arr-fte', name: 'd3-slope.svg', title: 'Efficiency Slope', library: 'D3.js', type: 'slope', palette: 'singleHue' },
  
  // Rule of 40
  { dir: 'rule-of-40', name: 'chartjs-rule-of-40.svg', title: 'Rule of 40', library: 'Chart.js', type: 'combo', palette: 'singleHue' },
  { dir: 'rule-of-40', name: 'plotly-rule-of-40.svg', title: 'Rule of 40 Animated', library: 'Plotly.js', type: 'combo', palette: 'singleHue' },
  { dir: 'rule-of-40', name: 'd3-score.svg', title: 'Rule of 40 Score', library: 'D3.js', type: 'custom', palette: 'singleHue' }
];

/**
 * Generate a simple line chart SVG
 */
function generateLineChart(colors) {
  const points = [
    { x: 50, y: 280 }, { x: 150, y: 250 }, { x: 250, y: 220 },
    { x: 350, y: 200 }, { x: 450, y: 170 }, { x: 550, y: 150 }
  ];
  
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaData = `${pathData} L 550 300 L 50 300 Z`;
  
  return `
    <path d="${areaData}" fill="${colors.primary}" opacity="0.2"/>
    <path d="${pathData}" fill="none" stroke="${colors.primary}" stroke-width="3"/>
    ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${colors.primary}"/>`).join('\n    ')}
  `;
}

/**
 * Generate a bar chart SVG
 */
function generateBarChart(colors) {
  const bars = [100, 140, 180, 160, 220, 200];
  const barWidth = 60;
  const spacing = 90;
  const maxHeight = 200;
  
  return bars.map((height, i) => {
    const x = 60 + i * spacing;
    const y = 300 - (height / 220) * maxHeight;
    const h = (height / 220) * maxHeight;
    return `<rect x="${x}" y="${y}" width="${barWidth}" height="${h}" fill="${colors.primary}" rx="4"/>`;
  }).join('\n    ');
}

/**
 * Generate a gauge chart SVG
 */
function generateGauge(colors) {
  const cx = 300, cy = 250, r = 120;
  const percent = 75;
  const angle = (percent / 100) * 180 - 90;
  const endX = cx + r * Math.cos(angle * Math.PI / 180);
  const endY = cy + r * Math.sin(angle * Math.PI / 180);
  
  return `
    <path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}" 
      fill="none" stroke="#e5e7eb" stroke-width="20" stroke-linecap="round"/>
    <path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${endX} ${endY}" 
      fill="none" stroke="${colors.primary}" stroke-width="20" stroke-linecap="round"/>
    <text x="${cx}" y="${cy}" text-anchor="middle" font-size="48" font-weight="bold" fill="${colors.primary}">${percent}%</text>
  `;
}

/**
 * Create SVG for a metric
 */
function createMetricSVG(metric) {
  const width = 1200;
  const height = 600;
  const palette = palettes[metric.palette];
  
  let chartContent = '';
  if (metric.type === 'line' || metric.type === 'area' || metric.type === 'step') {
    chartContent = generateLineChart(palette);
  } else if (metric.type === 'bar' || metric.type === 'stackedBar') {
    chartContent = generateBarChart(palette);
  } else if (metric.type === 'gauge') {
    chartContent = generateGauge(palette);
  } else if (metric.type === 'combo' || metric.type === 'scatter' || metric.type === 'scatter3d' || 
             metric.type === 'bubble' || metric.type === 'waterfall' || metric.type === 'sankey' || 
             metric.type === 'sunburst' || metric.type === 'slope' || metric.type === 'custom') {
    // For complex types, use a simple representation
    chartContent = generateLineChart(palette);
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 24px; font-weight: 600; }
      .subtitle { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; }
      .library-badge { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; }
    </style>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="#f8f9fa"/>
  
  <!-- Content Area -->
  <rect x="40" y="80" width="${width - 80}" height="${height - 120}" fill="white" rx="8"/>
  
  <!-- Header -->
  <rect x="40" y="20" width="120" height="30" fill="${palette.primary}" rx="15"/>
  <text x="100" y="40" text-anchor="middle" fill="white" class="library-badge">${metric.library}</text>
  
  <text x="60" y="120" fill="#1e293b" class="title">${metric.title}</text>
  <text x="60" y="145" fill="#64748b" class="subtitle">${metric.type.charAt(0).toUpperCase() + metric.type.slice(1)} visualization</text>
  
  <!-- Chart Content -->
  <g transform="translate(60, 100)">
    ${chartContent}
  </g>
  
  <!-- Axis lines for context -->
  <line x1="60" y1="400" x2="620" y2="400" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="60" y1="180" x2="60" y2="400" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Footer note -->
  <text x="${width / 2}" y="${height - 20}" text-anchor="middle" fill="#94a3b8" font-size="12">
    Vector graphic - scales perfectly at any resolution
  </text>
</svg>`;
}

// Generate all SVG files
let generated = 0;
let skipped = 0;

metrics.forEach(metric => {
  const dir = path.join('screenshots', metric.dir);
  const filepath = path.join(dir, metric.name);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Generate SVG
  const svgContent = createMetricSVG(metric);
  fs.writeFileSync(filepath, svgContent);
  generated++;
  console.log(`✓ Generated ${metric.dir}/${metric.name}`);
});

console.log('\n✅ SVG generation complete!');
console.log(`📊 Generated: ${generated} files`);
console.log('💡 All screenshots are now vector-based (SVG) for perfect scaling');
console.log('🎨 Each chart uses appropriate WSJ color palette');
console.log('📏 Resolution-independent - looks crisp on any display');
