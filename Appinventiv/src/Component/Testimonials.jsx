import React, { useRef, useEffect, useState, useMemo } from 'react';


const testimonialData = [
  { id: 1, name: "Edgar", role: "CEO, Street Smart 242", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, name: "Tushar Patel", role: "CEO, DoList App", video: "https://www.w3schools.com/html/movie.mp4" },
  { id: 3, name: "Daniel Zukich", role: "Co-founder, Plandid", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, name: "Fred McCaw", role: "CEO, McCaw Digital LLC", video: "https://www.w3schools.com/html/movie.mp4" }
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const rawText = "Our Clients Are Our Superheroes. We Prioritize Delivering Excellent Products, Thorough Training, And Optimal Execution";
  

  const characters = useMemo(() => rawText.split(""), [rawText]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 0.9), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="tm-container" ref={containerRef}>
      <div className="tm-text-wrapper">
        <h2 className="tm-heading">
          {characters.map((char, i) => {
            
            const threshold = i / characters.length;
            const isLit = scrollProgress > threshold;

            return (char === " " ? 
              <span key={i}>&nbsp;</span> : 
              <span key={i} className={`tm-letter ${isLit ? 'active' : ''}`}>
                {char}
              </span>
            );
          })}
        </h2>
      </div>

      <div className="tm-video-grid">
        {testimonialData.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>

      <div className="tm-footer">
        <button className="tm-btn-all">View All Testimonials <span>›</span></button>
      </div>
    </section>
  );
};

const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="tm-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="tm-video-wrapper">
        <video ref={videoRef} loop muted playsInline className="tm-video">
          <source src={item.video} type="video/mp4" />
        </video>
        {!isPlaying && <div className="tm-play-icon">▶</div>}
      </div>
      <div className="tm-info">
        <h3>{item.name}</h3>
        <p>{item.role}</p>
      </div>
    </div>
  );
};

export default Testimonials;