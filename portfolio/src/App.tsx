import { AboutUs } from "./components/AboutUs"
import { Background } from "./components/Background"
import { ContactUs } from "./components/ContactUs"
import { Footer } from "./components/Footer"
import Header from "./components/Header"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {
  return (
    <div className="max-w-screen-xl mx-auto font-serif px-4 sm:px-6 lg:px-8">
      <Header />
      <Background />
      <AboutUs />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
