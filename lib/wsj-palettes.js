/**
 * WSJ (Wall Street Journal) Color Palette System
 * Professional color schemes for SaaS metrics visualization
 */

// Utility function to convert HEX to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Palette 1: Financial Authority
const financialAuthority = {
    name: 'Financial Authority',
    description: 'Conservative, institutional tone. Navy foundation with muted accents.',
    useCase: 'ARR, growth metrics, primary dashboard',
    colors: [
        { name: 'Navy Dark', hex: '#1B2D4D', role: 'Primary' },
        { name: 'Slate Gray', hex: '#4A5568', role: 'Secondary' },
        { name: 'Teal Accent', hex: '#2D7B8C', role: 'Accent' },
        { name: 'Burgundy', hex: '#8B3A3A', role: 'Warning' },
        { name: 'Cream Background', hex: '#F5F4F0', role: 'Background' }
    ]
};

// Palette 2: Neutral Professional
const neutralProfessional = {
    name: 'Neutral Professional',
    description: 'Grayscale-first approach with single bright accent. Maximum accessibility.',
    useCase: 'Churn rates, retention metrics, comparative analysis',
    colors: [
        { name: 'Charcoal', hex: '#2C2C2C', role: 'Primary' },
        { name: 'Medium Gray', hex: '#6B7280', role: 'Secondary' },
        { name: 'Light Gray', hex: '#D1D5DB', role: 'Tertiary' },
        { name: 'Forest Accent', hex: '#1F5233', role: 'Accent' },
        { name: 'Off-White', hex: '#F9F7F4', role: 'Background' }
    ]
};

// Palette 3: Dual-Purpose
const dualPurpose = {
    name: 'Dual-Purpose',
    description: 'Paired opposing colors for comparison. Good vs. bad contrast. High lightness difference.',
    useCase: 'CAC payback, LTV:CAC ratio, expansion vs. churn',
    colors: [
        { name: 'Deep Teal', hex: '#0D5C63', role: 'Primary/Positive' },
        { name: 'Deep Plum', hex: '#6A3E37', role: 'Secondary/Negative' },
        { name: 'Light Sage', hex: '#E8F1F0', role: 'Background/Positive' },
        { name: 'Light Mauve', hex: '#F4EBE8', role: 'Background/Negative' },
        { name: 'White', hex: '#FFFFFF', role: 'Background' }
    ]
};

// Palette 4: Single-Hue Progression
const singleHueProgression = {
    name: 'Single-Hue Progression',
    description: 'One color family in varying saturations. Clean, minimal, most accessible.',
    useCase: 'NRR tracking, ARR per employee, Rule of 40 progression',
    colors: [
        { name: 'Dark Blue (100%)', hex: '#003A66', role: 'Darkest' },
        { name: 'Blue (80%)', hex: '#1A5C8C', role: 'Dark' },
        { name: 'Blue (60%)', hex: '#4A7CB4', role: 'Medium' },
        { name: 'Blue (40%)', hex: '#8AA8D1', role: 'Light' },
        { name: 'Blue (20%)', hex: '#D4E1F0', role: 'Lightest' }
    ]
};

// Add RGB values to all palettes
const palettes = [
    financialAuthority,
    neutralProfessional,
    dualPurpose,
    singleHueProgression
];

palettes.forEach(palette => {
    palette.colors.forEach(color => {
        const rgb = hexToRgb(color.hex);
        color.rgb = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        color.rgbValues = rgb;
    });
});

// Export palettes
const WSJPalettes = {
    financialAuthority,
    neutralProfessional,
    dualPurpose,
    singleHueProgression,
    all: palettes
};

// Also export as individual arrays for easy Chart.js integration
const WSJColors = {
    financialAuthority: financialAuthority.colors.map(c => c.hex),
    neutralProfessional: neutralProfessional.colors.map(c => c.hex),
    dualPurpose: dualPurpose.colors.map(c => c.hex),
    singleHueProgression: singleHueProgression.colors.map(c => c.hex)
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WSJPalettes, WSJColors };
}
