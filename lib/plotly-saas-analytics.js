// Plotly.js Advanced SaaS Analytics Components
// Interactive B2B SaaS CEO Dashboard Visualizations

// Common layout settings
const plotlyLayout = {
    font: {
        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
        size: 12
    },
    paper_bgcolor: 'white',
    plot_bgcolor: '#f9fafb',
    margin: { t: 60, r: 40, b: 60, l: 60 },
    hovermode: 'closest'
};

const plotlyConfig = {
    responsive: true,
    displayModeBar: true,
    displaylogo: false,
    modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d']
};

// Utility functions
function generateMonthlyData(baseValue, variance, months = 24) {
    const data = [];
    let current = baseValue;
    for (let i = 0; i < months; i++) {
        const change = (Math.random() - 0.4) * variance;
        current += change;
        data.push(Math.round(current));
    }
    return data;
}

function generateLabels(months = 24) {
    const labels = [];
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - months);
    
    for (let i = 0; i < months; i++) {
        const date = new Date(startDate);
        date.setMonth(startDate.getMonth() + i);
        labels.push(date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
    }
    return labels;
}

// 1. NRR Gauge + Line Combo
function createPlotlyNRRCombo() {
    const labels = generateLabels(12);
    const nrrTrend = [110, 112, 115, 118, 120, 122, 119, 121, 123, 125, 124, 126];
    const currentNRR = nrrTrend[nrrTrend.length - 1];
    
    // Gauge chart
    const gaugeData = [{
        type: "indicator",
        mode: "gauge+number+delta",
        value: currentNRR,
        delta: { reference: 110, increasing: { color: "#10b981" } },
        gauge: {
            axis: { range: [90, 140], tickwidth: 2, tickcolor: "#6b7280" },
            bar: { color: currentNRR >= 110 ? "#10b981" : "#ef4444" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "#e5e7eb",
            steps: [
                { range: [90, 100], color: "#fee2e2" },
                { range: [100, 110], color: "#fef3c7" },
                { range: [110, 140], color: "#d1fae5" }
            ],
            threshold: {
                line: { color: "#dc2626", width: 4 },
                thickness: 0.75,
                value: 110
            }
        },
        number: { suffix: "%" },
        title: { text: "Current NRR", font: { size: 16 } },
        domain: { x: [0, 0.45], y: [0.2, 1] }
    }];
    
    // Line trend
    const lineData = [{
        type: "scatter",
        mode: "lines+markers",
        x: labels,
        y: nrrTrend,
        name: "NRR Trend",
        line: {
            color: "#10b981",
            width: 3
        },
        marker: {
            size: 8,
            color: "#10b981"
        },
        xaxis: 'x2',
        yaxis: 'y2'
    }, {
        type: "scatter",
        mode: "lines",
        x: labels,
        y: Array(12).fill(110),
        name: "Target (110%)",
        line: {
            color: "#f59e0b",
            width: 2,
            dash: 'dash'
        },
        xaxis: 'x2',
        yaxis: 'y2'
    }];
    
    const combinedData = [...gaugeData, ...lineData];
    
    const layout = {
        ...plotlyLayout,
        title: {
            text: 'Net Revenue Retention: Gauge + Historical Trend',
            font: { size: 16, color: '#1f2937' }
        },
        xaxis2: {
            domain: [0.5, 1],
            anchor: 'y2',
            title: 'Month'
        },
        yaxis2: {
            domain: [0, 1],
            anchor: 'x2',
            title: 'NRR (%)',
            range: [105, 130]
        },
        showlegend: true,
        legend: { x: 0.5, y: -0.15, orientation: 'h' }
    };
    
    Plotly.newPlot('plotly-nrr-combo', combinedData, layout, plotlyConfig);
}

// 2. CAC Correlation - Bar with Scatter Overlay
function createPlotlyCACCorrelation() {
    const labels = generateLabels(12);
    const cacData = generateMonthlyData(1800, 300, 12);
    const nrrData = [112, 115, 118, 120, 122, 119, 121, 123, 125, 124, 126, 128];
    
    const barTrace = {
        type: 'bar',
        x: labels,
        y: cacData,
        name: 'CAC ($)',
        marker: {
            color: '#3b82f6',
            opacity: 0.7
        },
        yaxis: 'y'
    };
    
    const scatterTrace = {
        type: 'scatter',
        mode: 'lines+markers',
        x: labels,
        y: nrrData,
        name: 'NRR (%)',
        line: {
            color: '#10b981',
            width: 3
        },
        marker: {
            size: 10,
            color: '#10b981',
            symbol: 'diamond'
        },
        yaxis: 'y2'
    };
    
    const data = [barTrace, scatterTrace];
    
    const layout = {
        ...plotlyLayout,
        title: {
            text: 'CAC vs NRR Correlation Analysis',
            font: { size: 16, color: '#1f2937' }
        },
        xaxis: { title: 'Month' },
        yaxis: {
            title: 'CAC ($)',
            side: 'left',
            showgrid: true
        },
        yaxis2: {
            title: 'NRR (%)',
            overlaying: 'y',
            side: 'right',
            showgrid: false,
            range: [110, 130]
        },
        legend: { x: 0.1, y: 1.1, orientation: 'h' },
        hovermode: 'x unified'
    };
    
    Plotly.newPlot('plotly-cac-correlation', data, layout, plotlyConfig);
}

// 3. LTV 3D Scatter Plot
function createPlotlyLTV3D() {
    // Generate customer segments data
    const segments = ['Enterprise', 'Mid-Market', 'SMB', 'Startup'];
    const colors = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'];
    
    const data = segments.map((segment, segmentIdx) => {
        const numCustomers = 30;
        const baseLTV = [45000, 28000, 12000, 6500][segmentIdx];
        const baseCAC = [8000, 5000, 2200, 1500][segmentIdx];
        const baseChurn = [2, 3, 5, 8][segmentIdx];
        
        const x = [];
        const y = [];
        const z = [];
        const sizes = [];
        
        for (let i = 0; i < numCustomers; i++) {
            x.push(baseCAC + (Math.random() - 0.5) * baseCAC * 0.4);
            y.push(baseLTV + (Math.random() - 0.5) * baseLTV * 0.3);
            z.push(baseChurn + (Math.random() - 0.5) * baseChurn * 0.5);
            sizes.push(5 + Math.random() * 5);
        }
        
        return {
            type: 'scatter3d',
            mode: 'markers',
            name: segment,
            x: x,
            y: y,
            z: z,
            marker: {
                size: sizes,
                color: colors[segmentIdx],
                opacity: 0.8,
                line: {
                    color: colors[segmentIdx],
                    width: 0.5
                }
            }
        };
    });
    
    const layout = {
        ...plotlyLayout,
        title: {
            text: 'LTV 3D Analysis: Segment vs Cohort Correlation',
            font: { size: 16, color: '#1f2937' }
        },
        scene: {
            xaxis: { title: 'CAC ($)' },
            yaxis: { title: 'LTV ($)' },
            zaxis: { title: 'Churn Rate (%)' },
            camera: {
                eye: { x: 1.5, y: 1.5, z: 1.3 }
            }
        },
        showlegend: true,
        legend: { x: 0.7, y: 0.9 }
    };
    
    Plotly.newPlot('plotly-ltv-3d', data, layout, plotlyConfig);
}

// 4. Churn Combo Chart (Line + Bar)
function createPlotlyChurnCombo() {
    const labels = generateLabels(12);
    const churnedCustomers = [45, 52, 38, 35, 42, 33, 38, 32, 28, 35, 30, 26];
    const newCustomers = [180, 195, 165, 175, 188, 170, 185, 195, 205, 192, 210, 220];
    const churnRate = churnedCustomers.map((churned, i) => 
        ((churned / (churned + newCustomers[i])) * 100).toFixed(1)
    );
    
    const barChurned = {
        type: 'bar',
        x: labels,
        y: churnedCustomers,
        name: 'Churned Customers',
        marker: {
            color: '#ef4444',
            opacity: 0.8
        },
        yaxis: 'y'
    };
    
    const barNew = {
        type: 'bar',
        x: labels,
        y: newCustomers,
        name: 'New Customers',
        marker: {
            color: '#10b981',
            opacity: 0.8
        },
        yaxis: 'y'
    };
    
    const lineChurnRate = {
        type: 'scatter',
        mode: 'lines+markers',
        x: labels,
        y: churnRate,
        name: 'Churn Rate (%)',
        line: {
            color: '#dc2626',
            width: 3
        },
        marker: {
            size: 8,
            color: '#dc2626'
        },
        yaxis: 'y2'
    };
    
    const data = [barNew, barChurned, lineChurnRate];
    
    const layout = {
        ...plotlyLayout,
        title: {
            text: 'Churn Analysis: Customer Flow + Rate Trend',
            font: { size: 16, color: '#1f2937' }
        },
        xaxis: { title: 'Month' },
        yaxis: {
            title: 'Customer Count',
            side: 'left'
        },
        yaxis2: {
            title: 'Churn Rate (%)',
            overlaying: 'y',
            side: 'right',
            range: [0, 10]
        },
        barmode: 'group',
        legend: { x: 0.1, y: 1.1, orientation: 'h' },
        hovermode: 'x unified'
    };
    
    Plotly.newPlot('plotly-churn-combo', data, layout, plotlyConfig);
}

// 5. Expansion Sankey Diagram
function createPlotlyExpansionSankey() {
    // Customer flow through expansion stages
    const data = [{
        type: "sankey",
        orientation: "h",
        node: {
            pad: 15,
            thickness: 20,
            line: {
                color: "#1f2937",
                width: 0.5
            },
            label: [
                "New Customers",
                "Active Users",
                "Power Users",
                "Expansion Ready",
                "Upsold",
                "Cross-sold",
                "Churned",
                "Stable"
            ],
            color: [
                "#3b82f6", "#06b6d4", "#8b5cf6", "#f59e0b",
                "#10b981", "#10b981", "#ef4444", "#6b7280"
            ]
        },
        link: {
            source: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
            target: [1, 6, 2, 6, 7, 3, 6, 7, 4, 5, 7],
            value: [850, 150, 600, 100, 150, 400, 50, 150, 200, 150, 50],
            color: [
                "rgba(59, 130, 246, 0.3)",
                "rgba(239, 68, 68, 0.3)",
                "rgba(139, 92, 246, 0.3)",
                "rgba(239, 68, 68, 0.3)",
                "rgba(107, 114, 128, 0.3)",
                "rgba(245, 158, 11, 0.3)",
                "rgba(239, 68, 68, 0.3)",
                "rgba(107, 114, 128, 0.3)",
                "rgba(16, 185, 129, 0.3)",
                "rgba(16, 185, 129, 0.3)",
                "rgba(107, 114, 128, 0.3)"
            ]
        }
    }];
    
    const layout = {
        ...plotlyLayout,
        title: {
            text: 'Customer Expansion Flow Through Stages',
            font: { size: 16, color: '#1f2937' }
        },
        height: 500,
        font: { size: 12 }
    };
    
    Plotly.newPlot('plotly-expansion-sankey', data, layout, plotlyConfig);
}

// 6. GRR with Confidence Intervals
function createPlotlyGRRConfidence() {
    const labels = generateLabels(12);
    const grrData = [88.5, 89.2, 90.1, 88.8, 91.2, 90.5, 91.8, 92.1, 91.5, 92.8, 93.2, 92.5];
    const upperBound = grrData.map(val => val + 1.5 + Math.random() * 0.5);
    const lowerBound = grrData.map(val => val - 1.5 - Math.random() * 0.5);
    
    const upperTrace = {
        type: 'scatter',
        mode: 'lines',
        x: labels,
        y: upperBound,
        name: 'Upper Bound',
        line: {
            color: 'rgba(6, 182, 212, 0.3)',
            width: 0
        },
        showlegend: false,
        hoverinfo: 'skip'
    };
    
    const mainTrace = {
        type: 'scatter',
        mode: 'lines+markers',
        x: labels,
        y: grrData,
        name: 'GRR (%)',
        line: {
            color: '#06b6d4',
            width: 3
        },
        marker: {
            size: 8,
            color: '#06b6d4'
        },
        fill: 'tonexty',
        fillcolor: 'rgba(6, 182, 212, 0.2)'
    };
    
    const lowerTrace = {
        type: 'scatter',
        mode: 'lines',
        x: labels,
        y: lowerBound,
        name: 'Lower Bound',
        line: {
            color: 'rgba(6, 182, 212, 0.3)',
            width: 0
        },
        fill: 'tonexty',
        fillcolor: 'rgba(6, 182, 212, 0.2)',
        showlegend: false,
        hoverinfo: 'skip'
    };
    
    const benchmarkTrace = {
        type: 'scatter',
        mode: 'lines',
        x: labels,
        y: Array(12).fill(88),
        name: 'Benchmark (88%)',
        line: {
            color: '#f59e0b',
            width: 2,
            dash: 'dash'
        }
    };
    
    const data = [lowerTrace, upperTrace, mainTrace, benchmarkTrace];
    
    const layout = {
        ...plotlyLayout,
        title: {
            text: 'Gross Revenue Retention with Confidence Intervals',
            font: { size: 16, color: '#1f2937' }
        },
        xaxis: { title: 'Month' },
        yaxis: {
            title: 'GRR (%)',
            range: [85, 96]
        },
        legend: { x: 0.1, y: 1.1, orientation: 'h' },
        hovermode: 'x unified'
    };
    
    Plotly.newPlot('plotly-grr-confidence', data, layout, plotlyConfig);
}

// Initialize all Plotly.js SaaS analytics
function initPlotlySaaSAnalytics() {
    createPlotlyNRRCombo();
    createPlotlyCACCorrelation();
    createPlotlyLTV3D();
    createPlotlyChurnCombo();
    createPlotlyExpansionSankey();
    createPlotlyGRRConfidence();
    
    console.log('✅ Plotly.js SaaS Analytics loaded successfully!');
}

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.initPlotlySaaSAnalytics = initPlotlySaaSAnalytics;
}
