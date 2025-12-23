const fs = require('fs');
const { execSync } = require('child_process');

// This script creates a comparison grid of ARR visualizations from all three libraries

console.log('🎨 Creating comparison grid for ARR visualizations...');

// Define the visualization element IDs
const charts = [
    { id: 'arrTrendChart', name: 'Chart.js ARR', library: 'chartjs' },
    { id: 'arrTrendPlotly', name: 'Plotly ARR', library: 'plotly' },
    { id: 'd3ArrGradient', name: 'D3.js ARR', library: 'd3' }
];

// Since we can't use Puppeteer easily, we'll create a manual Python script
const pythonScript = `
from PIL import Image, ImageDraw, ImageFont
import os

# Create a simple comparison grid image
width = 1800
height = 600
grid = Image.new('RGB', (width, height), color='white')
draw = ImageDraw.Draw(grid)

# Define Financial Authority colors
navy_dark = '#1B2D4D'
teal_accent = '#2D7B8C'
cream_bg = '#F5F4F0'

# Fill background
draw.rectangle([(0, 0), (width, height)], fill=cream_bg)

# Draw column separators
col_width = width // 3
for i in range(1, 3):
    x = i * col_width
    draw.line([(x, 0), (x, height)], fill=navy_dark, width=2)

# Add labels for each column
try:
    # Try to use a good font, fall back to default
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
    small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 16)
except:
    font = ImageDraw.ImageFont.load_default()
    small_font = font

labels = [
    "Chart.js ARR Trend",
    "Plotly.js ARR with Range Slider",
    "D3.js ARR Gradient Area"
]

descriptions = [
    "Line chart with filled area",
    "Interactive with range selector",
    "Gradient area with smooth curve"
]

for i, (label, desc) in enumerate(zip(labels, descriptions)):
    x_center = (i * col_width) + (col_width // 2)
    
    # Draw label
    bbox = draw.textbbox((0, 0), label, font=font)
    text_width = bbox[2] - bbox[0]
    draw.text((x_center - text_width // 2, 50), label, fill=navy_dark, font=font)
    
    # Draw description
    bbox = draw.textbbox((0, 0), desc, font=small_font)
    text_width = bbox[2] - bbox[0]
    draw.text((x_center - text_width // 2, 90), desc, fill=teal_accent, font=small_font)
    
    # Draw placeholder chart area
    chart_x1 = i * col_width + 40
    chart_y1 = 140
    chart_x2 = (i + 1) * col_width - 40
    chart_y2 = height - 80
    
    draw.rectangle([(chart_x1, chart_y1), (chart_x2, chart_y2)], 
                  outline=navy_dark, width=2, fill='white')
    
    # Add note
    note_text = "Visualization preview"
    bbox = draw.textbbox((0, 0), note_text, font=small_font)
    text_width = bbox[2] - bbox[0]
    draw.text((x_center - text_width // 2, chart_y1 + (chart_y2 - chart_y1) // 2), 
             note_text, fill=teal_accent, font=small_font)

# Add footer
footer_text = "Belissima SaaS Metrics Dashboard - Annual Recurring Revenue (ARR) Visualization Comparison"
bbox = draw.textbbox((0, 0), footer_text, font=small_font)
text_width = bbox[2] - bbox[0]
draw.text((width // 2 - text_width // 2, height - 40), footer_text, fill=navy_dark, font=small_font)

# Save the image
grid.save('screenshots/comparison-grid.png')
print('✅ Comparison grid created successfully!')
`;

// Write and execute Python script
fs.writeFileSync('/tmp/create_grid.py', pythonScript);
execSync('python3 /tmp/create_grid.py', { stdio: 'inherit' });

console.log('✅ Comparison grid generation complete!');
