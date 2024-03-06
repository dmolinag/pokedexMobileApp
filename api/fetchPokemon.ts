import { Toast } from "react-native-toast-message/lib/src/Toast";
import { INITIAL_POKEMON } from "../customHooks";
import { PokemonObj } from "../utils";

export const fetchPokemon = async (pokemon: string | number) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  let data: PokemonObj;
  let error;

  try {
    const response = await fetch(URL);
    data = await response.json();
    error = false;
  } catch {
    data = INITIAL_POKEMON;
    error = true;
    Toast.show({
      type: "error",
      text1: "Conexion error",
      text2: "There was an error retrieving the pokemon information",
    });
  }

  return { data, error };
};
