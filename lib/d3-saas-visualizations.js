// D3.js Custom SaaS Visualizations
// Executive-level B2B SaaS CEO Dashboard Visualizations

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
        labels.push(date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));
    }
    return labels;
}

// 1. ARR Area Chart with Gradient Fill
function createD3ARRArea() {
    const container = d3.select('#d3-arr-area');
    container.html('');
    
    const margin = { top: 40, right: 30, bottom: 50, left: 70 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const labels = generateLabels(18);
    const data = generateMonthlyData(1200000, 150000, 18).map((value, i) => ({
        month: labels[i],
        value: value
    }));
    
    const x = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([0, width])
        .padding(0.1);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value) * 1.1])
        .range([height, 0]);
    
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
    
    // Create area generator
    const area = d3.area()
        .x(d => x(d.month) + x.bandwidth() / 2)
        .y0(height)
        .y1(d => y(d.value))
        .curve(d3.curveMonotoneX);
    
    // Add area path
    svg.append('path')
        .datum(data)
        .attr('fill', 'url(#arrGradient)')
        .attr('d', area);
    
    // Add line
    const line = d3.line()
        .x(d => x(d.month) + x.bandwidth() / 2)
        .y(d => y(d.value))
        .curve(d3.curveMonotoneX);
    
    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#10b981')
        .attr('stroke-width', 3)
        .attr('d', line);
    
    // Add dots
    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => x(d.month) + x.bandwidth() / 2)
        .attr('cy', d => y(d.value))
        .attr('r', 4)
        .attr('fill', '#10b981')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    // Add axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end');
    
    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => '$' + (d / 1000000).toFixed(1) + 'M'));
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('ARR Growth with Custom Gradient');
}

// 2. NRR Custom Gauge with Threshold Lines
function createD3NRRGauge() {
    const container = d3.select('#d3-nrr-gauge');
    container.html('');
    
    const width = 400;
    const height = 300;
    const radius = Math.min(width, height) / 2 - 20;
    
    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2 + 30})`);
    
    const nrrValue = 118;
    const minValue = 90;
    const maxValue = 140;
    const targetValue = 110;
    
    const scale = d3.scaleLinear()
        .domain([minValue, maxValue])
        .range([-Math.PI / 2, Math.PI / 2]);
    
    // Background arc
    const backgroundArc = d3.arc()
        .innerRadius(radius - 30)
        .outerRadius(radius)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2);
    
    svg.append('path')
        .attr('d', backgroundArc)
        .attr('fill', '#e5e7eb');
    
    // Value arc
    const valueArc = d3.arc()
        .innerRadius(radius - 30)
        .outerRadius(radius)
        .startAngle(-Math.PI / 2)
        .endAngle(scale(nrrValue));
    
    svg.append('path')
        .attr('d', valueArc)
        .attr('fill', nrrValue >= targetValue ? '#10b981' : '#ef4444');
    
    // Target line
    const targetAngle = scale(targetValue);
    svg.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', (radius - 25) * Math.cos(targetAngle - Math.PI / 2))
        .attr('y2', (radius - 25) * Math.sin(targetAngle - Math.PI / 2))
        .attr('stroke', '#f59e0b')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,5');
    
    // Value text
    svg.append('text')
        .attr('x', 0)
        .attr('y', 10)
        .attr('text-anchor', 'middle')
        .style('font-size', '36px')
        .style('font-weight', 'bold')
        .style('fill', '#1f2937')
        .text(nrrValue + '%');
    
    svg.append('text')
        .attr('x', 0)
        .attr('y', 35)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6b7280')
        .text('Target: 110%');
    
    // Title
    svg.append('text')
        .attr('x', 0)
        .attr('y', -radius - 10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('NRR Custom Gauge');
}

// 3. CAC Vertical Bar with Trend Line
function createD3CACTrend() {
    const container = d3.select('#d3-cac-trend');
    container.html('');
    
    const margin = { top: 40, right: 30, bottom: 50, left: 70 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const labels = generateLabels(12);
    const data = generateMonthlyData(1800, 300, 12).map((value, i) => ({
        month: labels[i],
        value: value,
        index: i
    }));
    
    const x = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([0, width])
        .padding(0.2);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value) * 1.1])
        .range([height, 0]);
    
    // Add bars
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => x(d.month))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.value))
        .attr('fill', '#3b82f6')
        .attr('opacity', 0.8);
    
    // Calculate trend line
    const xMean = d3.mean(data, (d, i) => i);
    const yMean = d3.mean(data, d => d.value);
    
    let numerator = 0;
    let denominator = 0;
    data.forEach((d, i) => {
        numerator += (i - xMean) * (d.value - yMean);
        denominator += (i - xMean) ** 2;
    });
    
    const slope = numerator / denominator;
    const intercept = yMean - slope * xMean;
    
    const trendLine = d3.line()
        .x((d, i) => x(d.month) + x.bandwidth() / 2)
        .y((d, i) => y(slope * i + intercept));
    
    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#dc2626')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,5')
        .attr('d', trendLine);
    
    // Add axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end');
    
    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => '$' + d.toLocaleString()));
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('CAC with Trend Line Analysis');
}

// 4. Churn Waterfall Chart
function createD3ChurnWaterfall() {
    const container = d3.select('#d3-churn-waterfall');
    container.html('');
    
    const margin = { top: 40, right: 30, bottom: 50, left: 80 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const data = [
        { category: 'Starting', value: 1000, cumulative: 1000, type: 'start' },
        { category: 'Price Churn', value: -80, cumulative: 920, type: 'decrease' },
        { category: 'Product Churn', value: -45, cumulative: 875, type: 'decrease' },
        { category: 'Service Churn', value: -35, cumulative: 840, type: 'decrease' },
        { category: 'Competitor', value: -60, cumulative: 780, type: 'decrease' },
        { category: 'Ending', value: 780, cumulative: 780, type: 'end' }
    ];
    
    const x = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, width])
        .padding(0.2);
    
    const y = d3.scaleLinear()
        .domain([0, 1100])
        .range([height, 0]);
    
    // Add bars
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => x(d.category))
        .attr('y', d => d.type === 'decrease' ? y(d.cumulative - d.value) : y(d.cumulative))
        .attr('width', x.bandwidth())
        .attr('height', d => Math.abs(y(d.cumulative) - y(d.cumulative - d.value)))
        .attr('fill', d => {
            if (d.type === 'start' || d.type === 'end') return '#3b82f6';
            return '#ef4444';
        })
        .attr('opacity', 0.8);
    
    // Add connecting lines
    data.forEach((d, i) => {
        if (i < data.length - 1) {
            svg.append('line')
                .attr('x1', x(d.category) + x.bandwidth())
                .attr('y1', y(d.cumulative))
                .attr('x2', x(data[i + 1].category))
                .attr('y2', y(d.cumulative))
                .attr('stroke', '#6b7280')
                .attr('stroke-width', 2)
                .attr('stroke-dasharray', '3,3');
        }
    });
    
    // Add value labels
    svg.selectAll('text.value')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'value')
        .attr('x', d => x(d.category) + x.bandwidth() / 2)
        .attr('y', d => y(d.cumulative) - 5)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .text(d => d.value);
    
    // Add axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end');
    
    svg.append('g')
        .call(d3.axisLeft(y));
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('Customer Churn Waterfall by Segment');
}

// 5. LTV Bubble Chart
function createD3LTVBubble() {
    const container = d3.select('#d3-ltv-bubble');
    container.html('');
    
    const margin = { top: 40, right: 100, bottom: 60, left: 70 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const segments = ['Enterprise', 'Mid-Market', 'SMB', 'Startup'];
    const colors = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'];
    
    const data = [];
    segments.forEach((segment, idx) => {
        const baseLTV = [45000, 28000, 12000, 6500][idx];
        const baseCAC = [8000, 5000, 2200, 1500][idx];
        const numBubbles = 8;
        
        for (let i = 0; i < numBubbles; i++) {
            data.push({
                segment: segment,
                ltv: baseLTV + (Math.random() - 0.5) * baseLTV * 0.3,
                cac: baseCAC + (Math.random() - 0.5) * baseCAC * 0.4,
                color: colors[idx]
            });
        }
    });
    
    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.cac) * 1.2])
        .range([0, width]);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.ltv) * 1.1])
        .range([height, 0]);
    
    const size = d3.scaleSqrt()
        .domain([0, d3.max(data, d => d.ltv)])
        .range([5, 30]);
    
    // Add bubbles
    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => x(d.cac))
        .attr('cy', d => y(d.ltv))
        .attr('r', d => size(d.ltv))
        .attr('fill', d => d.color)
        .attr('opacity', 0.6)
        .attr('stroke', d => d.color)
        .attr('stroke-width', 2);
    
    // Add axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d => '$' + (d / 1000).toFixed(0) + 'K'));
    
    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => '$' + (d / 1000).toFixed(0) + 'K'));
    
    // Add axis labels
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + 40)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .text('CAC ($)');
    
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -50)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .text('LTV ($)');
    
    // Add legend
    const legend = svg.append('g')
        .attr('transform', `translate(${width + 10}, 0)`);
    
    segments.forEach((segment, i) => {
        legend.append('circle')
            .attr('cx', 0)
            .attr('cy', i * 25)
            .attr('r', 6)
            .attr('fill', colors[i]);
        
        legend.append('text')
            .attr('x', 15)
            .attr('y', i * 25 + 5)
            .style('font-size', '12px')
            .text(segment);
    });
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('LTV Bubble Chart by Segment');
}

// 6. Expansion Sunburst Chart
function createD3ExpansionSunburst() {
    const container = d3.select('#d3-expansion-sunburst');
    container.html('');
    
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;
    
    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);
    
    const data = {
        name: 'Total ARR',
        children: [
            {
                name: 'New ARR',
                value: 1200000,
                color: '#3b82f6'
            },
            {
                name: 'Expansion ARR',
                children: [
                    { name: 'Upsell', value: 450000, color: '#10b981' },
                    { name: 'Cross-sell', value: 280000, color: '#06b6d4' },
                    { name: 'Add-ons', value: 170000, color: '#8b5cf6' }
                ]
            }
        ]
    };
    
    const hierarchy = d3.hierarchy(data)
        .sum(d => d.value);
    
    const partition = d3.partition()
        .size([2 * Math.PI, radius]);
    
    const root = partition(hierarchy);
    
    const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .innerRadius(d => d.y0)
        .outerRadius(d => d.y1);
    
    const color = d3.scaleOrdinal()
        .domain(['Total ARR', 'New ARR', 'Expansion ARR', 'Upsell', 'Cross-sell', 'Add-ons'])
        .range(['#1f2937', '#3b82f6', '#10b981', '#10b981', '#06b6d4', '#8b5cf6']);
    
    svg.selectAll('path')
        .data(root.descendants())
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => d.data.color || color(d.data.name))
        .attr('opacity', 0.8)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    svg.selectAll('text')
        .data(root.descendants().filter(d => d.depth > 0))
        .enter()
        .append('text')
        .attr('transform', d => {
            const angle = (d.x0 + d.x1) / 2 * 180 / Math.PI;
            const radius = (d.y0 + d.y1) / 2;
            return `rotate(${angle - 90}) translate(${radius},0) rotate(${angle < 180 ? 0 : 180})`;
        })
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('fill', 'white')
        .style('font-weight', 'bold')
        .text(d => d.data.name);
}

// 7. ARR/FTE Slope Chart
function createD3ARRFTESlope() {
    const container = d3.select('#d3-arr-fte-slope');
    container.html('');
    
    const margin = { top: 60, right: 100, bottom: 40, left: 100 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const data = [
        { team: 'Sales', start: 180000, end: 220000 },
        { team: 'Engineering', start: 195000, end: 250000 },
        { team: 'Marketing', start: 165000, end: 185000 },
        { team: 'Customer Success', start: 150000, end: 200000 },
        { team: 'Product', start: 185000, end: 240000 }
    ];
    
    const y = d3.scaleLinear()
        .domain([140000, 260000])
        .range([height, 0]);
    
    const x = d3.scalePoint()
        .domain(['2023', '2024'])
        .range([0, width]);
    
    const colors = d3.scaleOrdinal()
        .domain(data.map(d => d.team))
        .range(['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4']);
    
    // Add lines
    data.forEach(d => {
        svg.append('line')
            .attr('x1', x('2023'))
            .attr('y1', y(d.start))
            .attr('x2', x('2024'))
            .attr('y2', y(d.end))
            .attr('stroke', colors(d.team))
            .attr('stroke-width', 3)
            .attr('opacity', 0.7);
        
        // Start circles
        svg.append('circle')
            .attr('cx', x('2023'))
            .attr('cy', y(d.start))
            .attr('r', 5)
            .attr('fill', colors(d.team));
        
        // End circles
        svg.append('circle')
            .attr('cx', x('2024'))
            .attr('cy', y(d.end))
            .attr('r', 5)
            .attr('fill', colors(d.team));
        
        // Labels
        svg.append('text')
            .attr('x', x('2023') - 10)
            .attr('y', y(d.start) + 5)
            .attr('text-anchor', 'end')
            .style('font-size', '11px')
            .text(d.team);
        
        svg.append('text')
            .attr('x', x('2024') + 10)
            .attr('y', y(d.end) + 5)
            .style('font-size', '11px')
            .text('$' + (d.end / 1000).toFixed(0) + 'K');
    });
    
    // Add year labels
    svg.append('text')
        .attr('x', x('2023'))
        .attr('y', -20)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('2023');
    
    svg.append('text')
        .attr('x', x('2024'))
        .attr('y', -20)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('2024');
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -40)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('ARR per Employee: Department Comparison');
}

// 8. Rule of 40 Custom Score Visualization
function createD3Rule40Score() {
    const container = d3.select('#d3-rule40-score');
    container.html('');
    
    const width = 500;
    const height = 300;
    
    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);
    
    const growthRate = 45;
    const profitMargin = 28;
    const rule40Score = growthRate + profitMargin;
    
    const radius = 100;
    
    // Background circle
    svg.append('circle')
        .attr('r', radius)
        .attr('fill', 'none')
        .attr('stroke', '#e5e7eb')
        .attr('stroke-width', 20);
    
    // Score arc
    const arc = d3.arc()
        .innerRadius(radius - 10)
        .outerRadius(radius + 10)
        .startAngle(0)
        .endAngle((rule40Score / 100) * Math.PI * 2);
    
    svg.append('path')
        .attr('d', arc)
        .attr('fill', rule40Score >= 40 ? '#10b981' : '#ef4444');
    
    // Center score
    svg.append('text')
        .attr('y', 0)
        .attr('text-anchor', 'middle')
        .style('font-size', '48px')
        .style('font-weight', 'bold')
        .style('fill', rule40Score >= 40 ? '#10b981' : '#ef4444')
        .text(rule40Score);
    
    svg.append('text')
        .attr('y', 25)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6b7280')
        .text('Rule of 40 Score');
    
    // Growth and margin breakdown
    svg.append('text')
        .attr('y', -radius - 30)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#3b82f6')
        .text(`Growth: ${growthRate}%`);
    
    svg.append('text')
        .attr('y', radius + 45)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#10b981')
        .text(`Profit Margin: ${profitMargin}%`);
    
    // Status indicator
    svg.append('text')
        .attr('y', 50)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .style('fill', rule40Score >= 40 ? '#10b981' : '#ef4444')
        .text(rule40Score >= 40 ? '✓ Healthy' : '✗ Below Target');
}

// Initialize all D3.js SaaS visualizations
function initD3SaaSVisualizations() {
    createD3ARRArea();
    createD3NRRGauge();
    createD3CACTrend();
    createD3ChurnWaterfall();
    createD3LTVBubble();
    createD3ExpansionSunburst();
    createD3ARRFTESlope();
    createD3Rule40Score();
    
    console.log('✅ D3.js SaaS Visualizations loaded successfully!');
}

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.initD3SaaSVisualizations = initD3SaaSVisualizations;
}
