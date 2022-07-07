import React, { useState, useEffect } from "react";
import "./pokemon.styles.css";

export const Pokemon = ({ data }: any) => {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    species: { name: "", url: "" },
    img_url: "",
    type: "",
    weight: null,
  });

  useEffect(() => {
    fetch(`${data.url}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData({
          name: data.name,
          species: data.species,
          img_url: data.sprites.front_default,
          type: data.types[0].type.name,
          weight: data.weight,
        });
      });
  }, []);

  return (
    <div className={`card-container`}>
      <img src={pokemonData.img_url} />
      <h2> {pokemonData.name} </h2>
      <p>
        {pokemonData.type} - {pokemonData.weight}lbs.
      </p>
    </div>
  );
};
