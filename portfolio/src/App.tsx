import { AboutUs } from "./components/AboutUs"
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


           


         
       </div>
    </>
  )
}

export default App
