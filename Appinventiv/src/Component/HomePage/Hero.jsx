import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    api.hero.get()
      .then(setHero)
      .catch((err) => console.error("Hero Fetch Error:", err));
  }, []);

  if (!hero) return null;
  
  return (
    <section className="hero-container">
      <img 
        src={hero.image_url || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"} 
        alt="Engineering Background" 
        className="hero-background-img"
      />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          {hero.title.split(" with ")[0]} <br />
          with {hero.title.split(" with ")[1]}
        </h1>
        <p className="hero-description">{hero.description}</p>
        <button className="consult-btn">
          Consult Our Experts <span className="arrow">›</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;