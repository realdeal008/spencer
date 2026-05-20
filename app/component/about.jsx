"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* IMAGE GRID */}
          <div className="about-visuals section-reveal">
            <div className="visual-grid">
              {/* LEFT COLUMN */}
              <div className="visual-column visual-offset">
                <div className="visual-card teal-card">
                  <Image
                    src="/abone.jpeg"
                    alt="Peptide research laboratory"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="visual-image"
                    priority
                  />
                </div>
                <div className="visual-card blush-card">
                  <Image
                    src="/abtwo.jpeg"
                    alt="Advanced peptide compounds"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="visual-image"
                  />
                </div>
              </div>
              {/* RIGHT COLUMN */}
              <div className="visual-column">
                <div className="visual-card gold-card">
                  <Image
                    src="/pdtwentyfour.jpeg"
                    alt="Scientific precision equipment"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="visual-image"
                  />
                </div>
                <div className="visual-card forest-card">
                  <Image
                    src="/pdtwentyseven.jpeg"
                    alt="Research methodology"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="visual-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="about-content section-reveal">
            <p className="about-subtitle">Peptide Research</p>

            <h2 className="about-title">
              Advancing
              <br />
              <span className="about-highlight">Precision</span>
            </h2>

           <p className="about-description">
  XIUPEPTIDESHUB delivers premium research peptides engineered for purity, precision, and next-generation scientific exploration.
</p>

<p className="about-description">
  Built for advanced metabolic, recovery, and cellular research, our collection reflects the future of precision peptide innovation.
</p>

            {/* STATS */}
            <div className="about-stats">
              <div className="stat-item">
                <h4 className="stat-number">50+</h4>
                <p className="stat-label">Products</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number">12</h4>
                <p className="stat-label">Countries</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number">100%</h4>
                <p className="stat-label">Cruelty Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

