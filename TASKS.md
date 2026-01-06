# Implementation Plan: Enhancing Alexander Zhigiliy's Website

## Orchestrator: Gemini CLI (AI Agent)
## Current Date: January 7, 2026

---

### Phase 1: Content & Social Proof Integration

*   **Task 1.1: Implement "Media Hub" (Ecosystem Block)**
    *   **Objective:** Create a section showcasing Alexander's Telegram channel and YouTube presence.
    *   **Design:** Clean, minimalist, premium. Use `FadeIn` animation. Mockup of a device (e.g., iPhone frame) displaying social feeds.
    *   **Content:** Placeholder text for Telegram channel name ("AZ\_networking") and YouTube channel. Use existing `IMAGES.hero` or a neutral background.
    *   **File:** New component `components/MediaHub.tsx`.
    *   **Integration:** Add to `App.tsx` main section.
    *   **Status:** Not started.

*   **Task 1.2: Implement "Social Proof" (Client Logos Block)**
    *   **Objective:** Display logos of client companies to build trust.
    *   **Design:** A row of grayscale logos that perhaps colorize on hover. Simple, elegant.
    *   **Content:** Placeholder logos (e.g., generic squares with "Client A", "Client B"). Actual logos would require client assets.
    *   **File:** New component `components/SocialProof.tsx`.
    *   **Integration:** Add to `App.tsx` main section.
    *   **Status:** Not started.

---

### Phase 2: Lead Generation & Conversion

*   **Task 2.1: Implement "Lead Magnet" (Gaid Download Block)**
    *   **Objective:** Offer a free guide to capture leads.
    *   **Design:** A distinct section with a title ("Скачайте бесплатный гайд"), a brief description, and a prominent CTA button. Consistent with "Quiet Luxury" theme.
    *   **Content:** Placeholder text for guide title/description. CTA button will link to a placeholder URL or prompt download.
    *   **File:** New component `components/LeadMagnet.tsx`.
    *   **Integration:** Add to `App.tsx` main section, likely before the Footer.
    *   **Status:** Not started.

---

### Phase 3: Enhancing Personal Brand Narrative

*   **Task 3.1: Enhance "Bio" Section with Timeline**
    *   **Objective:** Add a visual timeline of Alexander's career.
    *   **Design:** Vertical timeline structure. Use `framer-motion` for staggered animations of timeline points. Align with existing premium aesthetic.
    *   **Content:** Utilize data from `TIMELINE` in `constants.ts` or create new relevant data points.
    *   **File:** Modify `components/Bio.tsx`.
    *   **Status:** Not started.

---

### Phase 4: Consistency & Finalization

*   **Task 4.1: Code Review & Refinement**
    *   Ensure all new components adhere to the established color palette, fonts, and spacing.
    *   Apply `FadeIn` animations consistently.
    *   Verify mobile responsiveness for all new sections.
    *   **File:** All relevant files (`App.tsx`, `components/*.tsx`, `constants.ts`).
    *   **Status:** Not started.

*   **Task 4.2: Release**
    *   Commit all changes to Git.
    *   Run the release automation script.
    *   **Command:** `bash .claude/scripts/release.sh --yes`
    *   **Status:** Not started.