const brands = ['Nimbus', 'Quanta', 'Vertex', 'Lumen', 'Cobalt', 'Orbit']

export default function LogosStrip() {
  return (
    <section className="logos">
      <div className="container">
        <p className="logos__label">Trusted by fast-growing brands worldwide</p>
        <div className="logos__row">
          {brands.map((b) => (
            <span key={b} className="logos__item">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
