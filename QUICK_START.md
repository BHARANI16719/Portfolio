# Quick Start Guide - Portfolio Customization

Your modern portfolio website is ready! Here's how to customize it:

## 🚀 Getting Started

### 1. Update Personal Information

**File:** `src/components/Hero.jsx`
- Change "HELLO I AM" to your greeting
- Replace "Lorem ipsimum" with your name
- Update the introduction text

**File:** `src/components/About.jsx`
- Update about section description
- Modify the three statistics
- Update CV download button

**File:** `src/components/Contact.jsx`
- Update email address
- Update phone number
- Update location

### 2. Add Your Profile Image

**Files:** `src/components/Hero.jsx` and `src/components/About.jsx`

Replace the placeholder SVG circle with your image:
```jsx
<div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300">
  <img 
    src="/images/your-profile.jpg" 
    alt="Profile" 
    className="w-full h-full rounded-full object-cover"
  />
</div>
```

### 3. Customize Your Services

**File:** `src/components/Services.jsx`

Edit the `services` array:
```js
const services = [
  {
    id: 1,
    title: 'Your Service Name',
    description: 'Service description here',
    icon: '🎨', // Change emoji or use your icon
  },
  // Add more services...
];
```

### 4. Add Your Projects

**File:** `src/components/Portfolio.jsx`

Edit the `projects` array:
```js
const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'web', // Category: web, mobile, or design
    image: '🛍️', // Replace with: <img src="..." />
    description: 'Project description',
  },
  // Add more projects...
];
```

### 5. Update Blog Content

**File:** `src/components/Blog.jsx`

Edit the `blogPosts` array:
```js
const blogPosts = [
  {
    id: 1,
    title: 'Article Title',
    excerpt: 'Brief description',
    date: 'Month Day, Year',
    category: 'Category Name',
    image: '📝', // Replace emoji with real image
  },
  // Add more posts...
];
```

### 6. Change Colors

**File:** `tailwind.config.js`

Update the teal color scheme:
```js
colors: {
  teal: {
    700: '#your-color-code',
    800: '#your-darker-color-code',
  }
}
```

Common color palettes:
- **Blue:** `#0066cc`, `#0052a3`
- **Purple:** `#7c3aed`, `#6d28d9`
- **Green:** `#059669`, `#047857`
- **Orange:** `#f97316`, `#ea580c`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation
│   ├── Hero.jsx           # Hero + wave
│   ├── About.jsx          # About section
│   ├── Services.jsx       # Services cards
│   ├── Portfolio.jsx      # Projects filter
│   ├── Blog.jsx           # Blog articles
│   └── Contact.jsx        # Contact form
├── App.jsx                # Main component
└── index.css              # Tailwind CSS
```

## 🎯 Common Tasks

### Add a New Navigation Section

1. Create new component in `src/components/NewSection.jsx`
2. Import in `App.jsx`:
   ```jsx
   import NewSection from './components/NewSection';
   ```
3. Add to App component:
   ```jsx
   <NewSection />
   ```
4. Add to Navbar in `Navbar.jsx`:
   ```js
   { id: 'newsection', label: 'New Section' }
   ```

### Connect Contact Form to Email

Currently, the form just logs to console. To send emails:

1. Install email library (e.g., emailjs):
   ```bash
   npm install @emailjs/browser
   ```

2. Update `Contact.jsx` handleSubmit function
3. Follow emailjs documentation for setup

### Replace Emojis with Real Images

In Portfolio.jsx:
```jsx
// Before:
image: '🛍️'

// After:
image: '/images/project.jpg'
```

Then display:
```jsx
<img 
  src={project.image} 
  alt={project.title}
  className="w-full h-full object-cover"
/>
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload `dist/` folder to Netlify
3. Or connect GitHub repo for auto-deployment

### Option 3: GitHub Pages
```bash
npm run build
# Deploy dist/ folder contents
```

## 📱 Responsive Breakpoints

Tailwind breakpoints available:
- `sm:` - Small screens (640px)
- `md:` - Medium screens (768px)
- `lg:` - Large screens (1024px)
- `xl:` - Extra large (1280px)

Example:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🛠️ Available Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## 📝 File Paths for Images

Place your images in `public/` folder:
```
d:\BharaniPortfolio\
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project1.jpg
│   │   └── project2.jpg
```

Reference in components:
```jsx
<img src="/images/profile.jpg" alt="Profile" />
```

## 🎨 Tailwind Useful Classes

- **Spacing:** `m-`, `p-`, `my-`, `px-` 
- **Colors:** `text-white`, `bg-teal-700`
- **Typography:** `text-lg`, `font-bold`, `font-semibold`
- **Layout:** `flex`, `grid`, `gap-`, `items-center`
- **Responsive:** `sm:`, `md:`, `lg:`, `xl:`
- **Hover:** `hover:bg-blue-600`, `hover:text-blue-800`
- **Transitions:** `transition-all`, `duration-300`

## 💡 Tips

1. Keep components focused and reusable
2. Use consistent spacing and colors
3. Test on mobile devices (use Chrome DevTools)
4. Optimize images before uploading
5. Use descriptive alt text for images
6. Test links and forms before deployment

## 🆘 Troubleshooting

**Page not loading?**
- Check if dev server is running: `npm run dev`
- Check terminal for errors
- Clear browser cache (Ctrl+Shift+Delete)

**Styling not applying?**
- Verify Tailwind class spelling
- Check if class is in `tailwind.config.js` content paths
- Restart dev server

**Images not showing?**
- Place in `public/` folder
- Use correct path: `/images/filename.jpg`
- Check image file exists and is accessible

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Ready to launch?** Contact your hosting provider to deploy your portfolio!
