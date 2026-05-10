import './SplashPage.css'

export default function SplashPage({ onPlay }) {
  return (
    <div className="splash">
      <div className="splash-content">
        <p className="splash-message">
          Thank you for being my greatest love. These moments will always be with me.
          Wishing you nothing but healing and happiness.
        </p>
        <p className="splash-signature">Forever yours, Roger.</p>
        <button className="splash-btn" onClick={onPlay}>
          ▶ Play Slideshow
        </button>
      </div>
    </div>
  )
}
