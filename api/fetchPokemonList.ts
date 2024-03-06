import { Toast } from "react-native-toast-message/lib/src/Toast";
import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    const promises = data.results.map(
      async (pokemon: { name: string }) =>
        (await fetchPokemon(pokemon.name)).data
    );

    const pokemonList = Promise.all(promises);

    return pokemonList.then((pokemons) => {
      return { pokemonList: pokemons, error: false };
    });
  } catch {
	Toast.show({
		type: "error",
		text1: "Conexion error",
		text2: "There was an error retrieving the pokemon list",
	  });
    return { pokemonList: [], error: true };
  }
};
