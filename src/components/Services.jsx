const services = [
  {
    icon: '🎯',
    title: 'Brand Strategy',
    desc: 'Positioning, messaging, and identity systems that make your brand impossible to ignore.',
  },
  {
    icon: '🎨',
    title: 'Creative & Design',
    desc: 'Scroll-stopping visuals, video, and copy crafted to convert attention into action.',
  },
  {
    icon: '📊',
    title: 'Performance Media',
    desc: 'Full-funnel paid media across Meta, Google, TikTok, and beyond — optimized daily.',
  },
  {
    icon: '📱',
    title: 'Social & Content',
    desc: 'Always-on social campaigns and content engines that build community and demand.',
  },
  {
    icon: '🔍',
    title: 'SEO & Analytics',
    desc: 'Technical SEO, dashboards, and attribution so every dollar is tracked and optimized.',
  },
  {
    icon: '🚀',
    title: 'Launch Campaigns',
    desc: 'Go-to-market sprints for product launches, rebrands, and funding announcements.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <span className="section-label">What we do</span>
          <h2 className="section-title">Everything you need to be seen</h2>
          <p className="section-subtitle">
            One partner for strategy, creative, and media — so your message stays sharp at every touchpoint.
          </p>
        </div>
        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <span className="service-card__icon">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
