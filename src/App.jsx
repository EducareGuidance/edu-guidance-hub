import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './pages/Body'
import Contact from './components/Contact'
import Subjects from './components/Subjects'
import SignUp from './pages/Authentication/SignUp'
import Login from './pages/Authentication/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admission from './components/Admission'

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/admission' element={<Admission/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/subjects' element={<Subjects />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
