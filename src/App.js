
import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import './styles.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData.results);
      } catch (error) {
      }
    }

    fetchStarships();
  }, []);

  return (
    <div>
      <h1> Starwars Starships</h1>
      <div className="grid-container">
        {starships.map((starship) => (
          <div key={starship.url} className="card">
            <p>Name: {starship.name}</p>
            <p>Model: {starship.model}</p>
            <p>Consumables: {starship.consumables}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
