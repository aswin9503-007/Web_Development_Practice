const industries = [
  "Retail",
  "Private Equity",
  "Advanced Manufacturing & Services",
  "Technology",
  "Oil & Gas",
  "Healthcare & Life Sciences",
  "Chemicals",
  "Consumer Products",
];

const needs = [
  "Data Analytics",
  "Change Management",
  "Cost Reduction",
  "Customer Experience",
  "Digital Strategy",
  "Innovation",
  "Market Expansion",
  "Operations",
];

const IndustrySelector = () => (
  <section className="selector">
    <h2>Select Your Industry & Business Need</h2>
    <div className="selectors">
      <div>
        <h3>What is your industry?</h3>
        <ul>{industries.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>
      <div>
        <h3>What is your business need?</h3>
        <ul>{needs.map((n) => <li key={n}>{n}</li>)}</ul>
      </div>
    </div>
  </section>
);

export default IndustrySelector;
