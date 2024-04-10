import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Body from "./pages/Body"
import Contact from "./components/Contact"
import Subjects from "./components/Subjects"
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
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
