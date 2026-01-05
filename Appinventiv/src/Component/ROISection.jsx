const roiData = [
  {
    tag: "EFFICIENCY",
    icon: "🚀",
    title: "Automate Processes",
    description:
      "Cut operational costs by up to 30% with AI-driven workflow automation.",
  },

  {
    tag: "GROWTH",
    icon: "📈",
    title: "Personalize Experiences",
    description:
      "Increse customer LTV (lifetime value) by 25% through ML-powered personalization.",
  },

  {
    tag: "INNOVATION",
    icon: "💡",
    title: "Accelerate Discovery",
    description:
      "Reduce R&D cycles by 50% using Generative AI for Prototyping ans simulation.",
  },
];

const ROISection = () => {
  return (
    <section className="roi-container">
      <h2 className="roi-main-title">The ROI of Intelligence</h2>

      <div className="roi-grid">
        {roiData.map((item, index) => (
          <div className="roi-card" key={index}>
            <div className="roi-tag-wrapper">
              <span className="roi-icon">{item.icon}</span>
              <span className="roi-tag-text">{item.tag}</span>
            </div>

            <h3 className="roi-card-title">{item.title}</h3>
            <p className="roi-card-description">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="roi-footer">
        <button className="roi-btn-expert">Talk to our Expert</button>
      </div>
    </section>
  );
};

export default ROISection;
