import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './pages/main/MainPage.tsx'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
