import "./AICapabilities.css";

const AICapabilities = () => {
  const capabilities = [
    {
      title: "Natural Language Processing",
      desc: "Building chatbots and sentiment analysis tools that understand human nuance.",
      features: ["Text Summarization", "Entity Recognition", "Translation"],
    },
    {
      title: "Predictive Modeling",
      desc: "Forecast market trends and user behavior with 95% accuracy using historical data.",
      features: ["Churn Prediction", "Inventory Logic", "Risk Assessment"],
    },
    {
      title: "Computer Vision",
      desc: "Enable machines to identify and process objects in images and videos.",
      features: ["Facial Recognition", "Quality Control", "Medical Imaging"],
    },
  ];
  return (
    <section className="capabilities-section">
      <div className="cap-container">
        <h2 className="section-title">Core AI Capabilities</h2>
        <div className="cap-list">
          {capabilities.map((cap, index) => (
            <div key={index} className="cap-item">
              <div className="cap-info">
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
                <ul className="feature-tags">
                  {cap.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="cap-visual-placholder">
                <div className="data-line"></div>
                <div className="data-line short"></div>
                <div className="data-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
