import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-mark">RJ</span>
          <span className="footer__name">Roger Jackie</span>
        </div>
        <p className="footer__copy">
          © {year} Roger Jackie. All rights reserved.
        </p>
        <div className="footer__links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
