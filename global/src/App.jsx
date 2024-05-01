import {Routes,Route  } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Page/Home';
import Gallery from './Page/Gallery';
import Contact from './Page/Contact';
import About from './Page/About';


function App() {
  
  return(
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
    </>
  )
}

export default App
