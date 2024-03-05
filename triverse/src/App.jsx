import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Gallery from "./Pages/gallery";
import Navbar from "./components/Navbar";
import Events from "./Pages/Events";
import Timeline from "./Pages/Timeline";
import Bottom from "./Components/Bottom";
import MatrixRainingCode from "./Components/MatrixRainingCode";
import About from './Pages/About';

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
          </Routes>
        </Router>
        {/* <Bottom/> */}
      </div>
    </>
  );
}

export default App;
