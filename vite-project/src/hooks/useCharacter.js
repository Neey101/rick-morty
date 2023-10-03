import { useState } from "react";

export function useCharacter() {
  const [personajes, setPersonajes] = useState([]);

  const getAllCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  };
  return {
    personajes,
    getAllCharacters,
  };
}
