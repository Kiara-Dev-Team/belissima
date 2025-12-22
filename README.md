# 📊 Belissima - CEO Business Intelligence Dashboard

![Belissima CEO Dashboard](https://github.com/user-attachments/assets/fc44c064-0983-4d09-9508-9c6b157a9222)

Beautiful KPI dashboard built with open-source technologies including Chart.js, Plotly.js, and D3.js for stunning data visualizations.

## ✨ Features

### Original Dashboard
- **Real-time KPI Cards**: Display key metrics like Total Revenue, Net Profit, Active Customers, and Growth Rate
- **Interactive Charts**: 6 different chart types powered by Chart.js v4.4.1
  - Line Charts: Revenue vs Expenses trends, Customer Acquisition
  - Bar Chart: Quarterly Performance comparison
  - Doughnut Chart: Revenue Breakdown by category
  - Pie Chart: Market Share analysis
  - Radar Chart: Key Metrics Overview comparison

### 🎯 B2B SaaS Metrics Dashboard (NEW!)

Comprehensive executive-level visualizations showcasing 10 key SaaS metrics across three powerful charting libraries, each optimized for specific use cases.

#### Chart.js SaaS Metrics
Clean, responsive visualizations for essential B2B SaaS KPIs:
1. **Annual Recurring Revenue (ARR)** - Line chart showing growth trends
2. **Net Revenue Retention (NRR)** - Gauge chart with target comparison (110% benchmark)
3. **Customer Acquisition Cost (CAC)** - Bar chart for monthly cost comparison
4. **CAC Payback Period** - Line chart tracking payback trends
5. **Customer Lifetime Value (LTV)** - Bar chart showing LTV:CAC ratios by segment
6. **Churn Rate** - Line chart for monthly churn analysis
7. **Expansion ARR Contribution** - Stacked bar chart (New vs Expansion ARR)
8. **ARR per Employee (ARR/FTE)** - Line chart showing efficiency improvements
9. **Rule of 40** - Combination chart (Growth Rate + Profit Margin)
10. **Gross Revenue Retention (GRR)** - Line chart with benchmark indicators

#### Plotly.js Advanced Analytics
Interactive visualizations with zoom, pan, and advanced data exploration:
1. **NRR Gauge + Historical Trend** - Combined gauge and line chart with range slider
2. **CAC vs NRR Correlation** - Bar chart with scatter overlay for correlation analysis
3. **LTV 3D Scatter Analysis** - 3D visualization correlating LTV with segments and cohorts
4. **Churn Analysis Combo** - Combined bar and line chart (Churn rate + customer count)
5. **Customer Expansion Flow** - Sankey diagram showing customer journey through expansion stages
6. **GRR with Confidence Intervals** - Line chart with confidence bands and benchmark

#### D3.js Custom Visualizations
Highly customized executive-level visualizations:
1. **ARR Area Chart** - Custom gradient fill emphasizing growth trajectory
2. **NRR Custom Gauge** - Visual thresholds with 110% target line
3. **CAC with Trend Line** - Vertical bars with regression trend line
4. **Churn Waterfall** - Customer loss flow by segment
5. **LTV Bubble Chart** - Bubble size = LTV, color = segment
6. **Expansion Sunburst** - Hierarchical drill-down from total ARR to expansion details
7. **ARR/FTE Slope Chart** - Department efficiency comparison over time
8. **Rule of 40 Score** - Unique circular health score representation

### Design Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Gradient backgrounds, smooth animations, and card-based layout
- **Executive-Level Styling**: Professional color schemes and typography
- **Interactive Elements**: Hover states, tooltips, and data exploration
- **Live Data Indicators**: Visual feedback for data updates

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kiara-Dev-Team/belissima.git
cd belissima
```

2. Install dependencies:
```bash
npm install
```

This will automatically copy the required Plotly.js and D3.js library files to the `lib/` directory.

3. Start the development server:
```bash
npm run dev
```

The dashboard will automatically open in your default browser at `http://localhost:8080`

### Alternative: Manual Build

If you need to manually rebuild the library files:
```bash
npm run build
```

## 📈 Dashboard Components

### KPI Cards
- **Total Revenue**: $2.4M (+12.5%)
- **Net Profit**: $840K (+8.3%)
- **Active Customers**: 12,450 (+15.2%)
- **Growth Rate**: 23.4% (+3.1%)

### Original Charts
1. **Revenue vs Expenses Trend**: 12-month comparison with area fill
2. **Quarterly Performance**: Bar chart showing revenue and profit by quarter
3. **Revenue Breakdown**: Doughnut chart by revenue source
4. **Customer Acquisition**: Line chart showing new customer growth
5. **Market Share**: Pie chart showing competitive positioning
6. **Key Metrics Overview**: Radar chart comparing current vs previous year performance

### SaaS Metrics (30 visualizations total)
- 10 Chart.js metrics with clean, responsive designs
- 6 Plotly.js advanced analytics with interactive features
- 8 D3.js custom executive visualizations with unique styling

## 🛠️ Technologies Used

- **Chart.js 4.4.1**: Primary charting library for clean, responsive charts
- **Plotly.js 2.27.1**: Advanced interactive visualizations with 3D support
- **D3.js 7.8.5**: Custom data-driven visualizations with full control
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: Interactive functionality
- **http-server**: Development server

## 🎨 Customization

### Modify Data
Edit the respective JavaScript files to update chart data:
- `dashboard.js` - Original dashboard data
- `lib/chartjs-saas-metrics.js` - Chart.js SaaS metrics
- `lib/plotly-saas-analytics.js` - Plotly.js analytics
- `lib/d3-saas-visualizations.js` - D3.js custom visualizations

Update the `data` arrays in each chart configuration, modify labels and datasets, and adjust colors in the `backgroundColor` and `borderColor` properties.

### Change Styling
Edit `styles.css` to customize:
- Color schemes and gradients
- Layout and spacing
- Responsive breakpoints
- Animations and transitions
- Library-specific styling (`.library-section`, `.metric-card`, etc.)

### Add New Charts
1. Add a new canvas/div element in `index.html`
2. Create a new Chart/Plotly/D3 instance in the appropriate JavaScript file
3. Configure with library-specific options
4. Call the initialization function on page load

## 📱 Responsive Breakpoints

- Desktop: > 1200px
- Tablet: 768px - 1200px
- Mobile: < 768px
- Small Mobile: < 480px

## 🔧 Build Process

The project uses a custom build script (`scripts/copy-libs.js`) to copy library files from `node_modules` to the `lib/` directory:
- Plotly.js (~10.8MB) from `plotly.js-dist`
- D3.js minified from `d3/dist`

These files are excluded from git via `.gitignore` and regenerated during `npm install`.

## 📊 Dummy Data

All visualizations use realistic B2B SaaS dummy data including:
- 12-24 months of historical trends
- Realistic metric ranges (ARR $100K-$10M, NRR 110-130%, CAC $500-$3000)
- Multiple customer segments (Enterprise, Mid-Market, SMB, Startup)
- Growth rates and benchmarks typical for B2B SaaS companies

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) - Simple yet flexible JavaScript charting library
- [Plotly.js](https://plotly.com/javascript/) - Interactive, publication-quality graphs
- [D3.js](https://d3js.org/) - Data-driven documents for custom visualizations
- Open Source Community - For amazing tools and libraries