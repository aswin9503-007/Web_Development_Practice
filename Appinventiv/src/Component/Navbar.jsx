const Navbar = () => {
  const navLinks = ["InventivAI", "About", "Services", "Industries", "Portfolio", "Resources"];

  const textContent = (
    <div className="text-segment">
      Uncover Proof of Appinventiv impact across 3000+ digital deliveries for 35+ industries.
      <a href="#" className="explore-link">EXPLORE NOW!</a>
      <span className="star-icon">✦</span>
    </div>
  );

  return (
    <header className="fixed-header">
      <div className="announcement-bar">

        <div className="marquee-container">
          <div className="marquee-content">
            {textContent}
            {textContent}
            {textContent}
          </div>
        </div>

        <button className="contact-btn">
          <span className="phone-icon">🕻</span>
          Contact Us
        </button>
      </div>

      <nav className="main-nav">
        <div className="logo">
          <svg className="logo-svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 22H22L12 2Z" stroke="#3B82F6" strokeWidth="2" />
            <path d="M12 8L18 22H6L12 8Z" fill="#3B82F6" />
          </svg>
          <span className="brand-name">appinventiv</span>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link} className="nav-item">
              {link} <span className="chevron">⏷</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;