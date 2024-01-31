import {Router, Routes ,Route} from "react-router-dom"
import About from "./Pages/about"
import Contact from "./Pages/contact"
import Home from "./Pages/home"
import Gallery from "./Pages/gallery"
import Sponsor from "./Pages/sponsor"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    {/* <Router>
      <Routes>
        <Route/>
      </Routes>

    </Router> */}
   
    </>
  )
}

export default App
