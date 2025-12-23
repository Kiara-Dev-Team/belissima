const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Helper function to process screenshots in batches (prevents memory issues)
async function captureBatch(page, charts, captureFn, batchSize = 5) {
  for (let i = 0; i < charts.length; i += batchSize) {
    const batch = charts.slice(i, i + batchSize);
    await Promise.all(batch.map(chart => captureFn(page, chart)));
  }
}

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
  
  // Wait for charts to render - use selector to ensure D3 SVG is ready
  await page.waitForSelector('#d3ArrArea', { timeout: 5000 }).catch(() => {
    console.log('⚠️  Warning: D3 charts may not be ready');
  });
  await page.waitForTimeout(1500); // Additional buffer for chart animations
  
  console.log('Capturing Chart.js screenshots...');
  
  // Chart.js components
  const chartjsSelectors = [
    { selector: '#arrTrendChart', name: '01-arr-trend.png', title: 'ARR Trend' },
    { selector: '#nrrGaugeChart', name: '02-nrr-gauge.png', title: 'NRR Gauge' },
    { selector: '#cacMonthChart', name: '03-cac-by-month.png', title: 'CAC by Month' },
    { selector: '#cacPaybackChart', name: '04-cac-payback.png', title: 'CAC Payback Period' },
    { selector: '#ltvCacChart', name: '05-ltv-cac-ratio.png', title: 'LTV:CAC Ratio' },
    { selector: '#churnRateChart', name: '06-churn-rate.png', title: 'Churn Rate Trend' },
    { selector: '#expansionArrChart', name: '07-expansion-arr.png', title: 'Expansion ARR' },
    { selector: '#arrPerEmployeeChart', name: '08-arr-per-employee.png', title: 'ARR per Employee' },
    { selector: '#ruleOf40Chart', name: '09-rule-of-40.png', title: 'Rule of 40' },
    { selector: '#grrTrendChart', name: '10-grr-trend.png', title: 'GRR Trend' }
  ];
  
  // Capture screenshots in parallel for better performance
  const captureScreenshot = async (page, chart) => {
    try {
      const element = await page.$(chart.selector);
      if (element) {
        const parentDiv = await page.evaluateHandle((el) => el.closest('.chart-container'), element);
        await parentDiv.asElement().screenshot({
          path: path.join('screenshots/chartjs', chart.name)
        });
        console.log(`✓ Captured ${chart.title}`);
      }
    } catch (err) {
      console.log(`✗ Failed to capture ${chart.title}: ${err.message}`);
    }
  };
  
  // Capture Chart.js screenshots in batches of 5
  await captureBatch(page, chartjsSelectors, captureScreenshot, 5);
  
  console.log('Capturing Plotly.js screenshots...');
  
  // Plotly components
  const plotlySelectors = [
    { selector: '#nrrComboPlot', name: '01-nrr-combo.png', title: 'NRR Combo' },
    { selector: '#cacNrrCorrelation', name: '02-cac-nrr-correlation.png', title: 'CAC vs NRR' },
    { selector: '#ltvSegmentPlot', name: '03-ltv-segment-3d.png', title: 'LTV Segment 3D' },
    { selector: '#churnContextPlot', name: '04-churn-context.png', title: 'Churn Context' },
    { selector: '#expansionSankeyPlot', name: '05-expansion-sankey.png', title: 'Expansion Sankey' },
    { selector: '#grrConfidencePlot', name: '06-grr-confidence.png', title: 'GRR Confidence' }
  ];
  
  // Capture Plotly screenshots in parallel
  const capturePlotlyScreenshot = async (page, chart) => {
    try {
      const element = await page.$(chart.selector);
      if (element) {
        const parentDiv = await page.evaluateHandle((el) => el.closest('.chart-container'), element);
        await parentDiv.asElement().screenshot({
          path: path.join('screenshots/plotly', chart.name)
        });
        console.log(`✓ Captured ${chart.title}`);
      }
    } catch (err) {
      console.log(`✗ Failed to capture ${chart.title}: ${err.message}`);
    }
  };
  
  // Capture Plotly screenshots in batches of 3 (3D charts use more memory)
  await captureBatch(page, plotlySelectors, capturePlotlyScreenshot, 3);
  
  console.log('Capturing D3.js screenshots...');
  
  // D3 components
  const d3Selectors = [
    { selector: '#d3ArrArea', name: '01-arr-area-gradient.png', title: 'ARR Area Chart' },
    { selector: '#d3NrrGauge', name: '02-nrr-gauge.png', title: 'NRR Custom Gauge' },
    { selector: '#d3CacEfficiency', name: '03-cac-efficiency.png', title: 'CAC Efficiency' },
    { selector: '#d3Waterfall', name: '04-customer-waterfall.png', title: 'Customer Waterfall' },
    { selector: '#d3LtvBubble', name: '05-ltv-bubble.png', title: 'LTV Bubble' },
    { selector: '#d3ExpansionSunburst', name: '06-expansion-sunburst.png', title: 'Expansion Sunburst' },
    { selector: '#d3EfficiencySlope', name: '07-efficiency-slope.png', title: 'Efficiency Slope' },
    { selector: '#d3RuleOf40', name: '08-rule-of-40.png', title: 'Rule of 40 Score' }
  ];
  
  // Capture D3 screenshots in parallel
  const captureD3Screenshot = async (page, chart) => {
    try {
      const element = await page.$(chart.selector);
      if (element) {
        const parentDiv = await page.evaluateHandle((el) => el.closest('.chart-container'), element);
        await parentDiv.asElement().screenshot({
          path: path.join('screenshots/d3', chart.name)
        });
        console.log(`✓ Captured ${chart.title}`);
      }
    } catch (err) {
      console.log(`✗ Failed to capture ${chart.title}: ${err.message}`);
    }
  };
  
  // Capture D3 screenshots in batches of 4
  await captureBatch(page, d3Selectors, captureD3Screenshot, 4);
  
  console.log('All screenshots captured successfully!');
  await browser.close();
})();
