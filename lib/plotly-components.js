// Plotly.js Components for Belissima Dashboard

function initPlotlyCharts() {
    console.log('🎨 Initializing Plotly.js visualizations...');

    // 1. Interactive Scatter Plot - Product Performance
    const scatterData = [{
        x: [12, 18, 25, 30, 35, 42, 48, 55, 62, 68, 75, 82],
        y: [185, 195, 210, 225, 240, 235, 255, 270, 265, 280, 295, 310],
        mode: 'markers',
        marker: {
            size: [20, 25, 30, 35, 40, 38, 42, 45, 43, 46, 48, 50],
            color: [185, 195, 210, 225, 240, 235, 255, 270, 265, 280, 295, 310],
            colorscale: 'Viridis',
            showscale: true,
            colorbar: {
                title: 'Revenue ($K)',
                thickness: 15
            }
        },
        text: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        hovertemplate: '<b>%{text}</b><br>Performance Score: %{x}<br>Revenue: $%{y}K<extra></extra>',
        type: 'scatter',
        name: 'Product Performance'
    }];

    const scatterLayout = {
        title: {
            text: 'Product Performance vs Revenue',
            font: { size: 18, family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto' }
        },
        xaxis: {
            title: 'Performance Score',
            gridcolor: '#e0e0e0'
        },
        yaxis: {
            title: 'Revenue ($K)',
            gridcolor: '#e0e0e0'
        },
        hovermode: 'closest',
        plot_bgcolor: '#fafafa',
        paper_bgcolor: '#ffffff',
        margin: { t: 60, b: 60, l: 60, r: 40 }
    };

    const scatterConfig = { responsive: true, displayModeBar: true, displaylogo: false };
    Plotly.newPlot('plotlyScatter', scatterData, scatterLayout, scatterConfig);

    // 2. Sunburst Chart - Revenue Hierarchy
    const sunburstData = [{
        type: 'sunburst',
        labels: [
            'Total Revenue',
            'Products', 'Services', 'Subscriptions',
            'Hardware', 'Software', 'Consulting', 'Support', 'Monthly', 'Annual'
        ],
        parents: [
            '',
            'Total Revenue', 'Total Revenue', 'Total Revenue',
            'Products', 'Products', 'Services', 'Services', 'Subscriptions', 'Subscriptions'
        ],
        values: [
            100,
            45, 25, 18,
            25, 20, 15, 10, 8, 10
        ],
        branchvalues: 'total',
        marker: {
            colorscale: 'Portland',
            line: { width: 2 }
        },
        hovertemplate: '<b>%{label}</b><br>Value: %{value}%<br>%{percentParent}<extra></extra>'
    }];

    const sunburstLayout = {
        title: {
            text: 'Revenue Distribution Hierarchy',
            font: { size: 18, family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto' }
        },
        margin: { t: 60, b: 10, l: 10, r: 10 },
        paper_bgcolor: '#ffffff',
        height: 450
    };

    const sunburstConfig = { responsive: true, displayModeBar: true, displaylogo: false };
    Plotly.newPlot('plotlySunburst', sunburstData, sunburstLayout, sunburstConfig);

    // 3. Box Plot - Sales Performance Distribution
    const boxData = [
        {
            y: [120, 145, 132, 158, 142, 165, 139, 171, 148, 177, 155, 183],
            name: 'Product A',
            type: 'box',
            marker: { color: '#667eea' },
            boxmean: 'sd'
        },
        {
            y: [98, 112, 105, 125, 118, 135, 122, 142, 128, 148, 138, 155],
            name: 'Product B',
            type: 'box',
            marker: { color: '#764ba2' },
            boxmean: 'sd'
        },
        {
            y: [85, 92, 88, 98, 95, 108, 102, 115, 110, 122, 118, 130],
            name: 'Product C',
            type: 'box',
            marker: { color: '#4CAF50' },
            boxmean: 'sd'
        },
        {
            y: [70, 78, 75, 82, 80, 88, 85, 92, 90, 98, 95, 105],
            name: 'Product D',
            type: 'box',
            marker: { color: '#FF9800' },
            boxmean: 'sd'
        }
    ];

    const boxLayout = {
        title: {
            text: 'Sales Performance Distribution by Product',
            font: { size: 18, family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto' }
        },
        yaxis: {
            title: 'Sales Volume ($K)',
            gridcolor: '#e0e0e0'
        },
        plot_bgcolor: '#fafafa',
        paper_bgcolor: '#ffffff',
        margin: { t: 60, b: 60, l: 60, r: 40 },
        showlegend: false
    };

    const boxConfig = { responsive: true, displayModeBar: true, displaylogo: false };
    Plotly.newPlot('plotlyBox', boxData, boxLayout, boxConfig);

    console.log('✅ Plotly.js charts initialized successfully!');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPlotlyCharts);
} else {
    initPlotlyCharts();
}
