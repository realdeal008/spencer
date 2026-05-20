"use client";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchClick = () => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById("products-search-input");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
    }, 300);
  };

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-container glass-panel">
          <div className="logo-section">
            <div className="logo-circle"></div>
            <span className="logo-text">XIUPEPTIDESHUB</span>
          </div>

          {/* Desktop Links */}
          <div className="nav-links">
            <a href="#collections" className="nav-link">
              Collections
            </a>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#about" className="nav-link">
              Peptide
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Desktop Search */}
          <div className="nav-actions desktop-only">
            <button
              className="icon-btn"
              type="button"
              aria-label="Search"
              onClick={handleSearchClick}
            >
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Actions: Search + Hamburger */}
          <div className="mobile-actions mobile-only">
            <button
              className="icon-btn search-mobile-btn"
              type="button"
              aria-label="Search"
              onClick={handleSearchClick}
            >
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button
              className="hamburger-btn"
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            className="close-btn"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mobile-menu-links">
          <a
            href="#collections"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Collections
          </a>
          <a
            href="#products"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#about"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Peptide
          </a>
          <a
            href="#contact"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;