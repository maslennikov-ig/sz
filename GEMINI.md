# Alexander Zhigiliy - Strategic Networking Landing Page

## Project Overview
This project is a high-end, responsive landing page for an event titled "Strategic Networking" by Alexander Zhigiliy. It is built as a Single Page Application (SPA) using React, designed to capture leads through a registration form integrated with Netlify Forms.

**Key Features:**
*   **Premium Design:** Uses a dark theme ("Deep Black", "Graphite") with gold accents to convey luxury and exclusivity.
*   **Interactive UI:** Features smooth scroll animations, a sticky header, and a modal-based registration flow.
*   **Content Sections:** Hero, Problems, Bio, Methodology, Program, Pricing, FAQ, and Footer.
*   **Netlify Integration:** Configured for deployment on Netlify, including form handling via a hidden HTML form for bot detection.
*   **SEO Optimized:** Includes Open Graph meta tags for social sharing.

## Tech Stack
*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (injected via CDN in `index.html`)
*   **Animations:** Framer Motion
*   **Icons:** Lucide React

## Architecture & Key Files

### Core Structure
*   `index.html`: Main entry point. Contains the hidden Netlify form for build-time detection and Tailwind CDN link.
*   `App.tsx`: Main application component, orchestrating the layout and section components.
*   `index.tsx`: React entry point.
*   `netlify.toml`: Netlify deployment configuration (build settings and redirects).

### Components (`/components`)
*   `Header.tsx`: Sticky navigation with smooth scroll to sections.
*   `Hero.tsx`: First screen with background image and call-to-action.
*   `RegistrationModal.tsx`: Form for user sign-up. Handles submission via `fetch` to Netlify's form endpoint.
*   `Footer.tsx`: Contains navigation links, contacts, and legal modals (Privacy Policy, Offer).
*   `FadeIn.tsx`: Reusable wrapper for scroll-reveal animations.
*   `LegalModal.tsx`: reusable modal for displaying large blocks of text (Privacy Policy/Offer).

### Data & Configuration
*   `constants.ts`: Centralized content storage (text, image URLs, navigation links, pricing tiers).
*   `types.ts`: TypeScript definitions for data models (PricingTier, TimelineItem, etc.).
*   `legalText.tsx`: Content for Privacy Policy and Offer Agreement.
*   `TASKS.md`: Project task tracking.

## Building and Running

### Prerequisites
*   Node.js (v18+ recommended)
*   npm

### Commands
*   **Install Dependencies:**
    ```bash
    npm install
    ```
*   **Run Development Server:**
    ```bash
    npm run dev
    ```
*   **Build for Production:**
    ```bash
    npm run build
    ```
*   **Preview Production Build:**
    ```bash
    npm run preview
    ```

## Development Conventions
*   **Styling:** Use Tailwind CSS utility classes directly in JSX.
*   **Animations:** Use `framer-motion` for complex interactions. Prefer the `FadeIn` component for standard scroll-reveal effects.
*   **Forms:** Form submissions are handled via Netlify Forms. Ensure the hidden form in `index.html` matches the inputs in `RegistrationModal.tsx`.
*   **Assets:** Images are currently referenced via external URLs in `constants.ts`. Local assets should go in `public/`.
