import { useState } from 'react';


const SuccessStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      title: "Banca Investis Transforms Customer Dialogue with a Generative AI Engine",
      impact1: "500+",
      desc1: "pieces of information and research analyzed daily",
      impact2: "7",
      desc2: "months from ideation to launch",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      brand: "BANCA INVESTIS"
    },
    {
      title: "Global Retailer Optimizes Supply Chain using Machine Learning",
      impact1: "15%",
      desc1: "reduction in logistics costs year-over-year",
      impact2: "24/7",
      desc2: "real-time inventory monitoring",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      brand: "RETAIL CORP"
    },
    {
      title: "Renewable Energy Provider Scales Operations Globally",
      impact1: "2GW",
      desc1: "additional green energy capacity generated",
      impact2: "30+",
      desc2: "new markets entered in 18 months",
      image: "https://images.unsplash.com/photo-1466611653911-954ffea113ad",
      brand: "ECO ENERGY"
    },
    {
      title: "Automotive Leader Accelerates Electric Vehicle Production",
      impact1: "3x",
      desc1: "faster battery assembly turnaround",
      impact2: "Zero",
      desc2: "carbon emissions during manufacturing",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
      brand: "AUTO DRIVE"
    }
    
  ];

  return (
    <section className="success-container">
      <div className="success-wrapper">
        {/* Left Side: Content */}
        <div className="success-content">
          <h2 className="section-main-heading">Bold steps forward.</h2>
          <p className="featured-tag">Featured client success story</p>
          <h2 className="success-title">{stories[activeIndex].title}</h2>
          
          <div className="impact-grid">
            <div className="impact-box">
              <span className="impact-number">{stories[activeIndex].impact1}</span>
              <p className="impact-desc">{stories[activeIndex].desc1}</p>
            </div>
            <div className="impact-box">
              <span className="impact-number">{stories[activeIndex].impact2}</span>
              <p className="impact-desc">{stories[activeIndex].desc2}</p>
            </div>
          </div>

          <a href="#" className="read-story-link">Read story <span className="arrow">▶</span></a>
        </div>

        {/* Right Side: Visual */}
        <div className="success-visual">
          <div 
            className="visual-bg" 
            style={{ backgroundImage: `url(${stories[activeIndex].image})` }}
          >
             <div className="brand-overlay">
                <span className="brand-logo">{stories[activeIndex].brand}</span>
             </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="pagination-dots">
        {stories.map((_, index) => (
          <button 
            key={index} 
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* NEW BUTTON COMPONENT */}
      <div className="results-button-container">
        <button className="see-all-btn">
          SEE ALL CLIENT RESULTS
        </button>
      </div>
    </section>
  );
};

export default SuccessStory;