import { useEffect } from "react";
import './InventiveAI.css'

const InventiveAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ai-page">
      <div className="ai-hero-section">
        <div className="ai-container">
          <span className="ai-badge">Next-Gen Intelligence</span>
          <h1 className="ai-main-title">
            The Furtue of Enterprise <br />
            <span>Built with InventivAI</span>
          </h1>
          <p className="ai-description">
            We Help global brands scale by integrating custom Large Language
            Mogels, Neural Networks, and Generative AI into thier core business
            architecture.
          </p>
          <div className="ai-cta-group">
            <button className="ai-btn-primary">Explore Solution</button>
            <button className="ai-btn-secondary">View Case Studies</button>
          </div>
        </div>
      </div>

      <div className="ai-container">
        <div className="ai-grid">
          <div className="ai-card">
            <div className="ai-card-icon">🧠</div>
            <h3>Custom LLMs</h3>
            <p>
              Private, Secure language models trained on your prprietary data
              for internal intelligence.{" "}
            </p>
          </div>
          <div className="ai-card">
            <div className="ai-card-icon">⚡</div>
            <h3>Work Flow Automation</h3>
            <p>
              Automate repetitive cognitive tasks using agentive AI framework
              and smart routing.
            </p>
          </div>

          <div className="ai-card">
            <div className="ai-card-icon">🛡️</div>
            <h3>AI Governance</h3>
            <p>
              Ensuring ethical AI deployment with Built-in bias detection and
              security protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventiveAI;
