import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './pages/Body'
import Contact from './components/Contact'
import Subjects from './components/Subjects'
import SignUpTemp from './pages/Authentication/SignUpTemp'
import Login from './pages/Authentication/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admission from './components/Admission'
import LoginTemp from './pages/Authentication/LoginTemp'
import NavbarTemp from './components/NavbarTemp'
import About from './components/About'

function App () {
  return (
    <>
      <Router>
        <NavbarTemp />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/admission' element={<Admission/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/subjects' element={<Subjects />} />
          <Route path='/register' element={<SignUpTemp/>} />
          <Route path='/login' element={<LoginTemp />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
