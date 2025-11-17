BlueWave — Premium Animated Website

Overview
- Modern, conversion-focused website with tasteful motion.
- Fully responsive across devices.
- Built with React + Vite + Tailwind, Framer Motion for animations, and Spline for a hero animation.

Pages
- Home: Animated hero with Spline scene, service highlights, and stats.
- About: Animated timeline cards.
- Services: Grid of animated service cards with hover micro‑interactions.
- Pricing: Animated pricing table with monthly/yearly toggle.
- Testimonials: Carousel with auto‑play and manual controls.
- Contact: Validated form with success state.
- FAQ: Expandable questions.
- Privacy & Terms: Legal placeholders.

Assets & Placeholders
- Spline hero: src/components/Hero.jsx points to the provided Spline URL. Replace with your own if desired.
- Lottie placeholders: You can place JSON files under public/lottie and embed with a Lottie React component if needed.
- Logo: Replace the text logo in the header/footer with your SVG.
- Images: Replace Unsplash image links in Home with your optimized images.

Performance & Accessibility
- Reduced motion is respected via prefers-reduced-motion and a manual toggle in the header.
- Animations use transform/opacity only; sections reveal via IntersectionObserver.
- Images are lazy-loaded where appropriate.
- All interactive controls have labels and keyboard focus styles.

Customization
- Colors: Tailwind classes use blue/indigo accents; adjust to your brand.
- Animation timing: Default 600ms ease-out. See ScrollReveal and Counter components to tweak.
- Stagger: Controlled in Hero container (0.1s) and ScrollReveal props.

Hosting
- Development: npm run dev
- Build: npm run build
- Preview: npm run preview
- Set VITE_BACKEND_URL in a .env file if you connect to an API.

Replacing Lottie Files
- Drop files in public/lottie/*.json and integrate using your preferred Lottie React library. Swap the placeholder container in Hero or sections.

Notes
- Keep hero images small and compress assets.
- Avoid heavy loops on mobile; the toggle reduces/simplifies motion.
