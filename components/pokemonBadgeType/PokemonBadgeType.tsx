import { StyleSheet, Text, View } from "react-native";

import Bug from "../../assets/pokemonTypes/bug.svg";
import Dark from "../../assets/pokemonTypes/dark.svg";
import Dragon from "../../assets/pokemonTypes/dragon.svg";
import Electric from "../../assets/pokemonTypes/electric.svg";
import Fairy from "../../assets/pokemonTypes/fairy.svg";
import Fighting from "../../assets/pokemonTypes/fighting.svg";
import Fire from "../../assets/pokemonTypes/fire.svg";
import Flying from "../../assets/pokemonTypes/flying.svg";
import Ghost from "../../assets/pokemonTypes/ghost.svg";
import Grass from "../../assets/pokemonTypes/grass.svg";
import Ground from "../../assets/pokemonTypes/ground.svg";
import Ice from "../../assets/pokemonTypes/ice.svg";
import Normal from "../../assets/pokemonTypes/normal.svg";
import Poison from "../../assets/pokemonTypes/poison.svg";
import Psychic from "../../assets/pokemonTypes/psychic.svg";
import Rock from "../../assets/pokemonTypes/rock.svg";
import Steel from "../../assets/pokemonTypes/steel.svg";
import Water from "../../assets/pokemonTypes/water.svg";

import { pokemonTypes } from "../../utils/constants";

type PokemonTypeProps = {
  type: string;
};

export const PokemonBadgeType = ({ type }: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypes.filter((item) => item.name === type);

  return (
    <View style={styles.container}>
      {getBadgeImage(name)}
      <Text style={styles.type}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderRadius: 10,
    padding: 5,
    gap: 5,
  },
  type: {
    color: "#fff",
  },
});

const getBadgeImage = (pokemonType: string) => {
  switch (pokemonType) {
    case "bug":
      return <Bug width={15} height={15} />;
    case "dark":
      return <Dark width={15} height={15} />;
    case "dragon":
      return <Dragon width={15} height={15} />;
    case "electric":
      return <Electric width={15} height={15} />;
    case "fairy":
      return <Fairy width={15} height={15} />;
    case "fighting":
      return <Fighting width={15} height={15} />;
    case "fire":
      return <Fire width={15} height={15} />;
    case "flying":
      return <Flying width={15} height={15} />;
    case "ghost":
      return <Ghost width={15} height={15} />;
    case "grass":
      return <Grass width={15} height={15} />;
    case "ground":
      return <Ground width={15} height={15} />;
    case "ice":
      return <Ice width={15} height={15} />;
    case "normal":
      return <Normal width={15} height={15} />;
    case "poison":
      return <Poison width={15} height={15} />;
    case "psychic":
      return <Psychic width={15} height={15} />;
    case "rock":
      return <Rock width={15} height={15} />;
    case "steel":
      return <Steel width={15} height={15} />;
    case "water":
      return <Water width={15} height={15} />;
    default:
      return <Normal width={15} height={15} />;
  }
};
