import { useState } from "react";
import { Card, Button } from "../../../components";
import { useListPokemon } from "../../../customHooks/useListPokemon";
import { PokemonObj } from "../../../utils";
import { POKEMONS_PER_PAGE } from "../../../utils/constants";
import {
  formatPokemonId,
  getPokemonColor,
} from "../../../utils/pokemonFunctions";
import { StyleSheet, View, Text, Image } from "react-native";

export const PokemonList = () => {
  const { queryPokemons, pokemonsList } = useListPokemon();
  // const { queryPokemonsByType } = useListPokemonByType();

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

    // if (!filtered) {
    queryPokemons(page);
    // } else {
    // 	queryPokemonsByType(pokemonType, POKEMONS_PER_PAGE * nextPage);
    // }
    setPage(nextPage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pokemons}>
        {pokemonsList.map((pokemon: PokemonObj) => {
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
                    <Image style={styles.image} source={{ uri: imgUrl }} />
                  </View>
                </View>
              </Card>
            </View>
          );
        })}
      </View>

      <Button onPress={handleLoadMore}>
        <Text style={styles.buttonText}>Load more</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    padding: 40,
    gap: 10,
  },
  pokemons: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
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
    height: 200,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
