import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Body from "./pages/Body"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
