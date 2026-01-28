# Marko Perić - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark Modern UI** - Professional dark theme with subtle gradient accents
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Fast Performance** - Built with Next.js for optimal loading speeds
- **Clean Code Structure** - Well-organized component architecture

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section
    ├── About.tsx        # About me section
    ├── Skills.tsx       # Technical skills
    ├── Experience.tsx   # Work experience timeline
    ├── Projects.tsx     # Featured projects
    ├── GitHub.tsx       # GitHub CTA section
    ├── Contact.tsx      # Contact information
    └── Footer.tsx       # Footer with links
```

## Customization

### Adding Your CV

Place your CV file as `public/cv.pdf` to enable the download functionality.

### Updating Contact Info

Edit the contact information in `src/components/Contact.tsx` and `src/components/Footer.tsx`.

### Modifying Colors

The color scheme can be adjusted in `tailwind.config.ts` under the `extend.colors` section.

## License

MIT License - feel free to use this template for your own portfolio!
