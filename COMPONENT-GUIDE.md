# Component Reference Guide - B2B SaaS Dashboard

This document provides detailed information about each visualization component, including best use cases, data formats, and implementation details.

## Chart.js Components (10 Metrics)

### 1. ARR Trend (Line Chart)
**Metric**: Annual Recurring Revenue
**Chart Type**: Line chart with area fill
**Purpose**: Track predictable revenue growth over time

**Best Use Case**: 
- Monthly/quarterly ARR tracking
- Identifying growth trends and seasonality
- Board presentations showing revenue trajectory

**Sample Data Format**:
```javascript
{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [8.2, 8.6, 9.1, 9.5, 9.9, 10.3, 10.8, 11.2, 11.7, 12.0, 12.2, 12.4]
}
```

**Key Insights**: Consistent upward trend indicates healthy growth; look for MoM growth rate consistency

---

### 2. NRR Gauge (Doughnut Gauge)
**Metric**: Net Revenue Retention
**Chart Type**: Doughnut chart configured as gauge
**Purpose**: Show current NRR percentage against target

**Best Use Case**:
- Executive dashboard KPI display
- Quick health check on retention + expansion
- Target tracking (typically 100-130%)

**Target Benchmarks**:
- 110%+: Excellent (strong expansion)
- 100-110%: Good (stable with some expansion)
- <100%: Needs attention (losing revenue)

**Sample Data Format**:
```javascript
{
    value: 115,  // Current NRR percentage
    target: 150  // Maximum on gauge
}
```

---

### 3. CAC by Month (Bar Chart)
**Metric**: Customer Acquisition Cost
**Chart Type**: Vertical bar chart
**Purpose**: Track efficiency of sales and marketing spend

**Best Use Case**:
- Monthly CAC trending
- Identifying seasonal patterns
- Marketing efficiency analysis

**Sample Data Format**:
```javascript
{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [980, 950, 920, 900, 880, 870, 860, 850, 840, 835, 845, 850]
}
```

**Key Insights**: Decreasing CAC over time shows improving efficiency; spikes may indicate campaign tests

---

### 4. CAC Payback Period (Line Chart)
**Metric**: Months to Recover CAC
**Chart Type**: Line chart
**Purpose**: Show how quickly you recover customer acquisition costs

**Best Use Case**:
- Cash flow planning
- Unit economics optimization
- Investor presentations

**Target Benchmarks**:
- <12 months: Efficient, strong cash flow
- 12-18 months: Moderate, acceptable for most SaaS
- >18 months: High, requires strong funding

**Sample Data Format**:
```javascript
{
    labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
    data: [14, 13.5, 12.8, 11.5, 10.2, 9.5]  // months
}
```

---

### 5. LTV:CAC Ratio (Bar Chart)
**Metric**: Lifetime Value to Customer Acquisition Cost Ratio
**Chart Type**: Vertical bar chart
**Purpose**: Show unit economics health and profitability per customer

**Best Use Case**:
- Unit economics analysis
- Growth sustainability check
- Fundraising decks

**Target Benchmarks**:
- 3-5x: Healthy, sustainable growth
- >5x: Excellent, room to invest more in growth
- <3x: Unprofitable unit economics

**Sample Data Format**:
```javascript
{
    labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
    data: [3.2, 3.5, 3.8, 4.0, 4.1, 4.2]
}
```

---

### 6. Churn Rate Trend (Line Chart)
**Metric**: Monthly Customer Churn Rate
**Chart Type**: Line chart with area fill
**Purpose**: Track customer retention health over time

**Best Use Case**:
- Retention program effectiveness
- Product-market fit indicator
- Customer success KPI

**Target Benchmarks**:
- <2%: Excellent retention
- 2-5%: Acceptable for most SaaS
- >5%: High risk, needs immediate attention

**Sample Data Format**:
```javascript
{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [3.5, 3.2, 2.9, 2.8, 2.6, 2.5, 2.4, 2.3, 2.2, 2.1, 2.0, 1.9]  // percentages
}
```

---

### 7. Expansion ARR (Stacked Bar Chart)
**Metric**: ARR Composition (New, Expansion, Churn)
**Chart Type**: Stacked bar chart
**Purpose**: Show sources of ARR growth and contraction

**Best Use Case**:
- Understanding ARR growth drivers
- Balancing new vs expansion strategies
- Visualizing net new ARR

**Sample Data Format**:
```javascript
{
    labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
    newARR: [1.2, 1.4, 1.5, 1.8, 1.9, 2.1],
    expansionARR: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    churnedARR: [-0.3, -0.3, -0.3, -0.2, -0.2, -0.2]
}
```

**Key Insights**: Expansion ARR growth shows successful land-and-expand; decreasing churn is critical

---

### 8. ARR per Employee (Line Chart)
**Metric**: Revenue Efficiency per Team Member
**Chart Type**: Line chart
**Purpose**: Measure operating leverage and scale

**Best Use Case**:
- Efficiency benchmarking
- Hiring/headcount planning
- Operational excellence tracking

**Target Benchmarks**:
- $200K+: Excellent efficiency
- $150-200K: Good for scaling companies
- <$150K: Early stage or needs efficiency improvement

**Sample Data Format**:
```javascript
{
    labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
    data: [195, 205, 218, 225, 235, 248]  // thousands
}
```

---

### 9. Rule of 40 (Combo Chart)
**Metric**: Growth Rate + EBITDA Margin
**Chart Type**: Combination bar and line chart
**Purpose**: Show balance between growth and profitability

**Best Use Case**:
- Board presentations
- Strategic planning
- Investor discussions

**Target**: 40%+ is considered excellent for B2B SaaS

**Sample Data Format**:
```javascript
{
    labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
    growthRate: [28, 30, 32, 35, 38, 40],
    ebitdaMargin: [8, 10, 12, 15, 18, 22],
    ruleOf40Score: [36, 40, 44, 50, 56, 62]  // sum of growth + margin
}
```

---

### 10. GRR Trend (Line Chart)
**Metric**: Gross Revenue Retention
**Chart Type**: Line chart
**Purpose**: Track pure retention without expansion impact

**Best Use Case**:
- Product stickiness measurement
- Customer success effectiveness
- Churn analysis baseline

**Target Benchmarks**:
- 95%+: Excellent, very sticky product
- 90-95%: Good retention
- <90%: Concerning, needs investigation

**Sample Data Format**:
```javascript
{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [94, 94.5, 95, 95.5, 96, 96.2, 96.5, 96.8, 97, 97.2, 97.5, 98]
}
```

---

## Plotly.js Components (6 Metrics)

### 1. NRR with Gauge + Line Combo
**Purpose**: Combined view of current NRR status and trend
**Interactivity**: Hover for detailed values, click to toggle traces

**Best Use Case**: Executive summary showing both snapshot and trend

---

### 2. CAC vs NRR Correlation
**Purpose**: Show relationship between acquisition efficiency and retention
**Interactivity**: Dual y-axes, hover for detailed correlations

**Best Use Case**: Understanding if CAC improvements correlate with better customer quality (higher NRR)

---

### 3. LTV Segment Analysis (3D Scatter)
**Purpose**: Three-dimensional view of customer segments by LTV, CAC, and size
**Interactivity**: Rotate, zoom, pan in 3D space

**Best Use Case**: Segment analysis, identifying high-value/low-cost segments

**Sample Data Format**:
```javascript
{
    segments: ['Enterprise A', 'Enterprise B', 'Mid-Market A', 'Mid-Market B', 'SMB A', 'SMB B'],
    ltv: [5500, 5100, 3900, 3600, 2800, 3200],
    cac: [1200, 1100, 900, 880, 780, 820],
    customers: [45, 38, 120, 95, 350, 280]  // bubble size
}
```

---

### 4. Churn Context with New Customers
**Purpose**: Compare new customer acquisition vs churn rates
**Interactivity**: Hover for detailed values, zoom/pan

**Best Use Case**: Understanding net customer growth dynamics

---

### 5. Expansion Pipeline (Sankey)
**Purpose**: Flow diagram of expansion revenue sources
**Interactivity**: Hover to see flow values, click to highlight paths

**Best Use Case**: Understanding upsell vs cross-sell effectiveness

**Sample Data Format**:
```javascript
{
    nodes: ['Existing Customers', 'Upsell Target', 'Cross-sell Target', 'Renewed', 'Upsold', 'Cross-sold', 'Expansion ARR'],
    links: [
        {source: 0, target: 1, value: 300},
        {source: 0, target: 2, value: 250},
        // ... more flow connections
    ]
}
```

---

### 6. GRR with Confidence Intervals
**Purpose**: Statistical view of retention with uncertainty bands
**Interactivity**: Hover to see confidence levels

**Best Use Case**: Forecasting retention with statistical confidence

---

## D3.js Components (8 Metrics)

### 1. ARR Area Chart with Gradient
**Purpose**: Elegant gradient-filled visualization of ARR growth
**Custom Features**: SVG gradients, smooth curves, interactive points

**Best Use Case**: Executive presentations requiring polished visuals

---

### 2. NRR Custom Gauge with Thresholds
**Purpose**: Color-coded gauge showing performance zones
**Custom Features**: Custom color zones (red <100%, green 100-120%, blue >120%)

**Best Use Case**: At-a-glance health check with visual indicators

---

### 3. CAC Trend with Efficiency Line
**Purpose**: Dual chart showing CAC cost reduction and efficiency gains
**Custom Features**: Dual y-axes, bars + line combo

**Best Use Case**: Demonstrating marketing/sales efficiency improvements

---

### 4. Customer Loss Waterfall
**Purpose**: Breakdown of churn by specific reasons
**Custom Features**: Waterfall connectors, color-coded by reason

**Best Use Case**: Root cause analysis for churn reduction initiatives

**Sample Data Format**:
```javascript
{
    categories: ['Starting Customers', 'Voluntary Churn', 'Payment Failure', 'Competitive Loss', 'Product Fit', 'Ending Customers'],
    values: [1200, -45, -18, -32, -25, 1080]
}
```

---

### 5. LTV Bubble Chart
**Purpose**: Bubble chart with segment sizes and LTV/CAC positioning
**Custom Features**: Bubble sizes represent customer counts

**Best Use Case**: Segment portfolio analysis, identifying growth opportunities

---

### 6. Expansion Sunburst
**Purpose**: Hierarchical breakdown of expansion revenue
**Custom Features**: Interactive drill-down, color-coded segments

**Best Use Case**: Understanding expansion revenue composition

---

### 7. Efficiency Slope Chart
**Purpose**: Before/after comparison of key metrics
**Custom Features**: Slope lines showing improvement, color-coded (green=better)

**Best Use Case**: Quarterly/yearly improvement visualization

---

### 8. Rule of 40 Score Visualization
**Purpose**: Stacked view of growth + margin components
**Custom Features**: Reference line at 40%, color-coded by achievement

**Best Use Case**: Strategic planning sessions, showing path to Rule of 40

---

## Data Refresh Patterns

### Real-time Updates
```javascript
// Example: Update chart data dynamically
function updateARRChart(newData) {
    arrChart.data.labels = newData.labels;
    arrChart.data.datasets[0].data = newData.values;
    arrChart.update('active'); // Smooth animation
}

// Fetch and update every 5 minutes
setInterval(async () => {
    const data = await fetch('/api/metrics/arr').then(r => r.json());
    updateARRChart(data);
}, 300000);
```

### Batch Updates
```javascript
// Update multiple charts at once
async function refreshDashboard() {
    const metrics = await fetch('/api/metrics/all').then(r => r.json());
    
    updateARRChart(metrics.arr);
    updateChurnChart(metrics.churn);
    updateNRRGauge(metrics.nrr);
    // ... update other charts
}
```

## Performance Optimization

### Lazy Loading
Load charts as they come into viewport:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const chartId = entry.target.id;
            initializeChart(chartId);
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('canvas').forEach(canvas => {
    observer.observe(canvas);
});
```

### Data Aggregation
For large datasets, aggregate before visualizing:
```javascript
// Daily data aggregated to monthly
function aggregateToMonthly(dailyData) {
    const monthly = {};
    dailyData.forEach(point => {
        const month = point.date.substring(0, 7); // YYYY-MM
        monthly[month] = (monthly[month] || 0) + point.value;
    });
    return monthly;
}
```

## Accessibility

All components include:
- Keyboard navigation support
- ARIA labels for screen readers
- High contrast colors meeting WCAG AA standards
- Responsive text sizing
- Focus indicators

## Browser Compatibility

Tested and supported on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Need help?** Check the main [README-SAAS.md](./README-SAAS.md) for getting started guide and examples.
