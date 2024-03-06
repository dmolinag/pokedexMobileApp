import React from "react";
import { SearchByType } from "./SearchByType/SearchByType";
// import { SearchByName } from "./SearchByName/SearchByName";
import { StyleSheet, View } from "react-native";

interface SearchBarProp {
  setPage: (page: number) => void;
}

export const SearchBar = ({ setPage }: SearchBarProp) => {
  return (
    <View style={styles.searchBar}>
      <SearchByType setPage={setPage} />

      {/* <SearchByName /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    display: "flex",
    flexDirection: "column",
    margin: 1,
    gap: 2,
  },
});
