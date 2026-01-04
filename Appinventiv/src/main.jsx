import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
  </StrictMode>,
)
