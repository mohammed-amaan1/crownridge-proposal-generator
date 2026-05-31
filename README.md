# Crownridge LLP - AI Proposal Generator

A high-fidelity, interactive React prototype designed for **Crownridge LLP** (IT Consultancy & Software Services) to streamline the creation of software proposals. The application features a dual-engine architecture supporting both offline mock evaluations and live Gemini API generation.

The user interface is inspired by the **Google Labs Stitch** design system, featuring a side-by-side workspace panel layout, responsive typography, and specialized print media queries for polished PDF exports.

---

## 🚀 Key Features

*   **Google Stitch Design Aesthetic:** A premium, modern interface mimicking a high-fidelity prototyping canvas with clean panels, optimized spacing, and coordinated dark/light mode accents.
*   **Double Evaluation Engine:**
    *   *Offline Demo Mode:* A smart mock proposal generator that returns pre-formatted software architectural layouts, sprint schedules, and itemized cost calculations instantly—no API key required.
    *   *Live GenAI Mode:* Full integration with Gemini models (Gemini 2.5 Flash, 2.5 Pro, 1.5 Flash, 2.0 Flash) to generate fully customized, tailored software proposals in real time.
*   **Client-Ready Exports:** One-click actions to:
    *   Copy generated markdown to clipboard.
    *   Download raw Markdown (`.md`) files.
    *   Print or save directly to PDF (fully styled for paper export using custom CSS print media queries).
*   **Developer Hand-off Ready:** Includes an embedded design system showing how Google Stitch design tokens are encoded for styling consistency.

---

## 🛠️ Tech Stack

*   **Frontend Library:** React.js
*   **Build Tool & Dev Server:** Vite
*   **Styling:** Vanilla CSS (Tailored HSL color palettes, custom responsive layouts, and print stylesheets)
*   **AI Integration:** Google Gemini API (via `@google/generative-ai`)
