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
import TechSolution from './Component/TechSolution'
import PartnershipGrid from './Component/PartnershipGrid'
import InventivAI from './Component/InventivAI'
import AccoladerSlider from './Component/AccoladesSlider'
import CliensOpinion from './Component/ClientsOpinion'
import Industry from './Component/Industry'

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
    <TechSolution />
    <InventivAI />
    <PartnershipGrid />
    <AccoladerSlider />
    <CliensOpinion />
    <Industry /> 
  </StrictMode>,
)
