import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure this path is correct to get your styles

function Home() {
    const navigate = useNavigate();
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Find Your Signature Scent</h1>
          <p className="hero-subtitle">Exquisite perfumes for the modern individual.</p>
          
          {/* This button can link to the collection page later */}
          <button 
  className="shop-btn" 
  onClick={() => navigate('/collection')}
>
  Explore Collection
</button>
        </div>
      </header>

      {/* Optional: You can add a small "About" or "Feature" section here later */}
      <section className="mini-about">
        <h2>WELCOME TO ESSENCE</h2>
        <p>Discover the art of fine fragrance where luxury meets scent.
        </p>
      </section>
    </div>
  );
}

export default Home;