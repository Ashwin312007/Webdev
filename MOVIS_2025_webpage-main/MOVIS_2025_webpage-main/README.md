# MOVIS Website

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.3-0055FF?logo=framer)](https://www.framer.com/motion/)

A modern, responsive website for MOVIS (Mars Orbital Vehicle & Interplanetary Systems) team, built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX** with smooth animations and transitions
- **Responsive Design** that works on all devices
- **Interactive Elements** with Framer Motion
- **Dark Space Theme** with custom animations
- **Smooth Scrolling** for section navigation

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0.3
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📁 Project Structure

```
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── BackgroundElements.jsx
│   │   ├── Competitions.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   └── StarField.jsx
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.14.0 or later
- npm 8.5.0 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movis-website.git
   cd movis-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

## 🎨 Customization

### Colors

Edit the `tailwind.config.js` file to customize the color scheme:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'space-dark': '#0a0b1a',
        'space-blue': '#3b82f6',
        'space-purple': '#7c3aed',
      }
    }
  }
}
```

### Animations

Custom animations are defined in `tailwind.config.js` and can be used with Tailwind's `animate-*` classes.

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the lightning-fast development server
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons
