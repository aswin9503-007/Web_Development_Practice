const techCards = [
  {
    title: "Artificial Intelligence",
    desc: "We leverage AI to craft intellegrnt solutions that streamline operation and enhance decision making capabilities.",
    icon: "🤖",
  },
  {
    title: "Generative AI",
    desc: "Harnessing the power of LLMs to automate content creation and accelerate software development cycles.",
    icon: "🦾",
  },
  {
    title: "Machine Learning",
    desc: "We use ML to build intelligent systems that analyze data patterns and predict outcomes.",
    icon: "🧠",
  },
  {
    title: "Computer Vision",
    desc: "We employ computer vision to analyze visual data, automate image processing tasks and enhance accuracy.",
    icon: "👨🏻‍💻",
  },
  {
    title: "IOT Solution",
    desc: "We create IoT apps that connect various devices, enabling seamless data collection and real-time monitoring",
    icon: "🌐",
  },
  {
    title: "AR/VR",
    desc: "We design immersive AR/VR solutions that provide interaction experiences for training, retail, and more",
    icon: "🥽",
  },
  {
    title: "Blockchain",
    desc: "We develop Secure bolckchain solution that ensure transperency and data integrity across various sectors",
    icon: "🔐",
  },
];

const TechSolution = () => {
  return (
    <section className="ts-container">
      <div className="ts-wrapper">
        <div className="ts-left-sticky">
          <div className="ts-sticky-content">
            <h2 className="ts-heading">
              We Create New Solution and Transform Existing Ones with
              Best-In-Industries Timelines
            </h2>

            <div className="ts-fuel-card">
              <div className="ts-fuel-header">
                <span className="ts-fuel-icon">🚀</span>
              </div>
              <h4 className="ts-fuel-title">Fuel Your Digital-First Idea</h4>
              <p className="ts-fuel-sub">With 1600+ Transformation Experts</p>
              <button className="ts-fuel-btn">Innovate With Us</button>
            </div>
          </div>
        </div>

        <div className="ts-right-scroll">
          <div className="ts-list-container">
            {techCards.map((card, index) => (
              <div className="ts-scroll-item" key={index}>
                <div className="ts-item-header">
                  <div className="ts-item-left">
                    <span className="ts-item-icon">{card.icon}</span>
                    <h3 className="ts-item-title">{card.title}</h3>
                  </div>
                  <span className="ts-item-arrow">›</span>
                </div>
                <p className="ts-item-description">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolution;
