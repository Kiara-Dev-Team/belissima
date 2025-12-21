// Financial data for the dashboard
const financialData = {
    year: {
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        revenue: [125000, 142000, 158000, 171000, 165000, 185000, 198000, 215000, 225000, 238000, 252000, 275000],
        expenses: [85000, 92000, 98000, 105000, 102000, 115000, 125000, 135000, 142000, 148000, 155000, 165000],
        previousRevenue: [115000, 128000, 138000, 145000, 152000, 165000, 175000, 188000, 195000, 208000, 220000, 235000]
    },
    quarter: {
        months: ['Oct', 'Nov', 'Dec'],
        revenue: [238000, 252000, 275000],
        expenses: [148000, 155000, 165000],
        previousRevenue: [208000, 220000, 235000]
    },
    month: {
        weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        revenue: [65000, 68000, 71000, 71000],
        expenses: [40000, 41000, 42000, 42000],
        previousRevenue: [58000, 59000, 59000, 59000]
    },
    categories: {
        revenue: {
            labels: ['Product Sales', 'Services', 'Subscriptions', 'Licensing', 'Other'],
            data: [45, 25, 18, 8, 4],
            colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#fee140']
        },
        expenses: {
            labels: ['Salaries', 'Marketing', 'Operations', 'R&D', 'Infrastructure', 'Other'],
            data: [35, 20, 15, 18, 8, 4],
            colors: ['#f5576c', '#fa709a', '#ff6b9d', '#ff8fab', '#ffa3b9', '#ffc3d0']
        }
    }
};

let currentPeriod = 'year';
let charts = {};

// Initialize the dashboard
function initDashboard() {
    updateKPIs();
    createCharts();
    
    // Period selector event listener
    document.getElementById('periodSelect').addEventListener('change', (e) => {
        currentPeriod = e.target.value;
        updateKPIs();
        updateCharts();
    });
}

// Update KPI cards
function updateKPIs() {
    const data = financialData[currentPeriod];
    const revenue = data.revenue;
    const expenses = data.expenses;
    const previousRevenue = data.previousRevenue;
    
    const totalRevenue = revenue.reduce((a, b) => a + b, 0);
    const totalExpenses = expenses.reduce((a, b) => a + b, 0);
    const netProfit = totalRevenue - totalExpenses;
    const previousTotal = previousRevenue.reduce((a, b) => a + b, 0);
    
    const revenueChange = ((totalRevenue - previousTotal) / previousTotal * 100).toFixed(1);
    const expensesChange = ((totalExpenses - (totalExpenses * 0.9)) / (totalExpenses * 0.9) * 100).toFixed(1);
    const profitChange = ((netProfit - (previousTotal - totalExpenses)) / (previousTotal - totalExpenses) * 100).toFixed(1);
    const growthRate = revenueChange;
    
    // Update KPI values with animation
    animateValue('totalRevenue', 0, totalRevenue, 1000, true);
    animateValue('totalExpenses', 0, totalExpenses, 1000, true);
    animateValue('netProfit', 0, netProfit, 1000, true);
    animateValue('growthRate', 0, parseFloat(growthRate), 1000, false, '%');
    
    // Update change percentages
    document.getElementById('revenueChange').textContent = `${revenueChange}%`;
    document.getElementById('expensesChange').textContent = `${expensesChange}%`;
    document.getElementById('profitChange').textContent = `${profitChange}%`;
    document.getElementById('growthChange').textContent = `${(parseFloat(growthRate) * 0.5).toFixed(1)}%`;
}

// Animate number counting
function animateValue(id, start, end, duration, isCurrency = false, suffix = '') {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        
        if (isCurrency) {
            element.textContent = `$${Math.round(current).toLocaleString()}`;
        } else {
            element.textContent = `${current.toFixed(1)}${suffix}`;
        }
    }, 16);
}

// Create all charts
function createCharts() {
    createRevenueExpensesChart();
    createProfitChart();
    createExpenseBreakdownChart();
    createRevenueCategoryChart();
    createCashFlowChart();
}

// Revenue vs Expenses Chart
function createRevenueExpensesChart() {
    const ctx = document.getElementById('revenueExpensesChart').getContext('2d');
    const data = financialData[currentPeriod];
    
    charts.revenueExpenses = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.months || data.weeks,
            datasets: [
                {
                    label: 'Revenue',
                    data: data.revenue,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Expenses',
                    data: data.expenses,
                    borderColor: '#f5576c',
                    backgroundColor: 'rgba(245, 87, 108, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#f5576c',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 13 },
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Monthly Profit Chart
function createProfitChart() {
    const ctx = document.getElementById('profitChart').getContext('2d');
    const data = financialData[currentPeriod];
    const profit = data.revenue.map((rev, i) => rev - data.expenses[i]);
    
    charts.profit = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.months || data.weeks,
            datasets: [{
                label: 'Profit',
                data: profit,
                backgroundColor: profit.map(p => 
                    p >= 0 
                        ? 'rgba(79, 172, 254, 0.8)' 
                        : 'rgba(245, 87, 108, 0.8)'
                ),
                borderColor: profit.map(p => 
                    p >= 0 
                        ? '#4facfe' 
                        : '#f5576c'
                ),
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return `Profit: $${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Expense Breakdown Chart
function createExpenseBreakdownChart() {
    const ctx = document.getElementById('expenseBreakdownChart').getContext('2d');
    
    charts.expenseBreakdown = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: financialData.categories.expenses.labels,
            datasets: [{
                data: financialData.categories.expenses.data,
                backgroundColor: financialData.categories.expenses.colors,
                borderWidth: 3,
                borderColor: '#fff',
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

// Revenue by Category Chart
function createRevenueCategoryChart() {
    const ctx = document.getElementById('revenueCategoryChart').getContext('2d');
    
    charts.revenueCategory = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: financialData.categories.revenue.labels,
            datasets: [{
                data: financialData.categories.revenue.data,
                backgroundColor: financialData.categories.revenue.colors.map(c => c + 'CC'),
                borderColor: financialData.categories.revenue.colors,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            },
            scales: {
                r: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

// Cash Flow Chart
function createCashFlowChart() {
    const ctx = document.getElementById('cashFlowChart').getContext('2d');
    const data = financialData[currentPeriod];
    
    // Calculate cumulative cash flow
    let cumulative = 0;
    const cashFlow = data.revenue.map((rev, i) => {
        cumulative += (rev - data.expenses[i]);
        return cumulative;
    });
    
    charts.cashFlow = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.months || data.weeks,
            datasets: [{
                label: 'Cumulative Cash Flow',
                data: cashFlow,
                borderColor: '#fee140',
                backgroundColor: 'rgba(254, 225, 64, 0.2)',
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#fee140',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return `Cash Flow: $${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Update all charts with new data
function updateCharts() {
    const data = financialData[currentPeriod];
    
    // Update Revenue vs Expenses Chart
    charts.revenueExpenses.data.labels = data.months || data.weeks;
    charts.revenueExpenses.data.datasets[0].data = data.revenue;
    charts.revenueExpenses.data.datasets[1].data = data.expenses;
    charts.revenueExpenses.update('active');
    
    // Update Profit Chart
    const profit = data.revenue.map((rev, i) => rev - data.expenses[i]);
    charts.profit.data.labels = data.months || data.weeks;
    charts.profit.data.datasets[0].data = profit;
    charts.profit.data.datasets[0].backgroundColor = profit.map(p => 
        p >= 0 
            ? 'rgba(79, 172, 254, 0.8)' 
            : 'rgba(245, 87, 108, 0.8)'
    );
    charts.profit.data.datasets[0].borderColor = profit.map(p => 
        p >= 0 
            ? '#4facfe' 
            : '#f5576c'
    );
    charts.profit.update('active');
    
    // Update Cash Flow Chart
    let cumulative = 0;
    const cashFlow = data.revenue.map((rev, i) => {
        cumulative += (rev - data.expenses[i]);
        return cumulative;
    });
    charts.cashFlow.data.labels = data.months || data.weeks;
    charts.cashFlow.data.datasets[0].data = cashFlow;
    charts.cashFlow.update('active');
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);
