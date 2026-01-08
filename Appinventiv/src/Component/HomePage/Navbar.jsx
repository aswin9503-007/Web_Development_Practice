import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    "InventivAI",
    "About",
    "Services",
    "Industries",
    "Portfolio",
    "Resources",
  ];

  const textContent = (
    <div className="text-segment">
      Uncover Proof of Appinventiv impact across 3000+ digital deliveries for
      35+ industries.
      <a href="#" className="explore-link">
        {" "}
        EXPLORE NOW!
      </a>
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
        <Link
          to="/contact"
          className="contact-btn desktop-only"
          style={{ textDecoration: "none" }}
        >
          <span className="phone-icon">🕻</span> Contact Us
        </Link>
      </div>

      <nav className="main-nav">
        <div className="logo">
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <svg className="logo-svg" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 22H22L12 2Z" stroke="#3B82F6" strokeWidth="2" />
              <path d="M12 8L18 22H6L12 8Z" fill="#3B82F6" />
            </svg>
            <span className="brand-name" style={{ color: "white" }}>
              appinventiv
            </span>
          </Link>
        </div>

        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link} className="nav-item">
              {link === "InventivAI" ? (
                <Link
                  to="/inventiveai"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {link}
                </Link>
              ) : (
                link
              )}
              <span className="chevron">⏷</span>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={() => setIsOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="brand-name">appinventiv</span>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
        <ul className="sidebar-links">
          {navLinks.map((link) => (
            <li
              key={link}
              className="sidebar-item"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </li>
          ))}
          <li className="sidebar-item">
            <Link
              to="/contact"
              className="mobile-contact-link"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </header>
  );
};

export default Navbar;
