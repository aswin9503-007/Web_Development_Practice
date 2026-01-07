import { useState } from "react";

const rowOne = ["Healtcare", "Finance", "Restaurant", "eCommerce"];

const rowTwo = [
  "Real Estate",
  "Aviation",
  "Agriculture",
  "Telecom",
  "Education",
  "Logistics",
  "Gaming",
  "Manufacturing",
];

const Industry = () => {
  const [page, setPage] = useState(0);

  return (
    <section className="industry-container">
      <div className="industry-header">
        <h1 className="heavy-heading">
          A Unified Vision That Caters To <br />
          <span>Diverse Industry Demands</span>
        </h1>
        <button className="explore-btn">Explore More in Industries ›</button>
      </div>

      <div className="industry-grid">
        {rowOne.map((title, index) => (
          <IndustryCard key={index} title={title} icon={getIcon(title)}/>
        ))}
      </div>

      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {rowTwo.map((title, index) => (
            <IndustryCard key={index} title={title} icon={getIcon(title)} />
          ))}
        </div>
      </div>

      <div className="centered-nav">
        <button
          className={`nav-arrow ${page === 0 ? "disabled" : ""}`}
          onClick={() => setPage(0)}
        >
          ←
        </button>

        <button
          className={`nav-arrow ${page === 1 ? "disabled" : ""}`}
          onClick={() => setPage(1)}
        >
          →
        </button>
      </div>
    </section>
  );
};

const getIcon = (title) => {
  const icons = {
    Healthcare: "♡", Finance: "＄", Restaurant: "🍽", eCommerce: "🛒",
    "Real Estate": "⌂", Aviation: "✈", Agriculture: "🌱", Telecom: "📡"
  };
  return icons[title] || "⬡";
};

const IndustryCard = ({ title, icon }) => {
  return (
    <div className="industry-card">
      <div className="card-main">
        <div className="industry-icon">{icon}</div>
        <h3>{title}</h3>
      </div>

      <div className="card-hover-info">
        <p>
          We build scalable, Secure, and future ready Solutions tailored for the{" "}
          {title} industry.
        </p>
      </div>
    </div>
  );
};

export default Industry;
