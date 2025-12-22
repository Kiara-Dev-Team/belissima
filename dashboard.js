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
            backgroundColor: financialAuthorityColors[2] + '20',
            borderWidth: 3,
            tension: 0.4,
            fill: true
        }, {
            label: 'Expenses',
            data: [135000, 142000, 148000, 155000, 162000, 158000, 165000, 172000, 168000, 175000, 182000, 188000],
            borderColor: financialAuthorityColors[3], // Burgundy
            backgroundColor: financialAuthorityColors[3] + '20',
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
            backgroundColor: financialAuthorityColors[0] + 'CC', // Navy Dark with opacity
            borderColor: financialAuthorityColors[0],
            borderWidth: 2
        }, {
            label: 'Profit',
            data: [165000, 198000, 237000, 267000, 295000],
            backgroundColor: financialAuthorityColors[1] + 'CC', // Slate Gray with opacity
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
                singleHueColors[0] + 'CC',
                singleHueColors[1] + 'CC',
                singleHueColors[2] + 'CC',
                singleHueColors[3] + 'CC',
                singleHueColors[4] + 'CC'
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
            backgroundColor: financialAuthorityColors[2] + '33',
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
                dualPurposeColors[0] + 'CC', // Deep Teal for us
                neutralColors[0] + 'CC',      // Charcoal
                neutralColors[1] + 'CC',      // Medium Gray
                neutralColors[2] + 'CC',      // Light Gray
                dualPurposeColors[1] + 'CC'   // Deep Plum
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
            backgroundColor: dualPurposeColors[0] + '33',
            borderWidth: 2,
            pointBackgroundColor: dualPurposeColors[0],
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: dualPurposeColors[0]
        }, {
            label: 'Previous Year',
            data: [75, 85, 72, 80, 78, 82],
            borderColor: dualPurposeColors[1],
            backgroundColor: dualPurposeColors[1] + '33',
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
