const partners = [
  "IKEA",
  "Google",
  "BCG",
  "KFC",
  "TGI FRIDAYS",
  "moo",
  "Krispy Kreme",
  "Hardee's",
  "BAJAJ Allianz",
  "Domino's",
  "SUPERSHE",
  "WIMPY",
  "EMPIRE HOTELS",
  "JobGet",
  "ASIAN BANK",
];

const PartnershipGrid = () => {
  return (
    <section className="pg-container">
      <div className="pg-wrapper">
        <h2 className="pg-title">
          Our Partnerships Have Transformed How <br />
          You Experience These Global Leaders
        </h2>

        <div className="pg-grid">
          {partners.map((name1, index) => (
            <div className="pg-logo-item" key={index}>
              <span className="pg-partner-name">{name1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipGrid;
