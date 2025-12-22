# 📊 Belissima - B2B SaaS CEO Dashboard

![Belissima CEO Dashboard](./image)

> **Executive-grade business intelligence for data-driven SaaS leaders**

Transform your SaaS metrics into actionable insights with Belissima - a comprehensive CEO dashboard featuring 10 critical SaaS KPIs, powered by Chart.js, Plotly.js, and D3.js visualizations with Wall Street Journal-inspired design principles.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [10 Key SaaS Metrics](#-10-key-saas-metrics)
  - [Growth & Revenue Metrics](#growth--revenue-metrics)
  - [Efficiency & Value Metrics](#efficiency--value-metrics)
  - [Retention & Health Metrics](#retention--health-metrics)
  - [Growth Indicators](#growth-indicators)
- [Visualization Library Comparison](#-visualization-library-comparison)
- [Color System](#-color-system)
- [Component Gallery](#-component-gallery)
- [Quick Start Guide](#-quick-start-guide)
- [Integration Guide](#-integration-guide)
- [Customization](#-customization)
- [Technical Documentation](#-technical-documentation)
- [Best Practices](#-best-practices)
- [FAQ & Troubleshooting](#-faq--troubleshooting)
- [Contributing](#-contributing)
- [License & Credits](#-license--credits)

---

## 🎯 Overview

### What is Belissima?

Belissima is a professional B2B SaaS CEO dashboard that provides comprehensive visualization of the 10 most critical SaaS metrics. Built with modern web technologies and inspired by Wall Street Journal's data visualization principles, it delivers executive-grade insights through multiple visualization libraries.

### Who is it for?

- **B2B SaaS CEOs** - Get a complete view of company health at a glance
- **Finance Teams** - Track ARR, revenue retention, and financial efficiency
- **Executive Leadership** - Monitor growth indicators and make data-driven decisions
- **Board Members** - Review key metrics with professional visualizations

### Key Features

✨ **10 Critical SaaS Metrics** - ARR, NRR, GRR, CAC, LTV, Churn, and more  
📊 **Three Visualization Libraries** - Chart.js (24 charts), Plotly.js (6 interactive), D3.js (8+ custom)  
🎨 **WSJ Color Palettes** - Professional, accessible color systems  
📱 **Responsive Design** - Works on desktop, tablet, and mobile  
⚡ **Real-time Updates** - Live data integration ready  
♿ **Accessible** - WCAG 2.1 AA compliant visualizations

### Technology Stack

- **Chart.js 4.4.1** - Fast, lightweight charting
- **Plotly.js** - Interactive, production-grade visualizations
- **D3.js** - Custom, branded data experiences
- **HTML5/CSS3** - Modern, semantic markup
- **JavaScript ES6+** - Clean, maintainable code

---

## 📈 10 Key SaaS Metrics

### Growth & Revenue Metrics

#### 💰 Annual Recurring Revenue (ARR)

**What it measures:** The total value of recurring revenue normalized to a one-year period. ARR is the north star metric for SaaS businesses.

**Why it matters:** ARR provides a clear picture of business scale and growth trajectory. It's the primary metric investors use to value SaaS companies.

**Target Benchmark:** YoY growth of 100%+ (early stage), 40%+ (growth stage), 20%+ (mature)

**Who cares:** CEO, CFO, Board, Investors

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Line chart with gradient fill | Quick trend visualization, simple implementations | ![Chart.js ARR](./screenshots/arr/chartjs-arr.png) |
| **Plotly.js** | Interactive line with range slider | Deep-dive analysis, time range exploration | ![Plotly ARR](./screenshots/arr/plotly-arr.png) |
| **D3.js** | Custom gradient area chart | Branded presentations, executive reports | ![D3 ARR](./screenshots/arr/d3-arr.png) |

**Color Palette:** Financial Authority (#2C3E50, #3498DB, #1ABC9C)

**Interactions:**
- Hover to see exact ARR values and growth rates
- Zoom into specific time periods
- Compare with previous year trends

**Data Notes:** Sample shows 24-month history with typical SaaS growth patterns (15-25% quarter-over-quarter growth).

---

#### 📊 Gross Revenue Retention (GRR)

**What it measures:** The percentage of revenue retained from existing customers, excluding expansion. GRR shows the stickiness of your product.

**Why it matters:** GRR > 90% indicates strong product-market fit. It isolates the health of your existing customer base from new sales or expansion.

**Target Benchmark:** 90%+ is good, 95%+ is excellent, <85% signals serious churn issues

**Who cares:** CEO, Customer Success, Product

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Line chart with annotations | Tracking retention trends over time | ![Chart.js GRR](./screenshots/grr/chartjs-grr.png) |
| **Plotly.js** | Line with confidence bands | Understanding retention volatility | ![Plotly GRR](./screenshots/grr/plotly-grr.png) |
| **D3.js** | Area chart with reference lines | Executive presentations with benchmarks | ![D3 GRR](./screenshots/grr/d3-grr.png) |

**Color Palette:** Financial Authority (#2C3E50, #27AE60, #E74C3C)

**Interactions:**
- Click data points to see contributing factors
- Toggle monthly vs quarterly view
- Compare against industry benchmarks

**Data Notes:** Shows 24-month rolling GRR with seasonal patterns typical in enterprise SaaS.

---

#### 🚀 Expansion ARR Contribution

**What it measures:** The percentage of total ARR growth coming from existing customers (upsells, cross-sells, price increases).

**Why it matters:** High expansion contribution (>40%) indicates strong land-and-expand strategy and product value realization.

**Target Benchmark:** 30-40% is healthy, 50%+ is excellent, indicates strong expansion motion

**Who cares:** CEO, Sales VP, Customer Success

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Stacked bar chart | Comparing expansion vs new revenue | ![Chart.js Expansion](./screenshots/expansion/chartjs-expansion.png) |
| **Plotly.js** | Sankey diagram | Visualizing revenue flow and expansion paths | ![Plotly Sankey](./screenshots/expansion/plotly-sankey.png) |
| **D3.js** | Sunburst chart | Drill-down into expansion sources | ![D3 Sunburst](./screenshots/expansion/d3-sunburst.png) |

**Color Palette:** Financial Authority (#3498DB, #9B59B6, #1ABC9C)

**Interactions:**
- Hover to see expansion breakdown by type
- Filter by customer segment
- View expansion trends over time

**Data Notes:** Data shows typical B2B SaaS expansion patterns with 35-45% expansion contribution.

---

### Efficiency & Value Metrics

#### 💎 Customer Lifetime Value (LTV)

**What it measures:** The total revenue a customer generates over their entire relationship with your company.

**Why it matters:** LTV helps determine how much you can afford to spend on customer acquisition while remaining profitable.

**Target Benchmark:** LTV should be 3-5x CAC for healthy unit economics

**Who cares:** CEO, CFO, Marketing, Sales

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Bar ratio chart | Comparing LTV across segments | ![Chart.js LTV](./screenshots/ltv/chartjs-ltv-ratio.png) |
| **Plotly.js** | 3D scatter plot | Analyzing LTV by multiple dimensions | ![Plotly LTV 3D](./screenshots/ltv/plotly-ltv-3d.png) |
| **D3.js** | Bubble chart | Visualizing LTV, deal size, and time dimensions | ![D3 Bubble](./screenshots/ltv/d3-bubble.png) |

**Color Palette:** Single-Hue Progression (#E8F5E9, #66BB6A, #2E7D32)

**Interactions:**
- Filter by customer segment or cohort
- Compare LTV across acquisition channels
- View LTV trends by vintage

**Data Notes:** LTV calculated using 5-year customer lifetime assumption with 10% annual churn.

---

#### 💸 Customer Acquisition Cost (CAC)

**What it measures:** The total sales and marketing cost to acquire a new customer, including salaries, campaigns, and tools.

**Why it matters:** CAC directly impacts profitability and determines the scalability of your growth model.

**Target Benchmark:** CAC should be recovered within 12 months, ideally 6-9 months

**Who cares:** CEO, CFO, Marketing, Sales

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Monthly bar chart | Tracking CAC trends month-over-month | ![Chart.js CAC](./screenshots/cac/chartjs-cac.png) |
| **Plotly.js** | Bar + scatter correlation | Analyzing CAC vs conversion rates | ![Plotly Correlation](./screenshots/cac/plotly-correlation.png) |
| **D3.js** | Bar with trend line | Identifying CAC efficiency improvements | ![D3 CAC Trend](./screenshots/cac/d3-cac-trend.png) |

**Color Palette:** Dual-Purpose (#E74C3C, #F39C12, #3498DB)

**Interactions:**
- Segment by acquisition channel
- Compare blended vs paid CAC
- View CAC efficiency score

**Data Notes:** Fully-loaded CAC including all sales & marketing expenses, showing typical $5K-$15K range for mid-market B2B.

---

#### ⏱️ CAC Payback Period

**What it measures:** The number of months it takes to recover the cost of acquiring a customer through their gross margin.

**Why it matters:** Shorter payback periods mean faster cash flow recovery and more efficient growth. Critical for cash management.

**Target Benchmark:** <12 months is good, <6 months is excellent, >18 months raises concerns

**Who cares:** CEO, CFO, Board

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Line chart showing trend | Monitoring payback period changes | ![Chart.js Payback](./screenshots/cac-payback/chartjs-payback.png) |
| **Plotly.js** | Line with confidence intervals | Understanding payback variability | ![Plotly Payback CI](./screenshots/cac-payback/plotly-payback-ci.png) |
| **D3.js** | Stepped line with milestones | Highlighting payback improvements | ![D3 Stepped](./screenshots/cac-payback/d3-stepped.png) |

**Color Palette:** Dual-Purpose (#27AE60, #F39C12, #E74C3C)

**Interactions:**
- View payback by customer segment
- Compare against industry benchmarks
- Forecast future payback periods

**Data Notes:** Calculated using gross margin percentage of 75%, typical for SaaS businesses.

---

#### 📊 LTV:CAC Ratio

**What it measures:** The ratio of customer lifetime value to customer acquisition cost. The ultimate unit economics metric.

**Why it matters:** This ratio determines if your business model is fundamentally profitable and scalable.

**Target Benchmark:** 3:1 is minimum viable, 4:1+ is healthy, >5:1 suggests under-investing in growth

**Who cares:** CEO, CFO, Board, Investors

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Combo chart (bar + line) | Showing ratio trend with components | ![Chart.js LTV:CAC](./screenshots/ltv/chartjs-ltv-ratio.png) |
| **Plotly.js** | 3D scatter by segment | Multi-dimensional ratio analysis | ![Plotly LTV 3D](./screenshots/ltv/plotly-ltv-3d.png) |
| **D3.js** | Custom ratio gauge | Executive dashboard summary view | ![D3 Bubble](./screenshots/ltv/d3-bubble.png) |

**Color Palette:** Single-Hue Progression (#E3F2FD, #42A5F5, #1565C0)

**Interactions:**
- Drill down by customer segment
- View ratio evolution over time
- Compare against target ratios

**Data Notes:** Ratio calculated using 5-year LTV projection against fully-loaded CAC.

---

### Retention & Health Metrics

#### 🔄 Net Revenue Retention (NRR)

**What it measures:** The percentage of revenue retained from existing customers including expansion, upsells, and churn.

**Why it matters:** NRR >100% means you're growing from your existing customer base alone. It's the gold standard for SaaS health.

**Target Benchmark:** 100%+ is good, 110%+ is excellent, 120%+ is best-in-class

**Who cares:** CEO, Board, Investors, Customer Success

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Gauge chart | Quick health check visualization | ![Chart.js Gauge](./screenshots/nrr/chartjs-gauge.png) |
| **Plotly.js** | Gauge + combo trend | Interactive NRR with contributing factors | ![Plotly NRR Combo](./screenshots/nrr/plotly-nrr-combo.png) |
| **D3.js** | Custom branded gauge | Executive presentations and reports | ![D3 Custom Gauge](./screenshots/nrr/d3-custom-gauge.png) |

**Color Palette:** Neutral Professional (#95A5A6, #7F8C8D, #2C3E50)

**Interactions:**
- Break down NRR into components (expansion, churn, contraction)
- View by customer segment or cohort
- Compare against benchmarks

**Data Notes:** NRR calculated monthly with cohort analysis showing 110-120% for healthy SaaS businesses.

---

#### 📉 Churn Rate

**What it measures:** The percentage of customers or revenue lost in a given period. Can be measured as logo churn or revenue churn.

**Why it matters:** Churn directly impacts growth efficiency. High churn means you're filling a leaky bucket.

**Target Benchmark:** <5% annual (logo), <3% monthly (revenue), lower is always better

**Who cares:** CEO, Customer Success, Product

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Line chart trend | Monitoring churn over time | ![Chart.js Churn](./screenshots/churn/chartjs-churn.png) |
| **Plotly.js** | Combo chart with context | Churn with leading indicators | ![Plotly Churn Combo](./screenshots/churn/plotly-churn-combo.png) |
| **D3.js** | Waterfall chart | Visualizing churn flow and impact | ![D3 Waterfall](./screenshots/churn/d3-waterfall.png) |

**Color Palette:** Neutral Professional (#BDC3C7, #E74C3C, #C0392B)

**Interactions:**
- Segment by churn reason
- View cohort-based churn curves
- Identify churn risk factors

**Data Notes:** Shows monthly churn rate with typical 2-4% monthly churn for B2B SaaS, separated by voluntary and involuntary.

---

### Growth Indicators

#### 👥 ARR per Employee (ARR/FTE)

**What it measures:** Annual Recurring Revenue divided by full-time employee count. A measure of operational efficiency.

**Why it matters:** Higher ARR/FTE indicates better resource utilization and operational leverage. Key metric for profitability path.

**Target Benchmark:** $150K+ is good, $200K+ is excellent, $250K+ is best-in-class

**Who cares:** CEO, CFO, Board

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Line chart with trend | Tracking efficiency over time | ![Chart.js FTE](./screenshots/arr-fte/chartjs-fte.png) |
| **Plotly.js** | Scatter with regression | Analyzing ARR/FTE vs company stage | ![Plotly FTE Scatter](./screenshots/arr-fte/plotly-fte-scatter.png) |
| **D3.js** | Slope chart | Showing efficiency improvements | ![D3 Slope](./screenshots/arr-fte/d3-slope.png) |

**Color Palette:** Single-Hue Progression (#F3E5F5, #AB47BC, #6A1B9A)

**Interactions:**
- Compare against peer benchmarks
- View by department (R&D, Sales, G&A)
- Project future ARR/FTE

**Data Notes:** Data normalized to show progression from $100K to $250K ARR/FTE as company scales.

---

#### 🎯 Rule of 40

**What it measures:** Growth rate + profit margin. A composite metric showing balance between growth and profitability.

**Why it matters:** Rule of 40 >40% indicates a healthy, sustainable SaaS business. It's the ultimate "are we doing well?" metric.

**Target Benchmark:** >40% is good, >50% is excellent, <20% signals problems

**Who cares:** CEO, CFO, Board, Investors

**Chart Implementations:**

| Library | Chart Type | Best For | Screenshot |
|---------|-----------|----------|------------|
| **Chart.js** | Combo chart (stacked) | Showing growth + margin components | ![Chart.js Rule of 40](./screenshots/rule-of-40/chartjs-rule-of-40.png) |
| **Plotly.js** | Animated combo chart | Interactive exploration of trade-offs | ![Plotly Rule of 40](./screenshots/rule-of-40/plotly-rule-of-40.png) |
| **D3.js** | Custom score visualization | Executive dashboard centerpiece | ![D3 Score](./screenshots/rule-of-40/d3-score.png) |

**Color Palette:** Single-Hue Progression (#E8F5E9, #66BB6A, #2E7D32)

**Interactions:**
- Toggle between growth and profitability scenarios
- Compare against target rule of 40
- View historical progression

**Data Notes:** Sample shows typical progression from 60% (high growth, low margin) to 45% (balanced growth and profitability).

---

## 📊 Visualization Library Comparison

Choose the right visualization library for your needs:

| Metric | Chart.js | Plotly.js | D3.js | Best Use Case |
|--------|----------|-----------|-------|---------------|
| **ARR** | Simple line (fast load) | Interactive line + slider | Gradient area (custom branded) | Plotly for analysis, D3 for presentations |
| **NRR** | Quick gauge | Gauge + combo trend chart | Custom branded gauge | D3 for executive dashboards |
| **GRR** | Line with markers | Line + confidence intervals | Area with reference lines | Plotly for variance analysis |
| **CAC** | Monthly bar chart | Bar + scatter correlation | Bar + animated trend line | Plotly for multi-dimensional analysis |
| **CAC Payback** | Simple trend line | Line + confidence bands | Stepped line with milestones | D3 for storytelling |
| **LTV** | Bar ratio comparison | 3D scatter by segments | Bubble chart (3+ dimensions) | Plotly for segment analysis |
| **LTV:CAC** | Combo bar + line | 3D scatter plot | Custom ratio gauge | Chart.js for simplicity |
| **Churn** | Line trend | Combo with indicators | Waterfall flow | D3 for impact visualization |
| **Expansion** | Stacked bar | Sankey flow diagram | Sunburst drill-down | Plotly for flow analysis |
| **ARR/FTE** | Line with trend | Scatter + regression | Slope chart | D3 for before/after comparisons |
| **Rule of 40** | Stacked combo | Animated interactive combo | Custom score visualization | D3 for executive summary |

### Library Selection Guide

**Use Chart.js when:**
- You need fast, lightweight visualizations
- Simple chart types suffice
- Mobile performance is critical
- You want minimal dependencies

**Use Plotly.js when:**
- Interactivity is essential
- You need advanced chart types (3D, Sankey)
- Users will explore data deeply
- Scientific/technical accuracy matters

**Use D3.js when:**
- Brand-specific custom designs required
- Complex, novel visualizations needed
- Full control over every visual element
- Creating storytelling experiences

---

## 🎨 Color System

Belissima uses four professional color palettes inspired by Wall Street Journal's data visualization principles.

### Financial Authority Palette

**Primary Use:** Revenue, financial metrics, growth indicators

![Financial Authority](./screenshots/palettes/financial-authority.png)

\`\`\`css
/* Financial Authority Colors */
--primary-dark: #2C3E50;    /* rgb(44, 62, 80) */
--primary-blue: #3498DB;    /* rgb(52, 152, 219) */
--success-green: #1ABC9C;   /* rgb(26, 188, 156) */
--accent-navy: #34495E;     /* rgb(52, 73, 94) */
--highlight-cyan: #16A085;  /* rgb(22, 160, 133) */
\`\`\`

**When to use:** ARR, revenue metrics, expansion, growth trends

**Accessibility:** WCAG 2.1 AA compliant with minimum 4.5:1 contrast ratios

---

### Neutral Professional Palette

**Primary Use:** Retention metrics, churn, neutral comparisons

![Neutral Professional](./screenshots/palettes/neutral-professional.png)

\`\`\`css
/* Neutral Professional Colors */
--gray-dark: #2C3E50;       /* rgb(44, 62, 80) */
--gray-medium: #7F8C8D;     /* rgb(127, 140, 141) */
--gray-light: #95A5A6;      /* rgb(149, 165, 166) */
--gray-lighter: #BDC3C7;    /* rgb(189, 195, 199) */
--alert-red: #E74C3C;       /* rgb(231, 76, 60) */
\`\`\`

**When to use:** NRR, churn rate, neutral comparisons, baseline metrics

**Accessibility:** Designed for clarity with colorblind users in mind

---

### Dual-Purpose Palette

**Primary Use:** Efficiency metrics showing good/bad states

![Dual-Purpose](./screenshots/palettes/dual-purpose.png)

\`\`\`css
/* Dual-Purpose Colors */
--success-green: #27AE60;   /* rgb(39, 174, 96) */
--warning-orange: #F39C12;  /* rgb(243, 156, 18) */
--danger-red: #E74C3C;      /* rgb(231, 76, 60) */
--info-blue: #3498DB;       /* rgb(52, 152, 219) */
--neutral-gray: #95A5A6;    /* rgb(149, 165, 166) */
\`\`\`

**When to use:** CAC, CAC Payback, metrics with target thresholds

**Accessibility:** High contrast between states for immediate recognition

---

### Single-Hue Progression Palette

**Primary Use:** Single metric progressions, heat maps, intensity scales

![Single-Hue Progression](./screenshots/palettes/single-hue-progression.png)

\`\`\`css
/* Single-Hue Progression Colors */
--progression-1: #E3F2FD;   /* rgb(227, 242, 253) - Lightest */
--progression-2: #90CAF9;   /* rgb(144, 202, 249) */
--progression-3: #42A5F5;   /* rgb(66, 165, 245) */
--progression-4: #1E88E5;   /* rgb(30, 136, 229) */
--progression-5: #1565C0;   /* rgb(21, 101, 192) - Darkest */
\`\`\`

**When to use:** LTV, ARR/FTE, Rule of 40, single-metric trends

**Accessibility:** Clear progression with sufficient contrast between levels

---

### Color System Best Practices

✅ **Do:**
- Use color palettes consistently across related metrics
- Maintain sufficient contrast (4.5:1 minimum)
- Test with colorblind simulation tools
- Use color plus additional visual encoding (patterns, labels)

❌ **Don't:**
- Mix more than 2 palettes in a single view
- Use red/green alone for critical distinctions
- Rely solely on color for information
- Use more than 7 colors in a single chart

---

## 🖼️ Component Gallery

### Chart.js Components (24 Charts)

Chart.js powers the fast, responsive base visualizations in Belissima.

**Line Charts (6)**
- ARR trend line with gradient fill
- NRR monthly progression
- GRR with benchmark lines
- CAC trend with moving average
- Churn rate over time
- ARR/FTE efficiency trend

**Bar Charts (6)**
- Quarterly ARR breakdown
- Monthly CAC by channel
- LTV by customer segment
- Expansion revenue composition
- Rule of 40 components
- Revenue retention waterfall

**Combo Charts (4)**
- Revenue vs profit margin
- Growth rate + profitability
- NRR with churn overlay
- LTV:CAC ratio with components

**Specialty Charts (8)**
- NRR gauge meter
- Rule of 40 score gauge
- Revenue breakdown doughnut
- Customer segment pie
- Efficiency metrics radar
- Cohort retention heatmap
- CAC payback timeline
- Expansion funnel

---

### Plotly.js Components (6 Charts)

Plotly.js provides interactive, analytical depth for data exploration.

**Interactive Analyses**
1. **ARR Deep Dive** - Line chart with range slider and zoom controls
2. **3D Segment Analysis** - LTV/CAC/Churn in 3D space by segment
3. **Expansion Sankey** - Revenue flow from new to expansion
4. **Correlation Matrix** - CAC vs conversion vs LTV relationships
5. **NRR Decomposition** - Interactive breakdown of NRR components
6. **Confidence Intervals** - GRR and NRR with statistical bands

**Key Features:**
- Pan, zoom, and explore data interactively
- Download charts as PNG/SVG
- Hover for detailed data points
- Responsive across devices

---

### D3.js Components (8+ Charts)

D3.js delivers custom, branded visualizations for executive presentations.

**Custom Visualizations**
1. **ARR Gradient Flow** - Smooth area chart with custom gradients
2. **Branded NRR Gauge** - Company-branded semicircle gauge
3. **Expansion Sunburst** - Hierarchical drill-down of expansion sources
4. **Churn Waterfall** - Visual story of revenue impact
5. **LTV Bubble Matrix** - Multi-dimensional customer value map
6. **CAC Trend Story** - Annotated timeline with milestones
7. **ARR/FTE Slope** - Before/after efficiency comparison
8. **Rule of 40 Score** - Custom circular progress indicator

**Key Features:**
- Fully customizable branding
- Animation and transitions
- Interactive tooltips
- Export-ready for presentations

---

## 🚀 Quick Start Guide

Get Belissima running locally in 3 minutes.

### Prerequisites

- **Node.js** v14+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic familiarity with command line

### Installation

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/Kiara-Dev-Team/belissima.git
cd belissima
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Start the development server**
\`\`\`bash
npm run dev
\`\`\`

The dashboard will automatically open in your browser at \`http://localhost:8080\`

### Alternative: No-Install Option

Simply open \`index.html\` in your browser. All libraries are loaded from CDN.

### First Dashboard View

On first load, you'll see:
- ✅ 4 KPI cards with sample SaaS metrics
- ✅ 10 metric visualizations across 3 libraries
- ✅ Interactive charts ready for exploration
- ✅ Responsive layout adapting to your screen

### Customizing with Your Data

1. Open \`dashboard.js\`
2. Find the metric you want to update (e.g., ARR)
3. Replace the \`data\` array with your values
4. Refresh browser to see changes

Example:
\`\`\`javascript
// Replace this sample data
data: [1000000, 1150000, 1320000, ...]

// With your actual ARR data
data: [2400000, 2650000, 2890000, ...]
\`\`\`

---

## 🔗 Integration Guide

Connect Belissima to your real data sources.

### Supported Data Sources

- **Direct API Integration** - REST APIs, GraphQL
- **Data Warehouses** - Snowflake, BigQuery, Redshift
- **Analytics Platforms** - Segment, Mixpanel, Amplitude
- **CRMs** - Salesforce, HubSpot
- **Billing Systems** - Stripe, Chargebee, Recurly
- **Custom Databases** - PostgreSQL, MySQL, MongoDB

### API Integration Example

\`\`\`javascript
// Fetch ARR data from your API
async function loadARRData() {
  const response = await fetch('https://api.yourcompany.com/metrics/arr');
  const data = await response.json();
  
  // Update Chart.js visualization
  arrChart.data.datasets[0].data = data.monthlyARR;
  arrChart.update();
}

// Call on page load and set up refresh
loadARRData();
setInterval(loadARRData, 300000); // Refresh every 5 minutes
\`\`\`

### Data Format Requirements

Each metric expects data in a specific format:

**ARR (Time Series)**
\`\`\`json
{
  "labels": ["Jan", "Feb", "Mar", ...],
  "values": [1000000, 1150000, 1320000, ...],
  "growthRates": [0, 15.0, 14.8, ...]
}
\`\`\`

**NRR (Percentage)**
\`\`\`json
{
  "nrr": 115.5,
  "expansion": 25.0,
  "churn": -9.5
}
\`\`\`

**CAC (Dollar Amount)**
\`\`\`json
{
  "monthly": [5200, 5800, 6100, ...],
  "channels": {
    "paid": 7800,
    "organic": 2100,
    "referral": 1500
  }
}
\`\`\`

### Real-time Data Updates

Enable live data updates with WebSocket connection:

\`\`\`javascript
const ws = new WebSocket('wss://api.yourcompany.com/metrics');

ws.onmessage = (event) => {
  const metric = JSON.parse(event.data);
  updateDashboard(metric.name, metric.value);
};
\`\`\`

### Security Considerations

- ✅ Use environment variables for API keys
- ✅ Implement rate limiting
- ✅ Enable CORS only for trusted domains
- ✅ Use HTTPS for all connections
- ✅ Implement authentication/authorization

---

## 🎨 Customization

Make Belissima your own.

### Theme Customization

Edit \`styles.css\` to match your brand:

\`\`\`css
:root {
  --primary-color: #your-brand-color;
  --secondary-color: #your-accent-color;
  --background: #your-background;
  --text-color: #your-text-color;
}
\`\`\`

### Adding New Metrics

1. **Add canvas element** in \`index.html\`:
\`\`\`html
<div class="chart-container">
  <h2>Your New Metric</h2>
  <canvas id="yourMetricChart"></canvas>
</div>
\`\`\`

2. **Create chart** in \`dashboard.js\`:
\`\`\`javascript
const ctx = document.getElementById('yourMetricChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: { /* your data */ },
  options: { /* your options */ }
});
\`\`\`

3. **Update README** with metric documentation

### Custom Color Schemes

Create your own palette:

\`\`\`css
/* Your Custom Palette */
.custom-palette {
  --color-1: #FF6B6B;
  --color-2: #4ECDC4;
  --color-3: #45B7D1;
  --color-4: #96CEB4;
  --color-5: #FFEAA7;
}
\`\`\`

Apply to charts:

\`\`\`javascript
backgroundColor: [
  'var(--color-1)',
  'var(--color-2)',
  'var(--color-3)'
]
\`\`\`

### Creating New Visualizations

Use our template for consistency:

\`\`\`javascript
// Template for new Chart.js visualization
function createCustomChart(canvasId, data, options) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  return new Chart(ctx, {
    type: options.type || 'line',
    data: formatData(data),
    options: {
      ...commonOptions,
      ...options
    }
  });
}
\`\`\`

---

## 📚 Technical Documentation

### Architecture Overview

\`\`\`
belissima/
├── index.html          # Main dashboard HTML
├── dashboard.js        # Chart configurations
├── styles.css          # Styling and themes
├── lib/                # Vendor libraries
│   └── chart.umd.js    # Chart.js library
├── screenshots/        # Metric screenshots
│   ├── arr/
│   ├── nrr/
│   └── ...
├── package.json        # Dependencies
└── README.md          # This file
\`\`\`

### File Structure

**index.html**
- Semantic HTML5 structure
- Responsive meta tags
- Canvas elements for each chart
- Script loading order

**dashboard.js**
- Chart.js configurations
- Data definitions
- Common options
- Event handlers

**styles.css**
- CSS Grid for layout
- Flexbox for components
- Responsive breakpoints
- CSS custom properties for theming

### Dependencies

\`\`\`json
{
  "chart.js": "^4.4.1",     // Lightweight charting
  "http-server": "^14.1.1"  // Development server
}
\`\`\`

Optional for full implementation:
- Plotly.js 2.x - Interactive visualizations
- D3.js 7.x - Custom graphics

### Browser Compatibility

✅ **Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Partial Support:**
- IE 11 (requires polyfills)

### Performance Considerations

**Optimization Techniques:**
- Lazy load charts below the fold
- Debounce resize events
- Use \`requestAnimationFrame\` for animations
- Cache API responses
- Implement virtual scrolling for large datasets

**Performance Targets:**
- First Contentful Paint: <1.5s
- Time to Interactive: <3.0s
- Smooth 60fps animations
- <50MB total page weight

---

## 💡 Best Practices

### When to Use Each Chart Type

**Line Charts** - Trends over time
- ✅ ARR, NRR, GRR progression
- ✅ Churn rate trends
- ✅ CAC evolution

**Bar Charts** - Comparisons and categories
- ✅ Quarterly performance
- ✅ CAC by channel
- ✅ LTV by segment

**Gauge Charts** - Single current value vs target
- ✅ NRR current state
- ✅ Rule of 40 score
- ✅ Current vs target metrics

**Combo Charts** - Multiple related metrics
- ✅ LTV:CAC ratio
- ✅ Rule of 40 components
- ✅ Revenue vs margin

**Flow Charts (Sankey/Sunburst)** - Hierarchical relationships
- ✅ Expansion revenue sources
- ✅ Customer journey
- ✅ Churn breakdown

### Color Usage Guidelines

1. **Be Consistent** - Same metric = same color across dashboard
2. **Limit Palette** - Maximum 5 colors per chart
3. **Consider Context** - Green for good, red for concerning
4. **Test Accessibility** - Use colorblind-safe palettes
5. **Add Patterns** - Don't rely on color alone

### Accessibility Checklist

- ✅ Minimum 4.5:1 contrast ratio for text
- ✅ Keyboard navigation support
- ✅ Screen reader compatible labels
- ✅ Alt text for all images
- ✅ Focus indicators visible
- ✅ No information by color alone
- ✅ Sufficient target sizes (44x44px minimum)

### Data Refresh Frequencies

**Real-time (every 30 seconds):**
- Rule of 40 score
- Current month metrics

**Hourly:**
- Daily active metrics
- Current period projections

**Daily:**
- Historical trends
- Month-to-date aggregates

**Weekly:**
- Cohort analyses
- Quarter-to-date summaries

**Monthly:**
- Full metric recalculations
- Historical comparisons

### CEO Dashboard Best Practices

1. **Start with Key Metrics** - ARR, NRR, Rule of 40 above the fold
2. **Show Trends** - Current value + direction + rate of change
3. **Add Context** - Benchmarks, targets, previous period
4. **Enable Drill-down** - Click for detailed views
5. **Keep It Simple** - Clarity over complexity
6. **Update Regularly** - Stale data loses trust
7. **Tell a Story** - Metrics should connect logically

---

## ❓ FAQ & Troubleshooting

### Common Questions

**Q: Can I use Belissima with my existing data warehouse?**  
A: Yes! Belissima works with any data source via API integration. See the [Integration Guide](#-integration-guide).

**Q: Do I need all three visualization libraries?**  
A: No. Start with Chart.js (included). Add Plotly/D3 only if you need their specific features.

**Q: How do I calculate NRR?**  
A: NRR = (Starting ARR + Expansion - Churn - Contraction) / Starting ARR × 100

**Q: What's the difference between GRR and NRR?**  
A: GRR excludes expansion (max 100%), NRR includes it (can exceed 100%).

**Q: How often should I update the dashboard?**  
A: Daily for current metrics, monthly for historical trends. See [Data Refresh Frequencies](#data-refresh-frequencies).

**Q: Can I export charts for presentations?**  
A: Yes! Right-click any chart and select "Save image as..." or use Plotly's built-in export.

**Q: Is Belissima production-ready?**  
A: Yes for visualization. For production deployment, add authentication, API security, and monitoring.

### Known Issues

**Issue:** Charts don't render on mobile Safari  
**Solution:** Update to Safari 14+ or add Chart.js polyfill

**Issue:** Slow performance with large datasets (>10K points)  
**Solution:** Implement data sampling or use Plotly's WebGL renderer

**Issue:** Colors look different on different monitors  
**Solution:** Use calibrated monitors or test on target display

### Browser Compatibility

If charts don't display:
1. Clear browser cache
2. Check browser console for errors
3. Verify JavaScript is enabled
4. Update to latest browser version
5. Try different browser

### Performance Optimization

If dashboard is slow:
1. Reduce data points (aggregate monthly instead of daily)
2. Lazy load charts below fold
3. Disable animations on low-end devices
4. Cache API responses
5. Use Chart.js decimation plugin

---

## 🤝 Contributing

We welcome contributions! Here's how to help improve Belissima.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch** (\`git checkout -b feature/amazing-metric\`)
3. **Make your changes**
4. **Add tests** (if applicable)
5. **Commit your changes** (\`git commit -m 'Add amazing metric'\`)
6. **Push to the branch** (\`git push origin feature/amazing-metric\`)
7. **Open a Pull Request**

### Development Setup

\`\`\`bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/belissima.git
cd belissima

# Install dependencies
npm install

# Start dev server
npm run dev

# Make changes and test locally
\`\`\`

### Pull Request Process

1. Update README.md with details of changes
2. Update version numbers following [SemVer](https://semver.org/)
3. Ensure all checks pass
4. Request review from maintainers
5. Merge after approval

### Code Standards

- Use ES6+ JavaScript syntax
- Follow existing code style
- Comment complex logic
- Keep functions small and focused
- Write semantic HTML
- Use CSS custom properties for theming

### Adding New Metrics

When contributing a new metric:
1. Add business context documentation
2. Include all three library implementations
3. Provide sample data
4. Add screenshots to appropriate directory
5. Update README metric section
6. Include benchmark targets

### Reporting Bugs

Open an issue with:
- Clear bug description
- Steps to reproduce
- Expected vs actual behavior
- Browser and version
- Screenshots if applicable

---

## 📄 License & Credits

### License

This project is licensed under the **MIT License**.

\`\`\`
Copyright (c) 2024 Kiara Dev Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
\`\`\`

See [LICENSE](./LICENSE) file for full details.

### Credits & Acknowledgments

**Visualization Libraries:**
- [Chart.js](https://www.chartjs.org/) - Simple yet flexible JavaScript charting library (MIT License)
- [Plotly.js](https://plotly.com/javascript/) - Open-source graphing library (MIT License)
- [D3.js](https://d3js.org/) - Data-Driven Documents (BSD 3-Clause License)

**Design Principles:**
- Wall Street Journal graphics team - Visual design inspiration
- [Edward Tufte](https://www.edwardtufte.com/) - Data visualization principles
- [SaaS Metrics 2.0](https://www.forentrepreneurs.com/saas-metrics-2/) by David Skok

**SaaS Metrics Definitions:**
- [Bessemer Cloud Index](https://www.bvp.com/atlas/bessemer-cloud-index)
- [Redpoint Free Tier](https://www.redpoint.com/the-anatomy-of-saas-pricing-strategy/)
- [Stripe Atlas](https://stripe.com/atlas/guides/business-of-saas)
- [ChartMogul SaaS Metrics](https://chartmogul.com/saas-metrics/)

**Community:**
- Open Source Community - For amazing tools and inspiration
- Contributors - Thank you for making Belissima better

### Contact & Support

- **Issues**: [GitHub Issues](https://github.com/Kiara-Dev-Team/belissima/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Kiara-Dev-Team/belissima/discussions)
- **Email**: support@belissima.io

### Roadmap

**Coming Soon:**
- 🔄 Real-time WebSocket data streaming
- 📊 Additional metrics (Magic Number, Burn Multiple, etc.)
- 🎨 Theme builder UI
- 📱 Mobile-native app
- 🔐 Enterprise authentication
- 📈 Automated insights & alerts
- 🌐 Multi-language support

---

<div align="center">

**Built with ❤️ by the Kiara Dev Team**

[⭐ Star on GitHub](https://github.com/Kiara-Dev-Team/belissima) • [🐛 Report Bug](https://github.com/Kiara-Dev-Team/belissima/issues) • [💡 Request Feature](https://github.com/Kiara-Dev-Team/belissima/issues)

</div>
