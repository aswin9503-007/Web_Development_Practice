import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import TrustSection from './Component/TrustSection'
import StatsGrid from './Component/StatsSection'
import CTASection from './Component/CTASection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <TrustSection />
    <StatsGrid />
    <CTASection />
  </StrictMode>,
)
