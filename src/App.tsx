import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { initAnalytics } from './lib/analytics';
import { ConstellationBackground } from './components/ConstellationBackground';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    initAnalytics();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${20 + Math.random() * 10}s`,
    },
  }));

  return (
    <Router>
      <div className="app">
        <ConstellationBackground />
        
        <div className="background-animation">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          {dots.map((dot) => (
            <div key={dot.id} className="dot" style={dot.style}></div>
          ))}
        </div>

        <header className="header">
          <div className="header-content">
            <Link to="/" className="logo">
              ✨ Beyond Holistic
            </Link>
            <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <a href="#incense">Incense</a>
              <a href="#oils">Oils</a>
              <a href="#cards">Cards</a>
              <a href="#carpets">Carpets</a>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/omni4-st0r3-m4n4g3r-p4n3l-v2" element={<Admin />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2026 Beyond Holistic. All rights reserved.</p>
            <p>Premium spiritual products for your sacred journey</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

