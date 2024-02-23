import { pokemonTypes } from "./constants";
import { PokemonObj, PokemonType } from "./types/pokemonTypes";

export const getPokemonColor = (pokemon: PokemonObj): PokemonType => {

  return pokemonTypes.filter(
    (type) => pokemon && pokemon.types[0].type.name.indexOf(type.name) !== -1
  )[0];
};

export const formatPokemonId = (id: number) => {
  if (id < 10) return `#00${id}`;
  else if (id >= 10 && id < 99) return `#0${id}`;
  else return `#${id}`;
};
