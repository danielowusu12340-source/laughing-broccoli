const testimonials = [
  {
    quote: "Buzzly completely transformed our brand. We went from invisible to the talk of the industry in six months. The ROAS speaks for itself.",
    author: 'Sarah Chen',
    role: 'CMO, Nimbus Cloud',
    avatar: 'SC',
    color: '#ff5722',
  },
  {
    quote: "The creative quality is unmatched. Every campaign they deliver outperforms the last. They feel like an extension of our team.",
    author: 'Marcus Johnson',
    role: 'Founder, Vertex Wear',
    avatar: 'MJ',
    color: '#00b894',
  },
  {
    quote: "We tried three agencies before Buzzly. Nobody else combined strategy, creative, and media this well. Our launch hit 2.4M views.",
    author: 'Priya Patel',
    role: 'VP Growth, Quanta',
    avatar: 'PP',
    color: '#6c5ce7',
  },
]

export default function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="section__head">
          <span className="section-label">Client voices</span>
          <h2 className="section-title">Don't just take our word for it</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.author} className="testimonial-card">
              <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
              <figcaption className="testimonial-card__author">
                <span className="testimonial-card__avatar" style={{ background: t.color }}>{t.avatar}</span>
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
