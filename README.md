# NIRMAL — Premium Product Showcase Website

> **"Everyday Care. Thoughtfully Made."**
>
> A modern, minimalistic, and premium product showcase and lead-generation website designed for **NIRMAL**, an emerging Indian manufacturer of household cleaning liquids and handcrafted body soaps.

---

## 1. Project Overview

NIRMAL produces its own line of household cleaning essentials (Floor Cleaners, Bathroom Cleaners, Toilet Cleaners) and personal care bathing soaps. This website serves as a **frontend demonstration prototype** created to present the brand aesthetic, product catalogue, and lead inquiry workflows to the business owner.

### Key Goals
- **Establish a distinguished digital brand identity:** Warm neutral palettes, deep charcoal typography, and restrained botanical green accents.
- **Showcase the dual product lines:** Household hygiene solutions and handcrafted personal care soaps.
- **Drive customer inquiries:** Easy product discovery, modal specifications, and pre-filled WhatsApp inquiry routing.
- **Collect customer sentiment:** A fully validated interactive feedback form with simulated submission.
- **Ensure zero maintenance friction:** All brand copy, contact details, and product catalogue data are centralized into two configuration files.

> [!NOTE]
> This is a **frontend-only demonstration** and lead-generation portal. It does **not** include e-commerce cart checkouts, payment gateways, user accounts, or active backend databases.

---

## 2. Key Features

### Navigation & Header
- **Sticky Glassmorphism Header:** Soft backdrop blur with active section highlighting as the user scrolls.
- **Accessible Mobile Drawer:** Hamburger menu with body scroll locking, keyboard ESC closing, and auto-close upon navigation.
- **Primary CTA:** Quick "Explore Products" button routing visitors directly to the showcase.

### Hero Section
- **Compelling Brand Narrative:** Headline: *"A Cleaner Home. A Fresher Everyday."*
- **Clear Value Proposition:** Communicates the dual product focus (home liquids & personal care soaps).
- **Dual CTAs:** "Explore Our Products" (smooth-scrolls to catalogue) and "Contact Us" (routes to contact options).
- **Interactive Visual Presentation:** Curated photography highlighting bottle packaging and soap bars with floating trust badges.

### Product Categories Division
- **Two Distinct Pillars:**
  1. **Household Cleaning Essentials:** Floor cleaners (Pine & Citrus), Bathroom tile & basin cleaners, Toilet cleaners & descalers.
  2. **Personal Care & Soaps:** Gentle Neem & Tulsi bars, Pure Glycerin moisture bars, Sandalwood & Turmeric soap, Shea butter conditioning bars.
- **Direct Exploration Triggers:** Clicking a category filters the catalogue below and smoothly navigates down.

### Dynamic Product Catalogue
- **Filter Tabs:** Browse by *All Products*, *Floor Cleaners*, *Bathroom Cleaners*, *Toilet Cleaners*, or *Body Soaps*.
- **Live Search Bar:** Real-time search across product names, descriptions, and ingredients.
- **Reusable Product Cards:**
  - Category pill badge and packaging size badge (e.g., 500 ml, 1000 ml, 125 g).
  - Clear sample pricing marked as demo estimates.
  - Graceful fallback graphics if an image fails to load.
  - "View Details" modal button and "Enquire" button.
- **Product Details Modal:**
  - Accessible dialog (`role="dialog"`, `aria-modal="true"`, focus management, ESC key close).
  - High-resolution packaging view.
  - Detailed formulation background, available sizes, packaging specifications, and suggested usage instructions.
  - Direct **"Enquire on WhatsApp"** button generating a pre-filled product inquiry.
- **Empty State:** Friendly fallback when filters or search queries return no results, with a one-click reset.

### Why Choose Nirmal
- Four core brand pillars:
  1. *Locally Manufactured* (Direct producer oversight)
  2. *Everyday Cleaning Essentials* (Formulated for Indian water conditions)
  3. *Carefully Packaged* (Durable HDPE leak-proof bottles & moisture-barrier soap packs)
  4. *Complete Dual Range* (Home and personal hygiene in one order)
- Honest proposed marketing messaging with explicit owner review notice.

### About Nirmal
- Story of purpose, small-batch manufacturing, and commitment to straightforward care without middleman markups.
- Clearly marked placeholder section for the founder's verified backstory.

### Interactive Customer Feedback Form
- **Form Fields:**
  - **Customer Name** *(Required, min 2 chars, max 70 chars)*
  - **Product Category** *(Required, select dropdown)*
  - **Star Rating** *(Required, interactive 1 to 5 stars with hover preview and keyboard accessibility)*
  - **Feedback Message** *(Required, min 10 chars, max 500 chars with live counter)*
  - **Specific Product** *(Optional)*
  - **Phone Number** *(Optional, validated for 10-digit Indian mobile formats)*
  - **Email Address** *(Optional, validated via RFC email regex)*
- **Frontend Validation:** Real-time on-blur and on-submit error messages preventing invalid submissions.
- **Simulated Submission:** Smooth loading state (~850ms) followed by a confirmation message:
  > *"Thank you for sharing your feedback with Nirmal. We appreciate your time!"*
- **Form Reset:** Allows submitting additional feedback without page refresh.
- **Honest Demo Notice:** Explicitly informs reviewers that storage is simulated and no data is persisted to localStorage or remote servers.

### Contact & Lead Generation
- **Centralized Contact Info:** Display phone, email, factory address, and operating hours.
- **Reusable WhatsApp Helper:** Generates standard `https://wa.me/` links with pre-filled inquiries; includes graceful demo fallback if unconfigured.
- **Interactive Quick Callback Box:** Allows visitors to leave a quick message or callback note.
- **One-Click Copy:** Quick buttons to copy phone numbers and emails to clipboard with toast confirmations.

### Footer & Legal
- NIRMAL wordmark, brand summary, quick links, category shortcuts, factory address, dynamic copyright year.
- **Privacy Notice & Terms of Showcase Modals:** Outlines demonstration scope and data transparency.

### UX & Accessibility
- **Back to Top Button:** Floating smooth-scroll button appearing after scrolling 400px.
- **Toast Notifications:** Floating non-intrusive alerts for inquiries and copy events.
- **Semantic HTML & SEO Meta:** Open Graph preview card, SVG favicon, and clean semantic landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).

---

## 3. Technology Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing, `verbatimModuleSyntax`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linter & Quality:** [oxlint](https://oxc-project.github.io/)

---

## 4. Project Structure

```text
Nirmal_Cleansing/
├── public/
│   ├── favicon.svg              # Custom brand favicon (green droplet & leaf)
│   └── og-image.svg             # Open Graph preview card for social sharing
├── src/
│   ├── assets/                  # Static media assets
│   ├── components/              # Modular UI components
│   │   ├── BackToTop.tsx        # Floating scroll-to-top button
│   │   ├── Badge.tsx            # Pill badges (categories, sample price, bestseller)
│   │   ├── Button.tsx           # Multi-variant button (primary, outline, whatsapp)
│   │   ├── FeedbackForm.tsx     # Validated customer feedback form
│   │   ├── Footer.tsx           # Footer with category links and legal triggers
│   │   ├── LegalModal.tsx       # Privacy policy & showcase terms dialog
│   │   ├── Navbar.tsx           # Sticky nav with mobile drawer
│   │   ├── ProductCard.tsx      # Showcase card with image fallback & actions
│   │   ├── ProductDetailsModal.tsx # Full product specification modal
│   │   └── Toast.tsx            # Toast notification container
│   ├── config/
│   │   └── site.ts              # Central brand, contact & theme configuration
│   ├── context/
│   │   └── ToastContext.tsx     # Toast context and useToast() hook
│   ├── data/
│   │   └── products.ts          # Central product catalogue (10 items, specs, sizes)
│   ├── lib/
│   │   ├── feedbackService.ts   # Isolated simulated submission handler
│   │   ├── validation.ts        # Indian phone, email & field validators
│   │   └── whatsapp.ts          # Safe wa.me link generator & inquiry formatter
│   ├── sections/                # Full page sections
│   │   ├── AboutNirmal.tsx      # Brand story & manufacturing philosophy
│   │   ├── Categories.tsx       # Two-pillar categories overview
│   │   ├── ContactSection.tsx   # Contact cards, WhatsApp card & quick callback
│   │   ├── FeedbackSection.tsx  # Customer feedback showcase wrapper
│   │   ├── Hero.tsx             # Hero screen with headline & visual split
│   │   ├── ProductShowcase.tsx  # Interactive filterable catalogue & search
│   │   └── WhyNirmal.tsx        # 4 core pillars with custom icons
│   ├── App.tsx                  # Main single-page application layout
│   ├── index.css                # Tailwind CSS v4 setup & custom theme variables
│   └── main.tsx                 # Application entry point
├── dist/                        # Production build output
├── index.html                   # HTML entry with SEO metadata and Google Fonts
├── package.json                 # Dependencies and build scripts
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite configuration with Tailwind CSS plugin
```

---

## 5. Prerequisites

Before running the project locally, ensure you have installed:
- **Node.js:** v18.0.0 or later (v20+ recommended; verified on Node v24)
- **pnpm:** v9.0.0 or later (or `npm` / `yarn`)

Verify your installation:
```bash
node -v
pnpm -v
```

---

## 6. Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nirmal-cleansing.git
   cd nirmal-cleansing
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the local development server:**
   ```bash
   pnpm run dev
   ```

4. **Open in your browser:**
   Navigate to `http://localhost:5173/` to view the website.

---

## 7. Production Build & Linting

### Build for Production
To generate the optimized production bundle:
```bash
pnpm run build
```
The output will be placed in the `dist/` directory, ready for deployment.

### Run Lint Checks
To run the fast code quality linter:
```bash
pnpm run lint
```

### Preview Production Build
To preview the generated production build locally:
```bash
pnpm run preview
```

---

## 8. Deployment Instructions (Vercel)

This website is a static Vite application and deploys to **Vercel** with zero backend configuration.

### Deploying via Vercel Web Dashboard:
1. Push your repository to **GitHub** or **GitLab**.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `nirmal-cleansing` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install`
5. Click **"Deploy"**. Your website will be live in seconds with an SSL certificate.

### Deploying via Vercel CLI:
```bash
pnpm add -g vercel
vercel
```
Follow the interactive prompts and choose default settings.

---

## 9. How to Customize for the Real Business

When the business owner approves the design, customize the website easily by updating two central files:

### A. Updating Brand Information & Contact Details
Open [`src/config/site.ts`](src/config/site.ts):

```typescript
export const siteConfig: SiteConfig = {
  brand: {
    name: 'NIRMAL',                                // Update brand name
    tagline: 'Everyday Care. Thoughtfully Made.',  // Update tagline
    heroHeadline: 'A Cleaner Home. A Fresher Everyday.',
    // ...
  },
  contact: {
    phone: '+91 98765 43210',                      // Enter actual phone number
    email: 'contact@nirmalcare.example.com',       // Enter actual business email
    address: {
      line1: 'Your Factory Address',
      city: 'Your City',
      state: 'Your State',
      pincode: '000000',
      country: 'India',
    },
    whatsapp: {
      isConfigured: true,                          // Set to true
      number: '919876543210',                      // Real WhatsApp number with country code (no +)
      displayNumber: '+91 98765 43210',
    },
    isPlaceholder: false,                          // Set to false for production
  },
};
```

### B. Adding or Modifying Products & Images
Open [`src/data/products.ts`](src/data/products.ts):
- Add, edit, or remove items from the `PRODUCTS` array.
- Each product supports:
  - `name`: Official retail product name.
  - `category`: `'floor-cleaner' | 'bathroom-cleaner' | 'toilet-cleaner' | 'body-soap'`.
  - `size`: Primary pack size (e.g., `'1000 ml'`, `'500 ml'`, `'125 g'`).
  - `availableSizes`: Array of available packaging variants (e.g., `['500 ml', '1000 ml', '5 Litre Can']`).
  - `samplePrice`: Confirmed retail or wholesale price (e.g., `'₹120'`).
  - `image`: URL or local asset path (`/assets/...`).
  - `features`: Bulleted formulation highlights.
  - `usageInstructions`: How customers should dilute and use the product.
  - `packagingType`: Bottle and nozzle description.

### C. Updating Brand Colors
Open [`src/index.css`](src/index.css) to adjust the color tokens:
```css
@theme {
  --color-brand-primary: #2E6F40;   /* Core brand green */
  --color-brand-dark: #1B4326;      /* Hover green */
  --color-brand-light: #EBF3ED;     /* Pill background */
  --color-surface-warm: #FAF9F6;    /* Warm white background */
}
```

---

## 10. Screenshots & Visual Assets

> Replace these placeholders with actual screenshots after deploying the preview:

| Viewport | Preview | Description |
| :--- | :--- | :--- |
| **Desktop (1440px)** | `![Desktop Showcase](./docs/screenshot-desktop.png)` | Full hero view, category split, and 4-column product grid |
| **Tablet (768px)** | `![Tablet Showcase](./docs/screenshot-tablet.png)` | 2-column responsive product layout and simplified header |
| **Mobile (375px)** | `![Mobile Showcase](./docs/screenshot-mobile.png)` | Single-column touch-friendly cards, feedback form, and drawer menu |

To generate screenshots:
1. Run `pnpm run dev` and open Developer Tools (`F12`).
2. Toggle device emulation (iPhone SE 375px, iPad Mini 768px, Desktop 1440px).
3. Capture full-page screenshots and save them under `docs/`.

---

## 11. Customer Feedback Form (Demo Simulation Details)

The Customer Feedback Form demonstrates full client-side validation and interactive state management:
1. **Frontend Validation:** Checks mandatory fields (Name, Category, 1-5 Rating, 10-500 char message) and validates Indian phone numbers and emails if supplied.
2. **Simulated Submission:** [`src/lib/feedbackService.ts`](src/lib/feedbackService.ts) simulates an asynchronous network request (`850ms`).
3. **Confirmation:** Displays the approved confirmation screen and provides a "Submit Another Response" reset button.
4. **No Local Persistence:** Customer data is **never** saved to `localStorage`, `sessionStorage`, or external databases.

---

## 12. Future Backend & Notification Integration Checklist

When the business owner approves production integration, connect the frontend without rewriting components:

- [ ] **Feedback Persistence:**
  - Create a backend API endpoint (e.g. `POST /api/v1/feedback`).
  - Replace the simulated delay in [`src/lib/feedbackService.ts`](src/lib/feedbackService.ts) with `fetch('/api/v1/feedback', { method: 'POST', body: JSON.stringify(data) })`.
- [ ] **Instant Owner Notifications:**
  - Connect a Telegram Bot API or Twilio/WhatsApp Business API on the backend to notify the owner immediately when new feedback or wholesale inquiries arrive.
- [ ] **Real Business Phone & WhatsApp:**
  - Update `siteConfig.contact.whatsapp.number` with the verified WhatsApp Business number.
- [ ] **Professional Product Photography:**
  - Replace Unsplash stock imagery with studio photographs of Nirmal's physical bottles and soap boxes.
- [ ] **Domain & DNS:**
  - Connect a custom domain (e.g. `nirmalcare.in` or `nirmalclean.com`) on Vercel.
- [ ] **Analytics & Tracking (Optional):**
  - Add Google Tag Manager or privacy-focused analytics (e.g. Plausible or Umami).

---

## License

This project is created for demonstration and evaluation by **NIRMAL**. All rights reserved.
