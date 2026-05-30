export function generateMockProposal(data) {
  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  const reqText = data.requirements.toLowerCase();
  let customFeatures = [];
  
  if (reqText.includes('user') || reqText.includes('login') || reqText.includes('profile')) {
      customFeatures.push("Secure Authentication Module (OAuth2, JWT support) with user profiles and password recovery workflows.");
  }
  if (reqText.includes('stripe') || reqText.includes('payment') || reqText.includes('checkout') || reqText.includes('gateway')) {
      customFeatures.push("E-Commerce Checkout Engine integrated with Stripe/PayPal supporting multi-currency, coupon processing, and instant receipts.");
  }
  if (reqText.includes('dashboard') || reqText.includes('admin') || reqText.includes('analytics')) {
      customFeatures.push("Administrative Operations Dashboard featuring charts, inventory alerts, activity logging, and exportable CSV/Excel reports.");
  }
  if (reqText.includes('chat') || reqText.includes('message') || reqText.includes('notification') || reqText.includes('sms')) {
      customFeatures.push("Real-time Notification & Messaging Hub utilizing WebSocket protocols and integrations with Twilio/SendGrid APIs.");
  }
  if (reqText.includes('ai') || reqText.includes('model') || reqText.includes('recommend') || reqText.includes('search')) {
      customFeatures.push("GenAI Recommendation System powered by LLMs to dynamically suggest products, content, or auto-complete search inputs.");
  }
  
  if (customFeatures.length === 0) {
      customFeatures = [
          "Responsive Frontend Client optimized for web, tablet, and mobile platforms.",
          "Robust API Backend Service featuring database normalization, RESTful routing, and validation logic.",
          "Custom Administrator Dashboard displaying analytical telemetry, user configurations, and audit logging."
      ];
  }

  let techStack = {
      frontend: "React.js with Next.js (SSR)",
      backend: "Node.js (NestJS framework)",
      database: "PostgreSQL with Prisma ORM",
      cloud: "Vercel & AWS (S3, RDS)"
  };
  
  if (data.industry.includes("Healthcare")) {
      techStack.backend = "Python (FastAPI, HIPAA audit logging)";
      techStack.database = "PostgreSQL (encrypted at rest)";
      techStack.cloud = "AWS HIPAA-compliant cloud hosting";
  } else if (data.industry.includes("Fintech")) {
      techStack.frontend = "TypeScript with React.js & Tailwind CSS";
      techStack.backend = "Java Spring Boot (Microservices)";
      techStack.database = "Oracle DB with Redis Cache";
      techStack.cloud = "Google Cloud (GCP) secure private cloud VPC";
  }

  let budgetNum = parseInt(data.budget.replace(/[^0-9]/g, '')) || 25000;
  const curSymbol = data.budget.split(' ')[0] || '$';
  
  const devCost = Math.round(budgetNum * 0.5);
  const designCost = Math.round(budgetNum * 0.15);
  const qaCost = Math.round(budgetNum * 0.15);
  const pmCost = Math.round(budgetNum * 0.12);
  const deployCost = budgetNum - (devCost + designCost + qaCost + pmCost);

  const formatCurrency = (val) => {
      return `${curSymbol} ${val.toLocaleString()}`;
  };

  let timelineTable = '';
  if (data.timeline.includes("1 Month")) {
      timelineTable = `
| Phase | Focus Deliverables | Timeline | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1: Blueprint** | UI/UX Wireframing, Database Architecture, System spec alignment | Week 1 | Completed |
| **Phase 2: MVP Core** | DB setup, core API backend and layout frontend screens | Week 2-3 | Planned |
| **Phase 3: Integration** | Auth services, payment gateway integrations, and main dashboard features | Week 3-4 | Planned |
| **Phase 4: Launch** | End-to-end testing, bug fixing, cloud deployment, and team handoff | Week 4 | Planned |
`;
  } else if (data.timeline.includes("2-3 Months")) {
      timelineTable = `
| Phase | Focus Deliverables | Timeline | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1: Discovery** | User journey maps, UX prototypes, Database schemas, API specs | Week 1-2 | Completed |
| **Phase 2: Alpha Build** | Core database tables, API middleware routing, and component styles | Week 3-5 | Planned |
| **Phase 3: Beta Launch** | Complete features integration (Stripe, Twilio, dashboards) & patient charts | Week 6-9 | Planned |
| **Phase 4: QA & Deploy** | User Acceptance Testing (UAT), penetration test, performance tuning, Go-Live | Week 10-12 | Planned |
`;
  } else {
      timelineTable = `
| Phase | Focus Deliverables | Timeline | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1: Discovery** | Stakeholder workshops, architectural specs, detailed clickable mockups | Month 1 | Completed |
| **Phase 2: Foundation** | High availability database setup, DevOps docker containers, core API stack | Month 2-3 | Planned |
| **Phase 3: Core Features** | Full module implementation (billing checkout, analytics engine, dashboards) | Month 4-5 | Planned |
| **Phase 4: Tuning & Launch** | Security auditing, multi-browser QA testing, pilot deployment, final release | Month 6+ | Planned |
`;
  }

  return `# Business Services Proposal
**Project Name:** Digital Engineering & Solution Framework  
**Consultant Partner:** Crownridge LLP  
**Client Target Industry:** ${data.industry}  
**Date:** ${dateStr}

---

## 1. Executive Summary

We are pleased to submit this business proposal to partner with your organization on building a premium digital solution tailored for the **${data.industry}** industry. At Crownridge LLP, we specialize in delivering scalable, modern software ecosystems that bridge business goals with state-of-the-art software technology.

This proposal responds directly to your requirement to develop a system with the following scope:
> *"${data.requirements}"*

Our approach focuses on developing a highly modular, fast, and secure solution that meets your timeline of **${data.timeline}** and operates within your budget framework of **${data.budget}**. This proposal details the technology choices, implementation steps, budget distribution, and timeline milestones to ensure a successful product delivery.

---

## 2. Proposed Solution Architecture

To align with the standards of the **${data.industry}** sector, we recommend a robust stack characterized by rapid load speeds, search engine discoverability, and database efficiency:

*   **Frontend Framework:** \`${techStack.frontend}\`  
    *Allows for lightning-fast server-side rendering (SSR), smooth client-side transitions, and clean layouts.*
*   **API & Core Backend:** \`${techStack.backend}\`  
    *Provides high concurrency performance, strict request validation middleware, and secure routing.*
*   **Database Engine:** \`${techStack.database}\`  
    *Ensures relational data integrity, clean migrations schema, and high-performance querying under load.*
*   **Infrastructure Hosting:** \`${techStack.cloud}\`  
    *Features horizontal scaling, continuous integration pipelines (CI/CD), secure asset storage, and automatic database backups.*

---

## 3. Scope of Work & Core Features

Based on your core specifications, our engineering team will build the following functional areas:

${customFeatures.map(feat => `*   **[Core Module]** ${feat}`).join('\n')}
*   **Security & Encryption:** SSL/TLS protocols, encrypted storage at rest, security headers, and protection against OWASP Top 10 vulnerabilities.
*   **Deployment Configuration:** Pre-configured environments (Staging & Production) with automated git-hook integrations.

---

## 4. Project Timeline & Milestones

The development cycle will be executed using Agile methodology in Sprint increments. The following schedule maps the phases across the requested **${data.timeline}** duration:

${timelineTable.trim()}

---

## 5. Cost Breakdown

The estimated commercial investment has been calculated based on resource allocation for design, development, quality assurance, and project management:

| Service Category | Scope & Deliverable Focus | Budget Allocation |
| :--- | :--- | :--- |
| **UI/UX Design** | Interactive wireframes, high-fidelity UI layout, design tokens exports | ${formatCurrency(designCost)} |
| **Software Development** | API engineering, component coding, database logic, third-party integrations | ${formatCurrency(devCost)} |
| **Quality Assurance (QA)** | System integration testing, responsive browser checks, edge-case testing | ${formatCurrency(qaCost)} |
| **Project Management** | Agile coordination, weekly sprint reports, client communications | ${formatCurrency(pmCost)} |
| **DevOps & Cloud setup** | Docker configuration, SSL certs, environment variables, hosting pipeline | ${formatCurrency(deployCost)} |
| **TOTAL INVESTMENT** | **Fully completed software delivery (VAT exclusive)** | **${formatCurrency(budgetNum)}** |

---

## 6. Why Crownridge LLP

Crownridge LLP is an established IT Consultancy & Software Services agency with a track record of launching successful commercial platforms:
*   **Senior Developers Only:** We staff your project with experienced engineers familiar with custom APIs and modern tech stacks.
*   **Transparent Code Delivery:** You receive complete ownership of the git repository with clean, documented code.
*   **Prompt Engineering Standards:** We write automated unit tests for every backend service, reducing production bugs by up to 90%.

---

## 7. Client Acceptance

To approve this proposal and initiate the discovery workshops, please sign and return this section to the Crownridge team:

| Crownridge LLP Representative | Client Authorized Representative |
| :--- | :--- |
| Signature: _________________________ | Signature: _________________________ |
| Name: **Crownridge Accounts Team** | Name: _____________________________ |
| Title: Technical Account Executive | Title: ______________________________ |
| Date: **${dateStr}** | Date: ______________________________ |
`;
}
