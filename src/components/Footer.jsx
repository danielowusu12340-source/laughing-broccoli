export default function Footer() {
  const cols = [
    { title: 'Services', links: ['Brand Strategy', 'Creative & Design', 'Performance Media', 'Social & Content'] },
    { title: 'Company', links: ['About Us', 'Our Work', 'Careers', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'Case Studies', 'Newsletter', 'FAQ'] },
  ]

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="footer__logo-dot"></span>
            Buzzly
          </a>
          <p className="footer__tag">Advertising that gets noticed.</p>
        </div>
        <div className="footer__cols">
          {cols.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© 2026 Buzzly Agency. All rights reserved.</p>
        <div className="footer__social">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
