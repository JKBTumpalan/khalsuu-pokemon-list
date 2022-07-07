import React from "react";
import { Pokemon } from "./Pokemon";
import "./pokemon-list.styles.css";

interface Pokemon {
  name: string;
  url: string;
}
interface Pokemon {
  name: string;
  url: string;
}

export const PokemonCardList = ({ pokemons }: any) => {
  console.log(pokemons);
  return (
    <div className={`card-list`}>
      {pokemons.map((pokemon: any, index: number) => {
        return <Pokemon data={pokemon} key={index} />;
      })}
    </div>
  );
};
