# Bharani Portfolio - Development Guide

This is a modern single-page portfolio website built with React.js and Tailwind CSS.

## Project Overview

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS v3 (utility-first approach)
- **Target**: College placement portfolio
- **Status**: Development ready

## Component Structure

### Core Components (`src/components/`)
- **Navbar.jsx** - Fixed navigation bar with mobile menu and smooth scrolling
- **Hero.jsx** - Hero section with profile image circle, wave divider, and CTA buttons (ID: `#home`)
- **About.jsx** - About section with statistics and CV download button (ID: `#about`)
- **Skills.jsx** - Skills/Services organized by category with proficiency levels (ID: `#service`)
- **Projects.jsx** - Filterable project/portfolio gallery with category filters (ID: `#portfolio`)
- **Blog.jsx** - Blog articles and insights with featured posts (ID: `#blog`)
- **Education.jsx** - Educational background and certifications timeline (ID: `#education`)
- **Leadership.jsx** - Leadership roles and community involvement (ID: `#leadership`)
- **Contact.jsx** - Contact form and footer with contact information (ID: `#contact`)
- **Footer.jsx** - Complete footer with navigation links and social media (ID: `#footer`)

## Navigation Structure

The navbar has fixed navigation links to these main sections:
- `#home` - Hero section
- `#about` - About section
- `#service` - Service/Skills section (formerly Skills with id="skills")
- `#portfolio` - Portfolio/Projects section (formerly Projects with id="projects")
- `#blog` - Blog section
- `#contact` - Contact section

Additional sections (accessible but not in navbar):
- `#education` - Education section
- `#leadership` - Leadership section
- `#footer` - Footer section

Navigation items on the navbar:
```
Home | About | Service | Portfolio | Blog | Contact [DOWNLOAD CV]
```

## Development Guidelines

### Component Development
- Use functional components with React hooks
- Keep components focused and reusable
- Use Tailwind CSS only for styling (no custom CSS unless absolutely necessary)
- Maintain consistent spacing and padding using Tailwind scale
- Add section IDs for navigation purposes

### Styling Conventions
- Dark teal colors: `bg-teal-700`, `bg-teal-800`
- Max-width container: `max-w-7xl` for consistent alignment
- Section padding: `py-16 lg:py-24` for vertical spacing
- Horizontal padding: `px-4 lg:px-6` for responsive margins
- Use consistent color palette across components
- Implement hover effects for interactive elements
- Maintain responsive design with Tailwind breakpoints (sm, md, lg, xl)

### Common Tasks

#### Adding a New Section
1. Create component file in `src/components/NewSection.jsx`
2. Add section ID: `<section id="newsection">`
3. Import in `App.jsx` and add to render
4. Add navigation link in `Navbar.jsx` navItems array
5. Use `scrollToSection` function for navigation

#### Updating Content

**Hero Section**
- Modify greeting text ("HELLO I AM")
- Change name/headline
- Update introduction paragraph
- Replace profile image placeholder

**Skills Section**
- Edit skills array with categories and items
- Update proficiency level percentages
- Modify skill categories as needed

**Projects Section**
- Edit projects array with titles, descriptions
- Replace emoji with image URLs
- Adjust category filters
- Update project details

**Education Section**
- Edit education array with degree information
- Update institutions and years
- Add achievements/badges
- Modify timeline content

**Leadership Section**
- Edit leadership array with role information
- Update organizations and periods
- Modify role descriptions and highlights

**Contact Section**
- Update email address
- Update phone number
- Update location
- Configure form submission

#### Color Scheme Changes
Edit `tailwind.config.js`:
```javascript
colors: {
  teal: {
    700: '#0d6e5e',
    800: '#0a5a4a',
  }
}
```

### Build and Deploy

**Development Server**
```bash
npm run dev
```

**Production Build**
```bash
npm run build
npm run preview
```

**Deployment Ready**
- Upload `dist/` folder to hosting
- Recommended platforms: Vercel, Netlify, GitHub Pages

## Coding Standards

1. **Component Naming**: PascalCase for component files
2. **Variable Naming**: camelCase for JavaScript variables
3. **CSS Classes**: Use Tailwind utility classes
4. **Props**: Use destructuring in function parameters
5. **State Management**: Use React hooks (useState, useEffect)
6. **Section IDs**: Use lowercase with hyphens (e.g., `#my-section`)

## Performance Considerations

- Vite handles automatic code splitting
- Components are tree-shakeable
- Tailwind CSS is production-optimized
- Image optimization recommended for production
- Profile images should be compressed before deployment

## Common Fixes

### Component Not Rendering
- Check import statements match file names
- Verify component is exported and imported correctly
- Check for syntax errors in JSX
- Verify section ID is present

### Styling Issues
- Ensure Tailwind classes are spelled correctly
- Check responsive breakpoints (mobile-first)
- Verify tailwind.config.js includes content paths
- Check for conflicting inline styles

### Scroll Navigation Not Working
- Verify section IDs match button onClick handlers
- Check navItems array in `Navbar.jsx`
- Ensure scroll-behavior: smooth is applied in index.css
- Verify `scrollToSection` function is implemented

### Mobile Menu Issues
- Check isOpen state management
- Verify mobile menu button onClick handler
- Check z-index conflicts
- Ensure menu closes when navigation item is clicked

## Future Enhancements

- [ ] Dark mode support
- [ ] Animation library (Framer Motion)
- [ ] Blog with dynamic content
- [ ] Project detail pages
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] PWA support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Form backend integration

## Resources

- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- MDN Web Docs: https://developer.mozilla.org

## Support Notes

- Hot Module Replacement enabled in dev server
- Console Ninja extension integrated for debugging
- All components tested and working
- Ready for customization with personal content
- Section IDs properly implemented for navigation
