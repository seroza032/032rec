import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/unbounded/500.css'
import '@fontsource/unbounded/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/700.css'
import 'material-icons/iconfont/round.css'
import './index.css'
import App from './App.tsx'
import { StyleguidePage } from './pages/StyleguidePage.tsx'

const isStyleguide = window.location.pathname.replace(/\/$/, '') === '/styleguide'

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isStyleguide ? <StyleguidePage /> : <App />}</StrictMode>,
)
