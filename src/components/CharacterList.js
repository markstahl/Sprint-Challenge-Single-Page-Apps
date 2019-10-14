import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
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
        {characters.map(chars => {
          return (
            <CharacterCard
            key={chars.id}
            name={chars.name}
            image={chars.image}
            status={chars.status}
            species={chars.species}
            gender={chars.gender}
            />
          );
        })}
      </h2>
    </section>
  );
}
