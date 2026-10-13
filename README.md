# Genius HR tech

> **Intelligent HR Data, Simplified.**  
> A centralized enterprise operations, workforce intelligence, and facility data management platform designed for modern enterprises, manufacturing hubs, and operations teams.

---

## 📖 Overview

**Genius HR tech** is a centralized enterprise platform prototype engineered to streamline multi-facility workforce operations, equipment maintenance, employee relations, and administrative oversight. Built with **React 19**, **TypeScript**, and **Tailwind CSS**, it brings high-level operational visibility, predictive HR insights, and day-to-day facility management into a cohesive, responsive web application.

The platform provides a unified interface for executive decision-makers, HR administrators, plant engineers, and operations managers across distributed locations (e.g., Mumbai Head Office, Pune Factory, Bengaluru Warehouse, Chennai Assembly Lines).

---

## ✨ Key Features & Modules

### 1. 📊 Executive Dashboard
- **Animated KPI Counters**: Tracks critical organizational metrics such as Total Employees, Retention Rate, Maintenance Tickets, and Average Resolution Time.
- **Dynamic Sparklines & SVG Trends**: Custom animated vector sparklines and trajectory charts that illustrate historical trends without external heavy charting libraries.
- **Operational Activity Feeds**: Real-time snapshot of active maintenance queues, machine health statuses, and cross-departmental workload distribution.

### 2. 🏢 Facility Maintenance Requests
- **Structured Intake Form**: Allows staff to log maintenance tickets with validation for building/facility, specific room or bay, issue category (Plumbing, Electrical, HVAC, Safety), urgency rating, and budget allocations.
- **Instant State Synchronization**: Submitted requests immediately propagate to the Central Admin Registry for review and dispatch.

### 3. ⚙️ Machine & Asset Management
- **Industrial Equipment Tracking**: Monitors critical plant machinery (e.g., Haas CNC Mills, Robotic Assembly Arms, Fiber Laser Cutters).
- **Maintenance Lifecycle Logs**: Records operational hours, run cycles, known error codes (e.g., pneumatic line pressure drops, spindle overheating), and scheduled preventative maintenance dates.

### 4. 🎫 Support Ticket Resolution Hub
- **Helpdesk Dispatch**: Centralized queue for employee and customer inquiries, feature requests, and billing queries.
- **Severity & Status Badges**: Visual indicator system categorizing tickets across *Open*, *In Progress*, and *Closed* statuses with priority tiers (*Low*, *Medium*, *High*).

### 5. 📋 Agile Task Management (Kanban)
- **Three-Column Workflow**: Visual *To Do*, *In Progress*, and *Completed* columns.
- **Priority Classifications**: Color-coded borders and priority tags for rapid triage.
- **Micro-Interactions**: Smooth hover elevations and transition animations.

### 6. 📅 Operations & Maintenance Calendar
- **Monthly Operational View**: Unified schedule highlighting scheduled server upgrades, fire inspections, client invoicing due dates, and preventative facility maintenance.
- **Day & Event Highlighting**: Current day indicator with color-coded operational tags.

### 7. 💡 AI-Powered Talent Recommendations
- **Predictive HR Alerts**: Actionable recommendations categorized by:
  - **Retention Risk**: Churn probability alerts based on workload and sentiment indicators.
  - **Recruitment**: AI candidate skill matching against current engineering openings.
  - **Performance Support**: Proactive intervention prompts for productivity dips.
  - **Peer Recognition**: Highlighting team members whose contributions deserve celebration.
- **Quick Actions**: One-click review or dismissal workflows.

### 8. 💬 Genius HR Assistant (Conversational AI Chatbot)
- **Data Query Assistant**: Natural language chat interface tailored for rapid querying of turnover statistics, headcount changes, and policy lookups.
- **Attachment & Prompt Controls**: Clean chat interface with message history and action buttons.

### 9. 🛡️ Administrative Control & Directory
- **User Directory**: Centralized workforce directory with role-based designations (*Admin*, *Manager*, *Employee*), account status, and joining dates.
- **Facility & Machine Overviews**: Tabulated views of all logged facility maintenance tickets and registered plant equipment.

### 10. 📈 Finance & Cost Analytics
- **Revenue vs. Expense Trajectory**: Dual-line animated SVG chart displaying year-to-date fiscal metrics.
- **Cost Distribution Breakdown**: Interactive SVG donut chart detailing budgetary spend across Salaries (45%), Operations (25%), Marketing (15%), and Utilities (10%).

### 11. 👤 User Profile & Workspace
- **Identity & Contact Details**: Personalized user card displaying employee ID, department, manager hierarchy, and work email.
- **Customizable Details**: Clean form inputs ready for profile updating and preference configurations.

### 12. 🔐 Authentication Experience
- **Secure Sign-In Interface**: Split-screen branded login page with background imagery, password visibility toggling, remember-me support, and instant entry.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Frontend Framework** | **React 19** (`^19.2.0`) | Modern functional component architecture with hooks |
| **Language** | **TypeScript** (`~5.8.2`) | Strict typing, robust interfaces, and autocomplete |
| **Build Tool & Bundler** | **Vite** (`^6.2.0`) | Fast HMR and optimized production bundling |
| **Styling & Design** | **Tailwind CSS** | Utility-first CSS with dark mode support |
| **Icons** | **Google Material Symbols** | Material symbols outlined icon suite |
| **Typography** | **Inter** | Clean, legible enterprise typography from Google Fonts |

---

## 📁 Project Directory Structure

```text
├── components/
│   ├── Header.tsx              # Top navigation bar with dark mode toggle and user actions
│   ├── Icon.tsx                # Reusable Google Material Symbols icon wrapper
│   └── Sidebar.tsx             # Collapsible primary navigation sidebar
├── pages/
│   ├── Admin.tsx               # User management, facility requests audit, and machine registry
│   ├── CalendarView.tsx        # Monthly operational calendar & scheduled events
│   ├── Chatbot.tsx             # Conversational HR assistant interface
│   ├── Dashboard.tsx           # Primary KPI metrics, animated sparklines, and status overview
│   ├── FacilityManagement.tsx  # Maintenance request submission and tracking form
│   ├── FinanceAnalytics.tsx    # Revenue vs. Expenses trajectory and cost distribution charts
│   ├── LoginPage.tsx           # Authentication view with credentials form
│   ├── MachineManagement.tsx   # Machine health logs, maintenance scheduling, and diagnostics
│   ├── Profile.tsx             # User profile, contact details, and role specifications
│   ├── Recommendations.tsx     # Predictive HR and talent intelligence cards
│   ├── TaskManagement.tsx      # Kanban board for operational and HR tasks
│   └── TicketSolving.tsx       # Helpdesk ticket resolution and triage queue
├── App.tsx                     # Core application orchestrator, navigation state, and mock data
├── index.html                  # HTML entry point, Tailwind script, fonts, and keyframes
├── index.tsx                   # React root hydration
├── metadata.json               # Applet configuration and metadata
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript compiler configuration
├── types.ts                    # Shared TypeScript interfaces and ViewType declarations
└── vite.config.ts              # Vite bundler configuration and environment aliases
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: Version 18.x, 20.x, or higher
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1. **Clone or navigate into the repository**:
   ```bash
   cd genius-hr-tech
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Vite development server with:
```bash
npm run dev
```

By default, the application will run at:
```text
http://localhost:3000
```

### Production Build

To build the project for production deployment:
```bash
npm run build
```

This compiles optimized static assets into the `dist/` directory.

To preview the built production app locally:
```bash
npm run preview
```

---

## 🎨 Design System & Visual Tokens

The interface is built with an enterprise palette supporting both light and dark modes:

- **Primary Accent**: `#4A90E2` (Genius Blue)
- **Backgrounds**:
  - Light: `#F8F9FA`
  - Dark: `#101922`
- **Surface Cards**:
  - Light: `#FFFFFF`
  - Dark: `#182431`
- **Text & Contrast**:
  - Primary text: `#343A40` (Light) / `#E9ECEF` (Dark)
  - Subtext: `#7B8B9A` (Light) / `#98A3AF` (Dark)
- **Status Accents**:
  - `success`: `#28a745` (Green)
  - `warning`: `#ffc107` (Amber)
  - `danger`: `#dc3545` (Rose / Red)
  - `info`: `#17a2b8` (Cyan / Blue)

---

## 🔄 Extending the Platform

The modular architecture makes it straightforward to connect to real backend infrastructure:
1. **API Integration**: Replace local state in `App.tsx` with RESTful API endpoints or GraphQL hooks (e.g. TanStack Query or SWR).
2. **Database Persistence**: Easily link `facilityRequests` and `machineData` to PostgreSQL or Cloud Firestore.
3. **AI Integration**: Connect the Chatbot and Recommendations views to the Gemini API (`@google/genai`) for real-time natural language reasoning over workforce data.

---

## 📄 License

This project is private and intended for enterprise evaluation and demonstration.
