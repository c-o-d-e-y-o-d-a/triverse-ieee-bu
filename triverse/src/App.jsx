import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Navbar from "./Components/Navbar";
import Events from "./Pages/Events";
import Timeline from "./Pages/Timeline";
import Bottom from "./Components/Bottom";
import MatrixRainingCode from "./Components/MatrixRainingCode";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Sponsor from './Pages/Sponsor'
import Teams from './Pages/Teams';




function App() {
  return (
    <>
      <div className=" overflow-hidden">
        
        <MatrixRainingCode className="absolute inset-0" />
      </div>
      <div className="flex flex-col overflow-x-hidden">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/sponsor" element={<Sponsor/>}/>
            <Route path="/team" element={<Teams/>}/>
          </Routes>
        </Router>
        {/* <Bottom/> */}
      </div>
    </>
  );
}

export default App;
