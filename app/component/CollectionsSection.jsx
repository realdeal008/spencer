"use client";

const CollectionsSection = () => {
  return (
    <section id="collections" className="collections-section">

      <div className="collections-container">

        {/* SECTION HEADER */}

        <div className="collections-header section-reveal">

          <p className="collections-subtitle">
            Curated Categories
          </p>

          <h2 className="collections-title">
            The Collection
          </h2>

        </div>

        {/* COLLECTION GRID */}

        <div className="collections-grid">

          {/* SKINCARE */}

          <div
            className="category-card group section-reveal"
            onClick={() => filterCategory("skincare")}
          >

            <div className="category-content skincare-bg">

              <div className="category-icon-wrapper">

                <svg
                  className="category-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>

              </div>

              <h3 className="category-title">
                Metabolic Precision
              </h3>

              <p className="category-description">
                fat-loss peptides,
glucose support,
appetite regulation products
              </p>

              <div className="category-line"></div>

            </div>
          </div>

          {/* MAKEUP */}

          <div
            className="category-card group section-reveal"
            onClick={() => filterCategory("makeup")}
          >

            <div className="category-content makeup-bg">

              <div className="category-icon-wrapper">

                <svg
                  className="category-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>

              </div>

              <h3 className="category-title">
                Regenerative Systems
              </h3>

              <p className="category-description">
                recovery peptides,
tissue repair,
healing and performance support
              </p>

              <div className="category-line"></div>

            </div>
          </div>

          {/* FRAGRANCE */}

          <div
            className="category-card group section-reveal"
            onClick={() => filterCategory("fragrance")}
          >

            <div className="category-content fragrance-bg">

              <div className="category-icon-wrapper">

                <svg
                  className="category-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

              </div>

              <h3 className="category-title">
               Cellular Longevity
              </h3>

              <p className="category-description">
                anti-aging,
mitochondrial support,
wellness and longevity research peptides
              </p>

              <div className="category-line"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;