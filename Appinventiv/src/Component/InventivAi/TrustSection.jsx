import React from "react";
import "./TrustSection.css";

const TrustSection = () => {
  // Using generic names - replace with actual icon paths if you have them
  const logos = ["Google", "Amazon", "KFC", "Adidas", "IKEA", "Samsung", "Microsoft", "Meta"];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <p className="trust-label">Powering Global Enterprises</p>
        
        {/* The Infinite Scroller Wrapper */}
        <div className="logo-slider">
          <div className="logo-track">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`logo-${index}`} className="logo-item">{logo}</div>
            ))}
            {/* Duplicate set for seamless looping */}
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="logo-item">{logo}</div>
            ))}
          </div>
        </div>

        {/* The Responsive Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-val">98%</div>
            <p className="metric-label">Model Precision</p>
          </div>
          <div className="metric-card">
            <div className="metric-val">10x</div>
            <p className="metric-label">Faster Deployment</p>
          </div>
          <div className="metric-card">
            <div className="metric-val">35+</div>
            <p className="metric-label">Industry Verticals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;