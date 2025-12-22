// Chart.js SaaS Metrics Components
// Comprehensive B2B SaaS CEO Dashboard Visualizations

// Common options for all charts
const saasChartOptions = {
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
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: {
                size: 14
            },
            bodyFont: {
                size: 13
            }
        }
    }
};

// Dummy data generators
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
        labels.push(date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));
    }
    return labels;
}

// 1. Annual Recurring Revenue (ARR) - Line Chart
function createARRChart() {
    const ctx = document.getElementById('chartjs-arr').getContext('2d');
    const labels = generateLabels(24);
    const arrData = generateMonthlyData(1200000, 150000, 24);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'ARR ($)',
                data: arrData,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 3,
                pointHoverRadius: 6
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000000).toFixed(1) + 'M';
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'Annual Recurring Revenue Growth Trend',
                    font: { size: 14 }
                }
            }
        }
    });
}

// 2. Net Revenue Retention (NRR) - Gauge Chart
function createNRRGauge() {
    const ctx = document.getElementById('chartjs-nrr').getContext('2d');
    const nrrValue = 118;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['NRR', 'Target Gap'],
            datasets: [{
                data: [nrrValue, 200 - nrrValue],
                backgroundColor: [
                    nrrValue >= 110 ? '#10b981' : '#ef4444',
                    '#e5e7eb'
                ],
                borderWidth: 0
            }]
        },
        options: {
            ...saasChartOptions,
            circumference: 180,
            rotation: -90,
            cutout: '70%',
            plugins: {
                ...saasChartOptions.plugins,
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Net Revenue Retention',
                    font: { size: 14 }
                },
                tooltip: {
                    enabled: false
                }
            }
        },
        plugins: [{
            id: 'centerText',
            afterDraw: function(chart) {
                const ctx = chart.ctx;
                const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
                const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2 + 20;
                
                ctx.save();
                ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
                ctx.fillStyle = '#1f2937';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(nrrValue + '%', centerX, centerY);
                
                ctx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
                ctx.fillStyle = '#6b7280';
                ctx.fillText('Target: 110%', centerX, centerY + 30);
                ctx.restore();
            }
        }]
    });
}

// 3. Customer Acquisition Cost (CAC) - Bar Chart
function createCACChart() {
    const ctx = document.getElementById('chartjs-cac').getContext('2d');
    const labels = generateLabels(12);
    const cacData = generateMonthlyData(1800, 300, 12);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'CAC ($)',
                data: cacData,
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: '#3b82f6',
                borderWidth: 2
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'Customer Acquisition Cost Monthly Trend',
                    font: { size: 14 }
                }
            }
        }
    });
}

// 4. CAC Payback Period - Line Chart
function createCACPaybackChart() {
    const ctx = document.getElementById('chartjs-cac-payback').getContext('2d');
    const labels = generateLabels(18);
    const paybackData = generateMonthlyData(14, 2, 18);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Payback Period (Months)',
                data: paybackData,
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 7
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + ' mo';
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'CAC Payback Period Trend',
                    font: { size: 14 }
                }
            }
        }
    });
}

// 5. Customer Lifetime Value (LTV) - Bar Chart with LTV:CAC Ratio
function createLTVChart() {
    const ctx = document.getElementById('chartjs-ltv').getContext('2d');
    const segments = ['Enterprise', 'Mid-Market', 'SMB', 'Startup'];
    const ltvData = [45000, 28000, 12000, 6500];
    const cacData = [8000, 5000, 2200, 1500];
    const ratios = ltvData.map((ltv, i) => (ltv / cacData[i]).toFixed(1));
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: segments,
            datasets: [{
                label: 'LTV ($)',
                data: ltvData,
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: '#10b981',
                borderWidth: 2,
                yAxisID: 'y'
            }, {
                label: 'CAC ($)',
                data: cacData,
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                borderColor: '#ef4444',
                borderWidth: 2,
                yAxisID: 'y'
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    position: 'left',
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000).toFixed(0) + 'K';
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'LTV vs CAC by Customer Segment',
                    font: { size: 14 }
                }
            }
        }
    });
}

// 6. Churn Rate - Line Chart
function createChurnChart() {
    const ctx = document.getElementById('chartjs-churn').getContext('2d');
    const labels = generateLabels(12);
    const churnData = [3.2, 3.5, 2.8, 2.5, 2.9, 2.4, 2.6, 2.3, 2.1, 2.4, 2.2, 1.9];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Churn Rate (%)',
                data: churnData,
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 7
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'Monthly Churn Rate Trend',
                    font: { size: 14 }
                }
            }
        }
    });
}

// 7. Expansion ARR Contribution - Stacked Bar Chart
function createExpansionARRChart() {
    const ctx = document.getElementById('chartjs-expansion').getContext('2d');
    const labels = generateLabels(12);
    const newARR = generateMonthlyData(120000, 15000, 12);
    const expansionARR = generateMonthlyData(45000, 8000, 12);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'New ARR',
                data: newARR,
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: '#3b82f6',
                borderWidth: 2
            }, {
                label: 'Expansion ARR',
                data: expansionARR,
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: '#10b981',
                borderWidth: 2
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000).toFixed(0) + 'K';
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'New vs Expansion ARR Breakdown',
                    font: { size: 14 }
                }
            }
        }
    });
}

// 8. ARR per Employee (ARR/FTE) - Line Chart
function createARRperFTEChart() {
    const ctx = document.getElementById('chartjs-arr-fte').getContext('2d');
    const labels = generateLabels(18);
    const arrPerFTE = generateMonthlyData(185000, 15000, 18);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'ARR per Employee ($)',
                data: arrPerFTE,
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 3,
                pointHoverRadius: 6
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000).toFixed(0) + 'K';
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'ARR per Employee Efficiency Trend',
                    font: { size: 14 }
                }
            }
        }
    });
}

// 9. Rule of 40 - Combination Chart
function createRuleOf40Chart() {
    const ctx = document.getElementById('chartjs-rule40').getContext('2d');
    const labels = generateLabels(12);
    const growthRate = [35, 38, 42, 45, 48, 43, 47, 50, 52, 48, 51, 53];
    const profitMargin = [8, 10, 12, 15, 18, 20, 22, 25, 23, 28, 30, 32];
    const rule40Score = growthRate.map((g, i) => g + profitMargin[i]);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Growth Rate (%)',
                data: growthRate,
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: '#3b82f6',
                borderWidth: 2,
                yAxisID: 'y'
            }, {
                label: 'Profit Margin (%)',
                data: profitMargin,
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: '#10b981',
                borderWidth: 2,
                yAxisID: 'y'
            }, {
                label: 'Rule of 40 Score',
                data: rule40Score,
                type: 'line',
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: false,
                yAxisID: 'y'
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'Rule of 40: Growth Rate + Profit Margin',
                    font: { size: 14 }
                }
            }
        }
    });
}

// 10. Gross Revenue Retention (GRR) - Line Chart
function createGRRChart() {
    const ctx = document.getElementById('chartjs-grr').getContext('2d');
    const labels = generateLabels(12);
    const grrData = [88.5, 89.2, 90.1, 88.8, 91.2, 90.5, 91.8, 92.1, 91.5, 92.8, 93.2, 92.5];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'GRR (%)',
                data: grrData,
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 7
            }]
        },
        options: {
            ...saasChartOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 85,
                    max: 95,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                ...saasChartOptions.plugins,
                title: {
                    display: true,
                    text: 'Gross Revenue Retention Progress (Healthy Range: 85-90%)',
                    font: { size: 14 }
                }
            }
        }
    });
}

// Initialize all Chart.js SaaS metrics when DOM is ready
function initChartJSSaaSMetrics() {
    createARRChart();
    createNRRGauge();
    createCACChart();
    createCACPaybackChart();
    createLTVChart();
    createChurnChart();
    createExpansionARRChart();
    createARRperFTEChart();
    createRuleOf40Chart();
    createGRRChart();
    
    console.log('✅ Chart.js SaaS Metrics loaded successfully!');
}

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.initChartJSSaaSMetrics = initChartJSSaaSMetrics;
}
