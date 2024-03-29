import React from "react";
import { POKEMONS_PER_PAGE, pokemonTypes } from "../../../utils";
import { FlatList, StyleSheet, Text, View, useColorScheme } from "react-native";
import { useListPokemon, useListPokemonByType } from "../../../customHooks";
import { Button, PokemonBadgeType } from "../..";

interface SearchBarProp {
  setPage: (page: number) => void;
}

export const SearchByType = ({ setPage }: SearchBarProp) => {
  const [selectedType, setSelectedType] = React.useState<string>("");
  const { queryPokemonsByType } = useListPokemonByType();
  const { queryPokemons } = useListPokemon();

  const isDarkMode = useColorScheme() === "dark";

  let textColor = "#444";

  if (isDarkMode) {
    textColor = "#fff";
  }

  const onSearchByType = async (typeName: any) => {
    setSelectedType(typeName);
    if (typeName && typeName !== selectedType) {
      setPage(1);
      queryPokemonsByType(typeName, POKEMONS_PER_PAGE);
    } else if (!typeName) {
      queryPokemons(0, true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: textColor }]}>Search by type</Text>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <FlatList
          data={pokemonTypes}
          horizontal={true}
          renderItem={({ item }) => (
            <View key={item.name} style={styles.item}>
              <PokemonBadgeType
                type={item.name}
                isButton
                onPress={() => onSearchByType(item.name)}
              />
            </View>
          )}
          ListFooterComponent={
            <Button onPress={() => onSearchByType(undefined)}>Clear</Button>
          }
          data-testid="pokemon-types-list"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    margin: 1,
  },
  item: {
    marginRight: 5,
  },
});
