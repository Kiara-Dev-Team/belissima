const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Capture screenshots as SVG for better quality and scalability
 * This script launches a browser, loads the dashboard, and exports charts as SVG
 */

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  
  console.log('Loading dashboard...');
  await page.goto('http://localhost:8080/saas-dashboard.html', {
    waitUntil: 'networkidle0',
    timeout: 30000
  });
  
  // Wait for charts to render
  await page.waitForTimeout(3000);
  
  console.log('Capturing Chart.js screenshots as SVG...');
  
  // Chart.js components - we'll convert canvas to SVG
  const chartjsSelectors = [
    { selector: '#arrTrendChart', name: 'chartjs-arr.svg', title: 'ARR Trend', dir: 'arr' },
    { selector: '#nrrGaugeChart', name: 'chartjs-gauge.svg', title: 'NRR Gauge', dir: 'nrr' },
    { selector: '#cacMonthChart', name: 'chartjs-cac.svg', title: 'CAC by Month', dir: 'cac' },
    { selector: '#cacPaybackChart', name: 'chartjs-payback.svg', title: 'CAC Payback Period', dir: 'cac-payback' },
    { selector: '#ltvCacChart', name: 'chartjs-ltv-ratio.svg', title: 'LTV:CAC Ratio', dir: 'ltv' },
    { selector: '#churnRateChart', name: 'chartjs-churn.svg', title: 'Churn Rate Trend', dir: 'churn' },
    { selector: '#expansionArrChart', name: 'chartjs-expansion.svg', title: 'Expansion ARR', dir: 'expansion' },
    { selector: '#arrPerEmployeeChart', name: 'chartjs-fte.svg', title: 'ARR per Employee', dir: 'arr-fte' },
    { selector: '#ruleOf40Chart', name: 'chartjs-rule-of-40.svg', title: 'Rule of 40', dir: 'rule-of-40' },
    { selector: '#grrTrendChart', name: 'chartjs-grr.svg', title: 'GRR Trend', dir: 'grr' }
  ];
  
  // Inject Canvas2SVG library into the page for Chart.js conversion
  await page.addScriptTag({
    url: 'https://cdn.jsdelivr.net/npm/canvas2svg@1.0.21/canvas2svg.min.js'
  });
  
  for (const chart of chartjsSelectors) {
    try {
      const element = await page.$(chart.selector);
      if (element) {
        // Convert canvas to SVG using canvas2svg
        const svgContent = await page.evaluate((selector) => {
          const canvas = document.querySelector(selector);
          if (!canvas) return null;
          
          // Create a new C2S context with the same dimensions
          const ctx = new C2S(canvas.width, canvas.height);
          
          // Get the Chart.js instance
          const chartInstance = Chart.getChart(canvas);
          if (!chartInstance) return null;
          
          // Re-render the chart to the SVG context
          chartInstance.ctx = ctx;
          chartInstance.render();
          
          // Get the SVG string
          return ctx.getSerializedSvg(true);
        }, chart.selector);
        
        if (svgContent) {
          const dir = path.join('screenshots', chart.dir);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          fs.writeFileSync(path.join(dir, chart.name), svgContent);
          console.log(`✓ Captured ${chart.title} as SVG`);
        }
      }
    } catch (err) {
      console.log(`✗ Failed to capture ${chart.title}: ${err.message}`);
    }
  }
  
  console.log('Capturing Plotly.js screenshots as SVG...');
  
  // Plotly components - Plotly has built-in SVG export
  const plotlySelectors = [
    { selector: '#nrrComboPlot', name: 'plotly-nrr-combo.svg', title: 'NRR Combo', dir: 'nrr' },
    { selector: '#cacNrrCorrelation', name: 'plotly-correlation.svg', title: 'CAC vs NRR', dir: 'cac' },
    { selector: '#ltvSegmentPlot', name: 'plotly-ltv-3d.svg', title: 'LTV Segment 3D', dir: 'ltv' },
    { selector: '#churnContextPlot', name: 'plotly-churn-combo.svg', title: 'Churn Context', dir: 'churn' },
    { selector: '#expansionSankeyPlot', name: 'plotly-sankey.svg', title: 'Expansion Sankey', dir: 'expansion' },
    { selector: '#grrConfidencePlot', name: 'plotly-grr.svg', title: 'GRR Confidence', dir: 'grr' },
    { selector: '#arrTrendPlotly', name: 'plotly-arr.svg', title: 'ARR Trend', dir: 'arr' },
    { selector: '#cacPaybackPlotly', name: 'plotly-payback-ci.svg', title: 'CAC Payback', dir: 'cac-payback' },
    { selector: '#arrFtePlotly', name: 'plotly-fte-scatter.svg', title: 'ARR/FTE Scatter', dir: 'arr-fte' },
    { selector: '#ruleOf40Plotly', name: 'plotly-rule-of-40.svg', title: 'Rule of 40', dir: 'rule-of-40' }
  ];
  
  for (const chart of plotlySelectors) {
    try {
      const element = await page.$(chart.selector);
      if (element) {
        // Use Plotly's built-in SVG export
        const svgContent = await page.evaluate((selector) => {
          const plotDiv = document.querySelector(selector);
          if (!plotDiv) return null;
          
          // Use Plotly's toImage with SVG format
          return Plotly.toImage(plotDiv, { 
            format: 'svg',
            width: 1200,
            height: 600
          }).then(dataUrl => {
            // Extract SVG from data URL
            const base64 = dataUrl.split(',')[1];
            return atob(base64);
          });
        }, chart.selector);
        
        if (svgContent) {
          const dir = path.join('screenshots', chart.dir);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          fs.writeFileSync(path.join(dir, chart.name), svgContent);
          console.log(`✓ Captured ${chart.title} as SVG`);
        }
      }
    } catch (err) {
      console.log(`✗ Failed to capture ${chart.title}: ${err.message}`);
    }
  }
  
  console.log('Capturing D3.js screenshots as SVG...');
  
  // D3 components - D3 natively generates SVG, so we just extract it
  const d3Selectors = [
    { selector: '#d3ArrArea', name: 'd3-arr.svg', title: 'ARR Area Chart', dir: 'arr' },
    { selector: '#d3NrrGauge', name: 'd3-custom-gauge.svg', title: 'NRR Custom Gauge', dir: 'nrr' },
    { selector: '#d3CacEfficiency', name: 'd3-cac-trend.svg', title: 'CAC Efficiency', dir: 'cac' },
    { selector: '#d3Waterfall', name: 'd3-waterfall.svg', title: 'Customer Waterfall', dir: 'churn' },
    { selector: '#d3LtvBubble', name: 'd3-bubble.svg', title: 'LTV Bubble', dir: 'ltv' },
    { selector: '#d3ExpansionSunburst', name: 'd3-sunburst.svg', title: 'Expansion Sunburst', dir: 'expansion' },
    { selector: '#d3EfficiencySlope', name: 'd3-slope.svg', title: 'Efficiency Slope', dir: 'arr-fte' },
    { selector: '#d3RuleOf40', name: 'd3-score.svg', title: 'Rule of 40 Score', dir: 'rule-of-40' },
    { selector: '#d3GrrArea', name: 'd3-grr.svg', title: 'GRR Area', dir: 'grr' },
    { selector: '#d3CacPayback', name: 'd3-stepped.svg', title: 'CAC Payback Stepped', dir: 'cac-payback' }
  ];
  
  for (const chart of d3Selectors) {
    try {
      const element = await page.$(chart.selector);
      if (element) {
        // D3 creates SVG elements, so we can directly extract the SVG
        const svgContent = await page.evaluate((selector) => {
          const container = document.querySelector(selector);
          if (!container) return null;
          
          // Find the SVG element inside the container
          const svg = container.querySelector('svg');
          if (!svg) return null;
          
          // Ensure the SVG has proper dimensions
          if (!svg.hasAttribute('width')) {
            svg.setAttribute('width', '1200');
          }
          if (!svg.hasAttribute('height')) {
            svg.setAttribute('height', '600');
          }
          
          // Add XML namespace if not present
          if (!svg.hasAttribute('xmlns')) {
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
          }
          
          // Return the SVG content
          return svg.outerHTML;
        }, chart.selector);
        
        if (svgContent) {
          const dir = path.join('screenshots', chart.dir);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          fs.writeFileSync(path.join(dir, chart.name), svgContent);
          console.log(`✓ Captured ${chart.title} as SVG`);
        }
      }
    } catch (err) {
      console.log(`✗ Failed to capture ${chart.title}: ${err.message}`);
    }
  }
  
  console.log('All screenshots captured as SVG!');
  await browser.close();
})();
