=====================
Section: Hero
Class: .hero
Animation: GSAP fade-in + text slide (Y-20 → 0, 0.8 s easeOut)
Background: hero-bg.jpg or hero-video.mp4
Content: Logo, product name, CTA (“Explore the Collection”)
Usage: Elementor Hero section
Notes: Autoplay video disabled on mobile; fallback image used.

=====================
Section: Gallery
Class: .gallery

Library: Swiper.js v11

Slides per view:

1 – Mobile
2 – Tablet
4 – Desktop
Navigation: Prev/Next arrows + drag enabled

Images: Optimized WebP, lazy-loaded

Animation: Fade-in on viewport, smooth 400 ms slide

Notes: Each slide uses .gallery-item; add hover zoom.

=====================
Section: About
Class: .about
Animation: AOS fade-up (staggered)
Layout: 2-column (image left, text right)
Typography: Playfair Display + Lato (self-hosted)
Notes: Line length ≤ 75 ch, maintain visual balance.

=====================
Section: Specs
Class: .specs
Layout: Responsive grid (2 × 3 desktop, 1 × 6 mobile)
Animation: GSAP stagger-in
Icons: Inline SVG (no external requests)
Notes: .spec-item cards; equal height enforced.
=====================
Section: CTA / Inquiry
Class: .contact
Plugin: WPForms Lite (for WP integration)
Fields: Name, Email, Message
Submit: AJAX + popup confirmation
Email Target: inquiries@richardmille.in
Animation: Fade-in (delay 0.2 s)
Notes: Simple validation; consistent field spacing.
=====================
Section: Footer
Class: .footer
Content: Logo + © 2025 Richard Mille
Background: #000000
Typography: Lato, 14 px
Notes: Height ≤ 80 px, no extra widgets.
=====================


1. hero
2. About
3. Gallery
4. Specs
5. Inquiry (contact in footer [contact| other stuff ] = footer )
6. footer
