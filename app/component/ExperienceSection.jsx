"use client";

const ExperienceSection = () => {
  return (
    <section className="experience-section">

      <div className="experience-container">

        <div className="experience-grid">

          {/* LEFT CONTENT */}

          <div className="experience-content section-reveal">

            <p className="experience-subtitle">
              Advanced Research
            </p>

            <h2 className="experience-title">
             Precision
              <br />
              <span className="gradient-text italic-text">
               Innovation
              </span>
            </h2>

            <p className="experience-description">
               Our research-focused peptide collections are curated for scientific precision, purity, and advanced exploration across metabolic signaling, recovery pathways, cellular health, and longevity studies.

            </p>

            {/* FEATURES */}

            <div className="experience-features">

              {/* FEATURE 1 */}

              <div className="feature-item">

                <div className="feature-icon-wrapper">

                  <svg
                    className="feature-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>

                </div>

                <div>
                  <h4 className="feature-title">
                      Research Precision
                  </h4>

                  <p className="feature-description">
                    Scientifically selected compounds with verified purity
                  </p>
                </div>

              </div>

              {/* FEATURE 2 */}

              <div className="feature-item">

                <div className="feature-icon-wrapper">

                  <svg
                    className="feature-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>

                </div>

                <div>
                  <h4 className="feature-title">
                     Advanced Formulations
                  </h4>

                  <p className="feature-description">
                    Curated peptide collections for modern research models
                  </p>
                </div>

              </div>

              {/* FEATURE 3 */}

              <div className="feature-item">

                <div className="feature-icon-wrapper">

                  <svg
                    className="feature-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                </div>

                <div>
                  <h4 className="feature-title">
                     Scientific Integrity
                  </h4>

                  <p className="feature-description">
                    Built around quality, transparency, and research standards
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE CARD */}

          <div className="experience-visual section-reveal">

            <div className="visual-card">

              <div className="visual-glow"></div>

              <div className="visual-content">

                <div className="glass-panel viewer-card">

                  <div className="viewer-icon">

                    <svg
                      className="viewer-play-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                  </div>

                  <h3 className="viewer-title">
                    Explore Research
                  </h3>

                  <p className="viewer-description">
                    Discover premium peptide collections engineered for advanced scientific exploration
                  </p>

                  <button className="btn-luxury viewer-btn">
                    Explore Collection
                  </button>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;