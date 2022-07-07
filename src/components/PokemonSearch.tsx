import React from "react";
import "./search-box.styles.css";

type pokemonSearchProps = {
  className: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const PokemonSearch = ({
  className,
  onChangeHandler,
  placeholder,
}: pokemonSearchProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
