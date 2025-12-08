import Landing from './pages/landing'
import About from './pages/about'
import Contact from './pages/contactUs'
import Taxation from './pages/taxation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/about' element={<About/>} />
            <Route path = "/contact" element={<Contact />} />
            <Route path="/taxation" element={<Taxation />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
