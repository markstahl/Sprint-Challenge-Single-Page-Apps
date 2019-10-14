import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res);
        const character = res.data.results;
        setCharacters(character);
      })
      .catch(err => console.log(err))
  }, [characters]);

  return (
    <section className="character-list">
      <h2>
        {characters.map(char => {
          return (
          <CharacterCard
            key={char.id}
            name={char.name}
            image={char.image}
            status={char.status}
            species={char.species}
            gender={char.gender}
          />
          );
        })}
      </h2>
    </section>
  );
}