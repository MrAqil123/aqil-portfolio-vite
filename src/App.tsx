import Hero from "./components/Home/Hero"
import ServicesStack from './components/Home/Services/ServicesStack.tsx'
import Footer from './components/Layout/Footer/index.tsx'
import ContactME from './components/Home/contact/Contact.tsx'
import About from './components/Home/about/index.tsx'
import Portfolio from './components/SharedComponent/portfollio/index.tsx'
import Skills from './components/Home/Skills/Services.tsx'
function App() {

  return (
    <>
    <Hero/>
    <About />
    <ServicesStack />
    <Portfolio />
    <Skills />
    <ContactME />
    <Footer />
    </>
  )
}

export default App
