const IndustrySelector = () => {
  const industries = [
    "Retail",
    "Private Equity",
    "Advanced Manufacturing & Services",
    "Technology",
    "Oil & Gas",
    "Healthcare & Life Sciences",
    "Chemicals",
    "Consumer Products",
    "Mining",
    "Financial Services",
  ];

  return (
    <section className="bold-section">
      {/* Left Image */}
      <div className="image-container">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ95TvqpKsZj2-iUVzdfoAXxuhG4zsIKqQfK3kObfQZoO2wGu_Voi8bO8PWQgSI"
          alt="People collaborating"
          className="bold-image"
        />
      </div>

      {/* Right Content */}
      <div className="content-container">
        <h2>
          We champion the bold to
          <br />
          achieve the extraordinary.
        </h2>

        <p className="sub-text">
          Answer two questions and put our thinking to work on your challenges.
        </p>

        <div className="question-header">
          1. What is your industry?
          <span className="question-count">Question 1 of 2</span>
        </div>

        <div className="industry-grid">
          {industries.map((item, index) => (
            <button key={index} className="industry-pill">
              {item}
            </button>
          ))}
        </div>

        <span className="view-all">View all</span>
      </div>
    </section>
  );
};

export default IndustrySelector;
