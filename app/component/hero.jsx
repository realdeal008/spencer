"use client";

const HeroSection = () => {
  return (
    <section className="hero-section">

      <div className="hero-content">
        
        <p className="hero-subtitle" id="heroSubtitle">
           Est. 2026 • Precision Research
        </p>

        <h1 className="hero-title" id="heroTitle">
          <span>Future In</span>
          <span className="gradient-text italic-text">
           Peptide Science
          </span>
        </h1>

        <p className="hero-description" id="heroDesc">
            Explore premium research peptides engineered for precision, purity, and advanced scientific exploration in metabolism, recovery, longevity, and cellular signaling pathways.
        </p>

        <div className="hero-buttons" id="heroCta">

          <button
            className="btn-luxury"
            onClick={() => scrollToSection("products")}
          >
            
             <a href="#products" >Explore Collection </a>

          </button>

          <button
            className="btn-outline"
            onClick={() => scrollToSection("about")}
          >
            <a href="#about" >Our Story </a>
          </button>

        </div>
      </div>

      {/* Floating Elements */}

      <div className="floating-circle floating-one"></div>

      <div className="floating-circle floating-two"></div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator-wrapper" id="scrollInd">

        <span className="scroll-text">
          Scroll
        </span>

        <div className="scroll-line"></div>

      </div>

    </section>
  );
};

export default HeroSection;