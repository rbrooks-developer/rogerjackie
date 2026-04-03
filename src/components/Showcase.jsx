import './Showcase.css'

export default function Showcase() {
  return (
    <section className="showcase" id="work">
      <div className="container">
        <div className="showcase__layout">
          <div className="showcase__text">
            <span className="section-label">Featured Work</span>
            <h2 className="section-title">See the Craft in Motion</h2>
            <p className="section-subtitle">
              A sample of recent work — each project a unique challenge with a visual story at its heart.
              Hit play and experience the quality firsthand.
            </p>
            <ul className="showcase__checklist">
              <li>Corporate brand films &amp; commercials</li>
              <li>Event highlight reels &amp; recaps</li>
              <li>Documentary &amp; interview production</li>
              <li>Social media content series</li>
            </ul>
            <a href="#contact" className="btn btn-primary showcase__cta">
              Start a Project →
            </a>
          </div>

          <div className="showcase__player">
            <video
              src="./videos/slideshow.mp4"
              controls
              playsInline
              className="showcase__video"
            />
            <div className="showcase__player-label">
              <span className="showcase__player-dot" />
              Featured Reel
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
