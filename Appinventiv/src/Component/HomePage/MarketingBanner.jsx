const MarketingBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-logo">
            <img
              src="data:image/png;base64,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"
              alt=" Appinventive Logo"
              className="brand-logo-img"
            />

            <div className="logo-text">
              <span className="brand-name">appinventive</span>
              <span className="brand-sub">DIGITAL</span>
            </div>
          </div>

          <h2 className="banner-title">Built It? Now Let's Market It!</h2>
          <p className="banner-description">
            From the team that understands your tech stack to the marketing
            experts who know your audience. Complete your digital sucess story
            with Appinventiv Digital.
          </p>

          <button className="banner-btn">Complete Your Success Story</button>
        </div>

        <div className="banner-graphic">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet__EqY2JaHu2i-pTNadkA8KUBMHAxuZmtg&s"
            alt="Marketing Megaphone"
            className="megaphone-img"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingBanner;
