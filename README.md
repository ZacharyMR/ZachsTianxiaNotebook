# DKJ Template - 11ty Version

This is your academic website converted to use 11ty (Eleventy) static site generator while preserving the original minimalist design.

## Features

- Clean, minimalist academic website design
- Fast-loading with no ads, cookies, or bloat
- Responsive design that works on any device
- Easy to maintain with 11ty's templating system
- Navigation data centralized for easy updates

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Serve locally for development:
   ```bash
   npm run dev
   ```

4. View your site at `http://localhost:8080`

## Project Structure

```
src/
├── _data/
│   └── navigation.json    # Site navigation structure
├── _includes/
│   └── base.njk          # Base layout template
├── assets/
│   ├── style.css         # Your original CSS
│   └── script.js         # Your original JavaScript
└── *.njk                 # Page templates
```

## Customization

- **Site Title**: Update the `title` field in each page's front matter
- **Navigation**: Edit `src/_data/navigation.json` to modify the site structure
- **Styling**: Modify `src/assets/style.css` to change the appearance
- **Content**: Edit the `.njk` files in the `src/` directory

## Deployment

The built site will be in the `_site/` directory. You can deploy this to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Any web server

## Original Design

This template preserves the original DKJ-inspired design with:
- Warm tan background (`#eadfcb`)
- Serif typography (Georgia)
- Minimal, academic aesthetic
- Fast loading times
