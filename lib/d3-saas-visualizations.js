// D3.js SaaS Visualizations with WSJ Color Palettes
// Financial Authority: Navy Dark (#1B2D4D), Slate Gray (#4A5568), Teal Accent (#2D7B8C), Burgundy Warning (#8B3A3A), Cream BG (#F5F4F0)
// Neutral Professional: Charcoal (#2C2C2C), Medium Gray (#6B7280), Light Gray (#D1D5DB), Forest Accent (#1F5233), Off-White (#F9F7F4)
// Dual-Purpose: Deep Teal (#0D5C63), Deep Plum (#6A3E37), Light Sage (#E8F1F0), Light Mauve (#F4EBE8), White (#FFFFFF)
// Single-Hue Progression: Blue 100 (#003A66), Blue 80 (#1A5C8C), Blue 60 (#4A7CB4), Blue 40 (#8AA8D1), Blue 20 (#D4E1F0)

// 1. ARR Gradient Area - Financial Authority Palette
function createARRGradientArea(containerId) {
    const container = d3.select(`#${containerId}`);
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Define gradient
    const gradient = svg.append('defs')
        .append('linearGradient')
        .attr('id', 'arr-gradient')
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', 0).attr('y1', 0)
        .attr('x2', 0).attr('y2', height);

    gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#1B2D4D')
        .attr('stop-opacity', 0.8);

    gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#2D7B8C')
        .attr('stop-opacity', 0.3);

    const data = [
        { month: 'Jan', arr: 1200 }, { month: 'Feb', arr: 1280 }, { month: 'Mar', arr: 1350 },
        { month: 'Apr', arr: 1420 }, { month: 'May', arr: 1510 }, { month: 'Jun', arr: 1590 },
        { month: 'Jul', arr: 1680 }, { month: 'Aug', arr: 1770 }, { month: 'Sep', arr: 1860 },
        { month: 'Oct', arr: 1950 }, { month: 'Nov', arr: 2040 }, { month: 'Dec', arr: 2150 }
    ];

    const x = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.arr) * 1.1])
        .range([height, 0]);

    // Add background
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#F5F4F0')
        .attr('opacity', 0.3);

    // Create area
    const area = d3.area()
        .x(d => x(d.month) + x.bandwidth() / 2)
        .y0(height)
        .y1(d => y(d.arr))
        .curve(d3.curveMonotoneX);

    svg.append('path')
        .datum(data)
        .attr('fill', 'url(#arr-gradient)')
        .attr('d', area);

    // Add line
    const line = d3.line()
        .x(d => x(d.month) + x.bandwidth() / 2)
        .y(d => y(d.arr))
        .curve(d3.curveMonotoneX);

    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#1B2D4D')
        .attr('stroke-width', 3)
        .attr('d', line);

    // Add axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .style('color', '#4A5568');

    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => `$${d}K`))
        .style('color', '#4A5568');

    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .style('fill', '#1B2D4D')
        .text('Annual Recurring Revenue Growth');
}

// 2. NRR Custom Gauge - Neutral Professional Palette
function createNRRCustomGauge(containerId) {
    const container = d3.select(`#${containerId}`);
    const width = 300;
    const height = 200;
    const nrrValue = 118;

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height);

    const g = svg.append('g')
        .attr('transform', `translate(${width / 2}, ${height - 20})`);

    // Background arc
    const arcBackground = d3.arc()
        .innerRadius(70)
        .outerRadius(90)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2);

    g.append('path')
        .attr('d', arcBackground)
        .attr('fill', '#D1D5DB');

    // Value arc
    const percentage = Math.min((nrrValue - 80) / (150 - 80), 1);
    const arcValue = d3.arc()
        .innerRadius(70)
        .outerRadius(90)
        .startAngle(-Math.PI / 2)
        .endAngle(-Math.PI / 2 + Math.PI * percentage);

    g.append('path')
        .attr('d', arcValue)
        .attr('fill', '#2C2C2C');

    // Add text
    g.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', -30)
        .style('font-size', '32px')
        .style('font-weight', 'bold')
        .style('fill', '#2C2C2C')
        .text(`${nrrValue}%`);

    g.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', 0)
        .style('font-size', '14px')
        .style('fill', '#6B7280')
        .text('Net Revenue Retention');

    // Add target marker
    const targetAngle = -Math.PI / 2 + Math.PI * ((110 - 80) / (150 - 80));
    g.append('line')
        .attr('x1', Math.cos(targetAngle) * 65)
        .attr('y1', Math.sin(targetAngle) * 65)
        .attr('x2', Math.cos(targetAngle) * 95)
        .attr('y2', Math.sin(targetAngle) * 95)
        .attr('stroke', '#1F5233')
        .attr('stroke-width', 3);
}

// 3. CAC Trend Line - Dual-Purpose Palette
function createCACTrendLine(containerId) {
    const container = d3.select(`#${containerId}`);
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = [
        { month: 'Jan', cac: 450 }, { month: 'Feb', cac: 480 }, { month: 'Mar', cac: 420 },
        { month: 'Apr', cac: 390 }, { month: 'May', cac: 410 }, { month: 'Jun', cac: 430 },
        { month: 'Jul', cac: 400 }, { month: 'Aug', cac: 380 }, { month: 'Sep', cac: 370 },
        { month: 'Oct', cac: 360 }, { month: 'Nov', cac: 350 }, { month: 'Dec', cac: 340 }
    ];

    const x = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.cac) * 1.2])
        .range([height, 0]);

    // Background
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#E8F1F0')
        .attr('opacity', 0.3);

    // Line
    const line = d3.line()
        .x(d => x(d.month) + x.bandwidth() / 2)
        .y(d => y(d.cac))
        .curve(d3.curveMonotoneX);

    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#0D5C63')
        .attr('stroke-width', 3)
        .attr('d', line);

    // Points
    svg.selectAll('.dot')
        .data(data)
        .enter().append('circle')
        .attr('cx', d => x(d.month) + x.bandwidth() / 2)
        .attr('cy', d => y(d.cac))
        .attr('r', 5)
        .attr('fill', '#6A3E37')
        .attr('stroke', '#0D5C63')
        .attr('stroke-width', 2);

    // Axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .style('color', '#0D5C63');

    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => `$${d}`))
        .style('color', '#0D5C63');

    // Title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .style('fill', '#0D5C63')
        .text('Customer Acquisition Cost Trend');
}

// 4. Customer Waterfall - Neutral Professional Palette
function createCustomerWaterfall(containerId) {
    const container = d3.select(`#${containerId}`);
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = [
        { label: 'Starting', value: 10000, type: 'start' },
        { label: 'New', value: 1200, type: 'positive' },
        { label: 'Expansion', value: 300, type: 'positive' },
        { label: 'Churn', value: -500, type: 'negative' },
        { label: 'Ending', value: 11000, type: 'end' }
    ];

    // Calculate cumulative values
    let cumulative = 0;
    data.forEach(d => {
        d.start = cumulative;
        if (d.type === 'start' || d.type === 'end') {
            cumulative = d.value;
        } else {
            cumulative += d.value;
        }
        d.end = cumulative;
    });

    const x = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([0, width])
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.start, d.end)) * 1.1])
        .range([height, 0]);

    // Background
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#F9F7F4')
        .attr('opacity', 0.5);

    // Bars
    svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.label))
        .attr('y', d => y(Math.max(d.start, d.end)))
        .attr('width', x.bandwidth())
        .attr('height', d => Math.abs(y(d.start) - y(d.end)))
        .attr('fill', d => {
            if (d.type === 'start' || d.type === 'end') return '#2C2C2C';
            if (d.type === 'positive') return '#1F5233';
            return '#6B7280';
        })
        .attr('stroke', '#2C2C2C')
        .attr('stroke-width', 1);

    // Connecting lines
    for (let i = 0; i < data.length - 1; i++) {
        svg.append('line')
            .attr('x1', x(data[i].label) + x.bandwidth())
            .attr('y1', y(data[i].end))
            .attr('x2', x(data[i + 1].label))
            .attr('y2', y(data[i].end))
            .attr('stroke', '#D1D5DB')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '3,3');
    }

    // Axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .style('color', '#2C2C2C');

    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => `${d / 1000}K`))
        .style('color', '#2C2C2C');

    // Title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .style('fill', '#2C2C2C')
        .text('Customer Base Waterfall');
}

// 5. LTV Bubble Chart - Single-Hue Progression Palette
function createLTVBubbleChart(containerId) {
    const container = d3.select(`#${containerId}`);
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = [
        { segment: 'Enterprise', ltv: 15000, customers: 250, retention: 98 },
        { segment: 'Mid-Market', ltv: 9000, customers: 800, retention: 95 },
        { segment: 'SMB', ltv: 5000, customers: 2500, retention: 88 },
        { segment: 'Startup', ltv: 2200, customers: 5000, retention: 75 }
    ];

    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.ltv) * 1.1])
        .range([0, width]);

    const y = d3.scaleLinear()
        .domain([70, 100])
        .range([height, 0]);

    const size = d3.scaleSqrt()
        .domain([0, d3.max(data, d => d.customers)])
        .range([0, 50]);

    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.segment))
        .range(['#003A66', '#1A5C8C', '#4A7CB4', '#8AA8D1']);

    // Background
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#D4E1F0')
        .attr('opacity', 0.3);

    // Grid
    svg.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(y).tickSize(-width).tickFormat(''))
        .style('stroke', '#8AA8D1')
        .style('stroke-opacity', 0.3);

    // Bubbles
    svg.selectAll('.bubble')
        .data(data)
        .enter().append('circle')
        .attr('class', 'bubble')
        .attr('cx', d => x(d.ltv))
        .attr('cy', d => y(d.retention))
        .attr('r', d => size(d.customers))
        .attr('fill', d => color(d.segment))
        .attr('opacity', 0.7)
        .attr('stroke', '#003A66')
        .attr('stroke-width', 2);

    // Labels
    svg.selectAll('.label')
        .data(data)
        .enter().append('text')
        .attr('x', d => x(d.ltv))
        .attr('y', d => y(d.retention))
        .attr('text-anchor', 'middle')
        .attr('dy', '.35em')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#003A66')
        .text(d => d.segment);

    // Axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d => `$${d / 1000}K`))
        .style('color', '#003A66');

    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => `${d}%`))
        .style('color', '#003A66');

    // Axis labels
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + 40)
        .attr('text-anchor', 'middle')
        .style('fill', '#003A66')
        .text('Customer Lifetime Value');

    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -45)
        .attr('text-anchor', 'middle')
        .style('fill', '#003A66')
        .text('Retention Rate (%)');

    // Title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .style('fill', '#003A66')
        .text('LTV by Segment (Bubble size = Customer Count)');
}

// 6. Expansion Sunburst - Financial Authority Palette
function createExpansionSunburst(containerId) {
    const container = d3.select(`#${containerId}`);
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    const data = {
        name: 'Total ARR',
        value: 2150,
        children: [
            {
                name: 'New ARR',
                value: 600,
                children: [
                    { name: 'Enterprise', value: 300 },
                    { name: 'Mid-Market', value: 200 },
                    { name: 'SMB', value: 100 }
                ]
            },
            {
                name: 'Expansion ARR',
                value: 350,
                children: [
                    { name: 'Upsell', value: 200 },
                    { name: 'Cross-sell', value: 150 }
                ]
            },
            {
                name: 'Existing ARR',
                value: 1200
            }
        ]
    };

    const hierarchy = d3.hierarchy(data)
        .sum(d => d.value);

    const partition = d3.partition()
        .size([2 * Math.PI, radius]);

    partition(hierarchy);

    const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .innerRadius(d => d.y0)
        .outerRadius(d => d.y1);

    const color = d3.scaleOrdinal()
        .domain(['Total ARR', 'New ARR', 'Expansion ARR', 'Existing ARR', 'Enterprise', 'Mid-Market', 'SMB', 'Upsell', 'Cross-sell'])
        .range(['#1B2D4D', '#2D7B8C', '#4A5568', '#F5F4F0', '#1B2D4D', '#2D7B8C', '#4A5568', '#2D7B8C', '#4A5568']);

    svg.selectAll('path')
        .data(hierarchy.descendants())
        .enter().append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.name))
        .attr('stroke', '#1B2D4D')
        .attr('stroke-width', 2)
        .style('opacity', 0.8)
        .append('title')
        .text(d => `${d.data.name}: $${d.value}K`);

    // Center label
    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '.35em')
        .style('font-size', '20px')
        .style('font-weight', 'bold')
        .style('fill', '#1B2D4D')
        .text('$2.15M');
}

// 7. Efficiency Slope - Single-Hue Progression Palette
function createEfficiencySlope(containerId) {
    const container = d3.select(`#${containerId}`);
    const margin = { top: 40, right: 100, bottom: 50, left: 100 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = [
        { metric: 'ARR/FTE', q1: 180, q4: 265 },
        { metric: 'CAC', q1: 450, q4: 340 },
        { metric: 'LTV:CAC', q1: 2.8, q4: 4.3 },
        { metric: 'Churn %', q1: 3.2, q4: 1.8 }
    ];

    const y = d3.scaleBand()
        .domain(data.map(d => d.metric))
        .range([0, height])
        .padding(0.3);

    const x1 = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.q1, d.q4)) * 1.1])
        .range([0, width / 2 - 20]);

    const x2 = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.q1, d.q4)) * 1.1])
        .range([width / 2 + 20, width]);

    // Background
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#D4E1F0')
        .attr('opacity', 0.2);

    // Slopes
    data.forEach((d, i) => {
        const colors = ['#003A66', '#1A5C8C', '#4A7CB4', '#8AA8D1'];
        
        svg.append('line')
            .attr('x1', x1(d.q1))
            .attr('y1', y(d.metric) + y.bandwidth() / 2)
            .attr('x2', x2(d.q4))
            .attr('y2', y(d.metric) + y.bandwidth() / 2)
            .attr('stroke', colors[i])
            .attr('stroke-width', 3);

        // Left point
        svg.append('circle')
            .attr('cx', x1(d.q1))
            .attr('cy', y(d.metric) + y.bandwidth() / 2)
            .attr('r', 6)
            .attr('fill', colors[i]);

        // Right point
        svg.append('circle')
            .attr('cx', x2(d.q4))
            .attr('cy', y(d.metric) + y.bandwidth() / 2)
            .attr('r', 6)
            .attr('fill', colors[i]);

        // Labels
        svg.append('text')
            .attr('x', x1(d.q1) - 10)
            .attr('y', y(d.metric) + y.bandwidth() / 2)
            .attr('text-anchor', 'end')
            .attr('dy', '.35em')
            .style('fill', colors[i])
            .style('font-size', '12px')
            .text(d.q1);

        svg.append('text')
            .attr('x', x2(d.q4) + 10)
            .attr('y', y(d.metric) + y.bandwidth() / 2)
            .attr('text-anchor', 'start')
            .attr('dy', '.35em')
            .style('fill', colors[i])
            .style('font-size', '12px')
            .text(d.q4);
    });

    // Metric labels
    svg.selectAll('.metric-label')
        .data(data)
        .enter().append('text')
        .attr('x', width / 2)
        .attr('y', d => y(d.metric) + y.bandwidth() / 2)
        .attr('text-anchor', 'middle')
        .attr('dy', '.35em')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .style('fill', '#003A66')
        .text(d => d.metric);

    // Period labels
    svg.append('text')
        .attr('x', width / 4 - 10)
        .attr('y', -20)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .style('fill', '#003A66')
        .text('Q1 2023');

    svg.append('text')
        .attr('x', 3 * width / 4 + 10)
        .attr('y', -20)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .style('fill', '#003A66')
        .text('Q4 2023');

    // Title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -30)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .style('fill', '#003A66')
        .text('Efficiency Metrics Improvement');
}

// 8. Rule of 40 Score - Single-Hue Progression Palette
function createRuleOf40Score(containerId) {
    const container = d3.select(`#${containerId}`);
    const margin = { top: 60, right: 30, bottom: 50, left: 60 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = container.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = [
        { quarter: 'Q1 2023', growth: 25, margin: 10, score: 35 },
        { quarter: 'Q2 2023', growth: 28, margin: 12, score: 40 },
        { quarter: 'Q3 2023', growth: 30, margin: 14, score: 44 },
        { quarter: 'Q4 2023', growth: 32, margin: 15, score: 47 },
        { quarter: 'Q1 2024', growth: 35, margin: 16, score: 51 },
        { quarter: 'Q2 2024', growth: 38, margin: 18, score: 56 }
    ];

    const x = d3.scaleBand()
        .domain(data.map(d => d.quarter))
        .range([0, width])
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0, 60])
        .range([height, 0]);

    // Background with target zone
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#D4E1F0')
        .attr('opacity', 0.2);

    svg.append('rect')
        .attr('y', y(60))
        .attr('width', width)
        .attr('height', y(40) - y(60))
        .attr('fill', '#8AA8D1')
        .attr('opacity', 0.2);

    // Target line at 40
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', y(40))
        .attr('y2', y(40))
        .attr('stroke', '#003A66')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5');

    svg.append('text')
        .attr('x', width - 5)
        .attr('y', y(40) - 5)
        .attr('text-anchor', 'end')
        .style('fill', '#003A66')
        .style('font-size', '12px')
        .text('Rule of 40 Target');

    // Bars with gradient
    const colorScale = d3.scaleLinear()
        .domain([35, 56])
        .range(['#4A7CB4', '#003A66']);

    svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.quarter))
        .attr('y', d => y(d.score))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.score))
        .attr('fill', d => colorScale(d.score))
        .attr('stroke', '#003A66')
        .attr('stroke-width', 1);

    // Score labels
    svg.selectAll('.score-label')
        .data(data)
        .enter().append('text')
        .attr('x', d => x(d.quarter) + x.bandwidth() / 2)
        .attr('y', d => y(d.score) - 5)
        .attr('text-anchor', 'middle')
        .style('fill', '#003A66')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .text(d => d.score + '%');

    // Axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .style('color', '#003A66');

    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => d + '%'))
        .style('color', '#003A66');

    // Title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', -40)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .style('fill', '#003A66')
        .text('Rule of 40 Score (Growth + Margin)');

    // Legend
    const legend = svg.append('g')
        .attr('transform', `translate(10, -30)`);

    legend.append('rect')
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#4A7CB4');

    legend.append('text')
        .attr('x', 20)
        .attr('y', 12)
        .style('font-size', '12px')
        .style('fill', '#003A66')
        .text('Growth Rate + Profit Margin');
}

// Export functions for use in HTML
window.D3SaaSCharts = {
    createARRGradientArea,
    createNRRCustomGauge,
    createCACTrendLine,
    createCustomerWaterfall,
    createLTVBubbleChart,
    createExpansionSunburst,
    createEfficiencySlope,
    createRuleOf40Score
};

console.log('✅ D3.js SaaS Visualizations with WSJ Color Palettes loaded successfully!');
