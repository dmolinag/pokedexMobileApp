import { useEffect, useState } from 'react';
// import { usePokemonsListContext, useToastContext } from '../utils';
import { fetchPokemonList } from '../api/fetchPokemonList';
import { PokemonObj } from '../utils';

export function useListPokemon() {
	// const { pokemonList, definePokemonList } = usePokemonsListContext();
	// const { showToast } = useToastContext();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [pokemonsList, setPokemonsList] =
	useState<PokemonObj[]>([]);

	const queryPokemons = async (page: number, isFirstPageOnly = false) => {
  
		setIsLoading(true);
		const response = await fetchPokemonList(page + 1);

		if (!response.error) {
			let newPokemonList = !isFirstPageOnly
				? [...pokemonsList.concat(response.pokemonList)]
				: response.pokemonList;

			// definePokemonList(newPokemonList, '');
			setPokemonsList(newPokemonList)

			setIsLoading(false);
		} else {
			// definePokemonList([], '');
			setPokemonsList([])
			setIsLoading(false);
			// showToast({
			// 	isDisplay: true,
			// 	message: "Error retrieving Pokemon's list1",
			// 	type: 'error',
			// });
		}
	};

	useEffect(() => {
		(async () => {
			const response = await fetchPokemonList(1);

			if (!response.error) {
				// definePokemonList(response.pokemonList, '');
				setPokemonsList(response.pokemonList)
				setIsLoading(false);
			} else {
				// definePokemonList([], '');
				setPokemonsList([])
				setIsLoading(false);
				// showToast({
				// 	isDisplay: true,
				// 	message: "Error retrieving Pokemon's list",
				// 	type: 'error',
				// });
			}
		})();
	}, []);

	return { isLoading, queryPokemons, pokemonsList };
}
