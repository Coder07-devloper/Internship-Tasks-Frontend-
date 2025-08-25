# 🔐 Random String Generator

A modern React application for generating random strings with customizable options. Built with Vite and React hooks.

## ✨ Features

- **Customizable String Length**: Adjust string length from 1 to 100 characters
- **Character Type Selection**: Choose which character types to include:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special symbols (!@#$%^&*)
- **Auto-generation**: Automatically generates new strings every 5 seconds
- **Manual Generation**: Click button to generate new strings on demand
- **Copy to Clipboard**: One-click copying of generated strings
- **Real-time Updates**: String updates automatically when settings change
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **useState** - For managing component state
- **useCallback** - For performance optimization of the generation function
- **useEffect** - For side effects and auto-generation

## 🛠️ Installation & Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd random-string-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## 📱 Usage

1. **Adjust Settings**: Use the sliders and checkboxes to customize your string generation preferences
2. **Generate Strings**: Strings are automatically generated every 5 seconds, or click "Generate New String" for immediate generation
3. **Copy Strings**: Click "Copy to Clipboard" to copy the generated string
4. **Monitor Stats**: View how many strings have been generated

## 🔧 Build for Production

```bash
npm run build
```

## 🧪 Testing

```bash
npm run test
```

## 📦 Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application-specific styles
├── index.css        # Global styles
└── main.jsx         # Application entry point
```

## 🎯 Key React Hooks Implementation

- **useState**: Manages all form inputs and generated string state
- **useCallback**: Optimizes the `generateRandomString` function to prevent unnecessary re-renders
- **useEffect**: Handles initial generation and auto-refresh functionality

## 🌟 Features in Detail

### String Generation Algorithm
The application uses a character pool approach where:
1. Available characters are determined by user selections
2. Random characters are selected using `Math.random()`
3. The process repeats until the desired length is reached

### Performance Optimizations
- `useCallback` ensures the generation function is only recreated when dependencies change
- Efficient state updates prevent unnecessary re-renders
- Cleanup of intervals prevents memory leaks

### User Experience
- Real-time feedback with immediate string updates
- Intuitive controls with visual feedback
- Responsive design for all device sizes
- Accessibility features with proper labels and keyboard navigation

## 📄 License

This project is open source and available under the MIT License.
