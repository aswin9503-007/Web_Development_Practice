import { useEffect, useState } from "react";
import { api } from "../utils/api"; // Adjust the path based on your folder structure

const CTASection = () => {
  const [ctaData, setCtaData] = useState({
    title: "Loading......",
    button_text: "Please wait.....",
    redirect_url: "#"
  });

  useEffect(() => {
    // Using your centralized API utility instead of direct fetch
    api.cta.get()
      .then((data) => {
        if (data) setCtaData(data);
      })
      .catch((err) => console.error("Error fetching CTA:", err));
  }, []);

  return (
    <section className="cta-wrapper">
      <div className="cta-banner">
        <div className="cta-left">
          <div className="cta-icon-box">
            <span className="cta-arrow-icon">↗</span>
          </div>
          <h2 className="cta-text">{ctaData.title}</h2>
        </div>

        <button 
          className="partner-btn" 
          onClick={() => window.location.href = ctaData.redirect_url}
        >
          {ctaData.button_text}
        </button>
      </div>
    </section>
  );
};

export default CTASection;