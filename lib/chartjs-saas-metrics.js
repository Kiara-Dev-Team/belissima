// Chart.js SaaS Metrics with WSJ Color Palettes
// Financial Authority: Navy Dark (#1B2D4D), Slate Gray (#4A5568), Teal Accent (#2D7B8C), Burgundy Warning (#8B3A3A), Cream BG (#F5F4F0)
// Neutral Professional: Charcoal (#2C2C2C), Medium Gray (#6B7280), Light Gray (#D1D5DB), Forest Accent (#1F5233), Off-White (#F9F7F4)
// Dual-Purpose: Deep Teal (#0D5C63), Deep Plum (#6A3E37), Light Sage (#E8F1F0), Light Mauve (#F4EBE8), White (#FFFFFF)
// Single-Hue Progression: Blue 100 (#003A66), Blue 80 (#1A5C8C), Blue 60 (#4A7CB4), Blue 40 (#8AA8D1), Blue 20 (#D4E1F0)

// Common chart options
const saasCommonOptions = {
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

// 1. ARR Trend - Financial Authority Palette
function createARRTrendChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'ARR',
                data: [1200, 1280, 1350, 1420, 1510, 1590, 1680, 1770, 1860, 1950, 2040, 2150],
                borderColor: '#1B2D4D',
                backgroundColor: 'rgba(27, 45, 77, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }, {
                label: 'Target ARR',
                data: [1250, 1310, 1370, 1430, 1490, 1550, 1610, 1670, 1730, 1790, 1850, 1910],
                borderColor: '#2D7B8C',
                backgroundColor: 'rgba(45, 123, 140, 0.1)',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'K';
                        }
                    },
                    grid: {
                        color: 'rgba(245, 244, 240, 0.5)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(245, 244, 240, 0.3)'
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#F5F4F0',
                    titleColor: '#1B2D4D',
                    bodyColor: '#4A5568',
                    borderColor: '#2D7B8C',
                    borderWidth: 1
                }
            }
        }
    });
}

// 2. NRR Gauge - Neutral Professional Palette
function createNRRGaugeChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const nrrValue = 118; // 118% NRR
    
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['NRR', 'Target Gap'],
            datasets: [{
                data: [nrrValue, Math.max(0, 130 - nrrValue)],
                backgroundColor: [
                    '#2C2C2C',
                    '#D1D5DB'
                ],
                borderColor: ['#1F5233', '#6B7280'],
                borderWidth: 2,
                circumference: 180,
                rotation: 270
            }]
        },
        options: {
            ...saasCommonOptions,
            plugins: {
                ...saasCommonOptions.plugins,
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#F9F7F4',
                    titleColor: '#2C2C2C',
                    bodyColor: '#6B7280',
                    borderColor: '#1F5233',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// 3. CAC Monthly - Dual-Purpose Palette
function createCACMonthlyChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Sales CAC',
                data: [450, 480, 420, 390, 410, 430, 400, 380, 370, 360, 350, 340],
                backgroundColor: '#0D5C63',
                borderColor: '#0D5C63',
                borderWidth: 1
            }, {
                label: 'Marketing CAC',
                data: [280, 290, 270, 260, 275, 285, 265, 250, 245, 240, 235, 230],
                backgroundColor: '#6A3E37',
                borderColor: '#6A3E37',
                borderWidth: 1
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    },
                    grid: {
                        color: 'rgba(232, 241, 240, 0.5)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#E8F1F0',
                    titleColor: '#0D5C63',
                    bodyColor: '#6A3E37',
                    borderColor: '#0D5C63',
                    borderWidth: 1
                }
            }
        }
    });
}

// 4. CAC Payback Period - Dual-Purpose Palette
function createCACPaybackChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
            datasets: [{
                label: 'Payback Period (months)',
                data: [14, 13.5, 12.8, 11.5, 10.8, 9.5],
                borderColor: '#0D5C63',
                backgroundColor: 'rgba(13, 92, 99, 0.2)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }, {
                label: 'Upper Confidence',
                data: [15.5, 15, 14.2, 13, 12.2, 11],
                borderColor: '#E8F1F0',
                backgroundColor: 'rgba(232, 241, 240, 0.3)',
                borderWidth: 1,
                borderDash: [3, 3],
                tension: 0.4,
                fill: '-1'
            }, {
                label: 'Lower Confidence',
                data: [12.5, 12, 11.4, 10, 9.4, 8],
                borderColor: '#F4EBE8',
                backgroundColor: 'rgba(244, 235, 232, 0.3)',
                borderWidth: 1,
                borderDash: [3, 3],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + ' mo';
                        }
                    },
                    grid: {
                        color: 'rgba(244, 235, 232, 0.5)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(232, 241, 240, 0.3)'
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#F4EBE8',
                    titleColor: '#0D5C63',
                    bodyColor: '#6A3E37',
                    borderColor: '#0D5C63',
                    borderWidth: 1
                }
            }
        }
    });
}

// 5. LTV:CAC Ratio - Single-Hue Progression Palette
function createLTVCACRatioChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
            datasets: [{
                label: 'LTV:CAC Ratio',
                data: [2.8, 3.1, 3.4, 3.7, 4.0, 4.3],
                backgroundColor: [
                    '#003A66',
                    '#1A5C8C',
                    '#4A7CB4',
                    '#8AA8D1',
                    '#4A7CB4',
                    '#1A5C8C'
                ],
                borderColor: '#003A66',
                borderWidth: 1
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + ':1';
                        }
                    },
                    grid: {
                        color: 'rgba(212, 225, 240, 0.5)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#D4E1F0',
                    titleColor: '#003A66',
                    bodyColor: '#1A5C8C',
                    borderColor: '#4A7CB4',
                    borderWidth: 1
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: 3,
                            yMax: 3,
                            borderColor: '#1F5233',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                content: 'Target: 3:1',
                                enabled: true
                            }
                        }
                    }
                }
            }
        }
    });
}

// 6. Churn Rate Trend - Neutral Professional Palette
function createChurnRateChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Churn Rate',
                data: [3.2, 3.0, 2.8, 2.7, 2.5, 2.4, 2.3, 2.2, 2.1, 2.0, 1.9, 1.8],
                borderColor: '#2C2C2C',
                backgroundColor: 'rgba(209, 213, 219, 0.4)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(249, 247, 244, 0.5)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(209, 213, 219, 0.3)'
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#F9F7F4',
                    titleColor: '#2C2C2C',
                    bodyColor: '#6B7280',
                    borderColor: '#1F5233',
                    borderWidth: 1
                }
            }
        }
    });
}

// 7. Expansion ARR - Financial Authority Palette
function createExpansionARRChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
            datasets: [{
                label: 'New ARR',
                data: [180, 210, 240, 270, 300, 330],
                backgroundColor: '#1B2D4D',
                borderColor: '#1B2D4D',
                borderWidth: 1
            }, {
                label: 'Expansion ARR',
                data: [45, 52, 60, 68, 75, 83],
                backgroundColor: '#2D7B8C',
                borderColor: '#2D7B8C',
                borderWidth: 1
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'K';
                        }
                    },
                    grid: {
                        color: 'rgba(245, 244, 240, 0.5)'
                    }
                },
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#F5F4F0',
                    titleColor: '#1B2D4D',
                    bodyColor: '#4A5568',
                    borderColor: '#2D7B8C',
                    borderWidth: 1
                }
            }
        }
    });
}

// 8. ARR per Employee - Single-Hue Progression Palette
function createARRPerEmployeeChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
            datasets: [{
                label: 'ARR/FTE',
                data: [180, 195, 210, 225, 245, 265],
                borderColor: '#003A66',
                backgroundColor: 'rgba(0, 58, 102, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#1A5C8C',
                pointBorderColor: '#003A66',
                pointRadius: 5
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'K';
                        }
                    },
                    grid: {
                        color: 'rgba(212, 225, 240, 0.5)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(138, 168, 209, 0.2)'
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#D4E1F0',
                    titleColor: '#003A66',
                    bodyColor: '#1A5C8C',
                    borderColor: '#4A7CB4',
                    borderWidth: 1
                }
            }
        }
    });
}

// 9. Rule of 40 - Single-Hue Progression Palette
function createRuleOf40Chart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
            datasets: [{
                label: 'Growth Rate',
                data: [25, 28, 30, 32, 35, 38],
                backgroundColor: '#4A7CB4',
                borderColor: '#4A7CB4',
                borderWidth: 1,
                yAxisID: 'y'
            }, {
                label: 'Profit Margin',
                data: [10, 12, 14, 15, 16, 18],
                backgroundColor: '#8AA8D1',
                borderColor: '#8AA8D1',
                borderWidth: 1,
                yAxisID: 'y'
            }, {
                label: 'Rule of 40 Score',
                data: [35, 40, 44, 47, 51, 56],
                type: 'line',
                borderColor: '#003A66',
                backgroundColor: 'rgba(0, 58, 102, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: false,
                yAxisID: 'y1'
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(212, 225, 240, 0.5)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#D4E1F0',
                    titleColor: '#003A66',
                    bodyColor: '#1A5C8C',
                    borderColor: '#4A7CB4',
                    borderWidth: 1
                }
            }
        }
    });
}

// 10. GRR Trend - Financial Authority Palette
function createGRRTrendChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Gross Revenue Retention',
                data: [94, 94.5, 95, 95.5, 96, 96.2, 96.5, 96.8, 97, 97.2, 97.5, 97.8],
                borderColor: '#2D7B8C',
                backgroundColor: 'rgba(245, 244, 240, 0.5)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }, {
                label: 'Target GRR',
                data: [95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95],
                borderColor: '#1B2D4D',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0,
                fill: false,
                pointRadius: 0
            }]
        },
        options: {
            ...saasCommonOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 90,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(245, 244, 240, 0.5)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(245, 244, 240, 0.3)'
                    }
                }
            },
            plugins: {
                ...saasCommonOptions.plugins,
                tooltip: {
                    backgroundColor: '#F5F4F0',
                    titleColor: '#1B2D4D',
                    bodyColor: '#4A5568',
                    borderColor: '#2D7B8C',
                    borderWidth: 1
                },
                annotation: {
                    annotations: {
                        box1: {
                            type: 'box',
                            yMin: 95,
                            yMax: 100,
                            backgroundColor: 'rgba(245, 244, 240, 0.2)',
                            borderColor: '#2D7B8C',
                            borderWidth: 0
                        }
                    }
                }
            }
        }
    });
}

// Export functions for use in HTML
window.SaaSCharts = {
    createARRTrendChart,
    createNRRGaugeChart,
    createCACMonthlyChart,
    createCACPaybackChart,
    createLTVCACRatioChart,
    createChurnRateChart,
    createExpansionARRChart,
    createARRPerEmployeeChart,
    createRuleOf40Chart,
    createGRRTrendChart
};

console.log('✅ Chart.js SaaS Metrics with WSJ Color Palettes loaded successfully!');
