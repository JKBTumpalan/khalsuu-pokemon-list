import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { PokemonCardList } from "./components/PokemonCardList";
import { PokemonSearch } from "./components/PokemonSearch";

interface Pokemon {
  name: string;
  url: string;
}

function App() {
  const [pokemonSearchField, setPokemonSearchField] = useState<string>("");
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonList);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150`)
      .then((response) => response.json())
      .then((json) => {
        setPokemonList(json.results);
      });
  }, []);

  useEffect(() => {
    const newFilteredPokemons = pokemonList.filter((pokemon: Pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(pokemonSearchField);
    });

    console.log(newFilteredPokemons);
    setFilteredPokemonList(newFilteredPokemons);
  }, [pokemonList, pokemonSearchField]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPokemonSearchField(e.target.value.toLocaleLowerCase());
    console.log(pokemonSearchField);
  };

  return (
    <div className="App">
      <Header className="app-title" />
      <PokemonSearch
        className="pokemon-search-box"
        placeholder="Find Khalsuu's Pokemon"
        onChangeHandler={onSearchChange}
      />
      <PokemonCardList pokemons={filteredPokemonList} />
    </div>
  );
}

export default App;
