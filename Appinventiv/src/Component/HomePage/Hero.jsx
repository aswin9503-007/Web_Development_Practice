import {useEffect, useState} from "react";

const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect (() => {
    fetch("https://appiventiv-backend.vercel.app/api/hero")
    .then((res) => res.json())
    .then((data) => setHero(data))
    .catch((err) => console.error(err));
  }, []);

  if (!hero) return null;
  
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
          {hero.title.split(" with ")[0]} <br />
          with {hero.title.split(" with ")[1]}

        </h1>

        <p className="hero-description">
          {hero.description}

        </p>

        <button className="consult-btn">
          Consult Our Experts <span className="arrow">›</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;