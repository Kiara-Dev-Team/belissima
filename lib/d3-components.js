// D3.js Components for Belissima Dashboard

function initD3Charts() {
    console.log('🎨 Initializing D3.js visualizations...');

    // 1. Tree Map - Market Segments
    createTreeMap();

    // 2. Force-Directed Graph - Organizational Network
    createForceGraph();

    // 3. Chord Diagram - Department Interactions
    createChordDiagram();

    console.log('✅ D3.js charts initialized successfully!');
}

// Tree Map - Market Segments
function createTreeMap() {
    const container = d3.select('#d3TreeMap');
    const containerNode = container.node();
    const width = containerNode.offsetWidth;
    const height = 400;

    const data = {
        name: 'Market Segments',
        children: [
            {
                name: 'Enterprise',
                value: 450,
                color: '#667eea'
            },
            {
                name: 'Mid-Market',
                value: 320,
                color: '#764ba2'
            },
            {
                name: 'Small Business',
                value: 280,
                color: '#4CAF50'
            },
            {
                name: 'Startups',
                value: 180,
                color: '#FF9800'
            },
            {
                name: 'Government',
                value: 150,
                color: '#2196F3'
            },
            {
                name: 'Education',
                value: 120,
                color: '#9C27B0'
            }
        ]
    };

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height);

    const root = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);

    d3.treemap()
        .size([width, height])
        .padding(2)
        .round(true)(root);

    const nodes = svg.selectAll('g')
        .data(root.leaves())
        .join('g')
        .attr('transform', d => `translate(${d.x0},${d.y0})`);

    nodes.append('rect')
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('fill', d => d.data.color)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .style('opacity', 0.8)
        .on('mouseover', function() {
            d3.select(this).style('opacity', 1);
        })
        .on('mouseout', function() {
            d3.select(this).style('opacity', 0.8);
        });

    nodes.append('text')
        .attr('x', 5)
        .attr('y', 20)
        .text(d => d.data.name)
        .attr('font-size', '14px')
        .attr('fill', '#fff')
        .attr('font-weight', 'bold');

    nodes.append('text')
        .attr('x', 5)
        .attr('y', 40)
        .text(d => `$${d.data.value}K`)
        .attr('font-size', '12px')
        .attr('fill', '#fff');
}

// Force-Directed Graph - Organizational Network
function createForceGraph() {
    const container = d3.select('#d3ForceGraph');
    const containerNode = container.node();
    const width = containerNode.offsetWidth;
    const height = 400;

    const nodes = [
        { id: 'CEO', group: 1, size: 20 },
        { id: 'CTO', group: 2, size: 15 },
        { id: 'CFO', group: 3, size: 15 },
        { id: 'CMO', group: 4, size: 15 },
        { id: 'Engineering', group: 2, size: 12 },
        { id: 'Product', group: 2, size: 12 },
        { id: 'Finance', group: 3, size: 10 },
        { id: 'Accounting', group: 3, size: 10 },
        { id: 'Marketing', group: 4, size: 10 },
        { id: 'Sales', group: 4, size: 10 }
    ];

    const links = [
        { source: 'CEO', target: 'CTO', value: 3 },
        { source: 'CEO', target: 'CFO', value: 3 },
        { source: 'CEO', target: 'CMO', value: 3 },
        { source: 'CTO', target: 'Engineering', value: 2 },
        { source: 'CTO', target: 'Product', value: 2 },
        { source: 'CFO', target: 'Finance', value: 2 },
        { source: 'CFO', target: 'Accounting', value: 2 },
        { source: 'CMO', target: 'Marketing', value: 2 },
        { source: 'CMO', target: 'Sales', value: 2 },
        { source: 'Product', target: 'Marketing', value: 1 },
        { source: 'Engineering', target: 'Product', value: 1 }
    ];

    const color = d3.scaleOrdinal()
        .domain([1, 2, 3, 4])
        .range(['#667eea', '#764ba2', '#4CAF50', '#FF9800']);

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height);

    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(80))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.size + 5));

    const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .attr('stroke-width', d => d.value * 2);

    const node = svg.append('g')
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', d => d.size)
        .attr('fill', d => color(d.group))
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .call(drag(simulation));

    const labels = svg.append('g')
        .selectAll('text')
        .data(nodes)
        .join('text')
        .text(d => d.id)
        .attr('font-size', '11px')
        .attr('text-anchor', 'middle')
        .attr('dy', 4)
        .attr('fill', '#fff')
        .attr('pointer-events', 'none');

    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);

        labels
            .attr('x', d => d.x)
            .attr('y', d => d.y);
    });

    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
    }
}

// Chord Diagram - Department Interactions
function createChordDiagram() {
    const container = d3.select('#d3Chord');
    const containerNode = container.node();
    const width = containerNode.offsetWidth;
    const height = 400;
    const outerRadius = Math.min(width, height) * 0.45;
    const ribbonWidth = 30;
    const innerRadius = outerRadius - ribbonWidth;

    const matrix = [
        [0, 5, 3, 2, 4],  // Sales interactions
        [5, 0, 4, 3, 2],  // Marketing interactions
        [3, 4, 0, 5, 3],  // Engineering interactions
        [2, 3, 5, 0, 4],  // Product interactions
        [4, 2, 3, 4, 0]   // Support interactions
    ];

    const departments = ['Sales', 'Marketing', 'Engineering', 'Product', 'Support'];
    const colors = ['#667eea', '#764ba2', '#4CAF50', '#FF9800', '#2196F3'];

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    const chord = d3.chord()
        .padAngle(0.05)
        .sortSubgroups(d3.descending);

    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    const ribbon = d3.ribbon()
        .radius(innerRadius);

    const chords = chord(matrix);

    // Draw outer arcs
    const group = svg.append('g')
        .selectAll('g')
        .data(chords.groups)
        .join('g');

    group.append('path')
        .attr('fill', (d, i) => colors[i])
        .attr('stroke', (d, i) => colors[i])
        .attr('d', arc)
        .on('mouseover', function() {
            d3.select(this).attr('opacity', 0.8);
        })
        .on('mouseout', function() {
            d3.select(this).attr('opacity', 1);
        });

    group.append('text')
        .each(d => { d.angle = (d.startAngle + d.endAngle) / 2; })
        .attr('dy', '.35em')
        .attr('transform', d => `
            rotate(${(d.angle * 180 / Math.PI - 90)})
            translate(${outerRadius + 15})
            ${d.angle > Math.PI ? 'rotate(180)' : ''}
        `)
        .attr('text-anchor', d => d.angle > Math.PI ? 'end' : 'start')
        .attr('font-size', '12px')
        .attr('fill', '#333')
        .text((d, i) => departments[i]);

    // Draw ribbons
    svg.append('g')
        .attr('fill-opacity', 0.67)
        .selectAll('path')
        .data(chords)
        .join('path')
        .attr('d', ribbon)
        .attr('fill', d => colors[d.target.index])
        .attr('stroke', '#fff')
        .attr('stroke-width', 0.5)
        .on('mouseover', function() {
            d3.select(this).attr('fill-opacity', 0.9);
        })
        .on('mouseout', function() {
            d3.select(this).attr('fill-opacity', 0.67);
        });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initD3Charts);
} else {
    initD3Charts();
}
