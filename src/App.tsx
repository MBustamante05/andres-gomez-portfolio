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
      <section>
        <Home />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
