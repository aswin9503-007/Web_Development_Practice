import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import TrustSection from './Component/TrustSection'
import StatsGrid from './Component/StatsSection'
import CTASection from './Component/CTASection'
import CaseStudyScroll from './Component/CaseStudyScroll'
import Testimonials from './Component/Testimonials'
import EngineeringServices from './Component/EngineeringServices'
import ROISection from './Component/ROISection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <TrustSection />
    <StatsGrid />
    <CTASection />
    <CaseStudyScroll />
    <Testimonials />
    <EngineeringServices />
    <ROISection />
  </StrictMode>,
)
