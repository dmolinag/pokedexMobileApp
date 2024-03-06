import { useState } from 'react';
// import { usePokemonsListContext, useToastContext } from '../utils';
import { fetchPokemonByType } from '../api/fetchPokemonByType';
import { PokemonObj } from '../utils';
import { usePokemonsListContext } from '../utils/pokemonsListContext';

export function useListPokemonByType() {
	const { definePokemonList } = usePokemonsListContext();
	// const { showToast } = useToastContext();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [pokemonsList, setPokemonsList] =	useState<PokemonObj[]>([]);

	const queryPokemonsByType = async (type: string, pokemonAmount: number) => {
		setIsLoading(true);

		const response = await fetchPokemonByType(type, pokemonAmount);

		if (!response.error) {
			definePokemonList(response.pokemonList, type, true);
			setPokemonsList(response.pokemonList)
			setIsLoading(false);
		} else {
			definePokemonList([], type);
			setPokemonsList([])
			setIsLoading(false);
			// showToast({
			// 	isDisplay: true,
			// 	message: "Error retrieving Pokemon's list by type",
			// 	type: 'error',
			// });
		}
	};

	return { isLoading, queryPokemonsByType, pokemonsList };
}
