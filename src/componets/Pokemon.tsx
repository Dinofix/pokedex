import { useEffect, useState } from "react";
import { PokeAPI } from "../services/PokeAPI";
import axios from "axios";
import { IPokemon } from "../models/IPokemon";

export const Pokemon = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [pokemon, setPokemon] = useState<IPokemon>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setInputValue(value);
  };

  useEffect(() => {
    axios
      .get(PokeAPI + inputValue, {})
      .then(function (response) {
        console.log(response);

        setPokemon(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [inputValue]);

  return (
    <div>
      <h2>Pokedex v1</h2>
      <h3>{pokemon?.name}</h3>
      <img
        src={pokemon?.sprites.front_default}
        alt={"sprite of: " + pokemon?.name}
      />
      <br />
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter National Dex Number"
      />
    </div>
  );
};
