import { StyleSheet, Text, View } from "react-native";
import { Card, CardContent } from "../../../components";
import { useGetPokemon } from "../../../customHooks";
import { getPokemonColor } from "../../../utils";

export const Home: React.FC = () => {
  const MAX_POKEMON = 150;
  const randomNumber: number = Math.floor(Math.random() * MAX_POKEMON);
  const { randomPokemon } = useGetPokemon(randomNumber);

  return (
    <View style={styles.home}>
      <Card
        bgdColor={getPokemonColor(randomPokemon).color}
        borderColor={getPokemonColor(randomPokemon).borderColor}
      >
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
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  cardContainer: {
    height: 350,
    width: "100%",
  },
});
