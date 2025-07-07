# 🚀 Personal Portfolio

> A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS

## 🌐 Live Demo

**[🔗 View Live Portfolio](https://portfolio-v2-rho-liard.vercel.app/)**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0.2-646CFF.svg)](https://vitejs.dev/)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🌙 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 🌍 **Internationalization** - Support for multiple languages (English/Russian)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Engaging scroll animations and hover effects
- 📧 **Contact Form** - Interactive contact form with toast notifications
- 🎯 **Accessible** - Focus states, keyboard navigation, and screen reader friendly

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling

### Libraries & Tools

- **React i18next** - Internationalization framework
- **React Hot Toast** - Beautiful notifications
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

### Features

- **Responsive Design** - Mobile-first approach
- **Theme Switching** - Dark/Light mode toggle
- **Smooth Scrolling** - Enhanced navigation experience
- **Intersection Observer** - Performance-optimized animations

## 🚀 Getting Started

### 🌐 Quick Start

**[View the live demo](https://portfolio-v2-rho-liard.vercel.app/)** - No installation required!

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   https://github.com/Xabenskie/portfolio_v2.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

### 🚀 Deployment

This project is deployed on **Vercel** for optimal performance:

- **Live URL**: [https://portfolio-v2-rho-liard.vercel.app/](https://portfolio-v2-rho-liard.vercel.app/)
- **Platform**: Vercel (Recommended for React/Vite projects)
- **Auto-deployment**: Connected to GitHub for continuous deployment

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # React components
│   ├── about/       # About section components
│   ├── common/      # Shared components
│   ├── contact/     # Contact form components
│   ├── footer/      # Footer component
│   ├── header/      # Header component
│   ├── navbar/      # Navigation components
│   └── projects/    # Projects showcase
├── hooks/           # Custom React hooks
├── i18n/            # Internationalization
│   └── locales/     # Translation files
├── types/           # TypeScript type definitions
└── utils/           # Utility functions and data
```

## 🎨 Customization

### Adding New Languages

1. Create a new locale file in `src/i18n/locales/`
2. Add translations following the existing structure
3. Update the language toggle component

### Modifying Content

- **Personal Info**: Update `src/utils/index.ts`
- **Projects**: Add new projects to the projects data
- **Styling**: Modify Tailwind classes or add custom CSS

### Theme Customization

- **Colors**: Update theme colors in `tailwind.config.js`
- **Dark Mode**: Modify dark mode variants in components

## 📱 Mobile Experience

The portfolio is designed with a mobile-first approach:

- **Sticky Navigation** - Always accessible navbar on mobile
- **Touch-Friendly** - Optimized button sizes and interactions
- **Responsive Images** - Adaptive image loading
- **Mobile Menu** - Compact navigation for smaller screens

## 🌐 Internationalization

Currently supports:

- 🇺🇸 English
- 🇷🇺 Russian

Easy to extend with additional languages by:

1. Adding new locale files
2. Updating the language selector
3. Adding translation keys

## 📧 Contact Form

Features:

- **Form Validation** - Client-side validation
- **Toast Notifications** - Success/error feedback
- **Responsive Design** - Works on all devices
- **Accessibility** - Screen reader friendly

## 🎯 Performance

- **Lazy Loading** - Components load as needed
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Responsive images with proper formats
- **Minimal Dependencies** - Lightweight and fast

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Code Quality

- **ESLint** - Consistent code style
- **TypeScript** - Type safety
- **Prettier** - Code formatting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite Team** - For the fast build tool
- **Community** - For the inspiration and resources

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Xabenskie">Xabenskie</a>
</p>

<p align="center">
  <a href="#top">⬆️ Back to Top</a>
</p>
