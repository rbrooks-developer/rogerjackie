import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero__bg"
        src="./videos/slideshow.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="container">
        <div className="hero__player">
          <video
            src="./videos/slideshow.mp4"
            controls
            playsInline
            className="hero__video"
          />
        </div>
      </div>
    </section>
  )
}
