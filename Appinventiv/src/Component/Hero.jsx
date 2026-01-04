
const Hero = () => {
  return (
    <section className="hero-container">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
        alt="Engineering Background" 
        className="hero-background-img"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Engineering Global Digital Disruption <br />
          with AI-Native Solutions
        </h1>

        <p className="hero-description">
          We are a Deloitte Technology Fast 50 company and a Clutch Global Award
          2025 winner for unmatched customer excellence. Our mission is to
          leverage AI-driven automation and strategic innovation to craft
          digital solutions that not only meet but anticipate your business
          needs, ensuring sustainable market leadership.
        </p>

        <button className="consult-btn">
          Consult Our Experts <span className="arrow">›</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;