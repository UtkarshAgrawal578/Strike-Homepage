# ⚡ STRIKE (strikes.in) - Thunder Hackathon 6.0 Frontend Submission

> **A high-fidelity recreation of the STRIKE homepage by Rohit Negi combined with "Project Thunder Overdrive" — an immersive, non-intrusive, and gamified sale experience.**

---

## 🎯 Executive Summary & Concept

The challenge was twofold:
1. **Recreate the STRIKE homepage (`strikes.in`)** with pixel-perfect accuracy, dark cybernetic aesthetic, interactive curricula, and real platform architecture.
2. **Design an exceptional, creative Sale Experience** that avoids traditional annoying popup banners and instead sparks genuine curiosity, user engagement, and storytelling woven naturally into the STRIKE ecosystem.

### 💡 The Idea: *Project Thunder Overdrive*
Instead of slapping an ad banner on the site, the sale is positioned as an **interactive engineering challenge & energy surge**:
- **Multi-Touch Discovery**: Users discover the sale organically through an **Interactive Terminal Easter Egg** (`strike surge`), a glowing **Thunder Circuit Capsule**, or the **Live Batch Radar**.
- **Gamified "Thunder Circuit" Unlock**: Users interactively connect three foundational engineering pillars—**DSA Matrix Core**, **Distributed Systems Node**, and **GenAI Agent Neural Net**—to charge the Strike Capacitor to 100% and synthesize their VIP Grant Voucher (`THUNDER40`).
- **Real-Time Dynamic Recalculation**: Once unlocked/copied, all pricing across the website (Thunder 100 Days Bootcamp, Strike Ultra, Strike Plus, Single Tracks) instantly recalculates with celebratory confetti and persistent status.
- **Fail-Safe Persistence**: The 48-hour countdown timer is locked in `localStorage` with a persistent target timestamp. **Refreshing the browser never resets the countdown.**
- **Zero-Friction Fallbacks**: Includes a 1-click "Instant Unlock" for quick shoppers, a floating minimized dock, and an interactive **Hackathon Judge Control Suite** to test 0s expiry and timer resets instantly.

---

## 🚀 Key Features Checklist

### Part 1: STRIKE Homepage Recreation
- [x] **Header & Navigation**: Sticky blur navbar with animated STRIKE lightning logo, batch status chips, and quick anchors.
- [x] **Interactive Hero Section**: First-principles value proposition, social proof metrics (50,000+ students, ₹2.05 Cr highest offer, AIR 202), and live interactive **Code Sandbox / REPL**.
- [x] **Top Tech Alumni Placement Marquee**: Seamless ticker featuring Google, Uber, Microsoft, Amazon, Atlassian, Swiggy, and Razorpay.
- [x] **Thunder: 100 Days of Code Spotlight**: 4-phase interactive curriculum roadmap tabs (Frontend, Distributed Backend, HLD/LLD & Security, DevOps & Cloud) with live batch specs.
- [x] **Course Catalog Grid with Dynamic Filters**: Category filtering across Live Bootcamps, DSA, Web Dev, GenAI Agents, and System Design.
- [x] **Syllabus Modal Drawer**: Detailed week-by-week topic breakdown for every course.
- [x] **Mentor Spotlight**: Rohit Negi profile, credentials (Ex-Uber SDE, AIR 202 GATE CS, IIT Guwahati), and teaching philosophy.
- [x] **Transparent Membership Pricing Calculator**: Strike Plus vs Strike Ultra with 1-Year to 4-Year duration toggles and real-time coupon discount breakdown.
- [x] **Verified Student Testimonials**: Real alumni reviews with company logos, CTC packages, and ratings.
- [x] **Interactive FAQ Accordion**: Common student queries on curriculum, recordings, Discord, and placements.
- [x] **Footer**: Comprehensive platform directory, social links (YouTube, LinkedIn, Instagram, Telegram), and trust badges.

### Part 2: Thunder Overdrive Sale Experience
- [x] **Clear Discount & Value Communication**: Flat 40% Instant Discount (`THUNDER40`), saving up to ₹15,000 + 3 Free Bonus Masterclasses & Resume Audits.
- [x] **Applicable Products Clearly Displayed**: Thunder 100 Days Live Batch, Strike Ultra, Strike Plus, GenAI Engineering.
- [x] **Voucher Coupon Code**: `THUNDER40` with 1-click clipboard copy, visual copied checkmark, and active site badges.
- [x] **Persistent Countdown Timer**: Live ticking Hours, Minutes, Seconds, and Milliseconds.
- [x] **Browser Persistence Guarantee**: Uses timestamp math against `localStorage`; page reloads maintain exact remaining time.
- [x] **Dismissible & Minimized State**: Modal closes into a sleek bottom-right floating pill with live countdown clock and reopening trigger.
- [x] **Strict Expiry Handling**: Once timer hits zero, the offer displays "EXPIRED" and disables redemption.
- [x] **Hackathon Judge Test Controls**: Floating panel in bottom-left allowing judges to:
  - ⏱️ `Force Expire (0s)` to test expired state immediately.
  - 🔄 `Reset 48h Timer` to restore full countdown.
  - ⚡ `Open Sale HUD` anytime.
  - 🎟️ `Apply / Remove 40% Code` to test real-time pricing recalculations.

---

## 🛠️ Technical Stack & Architecture

- **Framework**: React 19 + TypeScript (Strict Mode)
- **Build Tool**: Vite 8.3
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism & Cyber Matrix Engine
- **Icons**: Lucide React + Custom SVG Brand Glyphs
- **Animation & Particles**: Canvas-Confetti + CSS Hardware-Accelerated Keyframes
- **State Management**: React Context API (`SaleContext`) with `localStorage` synchronization

### File Structure:
```
strike-homepage/
├── src/
│   ├── components/
│   │   ├── courses/          # Course cards, catalog grid, syllabus drawer
│   │   ├── hero/             # Hero banner, interactive REPL sandbox, placement ticker
│   │   ├── layout/           # Navbar, Footer
│   │   ├── mentor/           # Rohit Negi profile & achievements
│   │   ├── pricing/          # Membership calculator & coupon portal
│   │   ├── reviews/          # Verified student testimonials
│   │   ├── thunder/          # Flagship 100 Days curriculum roadmap
│   │   ├── faq/              # Collapsible accordion FAQ
│   │   ├── sale/             # Thunder Overdrive sale experience HUD, circuit unlock, countdown & judge dock
│   │   └── ui/               # Toast notifications, confetti particles, SVG social icons
│   ├── context/
│   │   └── SaleContext.tsx   # Persistent state, timer math, localStorage sync
│   ├── data/
│   │   ├── courses.ts        # Course & pricing dataset
│   │   └── reviews.ts        # Testimonials & FAQ dataset
│   ├── types/
│   │   └── index.ts          # TypeScript domain interfaces
│   ├── App.tsx               # Root view composition
│   ├── index.css             # Tailwind 4 & custom cyber themes
│   └── main.tsx              # React mounting root
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Quick Start & Setup

### Prerequisites:
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation:
```bash
# 1. Clone the repository
git clone <repository-url>
cd strike-homepage

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Production Build:
```bash
npm run build
npm run preview
```

---

## 🎮 User Flow & Discovery Guide

1. **Discovery**:
   - Scroll through the landing page.
   - Click the **"⚡ Secret Surge Code"** tab on the Hero code terminal and hit `Run Snippet` or click the **"⚡ THUNDER 6.0 FLASH GRANT"** pill in the navbar.
2. **Interaction & Unlock**:
   - The *Thunder Overdrive* HUD opens.
   - Click on the 3 engineering nodes to power the grid to 100% or click `Instant 1-Click Code Unlock`.
3. **Redemption**:
   - Click `Copy & Apply 40% OFF`.
   - Watch the celebration confetti fire and see the coupon `THUNDER40` auto-applied across the entire website.
   - Notice how the pricing in the **Thunder Spotlight**, **Course Cards**, and **Pricing Table** all drop by 40% in real-time.
4. **Testing Persistence & Expiry**:
   - Refresh the page (`F5`): the timer continues exactly where it left off.
   - Open the **Judge Test Controls** in the bottom-left corner and click `Force Expire (0s)` to verify the disabled/expired state.
   - Click `Reset 48h Timer` to restore.

---

## 🏆 Thunder Hackathon 6.0 Evaluation Mapping

| Hackathon Requirement | Implementation Location |
| :--- | :--- |
| **STRIKE Design & Theme Match** | Deep space black `#07090e`, neon violet/cyan glows, Fira Code typography, fintech glass panels |
| **Homepage Accuracy** | Exact course roster, Rohit Negi bio, Thunder 100 Days syllabus, alumni placements, Strike Plus/Ultra plans |
| **Non-Standard Creative Sale** | Gamified 3-node circuit unlock, terminal Easter egg trigger, real-time catalog price slashing |
| **Timer Persistence** | `localStorage` timestamp target; immune to browser refreshes |
| **Expiry Handling** | Automatic deactivation at `00:00:00` with graceful UI states |
| **Mobile Responsiveness** | Fully responsive layout with mobile drawer, touch targets, and fluid grid |
| **Performance** | 60 FPS hardware-accelerated animations, zero layout shifts, optimized bundle size |

---
*Crafted with First Principles for Thunder Hackathon 6.0.*
