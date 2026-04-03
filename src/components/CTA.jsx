import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-card">
          <div className="cta-card__glow" />
          <span className="section-label">Ready to Start?</span>
          <h2 className="section-title cta-card__title">
            Let's Build Something<br />Extraordinary Together
          </h2>
          <p className="section-subtitle cta-card__subtitle">
            Whether it's a brand film, an event recap, or a full production, I'd love to hear about your project.
            Reach out and let's make it happen.
          </p>
          <div className="cta-card__actions">
            <a href="mailto:hello@rogerjackie.com" className="btn btn-primary">
              Email Me Directly
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
