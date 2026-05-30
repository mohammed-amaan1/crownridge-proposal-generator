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

---

## 💻 Running & Building Locally

To run the project in development mode:
1. Ensure Node.js is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production (compiles code into `dist/` directory):
   ```bash
   npm run build
   ```

---

## 🌐 Deployment Instructions (Netlify / GitHub Pages)

### Option A: Netlify (Easiest & Fastest for React Apps)
1. Run `npm run build` locally to generate the `dist/` folder.
2. Go to **[Netlify Drop](https://app.netlify.com/drop)**.
3. Drag and drop the `dist/` folder. Your app will be live immediately!
4. Copy the deployed link.

### Option B: GitHub Pages
1. Initialize Git in the project root:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Crownridge LLP proposal generator React prototype"
   ```
2. Create a new public repository on GitHub called `crownridge-proposal-generator`.
3. Push to main:
   ```bash
   git remote add origin https://github.com/<your-username>/crownridge-proposal-generator.git
   git branch -M main
   git push -u origin main
   ```
4. Setup GitHub Pages builder using a custom GitHub Action for Vite, or host using Netlify.

---

## 📋 Copy-Paste Internship Submission Template
Use this template to fill out the **🔗 [Submission Form](https://internshala.com/student/dashboard)** or the application write-up.

### 1. Selected Prototype
AI Proposal Generator (Prototype)

### 2. Deployed Link
`https://crownridge-proposal-generator.netlify.app/` *(Replace with your Netlify/Vercel URL)*

### 3. GitHub Repository Link
`https://github.com/<your-username>/crownridge-proposal-generator` *(Replace with your repository URL)*

### 4. Prototype Write-up (Copy/Paste this text)
```text
I have built the AI Proposal Generator prototype customized specifically for Crownridge LLP (IT Consultancy & Software Services) using React.js and Vite.

Key Highlights of the Solution:
1. Google Stitch Design Vibe: A beautiful, modern interface mimicking a high-fidelity Google Labs Stitch prototyping canvas with clean side-by-side workspace panels, dark-mode/light-mode components, and custom typography.
2. Rebuilt in React.js: Migration to React provides robust component lifecycle handling, unified state management, and seamless transitions between active canvases.
3. Double Evaluation Engine:
   - Offline Demo Mode: Contains a smart mock proposal engine mapping standard software architectural layouts, Sprint schedules, and itemized cost calculations. Allows immediate verification without requiring API credentials.
   - Live GenAI Mode: Supports dynamic Gemini models (including Gemini 2.5 Flash, 2.5 Pro, 1.5 Flash, and 2.0 Flash via a Model Selector dropdown) to generate customized, formatted software proposals in real time.
4. Client-Ready Exports: Includes one-click Copy, Markdown File download, and Print-to-PDF formatting (specially styled using custom CSS print media queries) to provide a polished document for client delivery.
5. AI Design Hand-off: Features an embedded DESIGN.md system showing how Google Stitch design tokens are encoded for AI coding agents to maintain styling consistency.

This solution helps the sales and business development teams at Crownridge LLP draft technical proposals in seconds instead of hours, speeding up lead responses and client acquisitions.
```
