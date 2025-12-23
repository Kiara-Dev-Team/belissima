// Display current date
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// ============================================================================
// CHART.JS VISUALIZATIONS (10 Metrics)
// ============================================================================

// Common chart options for Chart.js
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                padding: 15,
                font: {
                    size: 12,
                    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto'
                }
            }
        },
        tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false
        }
    }
};

// Function to create all Chart.js visualizations (wrapped to avoid global pollution)
(function createChartJsVisualizations() {
    // Cache canvas contexts to avoid repeated DOM queries
    const canvasContexts = {
        arrTrend: document.getElementById('arrTrendChart')?.getContext('2d'),
        nrrGauge: document.getElementById('nrrGaugeChart')?.getContext('2d'),
        cacMonth: document.getElementById('cacMonthChart')?.getContext('2d'),
        cacPayback: document.getElementById('cacPaybackChart')?.getContext('2d'),
        ltvCac: document.getElementById('ltvCacChart')?.getContext('2d'),
        churnRate: document.getElementById('churnRateChart')?.getContext('2d'),
        expansionArr: document.getElementById('expansionArrChart')?.getContext('2d'),
        arrPerEmployee: document.getElementById('arrPerEmployeeChart')?.getContext('2d'),
        ruleOf40: document.getElementById('ruleOf40Chart')?.getContext('2d'),
        grrTrend: document.getElementById('grrTrendChart')?.getContext('2d')
    };

    // 1. ARR Trend (Line Chart)
    if (canvasContexts.arrTrend) {
new Chart(canvasContexts.arrTrend, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'ARR ($M)',
            data: [8.2, 8.6, 9.1, 9.5, 9.9, 10.3, 10.8, 11.2, 11.7, 12.0, 12.2, 12.4],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: '#10b981'
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'M';
                    }
                }
            }
        }
    }
});
}

// 2. NRR Gauge (Doughnut as Gauge)
if (canvasContexts.nrrGauge) {
new Chart(canvasContexts.nrrGauge, {
    type: 'doughnut',
    data: {
        labels: ['NRR', 'To Target'],
        datasets: [{
            data: [115, 35],
            backgroundColor: ['#3b82f6', '#e5e7eb'],
            borderWidth: 0,
            circumference: 180,
            rotation: 270
        }]
    },
    options: {
        ...commonChartOptions,
        cutout: '75%',
        plugins: {
            ...commonChartOptions.plugins,
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        if (context.dataIndex === 0) {
                            return 'NRR: 115%';
                        }
                        return '';
                    }
                }
            }
        }
    }
});
}

// 3. CAC by Month (Bar Chart)
if (canvasContexts.cacMonth) {
new Chart(canvasContexts.cacMonth, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'CAC ($)',
            data: [980, 950, 920, 900, 880, 870, 860, 850, 840, 835, 845, 850],
            backgroundColor: '#f59e0b',
            borderColor: '#d97706',
            borderWidth: 2
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value) {
                        return '$' + value;
                    }
                }
            }
        }
    }
});
}

// 4. CAC Payback Period (Line Chart)
if (canvasContexts.cacPayback) {
new Chart(canvasContexts.cacPayback, {
    type: 'line',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        datasets: [{
            label: 'Payback Period (months)',
            data: [14, 13.5, 12.8, 11.5, 10.2, 9.5],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: '#ef4444'
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value) {
                        return value + ' mo';
                    }
                }
            }
        }
    }
});
}

// 5. LTV:CAC Ratio (Bar Chart)
if (canvasContexts.ltvCac) {
new Chart(canvasContexts.ltvCac, {
    type: 'bar',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        datasets: [{
            label: 'LTV:CAC Ratio',
            data: [3.2, 3.5, 3.8, 4.0, 4.1, 4.2],
            backgroundColor: '#8b5cf6',
            borderColor: '#7c3aed',
            borderWidth: 2
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + 'x';
                    }
                }
            }
        }
    }
});
}

// 6. Churn Rate Trend (Line Chart)
if (canvasContexts.churnRate) {
new Chart(canvasContexts.churnRate, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Churn Rate (%)',
            data: [3.5, 3.2, 2.9, 2.8, 2.6, 2.5, 2.4, 2.3, 2.2, 2.1, 2.0, 1.9],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});
}

// 7. Expansion ARR (Stacked Bar Chart)
if (canvasContexts.expansionArr) {
new Chart(canvasContexts.expansionArr, {
    type: 'bar',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        datasets: [{
            label: 'New ARR',
            data: [1.2, 1.4, 1.5, 1.8, 1.9, 2.1],
            backgroundColor: '#10b981',
            stack: 'Stack 0'
        }, {
            label: 'Expansion ARR',
            data: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            backgroundColor: '#3b82f6',
            stack: 'Stack 0'
        }, {
            label: 'Churned ARR',
            data: [-0.3, -0.3, -0.3, -0.2, -0.2, -0.2],
            backgroundColor: '#ef4444',
            stack: 'Stack 0'
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                stacked: true,
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'M';
                    }
                }
            },
            x: {
                stacked: true
            }
        }
    }
});
}

// 8. ARR per Employee (Line Chart)
if (canvasContexts.arrPerEmployee) {
new Chart(canvasContexts.arrPerEmployee, {
    type: 'line',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        datasets: [{
            label: 'ARR per Employee ($K)',
            data: [195, 205, 218, 225, 235, 248],
            borderColor: '#14b8a6',
            backgroundColor: 'rgba(20, 184, 166, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: '#14b8a6'
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'K';
                    }
                }
            }
        }
    }
});
}

// 9. Rule of 40 (Combo Chart - Bar + Line)
if (canvasContexts.ruleOf40) {
new Chart(canvasContexts.ruleOf40, {
    type: 'bar',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        datasets: [{
            label: 'Revenue Growth Rate (%)',
            data: [28, 30, 32, 35, 38, 40],
            backgroundColor: '#10b981',
            yAxisID: 'y'
        }, {
            label: 'EBITDA Margin (%)',
            data: [8, 10, 12, 15, 18, 22],
            backgroundColor: '#3b82f6',
            yAxisID: 'y'
        }, {
            label: 'Rule of 40 Score',
            data: [36, 40, 44, 50, 56, 62],
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            type: 'line',
            borderWidth: 3,
            tension: 0.4,
            yAxisID: 'y1'
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});
}

// 10. GRR Trend (Line Chart)
if (canvasContexts.grrTrend) {
new Chart(canvasContexts.grrTrend, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'GRR (%)',
            data: [94, 94.5, 95, 95.5, 96, 96.2, 96.5, 96.8, 97, 97.2, 97.5, 98],
            borderColor: '#06b6d4',
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: '#06b6d4'
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            y: {
                beginAtZero: false,
                min: 90,
                max: 100,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});
}
})(); // IIFE - automatically executes

// ============================================================================
// PLOTLY.JS VISUALIZATIONS (6 Metrics)
// ============================================================================

// 1. NRR with Gauge + Line Combo
const nrrComboData = [
    {
        type: 'indicator',
        mode: 'gauge+number+delta',
        value: 115,
        delta: { reference: 110 },
        gauge: {
            axis: { range: [null, 150] },
            bar: { color: '#3b82f6' },
            steps: [
                { range: [0, 100], color: '#fee2e2' },
                { range: [100, 120], color: '#d1fae5' },
                { range: [120, 150], color: '#10b981' }
            ],
            threshold: {
                line: { color: 'red', width: 4 },
                thickness: 0.75,
                value: 100
            }
        },
        domain: { x: [0, 0.5], y: [0, 1] }
    },
    {
        type: 'scatter',
        mode: 'lines+markers',
        name: 'NRR Trend',
        x: ['Q1', 'Q2', 'Q3', 'Q4'],
        y: [108, 110, 113, 115],
        line: { color: '#3b82f6', width: 3 },
        marker: { size: 10 },
        xaxis: 'x2',
        yaxis: 'y2'
    }
];

const nrrComboLayout = {
    grid: { rows: 1, columns: 2 },
    xaxis2: { domain: [0.6, 1] },
    yaxis2: { domain: [0, 1], title: 'NRR (%)' },
    showlegend: false,
    margin: { t: 30, b: 30, l: 30, r: 30 }
};

Plotly.newPlot('nrrComboPlot', nrrComboData, nrrComboLayout, {responsive: true});

// 2. CAC vs NRR Correlation
const cacNrrData = [
    {
        x: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        y: [980, 950, 920, 900, 880, 850],
        name: 'CAC',
        type: 'bar',
        marker: { color: '#f59e0b' }
    },
    {
        x: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        y: [108, 110, 112, 113, 114, 115],
        name: 'NRR',
        type: 'scatter',
        mode: 'lines+markers',
        yaxis: 'y2',
        line: { color: '#3b82f6', width: 3 },
        marker: { size: 10 }
    }
];

const cacNrrLayout = {
    yaxis: { title: 'CAC ($)' },
    yaxis2: {
        title: 'NRR (%)',
        overlaying: 'y',
        side: 'right'
    },
    margin: { t: 30, b: 60, l: 60, r: 60 },
    legend: { x: 0.1, y: 1.1, orientation: 'h' }
};

Plotly.newPlot('cacNrrCorrelation', cacNrrData, cacNrrLayout, {responsive: true});

// 3. LTV Segment Analysis (3D Scatter)
const ltvSegmentData = [{
    type: 'scatter3d',
    mode: 'markers',
    x: [3500, 4200, 2800, 5100, 3900, 4800, 3200, 5500, 4100, 3600],
    y: [850, 920, 780, 1100, 900, 1050, 820, 1200, 950, 880],
    z: [4.1, 4.6, 3.6, 4.6, 4.3, 4.6, 3.9, 4.6, 4.3, 4.1],
    text: ['Enterprise', 'Enterprise', 'SMB', 'Enterprise', 'Mid-Market', 
           'Enterprise', 'SMB', 'Enterprise', 'Mid-Market', 'Mid-Market'],
    marker: {
        size: 12,
        color: [1, 1, 2, 1, 3, 1, 2, 1, 3, 3],
        colorscale: [[0, '#10b981'], [0.5, '#3b82f6'], [1, '#8b5cf6']],
        showscale: true,
        colorbar: {
            title: 'Segment',
            tickvals: [1, 2, 3],
            ticktext: ['Enterprise', 'SMB', 'Mid-Market']
        }
    }
}];

const ltvSegmentLayout = {
    scene: {
        xaxis: { title: 'LTV ($)' },
        yaxis: { title: 'CAC ($)' },
        zaxis: { title: 'LTV:CAC Ratio' }
    },
    margin: { t: 30, b: 30, l: 30, r: 30 }
};

Plotly.newPlot('ltvSegmentPlot', ltvSegmentData, ltvSegmentLayout, {responsive: true});

// 4. Churn Context with New Customers
const churnContextData = [
    {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [120, 135, 145, 155, 168, 180, 195, 205, 218, 230, 245, 260],
        name: 'New Customers',
        type: 'bar',
        marker: { color: '#10b981' }
    },
    {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [-42, -38, -35, -33, -31, -30, -29, -28, -26, -25, -24, -23],
        name: 'Churned Customers',
        type: 'bar',
        marker: { color: '#ef4444' }
    },
    {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [3.5, 3.2, 2.9, 2.8, 2.6, 2.5, 2.4, 2.3, 2.2, 2.1, 2.0, 1.9],
        name: 'Churn Rate (%)',
        type: 'scatter',
        mode: 'lines+markers',
        yaxis: 'y2',
        line: { color: '#f59e0b', width: 3 },
        marker: { size: 8 }
    }
];

const churnContextLayout = {
    yaxis: { title: 'Number of Customers' },
    yaxis2: {
        title: 'Churn Rate (%)',
        overlaying: 'y',
        side: 'right'
    },
    barmode: 'relative',
    margin: { t: 30, b: 60, l: 60, r: 60 },
    legend: { x: 0.1, y: 1.1, orientation: 'h' }
};

Plotly.newPlot('churnContextPlot', churnContextData, churnContextLayout, {responsive: true});

// 5. Expansion Pipeline (Sankey)
const sankeyData = [{
    type: 'sankey',
    node: {
        pad: 15,
        thickness: 20,
        line: { color: 'black', width: 0.5 },
        label: ['Existing Customers', 'Upsell Target', 'Cross-sell Target', 
                'Renewed', 'Upsold', 'Cross-sold', 'Expansion ARR'],
        color: ['#3b82f6', '#10b981', '#8b5cf6', '#14b8a6', '#06b6d4', '#f59e0b', '#10b981']
    },
    link: {
        source: [0, 0, 0, 1, 2, 3, 4, 5],
        target: [1, 2, 3, 4, 5, 6, 6, 6],
        value: [300, 250, 850, 250, 180, 850, 250, 180]
    }
}];

const sankeyLayout = {
    margin: { t: 30, b: 30, l: 30, r: 30 }
};

Plotly.newPlot('expansionSankeyPlot', sankeyData, sankeyLayout, {responsive: true});

// 6. GRR with Confidence Intervals
const grrConfidenceData = [
    {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [94, 94.5, 95, 95.5, 96, 96.2, 96.5, 96.8, 97, 97.2, 97.5, 98],
        name: 'GRR',
        type: 'scatter',
        mode: 'lines',
        line: { color: '#06b6d4', width: 3 }
    },
    {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [95, 95.5, 96, 96.5, 97, 97.2, 97.5, 97.8, 98, 98.2, 98.5, 99],
        name: 'Upper CI',
        type: 'scatter',
        mode: 'lines',
        line: { width: 0 },
        showlegend: false,
        fillcolor: 'rgba(6, 182, 212, 0.2)',
        fill: 'tonexty'
    },
    {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [93, 93.5, 94, 94.5, 95, 95.2, 95.5, 95.8, 96, 96.2, 96.5, 97],
        name: 'Lower CI',
        type: 'scatter',
        mode: 'lines',
        line: { width: 0 },
        showlegend: false
    }
];

const grrConfidenceLayout = {
    yaxis: { 
        title: 'GRR (%)',
        range: [90, 100]
    },
    margin: { t: 30, b: 60, l: 60, r: 30 },
    legend: { x: 0.1, y: 1.1, orientation: 'h' }
};

Plotly.newPlot('grrConfidencePlot', grrConfidenceData, grrConfidenceLayout, {responsive: true});

// ============================================================================
// D3.JS VISUALIZATIONS (8 Metrics)
// ============================================================================

// 1. ARR Area Chart with Gradient
function createD3ArrArea() {
    const svg = d3.select('#d3ArrArea');
    svg.selectAll('*').remove(); // Clear previous content for resize
    const container = svg.node().parentElement;
    const width = container.clientWidth - 50;
    const height = 350;
    
    svg.attr('width', width).attr('height', height);
    
    const margin = {top: 20, right: 30, bottom: 40, left: 60};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const data = [
        {month: 'Jan', arr: 8.2}, {month: 'Feb', arr: 8.6}, {month: 'Mar', arr: 9.1},
        {month: 'Apr', arr: 9.5}, {month: 'May', arr: 9.9}, {month: 'Jun', arr: 10.3},
        {month: 'Jul', arr: 10.8}, {month: 'Aug', arr: 11.2}, {month: 'Sep', arr: 11.7},
        {month: 'Oct', arr: 12.0}, {month: 'Nov', arr: 12.2}, {month: 'Dec', arr: 12.4}
    ];
    
    const x = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([0, innerWidth])
        .padding(0.1);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.arr) * 1.1])
        .range([innerHeight, 0]);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Define gradient
    const gradient = svg.append('defs')
        .append('linearGradient')
        .attr('id', 'arrGradient')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%');
    
    gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#10b981')
        .attr('stop-opacity', 0.8);
    
    gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#10b981')
        .attr('stop-opacity', 0.1);
    
    // Create area
    const area = d3.area()
        .x(d => x(d.month) + x.bandwidth() / 2)
        .y0(innerHeight)
        .y1(d => y(d.arr))
        .curve(d3.curveMonotoneX);
    
    g.append('path')
        .datum(data)
        .attr('fill', 'url(#arrGradient)')
        .attr('d', area);
    
    // Create line
    const line = d3.line()
        .x(d => x(d.month) + x.bandwidth() / 2)
        .y(d => y(d.arr))
        .curve(d3.curveMonotoneX);
    
    g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#10b981')
        .attr('stroke-width', 3)
        .attr('d', line);
    
    // Add axes
    g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x));
    
    g.append('g')
        .call(d3.axisLeft(y).ticks(5).tickFormat(d => `$${d}M`));
    
    // Add points
    g.selectAll('.dot')
        .data(data)
        .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', d => x(d.month) + x.bandwidth() / 2)
        .attr('cy', d => y(d.arr))
        .attr('r', 5)
        .attr('fill', '#10b981')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
}

// 2. NRR Custom Gauge with Thresholds
function createD3NrrGauge() {
    const svg = d3.select('#d3NrrGauge');
    svg.selectAll('*').remove(); // Clear previous content for resize
    const container = svg.node().parentElement;
    const width = container.clientWidth - 50;
    const height = 350;
    
    svg.attr('width', width).attr('height', height);
    
    const radius = Math.min(width, height) / 2 - 20;
    const g = svg.append('g')
        .attr('transform', `translate(${width/2},${height/2})`);
    
    const nrrValue = 115;
    const maxValue = 150;
    
    // Background arc
    const backgroundArc = d3.arc()
        .innerRadius(radius - 40)
        .outerRadius(radius)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2);
    
    g.append('path')
        .attr('d', backgroundArc)
        .attr('fill', '#e5e7eb');
    
    // Color zones
    const zones = [
        {start: 0, end: 100, color: '#ef4444'},
        {start: 100, end: 120, color: '#10b981'},
        {start: 120, end: 150, color: '#3b82f6'}
    ];
    
    zones.forEach(zone => {
        const zoneArc = d3.arc()
            .innerRadius(radius - 40)
            .outerRadius(radius)
            .startAngle(-Math.PI / 2 + (zone.start / maxValue) * Math.PI)
            .endAngle(-Math.PI / 2 + (zone.end / maxValue) * Math.PI);
        
        g.append('path')
            .attr('d', zoneArc)
            .attr('fill', zone.color)
            .attr('opacity', 0.3);
    });
    
    // Value arc
    const valueArc = d3.arc()
        .innerRadius(radius - 40)
        .outerRadius(radius)
        .startAngle(-Math.PI / 2)
        .endAngle(-Math.PI / 2 + (nrrValue / maxValue) * Math.PI);
    
    g.append('path')
        .attr('d', valueArc)
        .attr('fill', '#3b82f6');
    
    // Center text
    g.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', 0)
        .attr('font-size', '48px')
        .attr('font-weight', 'bold')
        .attr('fill', '#333')
        .text(`${nrrValue}%`);
    
    g.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', 30)
        .attr('font-size', '16px')
        .attr('fill', '#666')
        .text('NRR');
}

// 3. CAC Trend with Efficiency Line
function createD3CacEfficiency() {
    const svg = d3.select('#d3CacEfficiency');
    svg.selectAll('*').remove(); // Clear previous content for resize
    const container = svg.node().parentElement;
    const width = container.clientWidth - 50;
    const height = 350;
    
    svg.attr('width', width).attr('height', height);
    
    const margin = {top: 20, right: 60, bottom: 40, left: 60};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const data = [
        {quarter: 'Q1 23', cac: 980, efficiency: 68},
        {quarter: 'Q2 23', cac: 950, efficiency: 72},
        {quarter: 'Q3 23', cac: 920, efficiency: 75},
        {quarter: 'Q4 23', cac: 900, efficiency: 78},
        {quarter: 'Q1 24', cac: 880, efficiency: 82},
        {quarter: 'Q2 24', cac: 850, efficiency: 85}
    ];
    
    const x = d3.scaleBand()
        .domain(data.map(d => d.quarter))
        .range([0, innerWidth])
        .padding(0.1);
    
    const yLeft = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.cac) * 1.2])
        .range([innerHeight, 0]);
    
    const yRight = d3.scaleLinear()
        .domain([0, 100])
        .range([innerHeight, 0]);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Bars for CAC
    g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.quarter))
        .attr('y', d => yLeft(d.cac))
        .attr('width', x.bandwidth())
        .attr('height', d => innerHeight - yLeft(d.cac))
        .attr('fill', '#f59e0b')
        .attr('opacity', 0.7);
    
    // Line for efficiency
    const line = d3.line()
        .x(d => x(d.quarter) + x.bandwidth() / 2)
        .y(d => yRight(d.efficiency))
        .curve(d3.curveMonotoneX);
    
    g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#10b981')
        .attr('stroke-width', 3)
        .attr('d', line);
    
    // Points on line
    g.selectAll('.dot')
        .data(data)
        .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', d => x(d.quarter) + x.bandwidth() / 2)
        .attr('cy', d => yRight(d.efficiency))
        .attr('r', 5)
        .attr('fill', '#10b981')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    // Add axes
    g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x));
    
    g.append('g')
        .call(d3.axisLeft(yLeft).ticks(5).tickFormat(d => `$${d}`))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -50)
        .attr('x', -innerHeight / 2)
        .attr('fill', '#666')
        .attr('text-anchor', 'middle')
        .text('CAC ($)');
    
    g.append('g')
        .attr('transform', `translate(${innerWidth},0)`)
        .call(d3.axisRight(yRight).ticks(5).tickFormat(d => `${d}%`))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 50)
        .attr('x', -innerHeight / 2)
        .attr('fill', '#666')
        .attr('text-anchor', 'middle')
        .text('Efficiency (%)');
}

// 4. Customer Loss Waterfall
function createD3Waterfall() {
    const svg = d3.select('#d3Waterfall');
    svg.selectAll('*').remove(); // Clear previous content for resize
    const container = svg.node().parentElement;
    const width = container.clientWidth - 50;
    const height = 350;
    
    svg.attr('width', width).attr('height', height);
    
    const margin = {top: 20, right: 30, bottom: 40, left: 60};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const data = [
        {label: 'Starting Customers', value: 1200, type: 'total'},
        {label: 'Voluntary Churn', value: -45, type: 'negative'},
        {label: 'Payment Failure', value: -18, type: 'negative'},
        {label: 'Competitive Loss', value: -32, type: 'negative'},
        {label: 'Product Fit', value: -25, type: 'negative'},
        {label: 'Ending Customers', value: 1080, type: 'total'}
    ];
    
    // Calculate cumulative values
    let cumulative = 0;
    data.forEach(d => {
        d.start = cumulative;
        if (d.type === 'total') {
            cumulative = d.value;
        } else {
            cumulative += d.value;
        }
        d.end = cumulative;
    });
    
    const x = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([0, innerWidth])
        .padding(0.2);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.start > d.end ? d.start : d.end) * 1.1])
        .range([innerHeight, 0]);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Draw bars
    g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.label))
        .attr('y', d => d.type === 'total' ? y(d.value) : y(Math.max(d.start, d.end)))
        .attr('width', x.bandwidth())
        .attr('height', d => d.type === 'total' ? innerHeight - y(d.value) : Math.abs(y(d.end) - y(d.start)))
        .attr('fill', d => d.type === 'total' ? '#3b82f6' : '#ef4444')
        .attr('opacity', 0.8);
    
    // Draw connectors
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].type !== 'total' || data[i+1].type !== 'total') {
            g.append('line')
                .attr('x1', x(data[i].label) + x.bandwidth())
                .attr('y1', y(data[i].end))
                .attr('x2', x(data[i+1].label))
                .attr('y2', y(data[i+1].start))
                .attr('stroke', '#666')
                .attr('stroke-width', 1)
                .attr('stroke-dasharray', '3,3');
        }
    }
    
    // Add axes
    g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-15)')
        .style('text-anchor', 'end');
    
    g.append('g')
        .call(d3.axisLeft(y).ticks(5));
}

// 5. LTV Bubble Chart
function createD3LtvBubble() {
    const svg = d3.select('#d3LtvBubble');
    svg.selectAll('*').remove(); // Clear previous content for resize
    const container = svg.node().parentElement;
    const width = container.clientWidth - 50;
    const height = 350;
    
    svg.attr('width', width).attr('height', height);
    
    const margin = {top: 20, right: 30, bottom: 60, left: 60};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const data = [
        {segment: 'Enterprise A', ltv: 5500, cac: 1200, customers: 45, color: '#10b981'},
        {segment: 'Enterprise B', ltv: 5100, cac: 1100, customers: 38, color: '#10b981'},
        {segment: 'Mid-Market A', ltv: 3900, cac: 900, customers: 120, color: '#3b82f6'},
        {segment: 'Mid-Market B', ltv: 3600, cac: 880, customers: 95, color: '#3b82f6'},
        {segment: 'SMB A', ltv: 2800, cac: 780, customers: 350, color: '#8b5cf6'},
        {segment: 'SMB B', ltv: 3200, cac: 820, customers: 280, color: '#8b5cf6'}
    ];
    
    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.ltv) * 1.1])
        .range([0, innerWidth]);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.cac) * 1.2])
        .range([innerHeight, 0]);
    
    const size = d3.scaleSqrt()
        .domain([0, d3.max(data, d => d.customers)])
        .range([5, 40]);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Add bubbles
    g.selectAll('.bubble')
        .data(data)
        .enter().append('circle')
        .attr('class', 'bubble')
        .attr('cx', d => x(d.ltv))
        .attr('cy', d => y(d.cac))
        .attr('r', d => size(d.customers))
        .attr('fill', d => d.color)
        .attr('opacity', 0.6)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    // Add labels
    g.selectAll('.label')
        .data(data)
        .enter().append('text')
        .attr('class', 'label')
        .attr('x', d => x(d.ltv))
        .attr('y', d => y(d.cac) + 5)
        .attr('text-anchor', 'middle')
        .attr('font-size', '11px')
        .attr('fill', 'white')
        .attr('font-weight', 'bold')
        .text(d => d.customers);
    
    // Add axes
    g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x).ticks(5).tickFormat(d => `$${d}`))
        .append('text')
        .attr('x', innerWidth / 2)
        .attr('y', 40)
        .attr('fill', '#666')
        .attr('text-anchor', 'middle')
        .text('LTV ($)');
    
    g.append('g')
        .call(d3.axisLeft(y).ticks(5).tickFormat(d => `$${d}`))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -50)
        .attr('x', -innerHeight / 2)
        .attr('fill', '#666')
        .attr('text-anchor', 'middle')
        .text('CAC ($)');
}

// 6. Expansion Sunburst (simplified version)
function createD3ExpansionSunburst() {
    const svg = d3.select('#d3ExpansionSunburst');
    svg.selectAll('*').remove(); // Clear previous content for resize
    const container = svg.node().parentElement;
    const width = container.clientWidth - 50;
    const height = 350;
    
    svg.attr('width', width).attr('height', height);
    
    const radius = Math.min(width, height) / 2 - 20;
    const g = svg.append('g')
        .attr('transform', `translate(${width/2},${height/2})`);
    
    const data = {
        name: 'Total Expansion',
        children: [
            {
                name: 'Upsell',
                value: 2500,
                children: [
                    {name: 'Tier Upgrade', value: 1500},
                    {name: 'Seat Expansion', value: 1000}
                ]
            },
            {
                name: 'Cross-sell',
                value: 1800,
                children: [
                    {name: 'New Products', value: 1200},
                    {name: 'Add-ons', value: 600}
                ]
            }
        ]
    };
    
    const color = d3.scaleOrdinal()
        .domain(['Upsell', 'Cross-sell', 'Tier Upgrade', 'Seat Expansion', 'New Products', 'Add-ons'])
        .range(['#10b981', '#3b82f6', '#86efac', '#6ee7b7', '#93c5fd', '#60a5fa']);
    
    const partition = d3.partition()
        .size([2 * Math.PI, radius]);
    
    const root = d3.hierarchy(data)
        .sum(d => d.value);
    
    partition(root);
    
    const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .innerRadius(d => d.y0)
        .outerRadius(d => d.y1);
    
    g.selectAll('path')
        .data(root.descendants())
        .enter().append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.name))
        .attr('opacity', 0.8)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    // Add center label
    g.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', 0)
        .attr('font-size', '24px')
        .attr('font-weight', 'bold')
        .attr('fill', '#333')
        .text('$4.3M');
    
    g.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', 25)
        .attr('font-size', '14px')
        .attr('fill', '#666')
        .text('Total Expansion');
}

// 7. Efficiency Slope Chart
function createD3EfficiencySlope() {
    const svg = d3.select('#d3EfficiencySlope');
    svg.selectAll('*').remove(); // Clear previous content for resize
    const container = svg.node().parentElement;
    const width = container.clientWidth - 50;
    const height = 350;
    
    svg.attr('width', width).attr('height', height);
    
    const margin = {top: 40, right: 100, bottom: 40, left: 100};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const data = [
        {metric: 'CAC', q1: 980, q2: 850, improve: true},
        {metric: 'Churn Rate', q1: 3.5, q2: 1.9, improve: true},
        {metric: 'NRR', q1: 108, q2: 115, improve: true},
        {metric: 'GRR', q1: 94, q2: 98, improve: true},
        {metric: 'LTV:CAC', q1: 3.2, q2: 4.2, improve: true}
    ];
    
    const y = d3.scaleBand()
        .domain(data.map(d => d.metric))
        .range([0, innerHeight])
        .padding(0.5);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Normalize values for visualization
    const normalize = (value, metric) => {
        const scales = {
            'CAC': d3.scaleLinear().domain([800, 1000]).range([0, innerWidth]),
            'Churn Rate': d3.scaleLinear().domain([1, 4]).range([0, innerWidth]),
            'NRR': d3.scaleLinear().domain([100, 120]).range([0, innerWidth]),
            'GRR': d3.scaleLinear().domain([90, 100]).range([0, innerWidth]),
            'LTV:CAC': d3.scaleLinear().domain([3, 5]).range([0, innerWidth])
        };
        return scales[metric](value);
    };
    
    // Draw lines
    data.forEach(d => {
        const x1 = normalize(d.q1, d.metric);
        const x2 = normalize(d.q2, d.metric);
        
        g.append('line')
            .attr('x1', x1)
            .attr('y1', y(d.metric) + y.bandwidth() / 2)
            .attr('x2', x2)
            .attr('y2', y(d.metric) + y.bandwidth() / 2)
            .attr('stroke', d.improve ? '#10b981' : '#ef4444')
            .attr('stroke-width', 3);
        
        // Q1 point
        g.append('circle')
            .attr('cx', x1)
            .attr('cy', y(d.metric) + y.bandwidth() / 2)
            .attr('r', 6)
            .attr('fill', '#3b82f6');
        
        // Q2 point
        g.append('circle')
            .attr('cx', x2)
            .attr('cy', y(d.metric) + y.bandwidth() / 2)
            .attr('r', 6)
            .attr('fill', '#8b5cf6');
    });
    
    // Add labels
    g.selectAll('.metric-label')
        .data(data)
        .enter().append('text')
        .attr('class', 'metric-label')
        .attr('x', -10)
        .attr('y', d => y(d.metric) + y.bandwidth() / 2 + 5)
        .attr('text-anchor', 'end')
        .attr('font-size', '14px')
        .attr('fill', '#333')
        .text(d => d.metric);
    
    // Add Q1/Q2 headers
    g.append('text')
        .attr('x', -10)
        .attr('y', -10)
        .attr('text-anchor', 'end')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .attr('fill', '#3b82f6')
        .text('Q1 2024');
    
    g.append('text')
        .attr('x', innerWidth + 10)
        .attr('y', -10)
        .attr('text-anchor', 'start')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .attr('fill', '#8b5cf6')
        .text('Q2 2024');
}

// 8. Rule of 40 Score Visualization
function createD3RuleOf40() {
    const svg = d3.select('#d3RuleOf40');
    svg.selectAll('*').remove(); // Clear previous content for resize
    const container = svg.node().parentElement;
    const width = container.clientWidth - 50;
    const height = 350;
    
    svg.attr('width', width).attr('height', height);
    
    const margin = {top: 20, right: 30, bottom: 40, left: 60};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const data = [
        {quarter: 'Q1 23', growth: 28, margin: 8, score: 36},
        {quarter: 'Q2 23', growth: 30, margin: 10, score: 40},
        {quarter: 'Q3 23', growth: 32, margin: 12, score: 44},
        {quarter: 'Q4 23', growth: 35, margin: 15, score: 50},
        {quarter: 'Q1 24', growth: 38, margin: 18, score: 56},
        {quarter: 'Q2 24', growth: 40, margin: 22, score: 62}
    ];
    
    const x = d3.scaleBand()
        .domain(data.map(d => d.quarter))
        .range([0, innerWidth])
        .padding(0.2);
    
    const y = d3.scaleLinear()
        .domain([0, 80])
        .range([innerHeight, 0]);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Reference line at 40
    g.append('line')
        .attr('x1', 0)
        .attr('y1', y(40))
        .attr('x2', innerWidth)
        .attr('y2', y(40))
        .attr('stroke', '#ef4444')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5');
    
    g.append('text')
        .attr('x', innerWidth - 5)
        .attr('y', y(40) - 5)
        .attr('text-anchor', 'end')
        .attr('font-size', '12px')
        .attr('fill', '#ef4444')
        .text('Target: 40%');
    
    // Stacked bars
    data.forEach(d => {
        // Growth bar
        g.append('rect')
            .attr('x', x(d.quarter))
            .attr('y', y(d.growth))
            .attr('width', x.bandwidth())
            .attr('height', innerHeight - y(d.growth))
            .attr('fill', '#10b981')
            .attr('opacity', 0.8);
        
        // Margin bar
        g.append('rect')
            .attr('x', x(d.quarter))
            .attr('y', y(d.growth + d.margin))
            .attr('width', x.bandwidth())
            .attr('height', innerHeight - y(d.margin))
            .attr('fill', '#3b82f6')
            .attr('opacity', 0.8);
        
        // Total score label
        g.append('text')
            .attr('x', x(d.quarter) + x.bandwidth() / 2)
            .attr('y', y(d.score) - 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '14px')
            .attr('font-weight', 'bold')
            .attr('fill', d.score >= 40 ? '#10b981' : '#ef4444')
            .text(d.score + '%');
    });
    
    // Add axes
    g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x));
    
    g.append('g')
        .call(d3.axisLeft(y).ticks(5).tickFormat(d => d + '%'));
    
    // Legend
    const legend = g.append('g')
        .attr('transform', `translate(${innerWidth - 150}, 10)`);
    
    legend.append('rect')
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#10b981')
        .attr('opacity', 0.8);
    
    legend.append('text')
        .attr('x', 20)
        .attr('y', 12)
        .attr('font-size', '12px')
        .text('Growth Rate');
    
    legend.append('rect')
        .attr('y', 20)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#3b82f6')
        .attr('opacity', 0.8);
    
    legend.append('text')
        .attr('x', 20)
        .attr('y', 32)
        .attr('font-size', '12px')
        .text('EBITDA Margin');
}

// Initialize all D3 visualizations
createD3ArrArea();
createD3NrrGauge();
createD3CacEfficiency();
createD3Waterfall();
createD3LtvBubble();
createD3ExpansionSunburst();
createD3EfficiencySlope();
createD3RuleOf40();

// Debounced resize handler for D3 charts (improves performance on window resize)
let resizeTimeout;
window.addEventListener('resize', () => {
    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
        // Recreate D3 visualizations on resize for responsive behavior
        createD3ArrArea();
        createD3NrrGauge();
        createD3CacEfficiency();
        createD3Waterfall();
        createD3LtvBubble();
        createD3ExpansionSunburst();
        createD3EfficiencySlope();
        createD3RuleOf40();
    }, 250);
});

// Add animation to refresh indicator (optimized with cached element and guard)
const refreshIndicator = document.querySelector('.refresh-indicator');
if (refreshIndicator) {
    setInterval(() => {
        refreshIndicator.style.opacity = '0';
        setTimeout(() => {
            refreshIndicator.style.opacity = '1';
        }, 200);
    }, 5000);
}

console.log('✅ B2B SaaS CEO Dashboard loaded successfully!');
console.log('📊 Using Chart.js, Plotly.js, and D3.js for visualizations');
