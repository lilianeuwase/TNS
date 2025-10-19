# TNS Tours Company - Project Documentation

## Overview
A Next.js website for TNS Tours Company showcasing travel experiences in Rwanda. Built with modern animations, smooth scrolling, and a dark theme with custom brand colors.

## Tech Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4 with custom TNS color palette
- **Animations**: GSAP (with ScrollTrigger) and Framer Motion
- **Smooth Scrolling**: @studio-freight/lenis
- **Port**: 5000 (development server)

## Brand Colors
- **night**: #1F1D20 (dark background)
- **ember**: #6A312F
- **clay**: #803E2F
- **sand**: #A79986 (text color)
- **charcoal**: #3E3D38

## Project Structure
```
src/
├── app/              # Next.js app router
├── components/       # React components
│   ├── common/      # Shared components (Loader, ClientLayout)
│   └── sections/    # Page sections (HeroSection)
├── hooks/           # Custom React hooks (useLenisScroll)
├── styles/          # Global styles (globals.css)
├── utils/           # Utility functions
└── assets/          # Static assets (images, videos)
```

## Global Development Rules

### Code Organization
1. **Modular components** - Break down all code into smaller, modular components. Avoid large files.
2. **No duplication** - Eliminate all code duplication. Use reusable components, hooks, and utilities.
3. **Scalability** - Every file must be structured for scalability and maintainability.

### Design Standards
4. **Fully responsive** - Always ensure responsiveness across all screen sizes (mobile, tablet, desktop).
5. **User feedback** - All user actions (send message, submit form, etc.) must display confirmation toasts or success/error notifications.
6. **Button icons** - All buttons should include a relevant icon on the LEFT side of the label.
7. **Vector icons only** - Do NOT use emojis anywhere. Use vector icons instead (Font Awesome or Heroicons).
8. **Consistent design** - Maintain consistent spacing, typography, and alignment. Follow Tailwind utility conventions.

### Technical Standards
9. **Production packages only** - Only use production-ready packages: Next.js router, GSAP, Framer Motion, Tailwind, Lenis. No prototype libraries.
10. **TypeScript** - Keep code fully TypeScript-compatible and clean.
11. **Edit, don't replace** - When making changes, always edit existing code inside relevant files. Never create replacement files or duplicate components unless specifically instructed. Keep existing structure, imports, and logic intact — modify only necessary parts.

## Current Features
- Dark theme with TNS brand colors
- Loading animation with Framer Motion
- Hero section with smooth animations
- Lenis smooth scrolling active site-wide
- GSAP ScrollTrigger integration

## Development Server
- Command: `npm run dev`
- Port: 5000
- URL: http://localhost:5000
