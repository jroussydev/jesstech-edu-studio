import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Polices servies depuis node_modules par Vite : aucun appel réseau, même à l'impression.
// Seules les graisses utilisées par le prototype sont importées.
import '@fontsource/andika/400.css'
import '@fontsource/andika/700.css'
import '@fontsource/grandstander/600.css'
import '@fontsource/grandstander/800.css'
import './styles/interface.css'
import './styles/tokens.css'
import './styles/impression.css'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
