import About from './components/About'
import Contact from './components/Contact'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Process from './components/Process'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhyRoolfix from './components/WhyRoolfix'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyRoolfix />
        <About />
        <Gallery />
        <Testimonials />
        <Process />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
