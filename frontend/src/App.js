import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';       // <--- Add this
import Collection from './pages/Collection'; // <--- Add this
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">ESSENCE</div>
          <div className="nav-buttons">
            <Link to="/"><button className="nav-btn">Home</button></Link>
            <Link to="/collection"><button className="nav-btn">Collection</button></Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;