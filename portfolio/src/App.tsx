import { AboutUs } from "./components/AboutUs"
import { ContactUs } from "./components/ContactUs"
import { Footer } from "./components/footer"
import Header from "./components/Header"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {
  

  return (
    <>
       <div className="max-w-screen-xl mx-auto font-serif">
           <Header/>
           <AboutUs/>
           <Projects/>
           <Skills/>
           <ContactUs/>
           <Footer/>
       </div>
    </>
  )
}

export default App
