import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Collection() {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/perfumes')
      .then(res => setPerfumes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2 className="section-title">Our Full Collection</h2>
      <div className="perfume-grid">
        {perfumes.map(perfume => (
          <div key={perfume.id} className="perfume-card">
            <img src={perfume.image_url} alt={perfume.name} />
            <h3>{perfume.name}</h3>
            <p>${perfume.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;