import React, { useState, useEffect } from "react";

const RickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCharacters();
  }, []);

  console.log("Characters:", characters); // Verifica en la consola que los personajes se carguen correctamente

  return (
    <div className="character-list">
      <h1>Rick and Morty Characters</h1>
      <div className="cards-container">
        {characters.map((character) => (
          <div key={character.id} className="card">
            <img src={character.image} alt={character.name} />
            <div className="card-body">
              <h2>{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMortyCharacters;
