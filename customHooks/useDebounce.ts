import { useEffect, useState } from "react";
import { useGetPokemon, useListPokemon } from "./index";

export function useDebounce() {
  const { queryPokemons } = useListPokemon();
  const { queryPokemon } = useGetPokemon("", false);
  const [queryLoading, setQueryLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    let delayDebounceFn: NodeJS.Timeout;
    if (searchTerm.length > 3) {
      delayDebounceFn = setTimeout(() => {
        queryPokemon(searchTerm);
        setQueryLoading(false);
        clearTimeout(delayDebounceFn);
      }, 5000);
    } else if (searchTerm.length === 0) {
      queryPokemons(0, true);
      setQueryLoading(false);
    } else {
      setQueryLoading(false);
    }

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const queryByName = (searchTerm: string) => {
    setQueryLoading(true);
    setSearchTerm(searchTerm);
  };

  return { queryByName, queryLoading };
}
