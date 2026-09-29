import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LogosStrip from './components/LogosStrip.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Stats from './components/Stats.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosStrip />
        <Services />
        <Work />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
