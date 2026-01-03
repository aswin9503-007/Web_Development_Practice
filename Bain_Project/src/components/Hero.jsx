import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";


const slides = [
  {
    tag: "Financial Services",
    title: "How India Invests\nin 2025",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1",
  },
  {
    tag: "Strategy & Execution",
    title: "Winning in\nUncertain Markets",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
    {
    tag: "AI Executive Guide",
    title: "Winning in\nUncertain Markets",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
    {
    tag: "Strategy & Execution",
    title: "Winning in\nUncertain Markets",
    image:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carousel">
      {/* HEADER INSIDE HERO */}
      <Navbar transparent />

      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            className="carousel-slide"
            key={i}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>

            <div className="carousel-content">
              <span className="carousel-tag">{slide.tag}</span>
              <h1>{slide.title}</h1>
              <button>
                READ MORE <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CATEGORY INDICATOR */}
      <div className="carousel-footer">
        {slides.map((slide, i) => (
          <span
            key={i}
            className={index === i ? "active" : ""}
            onClick={() => setIndex(i)}
          >
            {slide.tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
