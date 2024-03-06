import { useState } from "react";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import { useListPokemon, useListPokemonByType } from "../../../customHooks";
import { POKEMONS_PER_PAGE, PokemonObj, formatPokemonId, getPokemonColor, usePokemonsListContext } from "../../../utils";
import { Button, Card, SearchBar } from "../../../components";

export const PokemonList = () => {
  const { queryPokemons } = useListPokemon();
  const { pokemonList, filtered, pokemonType } = usePokemonsListContext();

  const { queryPokemonsByType } = useListPokemonByType();

  // const [isPokemonDetailsModalOpen, setIsPokemonDetailsModalOpen] =
  // 	useState<boolean>(false);
  // const [isPokemonTypeModalOpen, setIsPokemonTypeModalOpen] =
  // 	useState<boolean>(false);
  // const [selectedPokemon, setSelectedPokemon] =
  // 	useState<PokemonObj>(INITIAL_POKEMON);
  // const [favPokemons, setFavPokemons] = useState<number[]>(getFavoritePokemons);
  // const [pokemonTypeAgainst, setPokemonTypeAgainst] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const handleLoadMore = async () => {
    const nextPage = page + 1;

    if (!filtered) {
    queryPokemons(page);
    } else {
    	queryPokemonsByType(pokemonType, POKEMONS_PER_PAGE * nextPage);
    }
    setPage(nextPage);
  };

  return (
    <View style={styles.container}>
      <SearchBar setPage={setPage} />
      <View style={styles.pokemons}>
        {pokemonList.map((pokemon: PokemonObj) => {
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

          return (
            <View key={pokemon.id}>
              <Card
                bgdColor={getPokemonColor(pokemon).color}
                borderColor={getPokemonColor(pokemon).borderColor}
              >
                <View style={styles.pokemon}>
                  <View style={styles.pokemonInfo}>
                    <Text style={styles.number}>
                      {formatPokemonId(pokemon.id)}
                    </Text>
                    <Text style={styles.number}>{pokemon.name}</Text>
                  </View>

                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: imgUrl }} height={200} width={200}/>
                  </View>
                </View>
              </Card>
            </View>
          );
        })}
      </View>

      <Button onPress={handleLoadMore}>Load more</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    padding: 20,
    gap: 50,
  },
  pokemons: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%"
  },
  pokemon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pokemonInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  number: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textTransform: "capitalize",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  }
});
