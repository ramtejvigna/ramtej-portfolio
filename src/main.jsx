import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter-tight'
import '@fontsource-variable/manrope'
import '@fontsource-variable/jetbrains-mono'
import '@fontsource/instrument-serif/latin-400.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import './index.css'
import App from './App.jsx'

// The HTML is prerendered for crawlers (scripts/prerender.mjs); the client renders fresh over it
// rather than hydrating, since the animations depend on browser-only state.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
