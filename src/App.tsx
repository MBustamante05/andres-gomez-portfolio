import './App.css'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Home } from './components/Home'
import { Navbar } from './components/navbar'
import { Pricing } from './components/Pricing'

function App() {

  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
