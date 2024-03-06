import { useEffect, useState } from "react";
import { fetchPokemon } from "../api/fetchPokemon";
import { PokemonObj } from "../utils";
import { usePokemonsListContext } from "../utils/pokemonsListContext";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const INITIAL_POKEMON: PokemonObj = {
  id: 0,
  name: "Pokemon",
  types: [{ type: { name: "bug" } }],
  weight: 1,
  height: 1,
  stats: [{ base_stat: 1, stat: { name: "test" } }],
};

export function useGetPokemon(pokemon: number | string, initialRender = true) {
  const { definePokemonList } = usePokemonsListContext();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [randomPokemon, setRandomPokemon] =
    useState<PokemonObj>(INITIAL_POKEMON);

  const queryPokemon = async (pokemon: string) => {
    let retrievedPokemon = await fetchPokemon(pokemon.toLowerCase());

    if (!retrievedPokemon.error) {
      let newPokemonList = [retrievedPokemon.data];
      definePokemonList(newPokemonList, "");
      setIsLoading(false);
    } else {
      setIsLoading(false);

      Toast.show({
        type: "error", // or 'error', 'info', 'warning'
        text1: "Pokemon not found",
        text2: "Pokemon not found, try another name",
      });
    }
  };

  useEffect(() => {
    if (initialRender) {
      (async () => {
        let retrievedPokemon;
        retrievedPokemon = await fetchPokemon(pokemon);

        if (!retrievedPokemon.error) {
          setRandomPokemon(retrievedPokemon.data);
          setIsLoading(false);
        } else {
          retrievedPokemon = INITIAL_POKEMON;
          setRandomPokemon(retrievedPokemon);
          setIsLoading(false);
          Toast.show({
            type: "error", // or 'error', 'info', 'warning'
            text1: "Pokemon not found",
            text2: "Pokemon not found, try another name",
          });
        }
      })();
    }
  }, []);

  return { randomPokemon, isLoading, queryPokemon };
}
