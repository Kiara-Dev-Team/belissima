// Plotly.js SaaS Analytics with WSJ Color Palettes
// Financial Authority: Navy Dark (#1B2D4D), Slate Gray (#4A5568), Teal Accent (#2D7B8C), Burgundy Warning (#8B3A3A), Cream BG (#F5F4F0)
// Neutral Professional: Charcoal (#2C2C2C), Medium Gray (#6B7280), Light Gray (#D1D5DB), Forest Accent (#1F5233), Off-White (#F9F7F4)
// Dual-Purpose: Deep Teal (#0D5C63), Deep Plum (#6A3E37), Light Sage (#E8F1F0), Light Mauve (#F4EBE8), White (#FFFFFF)
// Single-Hue Progression: Blue 100 (#003A66), Blue 80 (#1A5C8C), Blue 60 (#4A7CB4), Blue 40 (#8AA8D1), Blue 20 (#D4E1F0)

// Common layout configuration
const plotlyCommonLayout = {
    font: {
        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
        size: 12
    },
    paper_bgcolor: '#ffffff',
    plot_bgcolor: 'rgba(249, 247, 244, 0.3)',
    margin: { t: 50, r: 50, b: 50, l: 50 }
};

// 1. NRR Gauge + Line - Neutral Professional Palette
function createNRRGaugeLineChart(divId) {
    const gaugeData = [{
        type: 'indicator',
        mode: 'gauge+number+delta',
        value: 118,
        title: { text: 'Net Revenue Retention', font: { size: 16, color: '#2C2C2C' } },
        delta: { reference: 110, increasing: { color: '#1F5233' } },
        gauge: {
            axis: { range: [null, 150], tickwidth: 1, tickcolor: '#6B7280' },
            bar: { color: '#2C2C2C' },
            bgcolor: '#F9F7F4',
            borderwidth: 2,
            bordercolor: '#6B7280',
            steps: [
                { range: [0, 100], color: '#D1D5DB' },
                { range: [100, 120], color: '#6B7280' },
                { range: [120, 150], color: '#1F5233' }
            ],
            threshold: {
                line: { color: '#1F5233', width: 4 },
                thickness: 0.75,
                value: 130
            }
        }
    }];

    const lineData = [{
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [112, 113, 114, 115, 116, 117, 117.5, 117.8, 118, 118, 118, 118],
        type: 'scatter',
        mode: 'lines+markers',
        name: 'NRR Trend',
        line: { color: '#2C2C2C', width: 3 },
        marker: { color: '#1F5233', size: 8 },
        fill: 'tonexty',
        fillcolor: 'rgba(209, 213, 219, 0.3)'
    }];

    const layout = {
        ...plotlyCommonLayout,
        title: 'NRR Performance Dashboard',
        grid: { rows: 1, columns: 2, pattern: 'independent' },
        xaxis: { title: 'Month', gridcolor: '#D1D5DB' },
        yaxis: { title: 'NRR %', gridcolor: '#D1D5DB', range: [105, 125] }
    };

    Plotly.newPlot(divId, [...gaugeData, ...lineData], layout, { responsive: true });
}

// 2. CAC vs NRR Correlation - Dual-Purpose Palette
function createCACNRRCorrelationChart(divId) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const cac = [450, 480, 420, 390, 410, 430, 400, 380, 370, 360, 350, 340];
    const nrr = [112, 113, 114, 115, 116, 117, 117.5, 117.8, 118, 118, 118, 118];

    const trace1 = {
        x: cac,
        y: nrr,
        mode: 'markers',
        type: 'scatter',
        name: 'CAC vs NRR',
        marker: {
            size: 12,
            color: cac,
            colorscale: [
                [0, '#0D5C63'],
                [0.5, '#6A3E37'],
                [1, '#E8F1F0']
            ],
            showscale: true,
            colorbar: {
                title: 'CAC ($)',
                tickfont: { color: '#0D5C63' }
            },
            line: { color: '#6A3E37', width: 1 }
        },
        text: months,
        hovertemplate: '<b>%{text}</b><br>CAC: $%{x}<br>NRR: %{y}%<extra></extra>'
    };

    // Add trend line
    const avgCAC = cac.reduce((a, b) => a + b, 0) / cac.length;
    const avgNRR = nrr.reduce((a, b) => a + b, 0) / nrr.length;
    
    const trace2 = {
        x: [Math.min(...cac), Math.max(...cac)],
        y: [avgNRR, avgNRR],
        mode: 'lines',
        name: 'Avg NRR',
        line: { color: '#6A3E37', width: 2, dash: 'dash' }
    };

    const layout = {
        ...plotlyCommonLayout,
        title: 'CAC vs NRR Correlation Analysis',
        xaxis: { title: 'Customer Acquisition Cost ($)', gridcolor: '#E8F1F0' },
        yaxis: { title: 'Net Revenue Retention (%)', gridcolor: '#F4EBE8' },
        plot_bgcolor: 'rgba(232, 241, 240, 0.2)'
    };

    Plotly.newPlot(divId, [trace1, trace2], layout, { responsive: true });
}

// 3. LTV Segment Analysis (3D) - Single-Hue Progression Palette
function createLTVSegmentAnalysis3D(divId) {
    const segments = ['Enterprise', 'Mid-Market', 'SMB', 'Startup'];
    const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
    
    const trace1 = {
        x: quarters,
        y: segments,
        z: [
            [12000, 13500, 15000, 16800],
            [8000, 9000, 10000, 11200],
            [4500, 5000, 5500, 6200],
            [2000, 2200, 2500, 2800]
        ],
        type: 'surface',
        colorscale: [
            [0, '#003A66'],
            [0.25, '#1A5C8C'],
            [0.5, '#4A7CB4'],
            [0.75, '#8AA8D1'],
            [1, '#D4E1F0']
        ],
        showscale: true,
        colorbar: {
            title: 'LTV ($)',
            tickfont: { color: '#003A66' }
        }
    };

    const layout = {
        ...plotlyCommonLayout,
        title: 'Customer Lifetime Value by Segment (3D)',
        scene: {
            xaxis: { title: 'Quarter', gridcolor: '#8AA8D1' },
            yaxis: { title: 'Segment', gridcolor: '#8AA8D1' },
            zaxis: { title: 'LTV ($)', gridcolor: '#8AA8D1' },
            bgcolor: 'rgba(212, 225, 240, 0.1)'
        },
        plot_bgcolor: '#D4E1F0'
    };

    Plotly.newPlot(divId, [trace1], layout, { responsive: true });
}

// 4. Churn Context (Combo) - Neutral Professional Palette
function createChurnContextChart(divId) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const trace1 = {
        x: months,
        y: [3.2, 3.0, 2.8, 2.7, 2.5, 2.4, 2.3, 2.2, 2.1, 2.0, 1.9, 1.8],
        type: 'bar',
        name: 'Churn Rate',
        marker: {
            color: '#2C2C2C',
            line: { color: '#6B7280', width: 1 }
        },
        yaxis: 'y'
    };

    const trace2 = {
        x: months,
        y: [450, 460, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515],
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Churned Customers',
        line: { color: '#1F5233', width: 3 },
        marker: { color: '#1F5233', size: 8 },
        yaxis: 'y2'
    };

    const trace3 = {
        x: months,
        y: [14400, 15340, 16510, 17248, 18024, 18841, 19618, 20451, 21330, 22225, 23136, 24064],
        type: 'scatter',
        mode: 'lines',
        name: 'Active Customers',
        line: { color: '#6B7280', width: 2, dash: 'dot' },
        yaxis: 'y2'
    };

    const layout = {
        ...plotlyCommonLayout,
        title: 'Churn Context Analysis',
        xaxis: { title: 'Month', gridcolor: '#D1D5DB' },
        yaxis: {
            title: 'Churn Rate (%)',
            titlefont: { color: '#2C2C2C' },
            tickfont: { color: '#2C2C2C' },
            gridcolor: '#D1D5DB'
        },
        yaxis2: {
            title: 'Customer Count',
            titlefont: { color: '#1F5233' },
            tickfont: { color: '#1F5233' },
            overlaying: 'y',
            side: 'right'
        },
        plot_bgcolor: 'rgba(249, 247, 244, 0.3)',
        legend: { x: 0.1, y: 1.1, orientation: 'h' }
    };

    Plotly.newPlot(divId, [trace1, trace2, trace3], layout, { responsive: true });
}

// 5. Expansion Sankey - Financial Authority Palette
function createExpansionSankeyChart(divId) {
    const trace = {
        type: 'sankey',
        orientation: 'h',
        node: {
            pad: 15,
            thickness: 20,
            line: {
                color: '#1B2D4D',
                width: 1
            },
            label: ['Existing ARR', 'Retained', 'Churned', 'Expansion', 'New ARR', 'Total ARR'],
            color: ['#1B2D4D', '#2D7B8C', '#8B3A3A', '#4A5568', '#1B2D4D', '#2D7B8C'],
            customdata: ['$1,200K', '$1,140K', '$60K', '$180K', '$300K', '$1,620K'],
            hovertemplate: '%{label}<br>%{customdata}<extra></extra>'
        },
        link: {
            source: [0, 0, 0, 3, 4],
            target: [1, 2, 3, 5, 5],
            value: [1140, 60, 180, 180, 300],
            color: ['rgba(45, 123, 140, 0.4)', 'rgba(139, 58, 58, 0.4)', 'rgba(74, 85, 104, 0.4)', 
                    'rgba(45, 123, 140, 0.4)', 'rgba(27, 45, 77, 0.4)'],
            customdata: ['Retention', 'Churn', 'Expansion', 'Expansion ARR', 'New ARR'],
            hovertemplate: '%{customdata}: $%{value}K<extra></extra>'
        }
    };

    const layout = {
        ...plotlyCommonLayout,
        title: 'ARR Expansion Flow Analysis',
        font: { size: 12, color: '#1B2D4D' },
        plot_bgcolor: '#F5F4F0',
        paper_bgcolor: '#F5F4F0'
    };

    Plotly.newPlot(divId, [trace], layout, { responsive: true });
}

// 6. GRR Confidence Intervals - Financial Authority Palette
function createGRRConfidenceChart(divId) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const grr = [94, 94.5, 95, 95.5, 96, 96.2, 96.5, 96.8, 97, 97.2, 97.5, 97.8];
    const upper = [95.5, 96, 96.5, 97, 97.5, 97.7, 98, 98.3, 98.5, 98.7, 99, 99.3];
    const lower = [92.5, 93, 93.5, 94, 94.5, 94.7, 95, 95.3, 95.5, 95.7, 96, 96.3];

    const trace1 = {
        x: months,
        y: grr,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'GRR',
        line: { color: '#2D7B8C', width: 4 },
        marker: { color: '#1B2D4D', size: 8, line: { color: '#2D7B8C', width: 2 } }
    };

    const trace2 = {
        x: months,
        y: upper,
        type: 'scatter',
        mode: 'lines',
        name: 'Upper CI (95%)',
        line: { color: '#4A5568', width: 1, dash: 'dash' },
        fill: 'tonexty',
        fillcolor: 'rgba(245, 244, 240, 0.4)'
    };

    const trace3 = {
        x: months,
        y: lower,
        type: 'scatter',
        mode: 'lines',
        name: 'Lower CI (95%)',
        line: { color: '#4A5568', width: 1, dash: 'dash' },
        fill: 'tonexty',
        fillcolor: 'rgba(245, 244, 240, 0.4)'
    };

    const trace4 = {
        x: months,
        y: Array(12).fill(95),
        type: 'scatter',
        mode: 'lines',
        name: 'Target (95%)',
        line: { color: '#8B3A3A', width: 2, dash: 'dot' }
    };

    const layout = {
        ...plotlyCommonLayout,
        title: 'Gross Revenue Retention with Confidence Intervals',
        xaxis: { title: 'Month', gridcolor: '#F5F4F0' },
        yaxis: { 
            title: 'GRR (%)', 
            gridcolor: '#F5F4F0',
            range: [90, 100]
        },
        plot_bgcolor: 'rgba(245, 244, 240, 0.3)',
        legend: { x: 0.1, y: 1.1, orientation: 'h' }
    };

    Plotly.newPlot(divId, [trace3, trace2, trace1, trace4], layout, { responsive: true });
}

// Export functions for use in HTML
window.PlotlySaaSCharts = {
    createNRRGaugeLineChart,
    createCACNRRCorrelationChart,
    createLTVSegmentAnalysis3D,
    createChurnContextChart,
    createExpansionSankeyChart,
    createGRRConfidenceChart
};

console.log('✅ Plotly.js SaaS Analytics with WSJ Color Palettes loaded successfully!');
