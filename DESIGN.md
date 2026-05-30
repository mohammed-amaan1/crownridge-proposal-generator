# Google Stitch Design System (DESIGN.md)
This design system defines the visual guidelines and design tokens for the AI Proposal Generator, mimicking a modern, Google Labs-style interactive canvas.

## Theme Configuration
- **Primary / Accent Gradients:** Indigo to Pink-Violet gradient representing Gemini AI.
- **Background Grid:** Subtle dot grid pattern on light gray surface, giving a prototyping workspace feel.
- **Card Surfaces:** High-contrast slate card containers with soft shadows and rounded corners (`16px`).

## Design Tokens

```json
{
  "theme": "Stitch Labs Dark Slate",
  "colors": {
    "background": "#0b0f19",
    "surface": "#131b2e",
    "primary": "#6366f1",
    "primary-light": "#818cf8",
    "primary-gradient": "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
    "secondary": "#22d3ee",
    "neutral-dark": "#f8fafc",
    "neutral-medium": "#94a3b8",
    "neutral-light": "#070a13",
    "border": "#223049",
    "success": "#10b981",
    "warning": "#fbbf24",
    "danger": "#f87171"
  },
  "typography": {
    "font-family-display": "'Outfit', system-ui, -apple-system, sans-serif",
    "font-family-sans": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    "sizes": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem"
    }
  },
  "spacing": {
    "unit": "4px",
    "padding-sidebar": "24px",
    "padding-canvas": "32px",
    "gap-layout": "24px",
    "gap-grid": "16px"
  },
  "borders": {
    "radius-small": "6px",
    "radius-medium": "12px",
    "radius-large": "16px",
    "radius-full": "9999px"
  },
  "shadows": {
    "sm": "0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
    "glow": "0 0 15px 0 rgba(99, 102, 241, 0.15)"
  }
}
```

## Component Guidelines
1. **Inputs:** Floating label transitions, glassmorphic active outline focus state.
2. **Buttons:** Primary buttons use the `primary-gradient` with subtle scale-down feedback on click.
3. **Canvas Workspace:** Side-by-side flexbox configuration. Scrollbars styled minimal.
4. **Markdown Rendering:** Clean typography, customized table layouts, blockquote accents using `#6366f1` borders.
