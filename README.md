# Amevia Website

A professional construction recruitment website built with React, Tailwind CSS, and JavaScript.

## Features

- Modern, responsive design
- Professional navigation with active page highlighting
- Multiple pages: Home, Expertise, Sectors, Work for Amevia, About Us, Contact
- Interactive carousel on Expertise page
- Job search functionality
- CV registration form
- Contact form
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── Header.jsx       # Navigation header component
├── pages/
│   ├── Home.jsx         # Homepage with hero section
│   ├── Expertise.jsx    # Expertise page with carousel
│   ├── Sectors.jsx      # Sectors page with service grid
│   ├── WorkForAmevia.jsx # CV registration page
│   ├── AboutUs.jsx      # About us page
│   └── Contact.jsx      # Contact page
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## Technologies Used

- React 18
- React Router DOM
- Tailwind CSS
- Vite
- JavaScript

## Customization

The color scheme can be customized in `tailwind.config.js`:
- `amevia-blue`: Main brand blue (#1e3a8a)
- `amevia-light-blue`: Accent blue (#3b82f6)

## License

This project is proprietary and confidential.





