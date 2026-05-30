import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { 
  Sparkles, 
  Copy, 
  Download, 
  Printer, 
  Eye, 
  EyeOff, 
  FileText, 
  CheckCircle, 
  X,
  FileSignature
} from 'lucide-react';
import { designTokens } from './DesignTokens';
import { generateMockProposal } from './MockData';

// Form select configurations
const INDUSTRIES = [
  "E-Commerce & Retail",
  "Healthcare & Life Sciences",
  "Fintech & Banking",
  "Edtech & E-Learning",
  "Real Estate & Construction",
  "Logistics & Supply Chain",
  "SaaS & Tech Startups",
  "Professional Services"
];

const TIMELINES = [
  "1 Month (Rapid MVP)",
  "2-3 Months (Standard)",
  "4-6 Months (Complex)",
  "6+ Months (Enterprise)"
];

const DEPTHS = ["Brief Overview", "Detailed", "Comprehensive"];

const MODELS = [
  { value: "gemini-2.5-flash", label: "Gemini 2.5 Flash (Recommended)" },
  { value: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
  { value: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
  { value: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
  { value: "gemini-2.0-flash", label: "Gemini 2.0 Flash" }
];

export default function App() {
  // Form Input States
  const [isDemo, setIsDemo] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [model, setModel] = useState('gemini-2.5-flash');
  const [industry, setIndustry] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [requirements, setRequirements] = useState('');
  const [tone, setTone] = useState('Consultative & Technical');
  const [depth, setDepth] = useState(2); // Default to Detailed (index 2)

  // Application UI States
  const [loading, setLoading] = useState(false);
  const [proposalMarkdown, setProposalMarkdown] = useState('');
  const [toast, setToast] = useState('');

  // 1. Restore API Key & Model from local storage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) setApiKey(savedKey);

    const savedModel = localStorage.getItem('gemini_model');
    if (savedModel) setModel(savedModel);
  }, []);

  // 2. Save API key & Model to local storage when they change
  useEffect(() => {
    if (apiKey) localStorage.setItem('gemini_api_key', apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem('gemini_model', model);
  }, [model]);

  // Toast Helper
  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  // Load sample requirement values
  const handleLoadSample = () => {
    const samples = [
      {
        industry: "E-Commerce & Retail",
        budget: "25,000 - 30,000",
        currency: "USD",
        timeline: "2-3 Months (Standard)",
        req: "A high-perf multi-vendor clothing e-commerce website. Must include custom user profiles, buyer/seller dashboards, automated inventory alerts, dynamic product matching carousels, and an integrated Stripe checkout with refunds management."
      },
      {
        industry: "Healthcare & Life Sciences",
        budget: "18,00,000",
        currency: "INR",
        timeline: "4-6 Months (Complex)",
        req: "A secure patient clinic management dashboard. Features: HIPAA compliant chat, online appointment scheduler with automated SMS reminders (Twilio), electronic medical records (EMR) tracker, and prescription generator with direct pharmacy email dispatch."
      },
      {
        industry: "SaaS & Tech Startups",
        budget: "45,000",
        currency: "USD",
        timeline: "2-3 Months (Standard)",
        req: "An AI-powered document intelligence SaaS dashboard. Allows companies to upload PDFs, run automated summarization with LLMs, tag documents using NLP, manage subscription plans via Stripe, and download parsed analytics reports."
      }
    ];

    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    
    setIndustry(randomSample.industry);
    setBudget(randomSample.budget);
    setCurrency(randomSample.currency);
    setTimeline(randomSample.timeline);
    setRequirements(randomSample.req);

    triggerToast("Sample requirements loaded!");
  };

  // Live GenAI API Call
  const generateAIPerformance = async (data) => {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    const promptText = `
You are an expert sales engineer and IT consultant at Crownridge LLP, a premium IT Consultancy & Software Services company.
Draft a highly professional, thorough project proposal based on the following client inquiry:

- **Client Industry:** ${data.industry}
- **Client Budget Estimate:** ${data.budget}
- **Proposed Development Timeline:** ${data.timeline}
- **Core Requirements & Scope description:**
"${data.requirements}"

- **Proposal Tone:** ${data.tone}
- **Proposal Detail/Depth Level:** ${data.depth}

Structure the output as a beautiful, professional, client-ready proposal document in Markdown. Follow this strict outline:
1. **Executive Summary**: Welcome the client, summarize their current business challenge in their industry, and provide a high-level view of our proposed solution. Mention Crownridge LLP as the consulting partner.
2. **Proposed Solution Architecture**: Detail the recommended technology stack (frontend, backend, database, cloud hosting, APIs, etc.) and explain WHY these were chosen for this specific project.
3. **Scope of Work & Core Features**: Break down the core deliverables. Use detailed bullet points or checkboxes to outline features (e.g., user profiles, checkout gateways, administrative portals, third-party API integrations).
4. **Project Timeline & Milestones**: Format this section as a table detailing phases, duration, and key milestones based on the client's timeline of ${data.timeline}.
5. **Cost Breakdown**: Format this as an itemized budget table (Development, UI/UX Design, Testing/QA, Integration, Project Management) which aligns reasonably with the client's budget of ${data.budget}.
6. **Why Crownridge LLP**: Highlight why we are the right fit (experience in consultancy, modern frameworks, clean code standards, seamless delivery).
7. **Client Acceptance / Sign-off Block**: Include a neat table or layout with placeholders for signatures and dates.

Rules:
- Do not write any preamble (like "Here is the proposal:"). Begin directly with the proposal title.
- Do not include placeholders like "[Your Name]" or "[Insert Date]". Use logical names (e.g., "Crownridge Sales Team", "Authorized Signatory").
- Format clean Markdown tables for the Timeline and Budget sections.
- Make the content rich and extensive, matching the requested depth: ${data.depth}.
`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: promptText }]
          }
        ],
        generationConfig: {
          temperature: 0.5,
          maxOutputTokens: 3500
        }
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const errMsg = errData.error?.message || `HTTP ${response.status} Error`;
      throw new Error(`Gemini API Error: ${errMsg}`);
    }

    const resData = await response.json();
    if (!resData.candidates || resData.candidates.length === 0) {
      throw new Error("No response candidates returned by Gemini.");
    }
    
    return resData.candidates[0].content.parts[0].text;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isDemo && !apiKey) {
      alert("Please enter a valid Gemini API Key to run in Live mode, or select Offline Demo mode.");
      return;
    }

    setLoading(true);
    setProposalMarkdown('');

    const data = {
      industry,
      budget: `${currency} ${budget}`,
      timeline,
      requirements,
      tone,
      depth: DEPTHS[depth - 1]
    };

    try {
      if (isDemo) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1800));
        const output = generateMockProposal(data);
        setProposalMarkdown(output);
      } else {
        const output = await generateAIPerformance(data);
        setProposalMarkdown(output);
      }
      triggerToast("Proposal generated successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to generate proposal.");
    } finally {
      setLoading(false);
    }
  };

  // Action: Copy markdown
  const handleCopyMarkdown = () => {
    if (!proposalMarkdown) return;
    navigator.clipboard.writeText(proposalMarkdown)
      .then(() => triggerToast("Markdown copied to clipboard!"))
      .catch(() => alert("Failed to copy text."));
  };

  // Action: Download file
  const handleDownloadFile = () => {
    if (!proposalMarkdown) return;
    const blob = new Blob([proposalMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Crownridge_LLP_Proposal_${industry.replace(/[^a-z0-9]/gi, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerToast("Markdown file downloaded!");
  };

  // Action: Print / PDF
  const handlePrint = () => {
    window.print();
  };

  // Action: Copy Design Tokens
  const handleCopyTokens = () => {
    const jsonStr = JSON.stringify(designTokens, null, 2);
    navigator.clipboard.writeText(jsonStr)
      .then(() => triggerToast("Design tokens copied!"))
      .catch(() => alert("Failed to copy tokens."));
  };

  return (
    <div className="stitch-app">
      {/* Header */}
      <header className="stitch-header">
        <div className="header-logo">
          <div className="logo-mark">C</div>
          <div className="logo-text">
            <h1>CROWNRIDGE LLP</h1>
            <span>IT Consultancy & Software Services</span>
          </div>
        </div>
        
        <div className="header-badge">
          <span className="pulse-dot"></span>
          <span>AI Proposal Generator (React)</span>
        </div>
        
        <div className="header-actions">
          <span className="stitch-version">React Canvas v2.0</span>
        </div>
      </header>

      {/* Main Split Pane Workspace */}
      <main className="stitch-workspace">
        
        {/* Left Sidebar Form */}
        <section className="stitch-sidebar" id="control-panel">
          <div className="sidebar-header">
            <h2>Proposal Configuration</h2>
            <p>Provide client requirements to construct a tailored software service proposal.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            
            {/* Mode Switch Card */}
            <div className={`form-group mode-toggle-card ${!isDemo ? 'live-active' : ''}`}>
              <label className="toggle-label">
                <span className="label-heading">Evaluation Mode</span>
                <span className="label-desc">Choose between live GenAI API and simulated offline demo.</span>
              </label>
              
              <div className="segmented-control">
                <input 
                  type="radio" 
                  name="eval_mode" 
                  id="mode-demo" 
                  checked={isDemo}
                  onChange={() => setIsDemo(true)}
                />
                <label htmlFor="mode-demo">Offline Demo</label>
                
                <input 
                  type="radio" 
                  name="eval_mode" 
                  id="mode-live" 
                  checked={!isDemo}
                  onChange={() => setIsDemo(false)}
                />
                <label htmlFor="mode-live">Live GenAI API</label>
              </div>
            </div>
            
            {/* API Config Panel (Only if Live) */}
            {!isDemo && (
              <div className="form-card" style={{ marginTop: '10px' }}>
                <div className="form-card-title">GenAI Configurations</div>
                
                <div className="form-group">
                  <label htmlFor="api-key">Gemini API Key</label>
                  <div className="input-with-icon">
                    <input 
                      type={showKey ? "text" : "password"} 
                      id="api-key" 
                      placeholder="AIzaSy..." 
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      required={!isDemo}
                    />
                    <button 
                      type="button" 
                      className="btn-icon" 
                      onClick={() => setShowKey(!showKey)}
                      title="Toggle Visibility"
                    >
                      {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <p className="input-hint">API Keys are cached locally in your browser storage and are never uploaded.</p>
                </div>

                <div className="form-group">
                  <label htmlFor="gemini-model">Select Model</label>
                  <select 
                    id="gemini-model" 
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  >
                    {MODELS.map(m => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Client Profile Card */}
            <div className="form-card" style={{ marginTop: '10px' }}>
              <div className="form-card-title">Client Profile</div>
              
              <div className="form-group">
                <label htmlFor="client-industry">Client Industry</label>
                <select 
                  id="client-industry" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                >
                  <option value="" disabled>Select industry...</option>
                  {INDUSTRIES.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="project-budget">Budget</label>
                  <div className="input-addon-group">
                    <select 
                      id="budget-currency" 
                      className="input-addon"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
                      <option value="EUR">EUR</option>
                    </select>
                    <input 
                      type="text" 
                      id="project-budget" 
                      placeholder="e.g. 15,000 - 20,000" 
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group col">
                  <label htmlFor="project-timeline">Timeline</label>
                  <select 
                    id="project-timeline" 
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select timeline...</option>
                    {TIMELINES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Requirements Card */}
            <div className="form-card" style={{ marginTop: '10px' }}>
              <div className="form-card-title">Project Scope & Core Requirements</div>
              
              <div className="form-group">
                <label htmlFor="project-requirement">Describe features, goals & integrations</label>
                <textarea 
                  id="project-requirement" 
                  rows={5} 
                  placeholder="Describe what the client needs. Example: 'Client wants an e-commerce platform built with user profiles, multi-vendor support, Stripe checkout, inventory analytics, and automated alert systems.'" 
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  required
                />
                <div className="textarea-helpers">
                  <button 
                    type="button" 
                    className="btn-helper" 
                    onClick={handleLoadSample}
                  >
                    Load Sample Requirements
                  </button>
                </div>
              </div>
            </div>

            {/* Styling Customizations */}
            <div className="form-card" style={{ marginTop: '10px' }}>
              <div className="form-card-title">Proposal Output Styling</div>

              <div className="form-group">
                <label>Proposal Tone</label>
                <div className="segmented-control">
                  <input 
                    type="radio" 
                    name="tone" 
                    id="tone-consultative" 
                    checked={tone === 'Consultative & Technical'}
                    onChange={() => setTone('Consultative & Technical')}
                  />
                  <label htmlFor="tone-consultative">Consultative</label>
                  
                  <input 
                    type="radio" 
                    name="tone" 
                    id="tone-persuasive" 
                    checked={tone === 'Persuasive & Bold'}
                    onChange={() => setTone('Persuasive & Bold')}
                  />
                  <label htmlFor="tone-persuasive">Persuasive</label>
                  
                  <input 
                    type="radio" 
                    name="tone" 
                    id="tone-modern" 
                    checked={tone === 'Modern & Creative'}
                    onChange={() => setTone('Modern & Creative')}
                  />
                  <label htmlFor="tone-modern">Modern</label>
                </div>
              </div>

              <div className="form-group">
                <div className="slider-header">
                  <label htmlFor="proposal-depth">Detail Level</label>
                  <span className="depth-badge">{DEPTHS[depth - 1]}</span>
                </div>
                <input 
                  type="range" 
                  id="proposal-depth" 
                  min={1} 
                  max={3} 
                  value={depth} 
                  className="slider"
                  onChange={(e) => setDepth(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Action button */}
            <button 
              type="submit" 
              className="btn btn-primary btn-lg btn-block" 
              style={{ marginTop: '14px' }}
              disabled={loading}
            >
              {loading ? (
                <span className="loader-spinner"></span>
              ) : (
                <span className="btn-content">
                  <Sparkles size={20} />
                  Generate Proposal Draft
                </span>
              )}
            </button>
          </form>
        </section>

        {/* Right Preview Canvas */}
        <section className="stitch-canvas">
          
          {/* Canvas Workspace Toolbar */}
          <div className="canvas-tabs-bar">
            <div className="tabs-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '16px', height: '100%' }}>
              <FileText size={18} style={{ color: 'var(--color-primary-light)' }} />
              <span className="canvas-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-secondary)' }}>
                Proposal Workspace
              </span>
            </div>
            
            {/* Toolbar Buttons */}
            {proposalMarkdown && (
              <div className="canvas-actions">
                <button className="btn btn-secondary btn-icon-label" onClick={handleCopyMarkdown} title="Copy to Clipboard">
                  <Copy size={16} />
                  <span>Copy</span>
                </button>
                <button className="btn btn-secondary btn-icon-label" onClick={handleDownloadFile} title="Download Markdown File">
                  <Download size={16} />
                  <span>Download</span>
                </button>
                <button className="btn btn-primary btn-icon-label" onClick={handlePrint} title="Print or Export PDF">
                  <Printer size={16} />
                  <span>Print / PDF</span>
                </button>
              </div>
            )}
          </div>

          {/* Canvas Output Viewport */}
          <div className="canvas-viewport">
            
            {/* 1. Loading View */}
            {loading && (
              <div className="viewport-loader">
                <div className="pulsing-glow"></div>
                <span className="animated-gradient-text">Gemini generating proposal...</span>
                <p>Analyzing requirements, mapping architectures, outlining timeline milestones, and structuring budgets.</p>
                <div className="skeleton-bar bar-1"></div>
                <div className="skeleton-bar bar-2"></div>
                <div className="skeleton-bar bar-3"></div>
              </div>
            )}

            {/* 2. Welcome Placeholder (Not Loading & No Proposal yet) */}
            {!loading && !proposalMarkdown && (
              <div className="viewport-placeholder">
                <div className="placeholder-icon-wrap">
                  <Sparkles size={40} style={{ color: 'var(--color-primary-light)' }} />
                </div>
                <h3>Google Stitch Workspace</h3>
                <p>Provide the requirements, choose the tone and detail depth, and click <strong>Generate Proposal Draft</strong> to create a customized commercial proposal.</p>
                
                <div className="placeholder-features">
                  <div className="feature-tag">
                    <CheckCircle size={14} />
                    <span>Gemini GenAI Models Supported</span>
                  </div>
                  <div className="feature-tag">
                    <CheckCircle size={14} />
                    <span>Rich PDF/Markdown Export Styles</span>
                  </div>
                  <div className="feature-tag">
                    <CheckCircle size={14} />
                    <span>Interactive Design Sandbox</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Rendered Content Views */}
            {!loading && proposalMarkdown && (
              <div className="canvas-pane">
                <article 
                  className="proposal-document" 
                  dangerouslySetInnerHTML={{ __html: marked.parse(proposalMarkdown) }}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Toast Messages */}
      {toast && (
        <div className="toast-notification">
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
