import { useEffect, useState } from "react";
import "../app.css";

export function Characters() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, []);

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
}
