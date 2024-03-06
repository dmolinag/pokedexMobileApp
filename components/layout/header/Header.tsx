import { StyleSheet, View, useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PokemonLogo from "../../../assets/logo-pokemon.svg";
import PokemonLogoBlack from "../../../assets/logo-pokemon-black.svg";
import { Button } from "../../buttons";

export const Header = () => {
  const isDarkMode = useColorScheme() === "dark";

  const pokemonLogo = () => {
    if (isDarkMode) {
      return <PokemonLogo style={styles.logo} />;
    }

    return <PokemonLogoBlack style={styles.logo} />;
  };

  const handleSubmit = () => {
    return;
  };
  return (
    <View style={styles.container}>
      {pokemonLogo()}
      <Button onPress={handleSubmit}>
        <Icon name="user" size={30} color="#900" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "60%",
    height: "100%",
  },
});
