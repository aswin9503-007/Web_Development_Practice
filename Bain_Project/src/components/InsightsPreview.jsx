import insight1 from "../assets/insights1.png";



const insights = [
  {
    title: "AI in Consulting",
    summary: "How AI transforms strategy in modern enterprises.",
    img: insight1,
  },
  {
    title: "Digital Transformation",
    summary: "The latest digital trends and opportunities for businesses.",
    img: insight1,
  },
];

const InsightsPreview = () => (
  <section className="insights-preview">
    <h2>Our Latest Insights</h2>
    <div className="insights-grid">
      {insights.map((i, idx) => (
        <div className="insight-card" key={idx}>
          <img src={i.img} alt={i.title} />
          <h3>{i.title}</h3>
          <p>{i.summary}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  </section>
);

export default InsightsPreview;
