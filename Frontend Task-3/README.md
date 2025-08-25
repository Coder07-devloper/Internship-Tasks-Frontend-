# React Router Demo

A simple React app showing client-side routing with React Router and Vite.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── App.jsx        # Main app with routing
└── main.jsx       # Entry point
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📄 Pages

- **Home** (`/`) - Welcome page
- **About** (`/about`) - App information
- **Products** (`/products`) - Product listing
- **Product Detail** (`/products/:id`) - Individual products
- **Contact** (`/contact`) - Contact form
- **404** (`*`) - Not found page

## 🎯 Features

- ✅ Client-side routing
- ✅ Dynamic routes with parameters
- ✅ Active navigation indicators
- ✅ 404 page handling
- ⚡ Fast development with Vite

## 🛠️ Tech Stack

- React 18
- React Router DOM 6
- Vite
- CSS


## 🔧 Customization

### Adding New Routes

1. Create a new page in `src/pages/`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `src/components/Navigation.jsx`

### Styling

- Global styles: `src/index.css`
- Component styles: `src/components/`
- Page styles: `src/pages/Pages.css`
