# 📊 Belissima - CEO Business Intelligence Dashboard

![Belissima CEO Dashboard](./image)

Beautiful KPI dashboard built with open-source technologies like Chart.js, Plotly.js, and D3.js for stunning data visualizations.

## ✨ Features

### Classic Dashboard (index.html)
- **Real-time KPI Cards**: Display key metrics like Total Revenue, Net Profit, Active Customers, and Growth Rate
- **Interactive Charts**: 6 different chart types powered by Chart.js v4.4.1
  - Line Charts: Revenue vs Expenses trends, Customer Acquisition
  - Bar Chart: Quarterly Performance comparison
  - Doughnut Chart: Revenue Breakdown by category
  - Pie Chart: Market Share analysis
  - Radar Chart: Key Metrics Overview comparison
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Gradient backgrounds, smooth animations, and card-based layout
- **Live Data Indicators**: Visual feedback for data updates

### 🆕 SaaS Metrics Dashboard (saas-dashboard.html)
Professional B2B SaaS CEO Dashboard with **WSJ Color Palettes** featuring:

#### **24 Professional Visualizations**
- **10 Chart.js SaaS Metrics**: ARR, NRR, CAC, LTV:CAC, Churn, GRR, and more
- **6 Plotly.js Interactive Analytics**: 3D segments, correlation analysis, Sankey flows
- **8 D3.js Custom Visualizations**: Gradient areas, waterfalls, bubbles, sunbursts

#### **4 WSJ Professional Color Palettes**
1. **Financial Authority** (#1B2D4D, #4A5568, #2D7B8C, #8B3A3A, #F5F4F0)
   - Best for: ARR, GRR, Expansion metrics
2. **Neutral Professional** (#2C2C2C, #6B7280, #D1D5DB, #1F5233, #F9F7F4)
   - Best for: Churn, NRR, Retention analysis
3. **Dual-Purpose** (#0D5C63, #6A3E37, #E8F1F0, #F4EBE8, #FFFFFF)
   - Best for: CAC, Payback Period, Comparisons
4. **Single-Hue Progression** (#003A66, #1A5C8C, #4A7CB4, #8AA8D1, #D4E1F0)
   - Best for: LTV, Rule of 40, Efficiency metrics

#### **Key SaaS Metrics Covered**
- Annual Recurring Revenue (ARR) with trend analysis
- Net Revenue Retention (NRR) gauges and confidence intervals
- Customer Acquisition Cost (CAC) with payback periods
- Customer Lifetime Value (LTV) with segment analysis
- LTV:CAC ratio tracking
- Churn rate trends and context
- Gross Revenue Retention (GRR)
- Expansion ARR contribution
- ARR per Employee efficiency
- Rule of 40 score (Growth + Margin)

#### **Accessibility & Quality**
- WCAG AA compliant color contrast ratios (minimum 4.5:1)
- Professional grid lines and backgrounds
- Consistent legend positioning
- Interactive tooltips with contextual data
- Responsive across all device sizes

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

3. Start the development server:
```bash
npm run dev
```

The dashboard will automatically open in your default browser at `http://localhost:8080`

### Alternative: Run without installing dependencies

Simply open `index.html` or `saas-dashboard.html` in your web browser. The dashboards use Chart.js from a local file and Plotly.js/D3.js from CDN, so they work without npm installation.

**Note**: For the SaaS Dashboard, an internet connection is required to load Plotly.js and D3.js from CDN.

## 📈 Dashboard Components

### Classic Dashboard (index.html)

### KPI Cards
- **Total Revenue**: $2.4M (+12.5%)
- **Net Profit**: $840K (+8.3%)
- **Active Customers**: 12,450 (+15.2%)
- **Growth Rate**: 23.4% (+3.1%)

### Charts
1. **Revenue vs Expenses Trend**: 12-month comparison with area fill
2. **Quarterly Performance**: Bar chart showing revenue and profit by quarter
3. **Revenue Breakdown**: Doughnut chart by revenue source
4. **Customer Acquisition**: Line chart showing new customer growth
5. **Market Share**: Pie chart showing competitive positioning
6. **Key Metrics Overview**: Radar chart comparing current vs previous year performance

### SaaS Metrics Dashboard (saas-dashboard.html)

#### Chart.js Metrics (10 charts)
1. **ARR Trend**: Line chart with target overlay
2. **NRR Gauge**: Semi-circular gauge showing retention
3. **CAC Monthly**: Bar chart split by Sales/Marketing
4. **CAC Payback Period**: Line with confidence bands
5. **LTV:CAC Ratio**: Bar chart with progression colors
6. **Churn Rate Trend**: Line chart with filled area
7. **Expansion ARR**: Stacked bar showing new vs expansion
8. **ARR per Employee**: Efficiency trend line
9. **Rule of 40**: Combo chart with growth + margin
10. **GRR Trend**: Line with target reference band

#### Plotly.js Analytics (6 interactive charts)
1. **NRR Gauge + Line**: Combined gauge and trend visualization
2. **CAC vs NRR Correlation**: Scatter plot with color gradient
3. **LTV Segment Analysis**: 3D surface plot by customer segment
4. **Churn Context**: Multi-axis combo chart with bars and lines
5. **Expansion Sankey**: Flow diagram showing ARR composition
6. **GRR Confidence Intervals**: Statistical bands with trend

#### D3.js Visualizations (8 custom charts)
1. **ARR Gradient Area**: Custom gradient from navy to teal
2. **NRR Custom Gauge**: Arc-based gauge with target marker
3. **CAC Trend Line**: Smooth curve with data points
4. **Customer Waterfall**: Showing additions, expansions, and churn
5. **LTV Bubble Chart**: Size-encoded customer segments
6. **Expansion Sunburst**: Hierarchical ARR breakdown
7. **Efficiency Slope**: Before/after metric comparison
8. **Rule of 40 Score**: Composite bar chart with target zone

## 🛠️ Technologies Used

- **Chart.js 4.4.1**: Primary charting library for standard charts
- **Plotly.js 2.27.0**: Interactive and 3D visualizations
- **D3.js v7**: Custom data-driven visualizations
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox, grid, and CSS variables
- **JavaScript (ES6+)**: Interactive functionality
- **http-server**: Development server

## 🎨 Color Palettes

The SaaS Dashboard uses professional Wall Street Journal (WSJ) inspired color palettes:

### CSS Variables
All color palettes are defined as CSS custom properties in `styles.css`:

```css
/* Financial Authority Palette */
--color-navy-dark: #1B2D4D;
--color-slate-gray: #4A5568;
--color-teal-accent: #2D7B8C;
--color-burgundy-warning: #8B3A3A;
--color-cream-bg: #F5F4F0;

/* Neutral Professional Palette */
--color-charcoal: #2C2C2C;
--color-medium-gray: #6B7280;
--color-light-gray: #D1D5DB;
--color-forest-accent: #1F5233;
--color-off-white: #F9F7F4;

/* Dual-Purpose Palette */
--color-deep-teal: #0D5C63;
--color-deep-plum: #6A3E37;
--color-light-sage: #E8F1F0;
--color-light-mauve: #F4EBE8;

/* Single-Hue Progression Palette */
--color-blue-100: #003A66;
--color-blue-80: #1A5C8C;
--color-blue-60: #4A7CB4;
--color-blue-40: #8AA8D1;
--color-blue-20: #D4E1F0;
```

### Usage Guidelines
- **Text Contrast**: Minimum 4.5:1 ratio for WCAG AA compliance
- **Chart Backgrounds**: Use light palette colors (Cream, Off-White, Light Sage/Mauve)
- **Accent Colors**: Navy Dark, Teal, Forest Green for call-outs
- **Warnings/Alerts**: Burgundy (#8B3A3A) for threshold breaches
- **Gradients**: Use single-hue progression for smooth transitions
- **Grid Lines**: Use light grays at 50% opacity

## 🎯 Customization

### Modify Data in Classic Dashboard
Edit `dashboard.js` to update chart data:
- Update the `data` arrays in each chart configuration
- Modify labels and datasets as needed
- Adjust colors in the `backgroundColor` and `borderColor` properties

### Modify SaaS Metrics
Edit the respective library files:
- **Chart.js metrics**: `lib/chartjs-saas-metrics.js`
- **Plotly analytics**: `lib/plotly-saas-analytics.js`
- **D3 visualizations**: `lib/d3-saas-visualizations.js`

Each function accepts a canvas/div ID and contains inline data that can be modified.

**Note on Colors**: The color values are intentionally hardcoded in the JavaScript files rather than using CSS variables because Chart.js, Plotly.js, and D3.js require JavaScript color strings in their data configurations. All color values are documented in `WSJ-COLOR-PALETTES.md` for easy reference and consistency.

### Change Styling
Edit `styles.css` to customize:
- Color schemes
- Layout and spacing
- Responsive breakpoints
- Animations and transitions

### Add New Charts
1. Add a new canvas element in `index.html`
2. Create a new Chart instance in `dashboard.js`
3. Configure with Chart.js options

## 📱 Responsive Breakpoints

- Desktop: > 1200px
- Tablet: 768px - 1200px
- Mobile: < 768px
- Small Mobile: < 480px

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) - Simple yet flexible JavaScript charting library
- Open Source Community - For amazing tools and libraries