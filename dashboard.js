// Display current date
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

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

// Revenue vs Expenses Chart (Line)
const revenueExpensesCtx = document.getElementById('revenueExpensesChart').getContext('2d');
new Chart(revenueExpensesCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Revenue',
            data: [185000, 195000, 210000, 225000, 240000, 235000, 255000, 270000, 265000, 280000, 295000, 310000],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true
        }, {
            label: 'Expenses',
            data: [135000, 142000, 148000, 155000, 162000, 158000, 165000, 172000, 168000, 175000, 182000, 188000],
            borderColor: '#F44336',
            backgroundColor: 'rgba(244, 67, 54, 0.1)',
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

// Quarterly Performance Chart (Bar)
const quarterlyCtx = document.getElementById('quarterlyChart').getContext('2d');
new Chart(quarterlyCtx, {
    type: 'bar',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024'],
        datasets: [{
            label: 'Revenue',
            data: [590000, 700000, 790000, 885000, 950000],
            backgroundColor: 'rgba(102, 126, 234, 0.8)',
            borderColor: '#667eea',
            borderWidth: 2
        }, {
            label: 'Profit',
            data: [165000, 198000, 237000, 267000, 295000],
            backgroundColor: 'rgba(118, 75, 162, 0.8)',
            borderColor: '#764ba2',
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

// Revenue Breakdown Chart (Doughnut)
const revenueBreakdownCtx = document.getElementById('revenueBreakdownChart').getContext('2d');
new Chart(revenueBreakdownCtx, {
    type: 'doughnut',
    data: {
        labels: ['Product Sales', 'Services', 'Subscriptions', 'Consulting', 'Other'],
        datasets: [{
            data: [45, 25, 18, 10, 2],
            backgroundColor: [
                'rgba(102, 126, 234, 0.8)',
                'rgba(118, 75, 162, 0.8)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(255, 152, 0, 0.8)',
                'rgba(33, 150, 243, 0.8)'
            ],
            borderColor: [
                '#667eea',
                '#764ba2',
                '#4CAF50',
                '#FF9800',
                '#2196F3'
            ],
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

// Customer Acquisition Chart (Area)
const customerCtx = document.getElementById('customerChart').getContext('2d');
new Chart(customerCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Customers',
            data: [450, 520, 580, 620, 690, 750, 810, 880, 920, 980, 1050, 1120],
            borderColor: '#FF9800',
            backgroundColor: 'rgba(255, 152, 0, 0.2)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#FF9800'
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

// Market Share Chart (Pie)
const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
new Chart(marketShareCtx, {
    type: 'pie',
    data: {
        labels: ['Our Company', 'Competitor A', 'Competitor B', 'Competitor C', 'Others'],
        datasets: [{
            data: [32, 24, 18, 15, 11],
            backgroundColor: [
                'rgba(76, 175, 80, 0.8)',
                'rgba(244, 67, 54, 0.8)',
                'rgba(255, 152, 0, 0.8)',
                'rgba(33, 150, 243, 0.8)',
                'rgba(156, 39, 176, 0.8)'
            ],
            borderColor: [
                '#4CAF50',
                '#F44336',
                '#FF9800',
                '#2196F3',
                '#9C27B0'
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

// Key Metrics Radar Chart
const metricsRadarCtx = document.getElementById('metricsRadarChart').getContext('2d');
new Chart(metricsRadarCtx, {
    type: 'radar',
    data: {
        labels: ['Revenue Growth', 'Customer Satisfaction', 'Market Share', 'Innovation', 'Efficiency', 'Employee Engagement'],
        datasets: [{
            label: 'Current Year',
            data: [85, 92, 78, 88, 82, 90],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: '#667eea',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#667eea'
        }, {
            label: 'Previous Year',
            data: [75, 85, 72, 80, 78, 82],
            borderColor: '#764ba2',
            backgroundColor: 'rgba(118, 75, 162, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: '#764ba2',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#764ba2'
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
