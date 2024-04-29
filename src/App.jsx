import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Body from "./pages/Body"
import Contact from "./components/Contact"
import Subjects from "./components/Subjects"
import Register from "./pages/Register"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
