# Belissima Finance Dashboard - Setup Guide

## Quick Start

To run the dashboard locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kiara-Dev-Team/belissima.git
   cd belissima
   ```

2. **Start a local server**
   
   Using Python:
   ```bash
   python3 -m http.server 8000
   ```
   
   Using Node.js:
   ```bash
   npx serve
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## Important Notes

### CDN Dependencies

The dashboard uses the following CDN resources:
- **Chart.js v4.4.1**: `https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js`
- **Google Fonts (Inter)**: `https://fonts.googleapis.com/css2?family=Inter`

**Why use CDN?**
- Faster load times (cached across sites)
- Automatic updates and security patches
- Reduced repository size
- Better performance for end users

### Alternative: Offline Installation

If you need to run the dashboard without internet access:

1. Download Chart.js:
   ```bash
   curl -o chart.js https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js
   ```

2. Update `index.html` line 161:
   ```html
   <!-- Change from: -->
   <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js"></script>
   
   <!-- To: -->
   <script src="chart.js"></script>
   ```

3. For fonts, update `index.html` to use system fonts:
   ```html
   <!-- Remove Google Fonts link and update CSS -->
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
   ```

## Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **Interactive Charts** - 5 different visualization types  
✅ **Real-time Updates** - Animated KPI counters  
✅ **Period Selection** - Switch between month/quarter/year views  
✅ **Modern Design** - Beautiful gradients and animations  
✅ **Zero Build Step** - Pure HTML/CSS/JavaScript  

## Browser Requirements

- Modern browsers with JavaScript enabled
- Internet connection for CDN resources (or use offline setup)
- Minimum screen width: 320px (mobile friendly)

## Customization

See the main [README.md](README.md) for detailed customization instructions.
