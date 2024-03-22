import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./pages/Body"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
