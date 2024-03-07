import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  Pressable,
} from "react-native";
import {
  INITIAL_POKEMON,
  useListPokemon,
  useListPokemonByType,
} from "../../../customHooks";
import {
  POKEMONS_PER_PAGE,
  PokemonObj,
  formatPokemonId,
  getPokemonColor,
  usePokemonsListContext,
} from "../../../utils";
import { Button, Card, SearchBar } from "../../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import { ModalComp } from "../../../components/modal";

export const PokemonList = () => {
  const { pokemonList, filtered, pokemonType } = usePokemonsListContext();
  const { queryPokemons } = useListPokemon();
  const { queryPokemonsByType } = useListPokemonByType();

  const [isPokemoninfoModalOpen, setIsPokemonInfoModalOpen] =
    useState<boolean>(false);
  // const [isPokemonTypeModalOpen, setIsPokemonTypeModalOpen] =
  // 	useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonObj>(INITIAL_POKEMON);
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

  const handleOpenModal = (pokemon: PokemonObj) => {
    setIsPokemonInfoModalOpen(true);
    setSelectedPokemon(pokemon);
  };

  return (
    <View style={styles.container}>
      <View>
        <ModalComp isVisible={isPokemoninfoModalOpen}>
          <View style={styles.content}>
            <View>
              <Text style={styles.number}>{selectedPokemon.name}</Text>
            </View>
            <View style={styles.stats}>
              {selectedPokemon.stats.map((item) => {
                const pokemonStat =
                  item.stat.name.charAt(0).toUpperCase() +
                  item.stat.name.slice(1);

                return (
                  <View style={styles.meterContainer} key={item.stat.name}>
                    <Text style={styles.text}>{pokemonStat}</Text>
                    <Text style={styles.text}>{item.base_stat}</Text>
                    {/* <Meter value={item.base_stat} aria-label={item.stat.name}>
                      {({ percentage }) => (
                        <div className="bar">
                          <div
                            className={`fill ${styles.meter}`}
                            style={{ width: percentage + "%" }}
                          />
                        </div>
                      )}
                    </Meter> */}
                  </View>
                );
              })}
            </View>
            <Button onPress={() => setIsPokemonInfoModalOpen(false)}>
              <Text>close</Text>
            </Button>
          </View>
        </ModalComp>
      </View>

      <SearchBar setPage={setPage} />
      <View style={styles.pokemonsList}>
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
                    <View style={styles.pokemonInfoHeader}>
                      <Text style={styles.number}>
                        {formatPokemonId(pokemon.id)}
                      </Text>

                      <View style={styles.iconsContainer}>
                        <Icon
                          style={styles.icon}
                          name="info-circle"
                          size={30}
                          color="grey"
                          onPress={() => handleOpenModal(pokemon)}
                        />
                        <Icon
                          style={styles.icon}
                          name="heart"
                          size={30}
                          color="#900"
                        />
                        <Icon
                          style={styles.icon}
                          name="heart-o"
                          size={30}
                          color="#900"
                        />
                      </View>
                    </View>

                    <Text style={styles.number}>{pokemon.name}</Text>
                  </View>

                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={{ uri: imgUrl }}
                      height={200}
                      width={200}
                    />
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
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    padding: 20,
    gap: 50,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  stats: {},
  meterContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    width: "100%",
    justifyContent: 'space-between'
  },
  text: {
    color: "#fff",
  },
  pokemonsList: {
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
    width: "100%",
  },
  pokemonInfoHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
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
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    alignContent: "flex-end",
    position: "absolute",
    right: 0,
    borderRightColor: "black",
    borderWidth: 1,
  },
  icon: {
    display: "flex",
    alignSelf: "flex-end",
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
  },
});
