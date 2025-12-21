# Belissima - Finance KPI Dashboard 📊

A beautiful, modern finance KPI dashboard built with Chart.js and other open-source tools.

![Dashboard Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **📈 Interactive Charts**: Multiple chart types including line, bar, doughnut, and polar area charts
- **💰 Financial KPIs**: Track revenue, expenses, profit, and growth rate
- **📊 Multiple Visualizations**: 
  - Revenue vs Expenses trend line chart
  - Monthly profit bar chart
  - Expense breakdown doughnut chart
  - Revenue by category polar area chart
  - Cumulative cash flow analysis
- **🎯 Period Selection**: Toggle between monthly, quarterly, and yearly views
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Beautiful UI**: Modern gradient design with smooth animations
- **⚡ Real-time Updates**: Dynamic KPI cards with animated counters
- **🎭 Professional Styling**: Clean, corporate-friendly design with Inter font

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/Kiara-Dev-Team/belissima.git
cd belissima
```

2. Open the dashboard:
```bash
# Simply open index.html in your browser
# Or use a local server (recommended):
python3 -m http.server 8000
# or
npx serve
```

3. Access the dashboard:
```
http://localhost:8000
```

## 🛠️ Technologies Used

- **Chart.js v4.4.1**: Beautiful, responsive charts
- **Vanilla JavaScript**: No framework dependencies for maximum performance
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **Google Fonts (Inter)**: Professional typography
- **HTML5**: Semantic markup

## 📁 Project Structure

```
belissima/
├── index.html      # Main dashboard HTML
├── styles.css      # All styling and animations
├── app.js          # Dashboard logic and Chart.js configurations
├── README.md       # Documentation
└── LICENSE         # MIT License
```

## 🎨 Customization

### Modifying Data

Edit the `financialData` object in `app.js` to use your own data:

```javascript
const financialData = {
    year: {
        months: ['Jan', 'Feb', 'Mar', ...],
        revenue: [125000, 142000, 158000, ...],
        expenses: [85000, 92000, 98000, ...],
        // ... more data
    }
};
```

### Changing Colors

Update color variables in `styles.css`:

```css
:root {
    --revenue-color: #667eea;
    --expenses-color: #f5576c;
    --profit-color: #00f2fe;
    --growth-color: #fee140;
}
```

### Adding New Charts

1. Add a canvas element in `index.html`
2. Create a chart function in `app.js` following the existing pattern
3. Call it from `createCharts()` and `updateCharts()`

## 📊 Dashboard Components

### KPI Cards
- Total Revenue with percentage change
- Total Expenses with trend indicator
- Net Profit calculation
- Growth Rate metric

### Charts
- **Revenue vs Expenses Trend**: Line chart showing monthly comparison
- **Monthly Profit**: Bar chart displaying profit margins
- **Expense Breakdown**: Doughnut chart categorizing expenses
- **Revenue by Category**: Polar area chart showing revenue sources
- **Cash Flow Analysis**: Line chart tracking cumulative cash flow

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) - Beautiful JavaScript charts
- [Google Fonts](https://fonts.google.com/) - Inter font family
- Design inspiration from modern SaaS dashboards

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using beautiful open-source tools
