"use client";

import { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContainerRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Focus management + Escape close + focus trap
  useEffect(() => {
    if (!isModalOpen) return;

    previouslyFocusedRef.current = document.activeElement;

    const t = window.setTimeout(() => {
      modalContainerRef.current?.focus?.();
    }, 0);

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsModalOpen(false);
        return;
      }

      if (e.key !== "Tab") return;

      const container = modalContainerRef.current;
      if (!container) return;

      const focusable = Array.from(
        container.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || !container.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isModalOpen]);

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

                  <button 
                    className="btn-luxury viewer-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Compatibility Cheat
                  </button>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= POPUP MODAL ================= */}
      {isModalOpen && (
        <div className="experienceoverlays" onClick={() => setIsModalOpen(false)}>
          <div
            className="experiencecontainers"
            ref={modalContainerRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="experiencetitles"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="expheader">
              <div className="expheadercontent">
                <div className="expicon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <div>
                  <h2 className="exptitle" id="experience-modal-title">Peptide Compatibility Cheat Sheet</h2>
                  <p className="expsubtitle">Research-Backed Stacking Guide</p>
                </div>
              </div>
              <button 
                className="expclosebtn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="expbody">
              
              {/* 1. WHY YOU NEED THIS — FIRST */}
              <div className="expsection exp-why-section">
                <h3 className="exp-section-title">
                  <span className="exp-section-icon">💡</span>
                  Why Researchers Reference This Guide
                </h3>
                <div className="exp-why-grid">
                  <div className="exp-why-card">
                    <div className="exp-why-number">01</div>
                    <h4>Instant Compatibility Check</h4>
                    <p>Eliminates guesswork by showing which peptides work synergistically vs. which compete for the same biological pathways. Reduces risk of redundant stacking.</p>
                  </div>
                  <div className="exp-why-card">
                    <div className="exp-why-number">02</div>
                    <h4>Cost-Effective Protocols</h4>
                    <p>Identifies cheaper alternatives that achieve faster results through mechanistic synergy rather than expensive monotherapy escalation.</p>
                  </div>
                  <div className="exp-why-card">
                    <div className="exp-why-number">03</div>
                    <h4>Faster Onset of Action</h4>
                    <p>Strategic pairings target complementary pathways (e.g., metabolic regulation + tissue repair), accelerating measurable outcomes vs. single-compound approaches.</p>
                  </div>
                </div>
              </div>

              {/* 2. COMPATIBILITY MATRIX */}
              <div className="expsection">
                <h3 className="exp-section-title">
                  <span className="exp-section-icon">🔬</span>
                  Mechanistic Compatibility Matrix
                </h3>
                <div className="exp-compatibility-table">
                  <div className="exp-table-header">
                    <div className="exp-th">Combination</div>
                    <div className="exp-th">Compatibility</div>
                    <div className="exp-th">Mechanism</div>
                    <div className="exp-th">Research Tier</div>
                  </div>
                  
                  <div className="exp-table-row exp-compatible">
                    <div className="exp-td exp-combo-name">
                      <span className="exp-badge exp-green">✓ Synergistic</span>
                      Metabolic + Repair
                    </div>
                    <div className="exp-td">High</div>
                    <div className="exp-td">Different biological lanes — no pathway competition</div>
                    <div className="exp-td"><span className="exp-tier exp-tier-2">Tier 2</span></div>
                  </div>

                  <div className="exp-table-row exp-compatible">
                    <div className="exp-td exp-combo-name">
                      <span className="exp-badge exp-green">✓ Synergistic</span>
                      Appetite Regulation + Lipolysis
                    </div>
                    <div className="exp-td">High</div>
                    <div className="exp-td">Central + peripheral mechanisms complement each other</div>
                    <div className="exp-td"><span className="exp-tier exp-tier-1">Tier 1</span></div>
                  </div>

                  <div className="exp-table-row exp-caution">
                    <div className="exp-td exp-combo-name">
                      <span className="exp-badge exp-yellow">⚠ Redundant</span>
                      GLP-1 + GLP-1 Mimetic
                    </div>
                    <div className="exp-td">Low</div>
                    <div className="exp-td">Same pathway — increased risk without added benefit</div>
                    <div className="exp-td"><span className="exp-tier exp-tier-3">Tier 3</span></div>
                  </div>

                  <div className="exp-table-row exp-caution">
                    <div className="exp-td exp-combo-name">
                      <span className="exp-badge exp-yellow">⚠ Redundant</span>
                      Multiple GH Secretagogues
                    </div>
                    <div className="exp-td">Low</div>
                    <div className="exp-td">Identical signaling axis — diminishing returns</div>
                    <div className="exp-td"><span className="exp-tier exp-tier-4">Tier 4</span></div>
                  </div>

                  <div className="exp-table-row exp-compatible">
                    <div className="exp-td exp-combo-name">
                      <span className="exp-badge exp-green">✓ Synergistic</span>
                      Weight Loss + Muscle Preservation
                    </div>
                    <div className="exp-td">High</div>
                    <div className="exp-td">Prevents catabolism during caloric deficit</div>
                    <div className="exp-td"><span className="exp-tier exp-tier-2">Tier 2</span></div>
                  </div>
                </div>
              </div>

              {/* 3. EVIDENCE TIERS */}
              <div className="expsection">
                <h3 className="exp-section-title">
                  <span className="exp-section-icon">📊</span>
                  Evidence Tier Framework
                </h3>
                <div className="exp-tier-grid">
                  <div className="exp-tier-card exp-tier-1-card">
                    <div className="exp-tier-label">Tier 1</div>
                    <p>FDA-approved therapies with large randomized human trials. Foundation of any safe stack.</p>
                  </div>
                  <div className="exp-tier-card exp-tier-2-card">
                    <div className="exp-tier-label">Tier 2</div>
                    <p>Human trials demonstrating clear biological effects. Strong supporting evidence for research protocols.</p>
                  </div>
                  <div className="exp-tier-card exp-tier-3-card">
                    <div className="exp-tier-label">Tier 3</div>
                    <p>Small human studies or limited clinical data. Use cautiously — max one per stack.</p>
                  </div>
                  <div className="exp-tier-card exp-tier-4-card">
                    <div className="exp-tier-label">Tier 4</div>
                    <p>Animal models or anecdotal reports. Experimental only — not for clinical protocols.</p>
                  </div>
                </div>
              </div>

              {/* 4. STACKING RULES */}
              <div className="expsection exp-rules-section">
                <h3 className="exp-section-title">
                  <span className="exp-section-icon">⚡</span>
                  Stacking Protocol Rules
                </h3>
                <ul className="exp-rules-list">
                  <li>
                    <span className="exp-rule-check">✓</span>
                    <strong>Start Simple:</strong> Begin with 1–2 compounds maximum. Never introduce multiple peptides simultaneously.
                  </li>
                  <li>
                    <span className="exp-rule-check">✓</span>
                    <strong>One Tier 3 Max:</strong> Stacks should include at least one Tier 1 therapy and never more than one Tier 3 compound.
                  </li>
                  <li>
                    <span className="exp-rule-check">✓</span>
                    <strong>Define Metrics:</strong> Establish measurable endpoints (e.g., ≥5% fat loss, preserved lean mass) before starting.
                  </li>
                  <li>
                    <span className="exp-rule-check">✓</span>
                    <strong>4–8 Week Reassessment:</strong> Every stack needs a review checkpoint. Discontinue if no measurable improvement.
                  </li>
                  <li>
                    <span className="exp-rule-check">✓</span>
                    <strong>Monitor Baseline:</strong> Track fasting glucose, lipids, CMP, CBC, and IGF-1 when manipulating GH axis.
                  </li>
                </ul>
              </div>

              {/* 5. DOCUMENT LINKS — LAST, AFTER ALL EXPLANATIONS */}
              <div className="expsection exp-links-section">
                <h3 className="exp-section-title">
                  <span className="exp-section-icon">📄</span>
                  Download Full Reference Documents
                </h3>
                <p className="exp-links-intro">
                  Now that you understand the compatibility framework, access the complete research documentation below for detailed peptide pairing data, dosing protocols, and full mechanistic explanations.
                </p>
                <div className="exp-links-grid">
                  
                  {/* Link 1 */}
                  <a 
                    href="https://1drv.ms/w/c/42e30fa42d16e051/EXaDzN2VM9tGpmL0s_P9ywEBFy4EHHCmi34Ly4Qt5OLTiA?e=IR0Ich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-doc-link-card"
                  >
                    <div className="exp-doc-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                    </div>
                    <div className="exp-doc-info">
                      <h4>Peptide Research Guide</h4>
                      <p>Full documentation with detailed compound profiles and research protocols</p>
                      <span className="exp-doc-action">
                        View Document
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </span>
                    </div>
                  </a>

                  {/* Link 2 - Cheat Sheet (Featured) */}
                  <a 
                    href="https://1drv.ms/w/c/42e30fa42d16e051/EQACzsuBldlGr9EA0ImdBX4BVRyiKAT0qr81h0zIbns5tw?e=5kAlfP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-doc-link-card exp-featured"
                  >
                    <div className="exp-doc-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 11l3 3L22 4"/>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                      </svg>
                    </div>
                    <div className="exp-doc-info">
                      <div className="exp-doc-badge">Primary Reference</div>
                      <h4>Peptide Compatibility Cheat Sheet</h4>
                      <p>Quick-reference chart showing all compatible and incompatible peptide combinations</p>
                      <span className="exp-doc-action">
                        View Cheat Sheet
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </span>
                    </div>
                  </a>

                  {/* Link 3 */}
                  <a 
                    href="https://onedrive.live.com/:w:/g/personal/42E30FA42D16E051/EXaDzN2VM9tGpmL0s_P9ywEBFy4EHHCmi34Ly4Qt5OLTiA?resid=42E30FA42D16E051!sddcc8376339546dba662f4b3f3fdcb01&ithint=file%2Cdocx&e=IR0Ich&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy80MmUzMGZhNDJkMTZlMDUxL0VYYUR6TjJWTTl0R3BtTDBzX1A5eXdFQkZ5NEVISENtaTM0THk0UXQ1T0xUaUE_ZT1JUjBJY2g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-doc-link-card"
                  >
                    <div className="exp-doc-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <path d="M12 18v-6"/>
                        <path d="M8 15l4-3 4 3"/>
                      </svg>
                    </div>
                    <div className="exp-doc-info">
                      <h4>Advanced Protocol Document</h4>
                      <p>Extended research protocols with stacking timelines and monitoring guidelines</p>
                      <span className="exp-doc-action">
                        View Document
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </span>
                    </div>
                  </a>

                </div>
              </div>

              {/* CTA */}
              <div className="expfooter">
                <p className="expdisclaimer">
                  <strong>Research Use Only:</strong> This cheat sheet is for educational and research planning purposes. Always consult qualified research protocols and institutional review boards before implementing peptide combinations.
                </p>
                <button 
                  className="btn-luxury exp-modal-cta-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Got It — Back to Collection
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;