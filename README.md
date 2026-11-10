# RYG Networks — Website

Modern marketing site for **RYG Networks** — _Simplifying Technology. Securing Your Future._
Built with **React 18 + Vite**, **React Router**, **Framer Motion** and **Lucide** icons.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production bundle → dist/
npm run preview    # preview the production build
```

## Design system

A dark, high-contrast tech aesthetic with an indigo → cyan → emerald brand gradient.
All tokens live at the top of [`src/styles/index.css`](src/styles/index.css) under `:root`
— change colors, radii, spacing and fonts there and they propagate everywhere.

| Token group | Where |
|-------------|-------|
| Colors, gradients, shadows, radii | `src/styles/index.css` → `:root` |
| Buttons / cards / layout utilities | `src/styles/index.css` |
| Page-specific styles | `src/styles/pages.css` |

## Structure

```
src/
  components/      Navbar, Footer, Logo, ServiceCard, Reveal, ScrollToTop
  pages/           Home, Services, About, Contact, NotFound
  data/site.js     Company info + services (single source of truth)
  styles/          index.css (design system), pages.css
```

## Editing content

All company details and the services list live in **[`src/data/site.js`](src/data/site.js)**.
Update phone, email, address or services there — every page reads from it.

The contact form has no backend: **Send enquiry** opens a prefilled email (mailto) and
**WhatsApp instead** opens a prefilled WhatsApp chat. Swap in a form API later if needed.
