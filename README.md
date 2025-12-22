# 📊 Belissima - CEO Business Intelligence Dashboard

![Belissima CEO Dashboard](./image)

Beautiful KPI dashboard built with open-source technologies including Chart.js, Plotly.js, and D3.js for stunning data visualizations.

## ✨ Features

- **Real-time KPI Cards**: Display key metrics like Total Revenue, Net Profit, Active Customers, and Growth Rate
- **Interactive Charts with Chart.js**: 6 different chart types powered by Chart.js v4.4.1
  - Line Charts: Revenue vs Expenses trends, Customer Acquisition
  - Bar Chart: Quarterly Performance comparison
  - Doughnut Chart: Revenue Breakdown by category
  - Pie Chart: Market Share analysis
  - Radar Chart: Key Metrics Overview comparison
- **Plotly.js Interactive Visualizations**: 3 advanced interactive charts
  - Scatter Plot: Product Performance vs Revenue with bubble sizing
  - Sunburst Chart: Hierarchical revenue distribution
  - Box Plot: Sales performance distribution by product
- **D3.js Custom Visualizations**: 3 custom data visualizations
  - Tree Map: Market segment distribution
  - Force-Directed Graph: Interactive organizational network
  - Chord Diagram: Department interaction flows
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Gradient backgrounds, smooth animations, and card-based layout
- **Live Data Indicators**: Visual feedback for data updates
- **Multi-Library Support**: Demonstrates seamless integration of multiple visualization libraries

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

Simply open `index.html` in your web browser. The dashboard uses Chart.js from CDN, so it works without npm installation.

## 📈 Dashboard Components

### KPI Cards
- **Total Revenue**: $2.4M (+12.5%)
- **Net Profit**: $840K (+8.3%)
- **Active Customers**: 12,450 (+15.2%)
- **Growth Rate**: 23.4% (+3.1%)

### Chart.js Visualizations
1. **Revenue vs Expenses Trend**: 12-month comparison with area fill
2. **Quarterly Performance**: Bar chart showing revenue and profit by quarter
3. **Revenue Breakdown**: Doughnut chart by revenue source
4. **Customer Acquisition**: Line chart showing new customer growth
5. **Market Share**: Pie chart showing competitive positioning
6. **Key Metrics Overview**: Radar chart comparing current vs previous year performance

### Plotly.js Interactive Charts
1. **Product Performance Analysis**: Interactive scatter plot with bubble sizes and color gradient showing performance metrics
2. **Revenue Distribution Hierarchy**: Sunburst chart displaying hierarchical breakdown of revenue streams
3. **Sales Performance Distribution**: Box plot showing statistical distribution of sales across products

### D3.js Custom Visualizations
1. **Market Segments**: Tree map visualization of market segment distribution
2. **Organizational Network**: Force-directed graph showing company structure with draggable nodes
3. **Department Interactions**: Chord diagram illustrating cross-department collaboration

## 🛠️ Technologies Used

- **Chart.js 4.4.1**: Traditional charting library for basic visualizations
- **Plotly.js 2.27.1**: Interactive charting library with advanced features
- **D3.js 7.8.5**: Powerful data visualization library for custom charts
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: Interactive functionality
- **http-server**: Development server

## 🎨 Customization

### Modify Data
Edit the respective JavaScript files to update chart data:
- **Chart.js charts**: Edit `dashboard.js`
- **Plotly.js charts**: Edit `lib/plotly-components.js`
- **D3.js charts**: Edit `lib/d3-components.js`

Update the `data` arrays in each chart configuration, modify labels and datasets as needed, and adjust colors in the chart properties.

### Change Styling
Edit `styles.css` to customize:
- Color schemes
- Layout and spacing
- Responsive breakpoints
- Animations and transitions

### Add New Charts
1. Add a new container element in `index.html`
2. Create a new chart instance in the appropriate JavaScript file
3. Configure with the library's options and styling

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
- [Plotly.js](https://plotly.com/javascript/) - Interactive charting library with advanced visualizations
- [D3.js](https://d3js.org/) - Data-Driven Documents for custom visualizations
- Open Source Community - For amazing tools and libraries