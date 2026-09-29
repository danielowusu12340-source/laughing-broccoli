const projects = [
  {
    title: 'Nimbus Cloud — "Sky Is Not the Limit"',
    category: 'Brand Campaign',
    result: '+312% signups',
    gradient: 'linear-gradient(135deg, #ff5722, #ff9800)',
  },
  {
    title: 'Quanta Finance — "Money, Simplified"',
    category: 'Video Series',
    result: '2.4M views',
    gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
  },
  {
    title: 'Vertex Wear — "Move Different"',
    category: 'Social Launch',
    result: '5.1x ROAS',
    gradient: 'linear-gradient(135deg, #00b894, #55efc4)',
  },
  {
    title: 'Lumen Health — "Glow Inside Out"',
    category: 'Full-Funnel',
    result: '+180% revenue',
    gradient: 'linear-gradient(135deg, #0984e3, #74b9ff)',
  },
]

export default function Work() {
  return (
    <section className="section section--alt" id="work">
      <div className="container">
        <div className="section__head">
          <span className="section-label">Selected work</span>
          <h2 className="section-title">Campaigns that made an impact</h2>
          <p className="section-subtitle">
            A look at some recent projects where bold creative met measurable results.
          </p>
        </div>
        <div className="work__grid">
          {projects.map((p) => (
            <article key={p.title} className="work-card">
              <div className="work-card__visual" style={{ background: p.gradient }}>
                <span className="work-card__category">{p.category}</span>
                <span className="work-card__result">{p.result}</span>
              </div>
              <h3 className="work-card__title">{p.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
