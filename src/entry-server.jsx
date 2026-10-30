import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Build-time render used by scripts/prerender.mjs to put real content into dist/index.html.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
