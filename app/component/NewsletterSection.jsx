"use client";

const NewsletterSection = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();

    alert("Thank you for subscribing!");
  };

  return (
    <section className="newsletter-section">

      <div className="newsletter-container section-reveal">

        <p className="newsletter-subtitle">
         Research Collective
        </p>

        <h2 className="newsletter-title">
          The XIU{" "}
          <span className="gradient-text italic-text">
              Circle
          </span>
        </h2>

        <p className="newsletter-description">
          Gain exclusive access to premium peptide research releases,
  scientific insights, early collection drops, and curated
  updates from the future of advanced compound research.
        </p>

        {/* FORM */}

        <form
          className="newsletter-form"
          onSubmit={handleSubscribe}
        >

          <input
            type="email"
            placeholder="Your email address"
            className="newsletter-input"
            required
          />

          <button
            type="submit"
            className="btn-luxury subscribe-btn"
          >
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
};

export default NewsletterSection;