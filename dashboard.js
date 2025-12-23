// Display current date
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// WSJ Color Palettes - Financial Authority for primary dashboard
const financialAuthorityColors = WSJColors.financialAuthority;
const singleHueColors = WSJColors.singleHueProgression;
const dualPurposeColors = WSJColors.dualPurpose;
const neutralColors = WSJColors.neutralProfessional;

// Helper function to convert HEX to RGBA (uses hexToRgb from wsj-palettes.js)
function hexToRgba(hex, alpha = 1) {
    // hexToRgb is defined in lib/wsj-palettes.js
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return hex;
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Common chart options
const commonOptions = {
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
        }
    }
};

// Revenue vs Expenses Chart (Line) - Financial Authority palette
const revenueExpensesCtx = document.getElementById('revenueExpensesChart').getContext('2d');
new Chart(revenueExpensesCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Revenue',
            data: [185000, 195000, 210000, 225000, 240000, 235000, 255000, 270000, 265000, 280000, 295000, 310000],
            borderColor: financialAuthorityColors[2], // Teal Accent
            backgroundColor: hexToRgba(financialAuthorityColors[2], 0.12),
            borderWidth: 3,
            tension: 0.4,
            fill: true
        }, {
            label: 'Expenses',
            data: [135000, 142000, 148000, 155000, 162000, 158000, 165000, 172000, 168000, 175000, 182000, 188000],
            borderColor: financialAuthorityColors[3], // Burgundy
            backgroundColor: hexToRgba(financialAuthorityColors[3], 0.12),
            borderWidth: 3,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '$' + (value / 1000) + 'K';
                    }
                }
            }
        }
    }
});

// Quarterly Performance Chart (Bar) - Financial Authority palette
const quarterlyCtx = document.getElementById('quarterlyChart').getContext('2d');
new Chart(quarterlyCtx, {
    type: 'bar',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024'],
        datasets: [{
            label: 'Revenue',
            data: [590000, 700000, 790000, 885000, 950000],
            backgroundColor: hexToRgba(financialAuthorityColors[0], 0.8), // Navy Dark with opacity
            borderColor: financialAuthorityColors[0],
            borderWidth: 2
        }, {
            label: 'Profit',
            data: [165000, 198000, 237000, 267000, 295000],
            backgroundColor: hexToRgba(financialAuthorityColors[1], 0.8), // Slate Gray with opacity
            borderColor: financialAuthorityColors[1],
            borderWidth: 2
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '$' + (value / 1000) + 'K';
                    }
                }
            }
        }
    }
});

// Revenue Breakdown Chart (Doughnut) - Single-Hue Progression palette
const revenueBreakdownCtx = document.getElementById('revenueBreakdownChart').getContext('2d');
new Chart(revenueBreakdownCtx, {
    type: 'doughnut',
    data: {
        labels: ['Product Sales', 'Services', 'Subscriptions', 'Consulting', 'Other'],
        datasets: [{
            data: [45, 25, 18, 10, 2],
            backgroundColor: [
                hexToRgba(singleHueColors[0], 0.8),
                hexToRgba(singleHueColors[1], 0.8),
                hexToRgba(singleHueColors[2], 0.8),
                hexToRgba(singleHueColors[3], 0.8),
                hexToRgba(singleHueColors[4], 0.8)
            ],
            borderColor: singleHueColors,
            borderWidth: 2
        }]
    },
    options: {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            legend: {
                position: 'right'
            }
        }
    }
});

// Customer Acquisition Chart (Area) - Financial Authority palette
const customerCtx = document.getElementById('customerChart').getContext('2d');
new Chart(customerCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Customers',
            data: [450, 520, 580, 620, 690, 750, 810, 880, 920, 980, 1050, 1120],
            borderColor: financialAuthorityColors[2], // Teal Accent
            backgroundColor: hexToRgba(financialAuthorityColors[2], 0.2),
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: financialAuthorityColors[2]
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Market Share Chart (Pie) - Dual-Purpose palette
const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
new Chart(marketShareCtx, {
    type: 'pie',
    data: {
        labels: ['Our Company', 'Competitor A', 'Competitor B', 'Competitor C', 'Others'],
        datasets: [{
            data: [32, 24, 18, 15, 11],
            backgroundColor: [
                hexToRgba(dualPurposeColors[0], 0.8), // Deep Teal for us
                hexToRgba(neutralColors[0], 0.8),      // Charcoal
                hexToRgba(neutralColors[1], 0.8),      // Medium Gray
                hexToRgba(neutralColors[2], 0.8),      // Light Gray
                hexToRgba(dualPurposeColors[1], 0.8)   // Deep Plum
            ],
            borderColor: [
                dualPurposeColors[0],
                neutralColors[0],
                neutralColors[1],
                neutralColors[2],
                dualPurposeColors[1]
            ],
            borderWidth: 2
        }]
    },
    options: {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Key Metrics Radar Chart - Dual-Purpose palette
const metricsRadarCtx = document.getElementById('metricsRadarChart').getContext('2d');
new Chart(metricsRadarCtx, {
    type: 'radar',
    data: {
        labels: ['Revenue Growth', 'Customer Satisfaction', 'Market Share', 'Innovation', 'Efficiency', 'Employee Engagement'],
        datasets: [{
            label: 'Current Year',
            data: [85, 92, 78, 88, 82, 90],
            borderColor: dualPurposeColors[0],
            backgroundColor: hexToRgba(dualPurposeColors[0], 0.2),
            borderWidth: 2,
            pointBackgroundColor: dualPurposeColors[0],
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: dualPurposeColors[0]
        }, {
            label: 'Previous Year',
            data: [75, 85, 72, 80, 78, 82],
            borderColor: dualPurposeColors[1],
            backgroundColor: hexToRgba(dualPurposeColors[1], 0.2),
            borderWidth: 2,
            pointBackgroundColor: dualPurposeColors[1],
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: dualPurposeColors[1]
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20
                }
            }
        }
    }
});

// Add some interactivity - simulate real-time data updates
setInterval(() => {
    const refreshIndicator = document.querySelector('.refresh-indicator');
    refreshIndicator.style.opacity = '0';
    setTimeout(() => {
        refreshIndicator.style.opacity = '1';
    }, 200);
}, 5000);

console.log('✅ Belissima CEO Dashboard loaded successfully!');
console.log('📊 Using Chart.js v4.4.1 for all visualizations');
console.log('🎨 Powered by WSJ Color Palette System for professional data visualization');
