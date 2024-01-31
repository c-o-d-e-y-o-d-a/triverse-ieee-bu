import {Router, Routes ,Route} from "react-router-dom"
import About from "./Pages/about"
import Contact from "./Pages/contact"
import Home from "./Pages/home"
import Gallery from "./Pages/gallery"
import Sponsor from "./Pages/sponsor"
import Navbar from "./components/Navbar"
import Events from "./Pages/Events"
import Timeline from "./Pages/Timeline"

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Events/>
    <Timeline/>
    <About/>
    {/* <Router>
      <Routes>
        <Route/>
      </Routes>

    </Router> */}
   
    </>
  )
}

export default App
