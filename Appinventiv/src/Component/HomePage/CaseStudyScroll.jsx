import { useState, useEffect } from "react";
import { api } from "../../services/api";

const CaseStudyScroll = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Data from API
  useEffect(() => {
    api.caseStudies.getAll()
      .then((data) => {
        setCaseStudies(data);
        if (data.length > 0) setActiveId(data[0].id);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching case studies:", err));
  }, []);

  // 2. Setup Intersection Observer for Scrolling
  useEffect(() => {
    if (caseStudies.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // dataset.id comes from the HTML attribute
            setActiveId(parseInt(entry.target.dataset.id));
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px", threshold: [0, 0.5, 1] }
    );

    document.querySelectorAll(".cs-card-stack").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [caseStudies]); // Re-run when caseStudies are loaded

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  if (loading || caseStudies.length === 0) {
    return <div className="loader">Loading Case Studies...</div>;
  }

  const activeData = caseStudies.find((s) => s.id === activeId) || caseStudies[0];
  const activeIndex = caseStudies.findIndex((s) => s.id === activeId);

  return (
    <section className="cs-container">
      {/* Left Content Panel */}
      <div className="cs-left-panel">
        <div className="cs-content-box" key={activeId}>
          <span className="cs-tag">Case Study</span>
          <h2 className="cs-client-name">{activeData.client}</h2>
          <p className="cs-summary">{activeData.title}</p>
          <div className="cs-results-wrapper">
            <span className="cs-results-heading">Results</span>
            <div className="cs-results-grid">
              {activeData.results && activeData.results.map((res, i) => (
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

      {/* Right Image/Scroll Panel */}
      <div
        className="cs-right-panel"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringRight(true)}
        onMouseLeave={() => setIsHoveringRight(false)}
      >
        {caseStudies.map((study) => (
          <div className="cs-card-stack" data-id={study.id} key={study.id}>
            <div className="cs-card-frame">
              <img src={study.img_url} alt={study.client} className="cs-card-img" />
            </div>
          </div>
        ))}

        {/* Floating Cursor */}
        <div
          className={`cs-floating-cursor ${isHoveringRight ? "visible" : ""}`}
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          View case study
        </div>

        {/* Scroll Indicator */}
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