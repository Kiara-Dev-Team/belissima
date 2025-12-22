# 📊 Belissima - CEO Business Intelligence Dashboard

![Belissima CEO Dashboard](./image)

Beautiful KPI dashboard built with open-source technologies like Chart.js for stunning data visualizations.

## ✨ Features

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

### Charts
1. **Revenue vs Expenses Trend**: 12-month comparison with area fill
2. **Quarterly Performance**: Bar chart showing revenue and profit by quarter
3. **Revenue Breakdown**: Doughnut chart by revenue source
4. **Customer Acquisition**: Line chart showing new customer growth
5. **Market Share**: Pie chart showing competitive positioning
6. **Key Metrics Overview**: Radar chart comparing current vs previous year performance

## 🛠️ Technologies Used

- **Chart.js 4.4.1**: Primary charting library
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: Interactive functionality
- **http-server**: Development server

## 🎨 Customization

### WSJ Color System
Belissima now includes a professional **WSJ Color Palette System** designed specifically for SaaS metrics visualization. The system includes 4 carefully crafted color palettes:

1. **Financial Authority**: Conservative, institutional tone for ARR and growth metrics
2. **Neutral Professional**: Grayscale-first approach for retention and churn analysis
3. **Dual-Purpose**: Paired opposing colors for comparison visualizations
4. **Single-Hue Progression**: Clean, minimal color family for sequential data

**Access the Color System:**
- Click "🎨 Color System" in the dashboard header
- Or navigate to `color-system.html`
- Features include:
  - Interactive color swatches with click-to-copy
  - HEX and RGB color values
  - Implementation guidelines
  - Accessibility best practices (WCAG 2.1 AA compliant)

**Using WSJ Colors in Your Code:**
```javascript
// Colors are available via WSJColors object
const financialColors = WSJColors.financialAuthority;
const singleHueColors = WSJColors.singleHueProgression;

// Or use CSS variables
var(--wsj-fa-navy-dark)
var(--wsj-sh-blue-60)
```

### Modify Data
Edit `dashboard.js` to update chart data:
- Update the `data` arrays in each chart configuration
- Modify labels and datasets as needed
- Adjust colors in the `backgroundColor` and `borderColor` properties

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