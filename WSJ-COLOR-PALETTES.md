# WSJ Color Palettes - Accessibility & Usage Guide

## Overview
This document provides detailed information about the WSJ-inspired color palettes used in the Belissima SaaS Metrics Dashboard, including accessibility compliance and usage guidelines.

## Color Palettes

### 1. Financial Authority Palette
**Use case**: Growth metrics and primary financial indicators (ARR, GRR, Expansion)

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Navy Dark | #1B2D4D | rgb(27, 45, 77) | Primary lines, text, dark elements |
| Slate Gray | #4A5568 | rgb(74, 85, 104) | Secondary elements, supporting text |
| Teal Accent | #2D7B8C | rgb(45, 123, 140) | Accent lines, highlights, positive indicators |
| Burgundy Warning | #8B3A3A | rgb(139, 58, 58) | Alerts, warnings, threshold breaches |
| Cream BG | #F5F4F0 | rgb(245, 244, 240) | Chart backgrounds, light fill areas |

### 2. Neutral Professional Palette
**Use case**: Retention analysis and churn metrics (NRR, Churn, Customer Retention)

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Charcoal | #2C2C2C | rgb(44, 44, 44) | Primary text, dark bars/lines |
| Medium Gray | #6B7280 | rgb(107, 114, 128) | Secondary elements, grid lines |
| Light Gray | #D1D5DB | rgb(209, 213, 219) | Backgrounds, fills, subtle indicators |
| Forest Accent | #1F5233 | rgb(31, 82, 51) | Positive growth, success indicators |
| Off-White | #F9F7F4 | rgb(249, 247, 244) | Chart backgrounds, light areas |

### 3. Dual-Purpose Palette
**Use case**: Comparisons and contrasts (CAC, Payback Period, LTV:CAC Ratio)

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Deep Teal | #0D5C63 | rgb(13, 92, 99) | Primary comparison element |
| Deep Plum | #6A3E37 | rgb(106, 62, 55) | Secondary comparison element |
| Light Sage | #E8F1F0 | rgb(232, 241, 240) | Background, confidence bands |
| Light Mauve | #F4EBE8 | rgb(244, 235, 232) | Background, confidence bands |
| White | #FFFFFF | rgb(255, 255, 255) | Clean backgrounds |

### 4. Single-Hue Progression Palette
**Use case**: Single-series metrics and efficiency indicators (LTV, Rule of 40, ARR/FTE)

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Blue 100 (Darkest) | #003A66 | rgb(0, 58, 102) | Primary dark elements, strong emphasis |
| Blue 80 | #1A5C8C | rgb(26, 92, 140) | Secondary dark elements |
| Blue 60 (Mid) | #4A7CB4 | rgb(74, 124, 180) | Mid-range values, balanced emphasis |
| Blue 40 | #8AA8D1 | rgb(138, 168, 209) | Light emphasis, supporting elements |
| Blue 20 (Lightest) | #D4E1F0 | rgb(212, 225, 240) | Backgrounds, light fills, subtle indicators |

## WCAG AA Accessibility Compliance

### Contrast Ratio Testing Results
All color combinations were tested for WCAG AA compliance (minimum 4.5:1 contrast ratio for normal text):

| Foreground | Background | Contrast Ratio | Status | Use Case |
|------------|------------|----------------|--------|----------|
| Navy Dark (#1B2D4D) | Cream BG (#F5F4F0) | 12.48:1 | ✅ PASS | Text on Financial Authority charts |
| Teal Accent (#2D7B8C) | Cream BG (#F5F4F0) | 4.41:1 | ⚠️ Near-Pass* | Chart elements (non-text) |
| Slate Gray (#4A5568) | Cream BG (#F5F4F0) | 6.84:1 | ✅ PASS | Supporting text |
| Charcoal (#2C2C2C) | Off-White (#F9F7F4) | 13.06:1 | ✅ PASS | Text on Neutral Professional charts |
| Forest Accent (#1F5233) | Off-White (#F9F7F4) | 8.49:1 | ✅ PASS | Accent text and indicators |
| Medium Gray (#6B7280) | Off-White (#F9F7F4) | 4.52:1 | ✅ PASS | Secondary text |
| Deep Teal (#0D5C63) | Light Sage (#E8F1F0) | 6.70:1 | ✅ PASS | Text on Dual-Purpose charts |
| Deep Plum (#6A3E37) | Light Mauve (#F4EBE8) | 7.59:1 | ✅ PASS | Text on Dual-Purpose charts |
| Deep Teal (#0D5C63) | White (#FFFFFF) | 7.70:1 | ✅ PASS | Text on white backgrounds |
| Blue 100 (#003A66) | Blue 20 (#D4E1F0) | 8.81:1 | ✅ PASS | Text on Single-Hue charts |
| Blue 80 (#1A5C8C) | Blue 20 (#D4E1F0) | 5.36:1 | ✅ PASS | Secondary text |
| Blue 100 (#003A66) | White (#FFFFFF) | 11.69:1 | ✅ PASS | Text on white backgrounds |

**Overall Compliance Rate: 91.7% (11/12 combinations pass)**

*Note: Teal Accent on Cream BG (4.41:1) is slightly below the 4.5:1 threshold but is only used for chart lines and graphical elements, not for body text. This is acceptable per WCAG guidelines for non-text content.

## Usage Guidelines

### Text Contrast
- **Minimum ratio**: 4.5:1 for normal text (WCAG AA Level)
- **Recommended ratio**: 7:1 for enhanced readability (WCAG AAA Level)
- Always use dark colors (Navy Dark, Charcoal, Deep Teal, Blue 100) for text
- Always use light colors (Cream BG, Off-White, Light Sage, Blue 20, White) for backgrounds

### Chart Backgrounds
- Use light palette colors exclusively: Cream (#F5F4F0), Off-White (#F9F7F4), Light Sage (#E8F1F0), Light Mauve (#F4EBE8), Blue 20 (#D4E1F0)
- Apply subtle opacity (20-40%) for non-intrusive backgrounds
- Ensure grid lines use light grays at 30-50% opacity

### Accent Colors and Call-outs
- **Primary emphasis**: Navy Dark (#1B2D4D), Charcoal (#2C2C2C), Blue 100 (#003A66)
- **Positive indicators**: Teal Accent (#2D7B8C), Forest Accent (#1F5233)
- **Warnings/Alerts**: Burgundy Warning (#8B3A3A)

### Gradients
- Use Single-Hue Progression palette for smooth, professional gradients
- Progress from Blue 100 (dark) to Blue 20 (light) for upward trends
- Use Financial Authority gradient (Navy Dark to Teal Accent) for ARR visualizations

### Grid Lines and Axes
- Use light grays (Light Gray #D1D5DB, Medium Gray #6B7280) at 30-50% opacity
- Keep grid lines subtle to avoid visual clutter
- Use solid, darker colors for axis lines

### Legends
- Position consistently (top or bottom)
- Use dark text on light backgrounds
- Maintain adequate spacing (minimum 15px padding)
- Use larger font sizes (12-14px) for readability

## Responsive Design Considerations

### Mobile (< 768px)
- Increase touch target sizes to minimum 44x44px
- Use larger fonts for readability
- Simplify color gradients for better performance
- Consider single-column layouts

### Tablet (768px - 1200px)
- Maintain 2-column grid layouts
- Preserve full color palette fidelity
- Adjust chart aspect ratios for optimal viewing

### Desktop (> 1200px)
- Full multi-column layouts
- All interactive features enabled
- Maximum detail in visualizations

## Color Blindness Considerations

### Deuteranopia (Red-Green Color Blindness)
- ✅ Good: Blue-based palettes (Single-Hue Progression) work well
- ✅ Good: Teal vs Navy provides sufficient contrast
- ⚠️ Caution: Avoid relying solely on Burgundy Warning vs Forest Accent for critical distinctions

### Protanopia (Red-Weak)
- ✅ Good: All blue and teal colors remain distinguishable
- ✅ Good: Charcoal vs Forest Accent provides shape/pattern differentiation

### Tritanopia (Blue-Yellow Color Blindness)
- ✅ Good: Dual-Purpose palette (Deep Teal vs Deep Plum) maintains contrast
- ✅ Good: Pattern and position differentiation in charts

### Best Practices
1. Always use patterns, shapes, or labels in addition to color
2. Provide alternative text descriptions for charts
3. Test visualizations in grayscale mode
4. Use icons and symbols to supplement color coding

## Testing Checklist

- [x] Verify contrast ratios for all text/background combinations
- [x] Test all color combinations for colorblindness
- [x] Check visualizations in grayscale mode
- [x] Test on mobile, tablet, and desktop viewports
- [x] Validate color consistency across all three libraries (Chart.js, Plotly.js, D3.js)
- [x] Ensure all tooltips and labels are readable
- [x] Verify interactive elements meet minimum size requirements
- [x] Check print preview with grayscale printing

## Implementation Files

- **CSS Variables**: `/styles.css` (lines 5-31)
- **Chart.js Library**: `/lib/chartjs-saas-metrics.js` (661 lines)
- **Plotly.js Library**: `/lib/plotly-saas-analytics.js` (340 lines)
- **D3.js Library**: `/lib/d3-saas-visualizations.js` (814 lines)
- **Main Dashboard**: `/saas-dashboard.html`

## References

- [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colorblind Accessibility](https://www.w3.org/WAI/perspective-videos/colors/)
- [Wall Street Journal Visual Style Guide](https://wsj.com/graphics-styleguide/)

---

Last Updated: December 22, 2025
