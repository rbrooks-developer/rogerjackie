import './Features.css'

const features = [
  {
    icon: '🎬',
    title: 'Cinematic Quality',
    desc: 'Every project is crafted with a filmmaker\'s eye — precise composition, color grading, and pacing that elevates your brand.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'Tight deadlines? No problem. A streamlined production workflow means your project is delivered on time, every time.',
  },
  {
    icon: '🎯',
    title: 'Strategy First',
    desc: 'Great visuals start with a clear story. Every project begins with understanding your audience and what drives them to act.',
  },
  {
    icon: '🤝',
    title: 'True Collaboration',
    desc: 'You\'re involved at every step. Transparent communication and a process built around your vision and feedback.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    desc: 'Work with clients worldwide remotely or on location. Adaptable, mobile, and ready for any production environment.',
  },
  {
    icon: '✨',
    title: 'Premium Finishing',
    desc: 'Professional color correction, sound design, and motion graphics that give your final cut a polished, broadcast-ready look.',
  },
]

export default function Features() {
  return (
    <section className="features" id="about">
      <div className="container">
        <div className="features__header">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">
            Professional Work,<br />Personal Attention
          </h2>
          <p className="section-subtitle">
            From concept to final cut, every detail is handled with care — because your story deserves nothing less.
          </p>
        </div>

        <div className="features__grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
