
const StatsGrid = () => {
  const statsData = [
    {
      number: "35+",
      title: "Industries Mastered",
      description: "With our agility & engineering expertise, we equip your critical business functions with customized tech, and expand digital capabilities."
    },
    {
      number: "1600+",
      title: "Tech Evangelists",
      description: "We are a dynamic team of certified cloud architects, data scientists, and AI/ML specialists passionately driven to achieve the best results for our clients."
    },
    {
      number: "150+",
      title: "AI Models Deployed",
      description: "From predictive analytics to generative AI, we've implemented intelligent models that drive measurable ROI."
    },
    {
      number: "3000+",
      title: "Solutions Designed And Delivered",
      description: "We have empowered businesses with thousands of successful, futuristic, and AI-augmented solutions that have helped them grow and scale."
    },
    {
      number: "500+",
      title: "Legacy Processes Transformed",
      description: "We help businesses achieve their digital transformation goals by seamlessly integrating advanced technologies into their legacy systems."
    },
    {
      number: "05+",
      title: "Strategic Federal Partnerships",
      description: "We drive collaborative initiatives that address critical challenges and deliver impactful solutions."
    }
  ];

  return (
    <section className="stats-grid-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2 className="stat-number">{stat.number}</h2>
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsGrid;