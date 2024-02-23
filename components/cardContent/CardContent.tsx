import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { PokemonObj } from "../../utils";
import { formatPokemonId } from "../../utils/pokemonFunctions";
import { PokemonBadgeType } from "../pokemonBadgeType/PokemonBadgeType";

interface CardProps {
  type: CardType;
  pokemon: PokemonObj;
  openModal?: () => void;
  openPokemonTypeModal?: (type: string) => void;
  favPokemons?: number[];
  onSetFavorites?: (id: number) => void;
  onRemoveFavorites?: (id: number) => void;
}

type CardType = "horizontal" | "vertical";

export const CardContent: React.FC<CardProps> = ({ pokemon }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
  return (
    <View style={styles.container}>
      <View style={styles.pokemonContainer}>
        <View style={styles.pokemonContainerInfo}>
          <Text style={styles.number}>{formatPokemonId(pokemon.id)}</Text>
          <Text style={styles.number}>{pokemon.name}</Text>
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.info}>
            {pokemon.types.map(({ type }) => (
              <PokemonBadgeType key={type.name} type={type.name} />
            ))}
          </View>
          <View style={styles.characteristicsContainer}>
            <View style={styles.characteristics}>
              <Text style={styles.value}>{pokemon.height}m</Text>
              <Text style={styles.text}>Height</Text>
            </View>
            <View style={styles.characteristics}>
              <Text style={styles.value}>{pokemon.weight}kg</Text>
              <Text style={styles.text}>Weight</Text>
            </View>
          </View>
        </View>
      </View>

      <Image style={styles.image} source={{ uri: imgUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pokemonContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    gap: 20,
    alignItems: "center",
  },
  pokemonContainerInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  containerInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: "60%",
    height: "60%",
    margin: -20,
    padding: 0,
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
  characteristicsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  characteristics: {
    display: "flex",
    alignItems: "center",
  },
  value: { 
    color: "#fff", 
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  text: {
    color: "#fff", 
  },
});


