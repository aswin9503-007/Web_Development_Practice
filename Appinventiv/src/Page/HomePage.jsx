import Navbar from "../Component/HomePage/Navbar";
import Hero from "../Component/HomePage/Hero";
import TrustSection from "../Component/HomePage/TrustSection";
import StatsGrid from "../Component/HomePage/StatsSection";
import CTASection from "../Component/HomePage/CTASection";
import CaseStudyScroll from "../Component/HomePage/CaseStudyScroll";
import Testimonials from "../Component/HomePage/Testimonials";
import EngineeringServices from "../Component/HomePage/EngineeringServices";
import ROISection from "../Component/HomePage/ROISection";
import TechSolution from "../Component/HomePage/TechSolution";
import InventivAI from "../Component/HomePage/InventivAI";
import PartnershipGrid from "../Component/HomePage/PartnershipGrid";
import AccoladesSlider from "../Component/HomePage/AccoladesSlider";
import ClientsOpinion from "../Component/HomePage/ClientsOpinion";
import Industry from "../Component/HomePage/Industry";
import MarketingBanner from "../Component/HomePage/MarketingBanner";
import StrategicPartners from "../Component/HomePage/StrategicPartners";
import TechCapabilities from "../Component/HomePage/TechCapablities";

const Home = () => {
  return (
    <main>
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
      <AccoladesSlider />
      <ClientsOpinion />
      <Industry />
      <MarketingBanner />
      <StrategicPartners />
      <TechCapabilities />
    </main>
  );
};

export default Home;
