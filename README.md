# Classic Portfolio

## Overview

A high-resolution, traditional-style developer portfolio website built with React and TypeScript. The project focuses on typography, clean layout, and maintainability with a newspaper/editorial aesthetic. It showcases projects, work experience, skills, and contact information in an elegant single-page application format.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- Single-page application structure with component-based architecture
- Functional components with React hooks throughout
- Framer Motion for animations and transitions
- Lucide React for iconography

**Styling**: Tailwind CSS (loaded via CDN)
- Custom theme configuration in index.html with serif/sans font families
- Color palette: ink (dark), paper (light), accent, muted
- Responsive design with mobile-first approach

**Component Structure**:
- `App.tsx` - Root component composing all page sections
- Page sections: Hero, Projects, Experience, About, Contact
- Reusable components: Section wrapper, ProjectGallery modal, ScriptModal
- Custom hooks: `useSound` for subtle audio feedback on interactions

**Type Safety**: 
- Strict TypeScript with custom types in `types.ts`
- Interfaces for Project, Script, Experience, SkillCategory, SocialLink
- Path aliases configured (`@/*` maps to root)

### Build System

**Bundler**: Vite 6
- React plugin for JSX transformation
- Environment variable handling for API keys (GEMINI_API_KEY)
- Development server on port 3000

**Configuration**:
- ES2022 target with ESNext modules
- Bundler module resolution
- Path aliases for clean imports

### Data Management

**Static Data**: All content stored in `constants.ts`
- Projects, scripts, experience, skills, and social links
- No backend or database - purely static content
- Type-safe data structures matching TypeScript interfaces

## External Dependencies

### Core Libraries
- **React 18.2.0** - UI framework
- **React DOM 18.2.0** - DOM rendering
- **Framer Motion 11.0.3** - Animation library
- **Lucide React 0.330.0** - Icon library

### Development Tools
- **Vite 6.2.0** - Build tool and dev server
- **TypeScript 5.8.2** - Type checking
- **@vitejs/plugin-react 5.0.0** - React integration for Vite

### External Services
- **Google Fonts** - Lato and Playfair Display font families (loaded via CDN)
- **Tailwind CSS** - Loaded via CDN (cdn.tailwindcss.com)
- **Picsum Photos** - Placeholder images for development

---

## Running Instructions

To set up and run the Classic Portfolio project locally, follow these steps:

1. **Install dependencies**  
   Open your terminal in the project directory and run:
```bash
   npm install
   ```

or if you use Yarn : 
```bash
yarn
```

2. Run development server
To start the development server with live reload:

```bash
npm run dev
```
or

```bash
yarn dev
```

This will launch the app at http://localhost:3000.


3. Build for production
To create a production-ready build:

```bash
npm run build
```
or

```bash
yarn build
```

---

### Photos of the project

  

![image1](https://i.imgur.com/Pu9DTMU.jpeg)
![image4](https://i.imgur.com/FNnRD7w.jpeg)
![image5](https://i.imgur.com/kYMmDKF.jpeg)
---
