import { useState, useEffect } from "react";


const caseStudies = [
  {
    id: "ikea",
    client: "IKEA",
    title: "Expands as a digital consumer experience leader",
    results: [
      { val: "7+", lab: "Stores using the solution" },
      { val: "#1", lab: "Source of measuring RoI" },
    ],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070",
  },
  {
    id: "pizza-hut",
    client: "Pizza Hut",
    title: "Unlocks conversation boost with top-tier app development",
    results: [
      { val: "30%", lab: "Higher conversation" },
      { val: "50K+", lab: "App Downloads" },
    ],
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070",
  },
  {
    id: "americana",
    client: "Americana",
    title: "A reliable data platform built with automated ETL and Power BI",
    results: [
      { val: "100%", lab: "increase in efficiency" },
      { val: "Zero", lab: "platform downtime" },
    ],
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070",
  },
];

const CaseStudyScroll = () => {
  const [activeId, setActiveId] = useState(caseStudies[0].id);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveId(entry.target.dataset.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: [0, 0.5, 1],
      }
    );

    document.querySelectorAll(".cs-card-stack").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const activeData = caseStudies.find((s) => s.id === activeId);
  const activeIndex = caseStudies.findIndex((s) => s.id === activeId);

  return (
    <section className="cs-container">
      
      <div className="cs-left-panel">
        <div className="cs-content-box" key={activeId}>
          <span className="cs-tag">Case Study</span>
          <h2 className="cs-client-name">{activeData.client}</h2>
          <p className="cs-summary">{activeData.title}</p>
          <div className="cs-results-wrapper">
            <span className="cs-results-heading">Results</span>
            <div className="cs-results-grid">
              {activeData.results.map((res, i) => (
                <div className="cs-res-item" key={i}>
                  <span className="cs-res-val">{res.val}</span>
                  <span className="cs-res-lab">{res.lab}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="cs-btn-view">
            View case study <span className="cs-arrow">›</span>
          </button>
        </div>
      </div>

      
      <div
        className="cs-right-panel"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringRight(true)}
        onMouseLeave={() => setIsHoveringRight(false)}
      >
        {caseStudies.map((study) => (
          <div className="cs-card-stack" data-id={study.id} key={study.id}>
            <div className="cs-card-frame">
              <img src={study.img} alt={study.client} className="cs-card-img" />
            </div>
          </div>
        ))}

        
        <div
          className={`cs-floating-cursor ${isHoveringRight ? "visible" : ""}`}
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          View case study
        </div>

        
        <div className="cs-scroll-indicator-container">
          <div className="cs-scroll-track">
            <div
              className="cs-scroll-thumb"
              style={{
                height: `${100 / caseStudies.length}%`,
                transform: `translateY(${activeIndex * 100}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyScroll;