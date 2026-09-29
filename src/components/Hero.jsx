export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow"></div>
      <div className="container hero__content">
        <span className="hero__badge">⚡ Award-winning ad agency</span>
        <h1 className="hero__title">
          Advertising that <span className="hero__highlight">gets noticed</span>.
        </h1>
        <p className="hero__desc">
          We craft bold campaigns, scroll-stopping creative, and data-driven strategies
          that move people — and move the needle for your brand.
        </p>
        <div className="hero__actions">
          <a href="#cta" className="btn btn-primary">Start a Project →</a>
          <a href="#work" className="btn btn-ghost">See Our Work</a>
        </div>
        <div className="hero__metrics">
          <div><strong>500+</strong><span>Campaigns launched</span></div>
          <div><strong>120+</strong><span>Brands trust us</span></div>
          <div><strong>4.9x</strong><span>Avg. ROAS</span></div>
        </div>
      </div>
    </section>
  )
}
