import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 40px, the top-strip is gone, 
      // so we change the main-strip theme to black text on white bg.
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-container">
      {/* 1. TOP STRIP - Scrolls away normally */}
      <div className="top-strip">
        <div className="top-left">
          <span>OFFICES ▾</span>
          <span>ALUMNI</span>
          <span>MEDIA CENTER</span>
          <span>SUBSCRIBE</span>
          <span>CONTACT</span>
        </div>
        <div className="top-right">
          <span>GLOBAL | ENGLISH ▾</span>
          <span>SAVED ITEMS ▾</span>
        </div>
      </div>

      {/* 2. MAIN STRIP - Locked to the top and moves with scroll */}
      <div className={`main-strip-fixed ${isScrolled ? "scrolled-theme" : "initial-theme"}`}>
        <div className="main-left">
          <span className="hamburger">☰</span>
          <span className="logo">BAIN & COMPANY</span>
        </div>

        <nav className="main-center">
          <span>Industries ▾</span>
          <span>Consulting Services ▾</span>
          <span>Digital</span>
          <span>Insights ▾</span>
          <span>About ▾</span>
          <span>Careers</span>
        </nav>

        <div className="main-right">
          <span>Explore 🔍</span>
          <span>🔖</span>
        </div>
      </div>
    </header>
  );
};

export default Header;