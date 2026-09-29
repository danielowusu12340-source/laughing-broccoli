const stats = [
  { value: '500+', label: 'Campaigns launched' },
  { value: '120+', label: 'Brands partnered with' },
  { value: '$2.4B', label: 'Ad spend managed' },
  { value: '4.9x', label: 'Average return on ad spend' },
]

export default function Stats() {
  return (
    <section className="section" id="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
