import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import Navbar from './components/Navbar';
import Body from './pages/Body';
import Footer from './components/Footer';
import './styles/dark-mode.css';
import About from './components/About';


function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
