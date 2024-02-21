import { StyleSheet, Text, View } from "react-native";
import { PokemonObj } from "../../utils";
import { useGetPokemon } from "../../customHooks/useGetPokemon";
import { getPokemonColor } from "../../utils/pokemonFunctions";
import Card from "../../components/card/Card";
import CardContent from "../../components/cardContent/CardContent";

export const INITIAL_POKEMON: PokemonObj = {
  id: 0,
  name: "Pokemon",
  types: [{ type: { name: "bug" } }],
  weight: 1,
  height: 1,
  stats: [{ base_stat: 1, stat: { name: "test" } }],
};

export const Home: React.FC = () => {
  const MAX_POKEMON = 150;
  const randomNumber: number = Math.floor(Math.random() * MAX_POKEMON);
  const { randomPokemon } = useGetPokemon(randomNumber);

  return (
    <View style={styles.home}>
      <Card bgdColor={getPokemonColor(randomPokemon).color}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Your today's random Pokemon is...</Text>
          <CardContent type="horizontal" pokemon={randomPokemon} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 26,
    fontWeight: "700",
    /*text-shadow: 2px 2px 4px $black;*/
  },
  cardContainer: {
    height: 350,
    width: "100%",
  },
});
