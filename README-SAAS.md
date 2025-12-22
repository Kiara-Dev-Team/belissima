# 📊 Belissima - B2B SaaS CEO Dashboard

![Belissima B2B SaaS Dashboard](./screenshots/dashboard-overview.png)

A comprehensive, executive-focused business intelligence dashboard specifically designed for B2B SaaS companies. Features 24+ interactive visualizations across three powerful charting libraries to track the most critical SaaS metrics.

## ✨ Overview

Belissima provides B2B SaaS executives with real-time insights into the metrics that matter most. From ARR and NRR to customer acquisition costs and retention rates, every visualization is purpose-built for actionable decision-making.

### Why Multiple Visualization Libraries?

We leverage three complementary charting libraries, each chosen for specific strengths:

- **Chart.js**: Fast, lightweight, and perfect for standard business charts
- **Plotly.js**: Interactive 3D visualizations and advanced statistical displays
- **D3.js**: Custom, branded visualizations with maximum creative control

## 🎯 Key Metrics (10 Core SaaS KPIs)

| Metric | Description | Why It Matters | Recommended Library |
|--------|-------------|----------------|---------------------|
| **ARR** (Annual Recurring Revenue) | Total predictable revenue normalized to one year | Foundation metric for SaaS valuation and growth tracking | Chart.js, D3.js |
| **NRR** (Net Revenue Retention) | Revenue retained + expansion from existing customers | Measures product-market fit and expansion potential | All three |
| **CAC** (Customer Acquisition Cost) | Total sales/marketing spend per new customer | Efficiency of growth engine | Chart.js, Plotly.js |
| **LTV:CAC Ratio** | Customer lifetime value divided by acquisition cost | Fundamental unit economics health (target: 3x+) | Chart.js, Plotly.js |
| **CAC Payback Period** | Months to recover customer acquisition costs | Cash efficiency and working capital needs | Chart.js |
| **Churn Rate** | Percentage of customers lost per period | Product stickiness and customer satisfaction | Chart.js, Plotly.js |
| **GRR** (Gross Revenue Retention) | Revenue retained without expansion | Pure retention quality (target: 95%+) | Chart.js, Plotly.js |
| **Expansion ARR** | New revenue from existing customer base | Growth efficiency and land-and-expand success | Chart.js, Plotly.js |
| **ARR per Employee** | Revenue efficiency per team member | Operating leverage and scale | Chart.js |
| **Rule of 40** | Growth rate + profit margin (target: 40%+) | Balance of growth and profitability | Chart.js, D3.js |

## 📚 Visualization Library Comparison

### Chart.js (10 Components)
**Strengths**: Speed, simplicity, free/open-source, excellent documentation

**Best For**:
- Standard business charts (line, bar, doughnut)
- Quick implementation and prototyping
- Consistent, professional styling out-of-the-box
- Mobile-responsive designs

**Use Cases in Dashboard**:
- Time-series trends (ARR, Churn, GRR)
- Comparison charts (CAC, LTV:CAC)
- Gauge/progress indicators (NRR)
- Stacked visualizations (Expansion ARR)

### Plotly.js (6 Components)
**Strengths**: Interactivity, 3D visualizations, statistical analysis, hover details

**Best For**:
- Complex multi-dimensional data
- Interactive exploration and drill-downs
- Correlation analysis
- Confidence intervals and statistical displays

**Use Cases in Dashboard**:
- 3D scatter plots for segment analysis
- Sankey diagrams for customer journeys
- Combination charts with multiple y-axes
- Interactive gauge + trend combos

### D3.js (8 Components)
**Strengths**: Custom branding, animations, executive appeal, unlimited flexibility

**Best For**:
- Branded, custom visualizations
- Executive presentations
- Unique data stories
- Complex hierarchical data

**Use Cases in Dashboard**:
- Gradient-filled area charts
- Custom gauge designs with thresholds
- Waterfall charts for variance analysis
- Sunburst charts for hierarchical breakdowns
- Slope charts for efficiency comparisons

## 🎨 Component Gallery

### Chart.js Visualizations

Our Chart.js components provide fast, reliable visualizations for core business metrics:

1. **ARR Trend** - Line chart showing monthly annual recurring revenue growth
2. **NRR Gauge** - Doughnut gauge displaying net revenue retention at 115%
3. **CAC by Month** - Bar chart tracking customer acquisition cost efficiency
4. **CAC Payback Period** - Line chart showing months to recover acquisition costs
5. **LTV:CAC Ratio** - Bar chart of customer lifetime value to CAC ratio (target: 3-5x)
6. **Churn Rate Trend** - Line chart tracking monthly customer churn percentage
7. **Expansion ARR** - Stacked bar chart showing new, expansion, and churned ARR
8. **ARR per Employee** - Line chart measuring revenue efficiency per team member
9. **Rule of 40** - Combo chart displaying growth rate + EBITDA margin (target: 40%+)
10. **GRR Trend** - Line chart showing gross revenue retention over time

### Plotly.js Interactive Visualizations

Advanced interactive components for deeper analysis:

1. **NRR with Gauge + Line Combo** - Combines gauge indicator with quarterly trend line
2. **CAC vs NRR Correlation** - Dual-axis chart showing inverse relationship between CAC and NRR
3. **LTV Segment Analysis (3D Scatter)** - Three-dimensional view of LTV, CAC, and segment size
4. **Churn Context with New Customers** - Bar chart comparing new customer acquisition vs churn
5. **Expansion Pipeline (Sankey)** - Flow diagram showing upsell and cross-sell paths
6. **GRR with Confidence Intervals** - Statistical view of retention with uncertainty bands

### D3.js Custom Visualizations

Executive-ready custom visualizations:

1. **ARR Area Chart with Gradient** - Elegant gradient-filled area chart for ARR growth
2. **NRR Custom Gauge with Thresholds** - Color-coded gauge showing performance zones
3. **CAC Trend with Efficiency Line** - Dual chart showing CAC reduction and efficiency gains
4. **Customer Loss Waterfall** - Breakdown of churn by reason (voluntary, payment, competitive, fit)
5. **LTV Bubble Chart** - Bubble sizes represent customer counts across segments
6. **Expansion Sunburst** - Hierarchical breakdown of expansion revenue sources
7. **Efficiency Slope Chart** - Before/after comparison of key efficiency metrics
8. **Rule of 40 Score Visualization** - Stacked view of growth rate + margin components

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kiara-Dev-Team/belissima.git
   cd belissima
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The dashboard will automatically open at `http://localhost:8080`

### Alternative: Run Without Installation

The B2B SaaS dashboard uses local library files, so you can open `saas-dashboard.html` directly in your browser:

```bash
# Simple Python server
python -m http.server 8080

# Or any static file server
npx http-server -p 8080
```

Then navigate to `http://localhost:8080/saas-dashboard.html`

## 📊 Using Your Own Data

### Quick Start: Update the JavaScript

All data is defined in `saas-dashboard.js`. To customize with your metrics:

1. **Locate the chart you want to update**
   ```javascript
   // Example: ARR Trend data
   const arrTrendCtx = document.getElementById('arrTrendChart').getContext('2d');
   new Chart(arrTrendCtx, {
       type: 'line',
       data: {
           labels: ['Jan', 'Feb', 'Mar', ...],
           datasets: [{
               label: 'ARR ($M)',
               data: [8.2, 8.6, 9.1, ...], // ← Update these values
               ...
           }]
       },
       ...
   });
   ```

2. **Replace sample data with your actual metrics**
3. **Refresh the browser to see your updated dashboard**

### Advanced: Connect to API

For real-time data, fetch from your backend:

```javascript
// Example: Fetch ARR data from API
async function loadARRData() {
    const response = await fetch('/api/metrics/arr');
    const data = await response.json();
    
    // Update chart with real data
    arrChart.data.labels = data.months;
    arrChart.data.datasets[0].data = data.values;
    arrChart.update();
}

loadARRData();
```

### Data Format Examples

**Time Series Metrics** (ARR, Churn, GRR):
```javascript
{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [8.2, 8.6, 9.1, 9.5, 9.9, 10.3]
}
```

**Segmented Data** (LTV by Segment):
```javascript
{
    segments: ['Enterprise', 'Mid-Market', 'SMB'],
    ltv: [5500, 3900, 2800],
    cac: [1200, 900, 780],
    customers: [45, 120, 350]
}
```

## 🎨 Customization

### Color Themes

Update the color palette in `saas-styles.css`:

```css
:root {
    --primary-color: #10b981;    /* Green */
    --secondary-color: #3b82f6;  /* Blue */
    --accent-color: #8b5cf6;     /* Purple */
    --warning-color: #f59e0b;    /* Orange */
    --danger-color: #ef4444;     /* Red */
}
```

### Chart Styling

Modify chart options in `saas-dashboard.js`:

```javascript
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'top',  // Change to 'bottom', 'left', 'right'
            labels: {
                font: {
                    size: 12,  // Adjust font size
                    family: 'Your-Font-Family'
                }
            }
        }
    }
};
```

### Adding New Metrics

1. **Add HTML container** in `saas-dashboard.html`:
   ```html
   <div class="chart-container">
       <h3>New Metric Name</h3>
       <canvas id="newMetricChart"></canvas>
   </div>
   ```

2. **Create chart** in `saas-dashboard.js`:
   ```javascript
   const newMetricCtx = document.getElementById('newMetricChart').getContext('2d');
   new Chart(newMetricCtx, {
       type: 'bar',  // or 'line', 'doughnut', etc.
       data: { ... },
       options: { ... }
   });
   ```

## 🛠️ Technical Stack

### Core Libraries

- **[Chart.js](https://www.chartjs.org/) v4.4.1** - Simple yet flexible JavaScript charting
- **[Plotly.js](https://plotly.com/javascript/) v2.27.0** - Interactive, publication-quality graphs
- **[D3.js](https://d3js.org/) v7** - Data-driven documents for custom visualizations

### Development Tools

- **HTML5** - Semantic markup for accessibility
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript (ES6+)** - No framework dependencies for maximum compatibility
- **http-server** - Simple development server

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The dashboard adapts seamlessly across device sizes:

- **Desktop (1200px+)**: Full grid layout with all visualizations
- **Tablet (768-1200px)**: Adaptive grid, optimized spacing
- **Mobile (<768px)**: Stacked single-column layout
- **Touch-friendly**: All Plotly.js charts support touch interactions

## 🎯 Best Practices for B2B SaaS Metrics

### Metric Targets

- **NRR**: 110%+ (great), 100-110% (good), <100% (needs attention)
- **GRR**: 95%+ (excellent), 90-95% (good), <90% (concerning)
- **LTV:CAC**: 3-5x (healthy), >5x (excellent for growth), <3x (unprofitable)
- **CAC Payback**: <12 months (efficient), 12-18 months (moderate), >18 months (slow)
- **Rule of 40**: >40% (excellent), 30-40% (healthy), <30% (needs improvement)
- **Monthly Churn**: <2% (great), 2-5% (acceptable), >5% (high risk)

### Dashboard Interpretation Tips

1. **ARR Growth**: Look for consistent upward trajectory; sudden changes need investigation
2. **NRR + GRR**: NRR > GRR indicates strong expansion; gap shows upsell success
3. **CAC Trend**: Should decrease over time as marketing/sales efficiency improves
4. **Churn Analysis**: Use waterfall to identify primary churn drivers for targeted retention
5. **Rule of 40**: Balance growth vs profitability based on company stage

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewMetric`)
3. Commit your changes (`git commit -m 'Add new metric visualization'`)
4. Push to the branch (`git push origin feature/NewMetric`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Chart.js](https://www.chartjs.org/)** - For making charting accessible and beautiful
- **[Plotly.js](https://plotly.com/javascript/)** - For powerful interactive visualizations
- **[D3.js](https://d3js.org/)** - For giving us unlimited creative control
- **Open Source Community** - For amazing tools and inspiration

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Kiara-Dev-Team/belissima/issues)
- **Documentation**: This README and inline code comments
- **Examples**: See `saas-dashboard.html` and `saas-dashboard.js` for full implementation

---

**Built with ❤️ for B2B SaaS executives who need data-driven insights**

*Last updated: December 2024*
