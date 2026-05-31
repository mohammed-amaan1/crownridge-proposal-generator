# AI Proposal Generator - Crownridge LLP React Prototype

This project is rebuilt using **React.js** and **Vite** for the **Crownridge LLP GenAI Internship Application**. It helps Crownridge's sales engineering teams instantly respond to software development and consultancy inquiries by generating structured, high-quality, and client-ready project proposals in Markdown and PDF.

## 🚀 Live Demo & Deployment
- **GitHub Repository:** `https://github.com/<your-username>/crownridge-proposal-generator`
- **GitHub Pages / Netlify Deployed Link:** `https://crownridge-proposal-generator.netlify.app/` *(Replace with your live URL)*

---

## ✨ Features
1. **React State Engine:** Streamlines form inputs, loader animations, layout skeleton states, clipboard copies, file downloads, and workspace view toggles.
2. **Google Stitch Design Language:** Implements Google Labs' premium "Stitch Canvas" dark UI aesthetics using Outfit and Plus Jakarta Sans fonts.
3. **Double Evaluation Path:**
   - **Offline Demo Mode (Default):** Runs a local template engine that produces fully customized, highly detailed, realistic proposals instantly without requiring API keys.
   - **Live GenAI Mode:** Connects to Google's Gemini models (with support for a **Model Selector** dropdown: Gemini 2.5 Flash, 1.5 Flash, 2.5 Pro, 1.5 Pro, 2.0 Flash) via client-side fetch, creating dynamic proposals in real time.
4. **Stitch Workspace Canvas Tabs:**
   - **Proposal Document:** Live HTML-rendered preview of the proposal with clean typography, tables, and signature sign-offs.
   - **Raw Markdown:** Raw markdown output text for easy importing into Jira, Notion, or text editors.
   - **DESIGN.md System:** Interactive view showcasing the Google Stitch design tokens representing standard AI-design variables.
5. **Sales Automation Utilities:**
   - **Copy to Clipboard:** Copies the compiled markdown content with one click.
   - **Download Markdown:** Downloads the proposal as a `.md` file.
   - **Print / PDF Generation:** Styled specifically using `@media print` rules, clicking this allows you to save the generated proposal as a print-perfect PDF.
   - **Load Sample Requirements:** Click to pre-populate inputs with high-quality simulated client scenarios.

---

## 🛠️ Tech Stack
- **Framework:** React 18+ (Vite builder)
- **Styling:** CSS3 (Variables, print layout styles)
- **Icons:** Lucide React
- **Markdown Compiler:** Marked (npm library)

