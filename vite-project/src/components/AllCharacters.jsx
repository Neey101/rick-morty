import { useEffect, useState } from "react";
import { useCharacter } from "../hooks/useCharacter";
import "../app.css";

export const AllCharacters = () => {
  const { getAllCharacters, personajes } = useCharacter();

  useEffect(() => {
    getAllCharacters();
  });

  return <>Hola carlita :B</>;

  <ul>
    {personajes.map((item, index) => (
      <li key={index}>
        <h3>{item.name}</h3>
        <p>{item.status}</p>
        <img src={item.image} />
      </li>
    ))}
  </ul>;
};
