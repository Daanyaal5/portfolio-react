# React Portfolio Website

React Portfolio Website by Daanyaal – a modern, responsive portfolio showcasing projects, skills, and personal achievements. Built with React, CSS3, and scroll-based animations, with AI-enhanced development workflow.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Component-based architecture
- 🎨 Interactive UI elements
- 🚀 Optimized performance
- 🎯 Easy to customize

## Project Structure

```
portfolio-react/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── profile.png
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Navigation.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Building for Production

To create a production-ready build:

```bash
npm run build
```

This will create an optimized build in the `build/` folder ready for deployment.

## Customization Guide

### 1. Personal Information
- Edit `Hero.js` - Update your name and title
- Edit `About.js` - Update your bio, skills, and description
- Edit `Contact.js` - Update your contact links and email

### 2. Projects
- Edit `Projects.js` - Update the projects array with your actual projects
- Add project images if desired
- Update project links

### 3. Styling
- Modify color scheme in `App.css` (CSS variables)
- Adjust component styles in respective CSS files
- Change fonts in `index.css`

### 4. Add New Sections
- Create a new component in `src/components/`
- Import it in `App.js`
- Add navigation link in `Navigation.js`

## Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. It auto-detects React and deploys

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

## Technologies Used

- React 18
- CSS3 (with custom properties)
- Intersection Observer API (for scroll animations)
- Modern ES6+ JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this for your own portfolio!

## Credits

Created for the students, from a student
