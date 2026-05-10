import './SplashPage.css'

export default function SplashPage({ onPlay }) {
  return (
    <div className="splash">
      <div className="splash-content">
        <p className="splash-message">
          Some loves are so rare they leave a permanent mark on your soul. Ours was that.
          Whatever the future holds I am grateful every day that I got to love you and be loved by you.
          Take care of yourself. You will always be in my heart.
        </p>
        <p className="splash-signature">Roger.</p>
        <button className="splash-btn" onClick={onPlay}>
          ▶ Play Slideshow
        </button>
      </div>
    </div>
  )
}
