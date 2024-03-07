import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { InputComp } from "../../input";
import { useDebounce } from "../../../customHooks";

export const SearchByName = () => {
  const { queryByName, queryLoading } = useDebounce();

  const handleSearch = (value: string) => {
    queryByName(value);
  };

  const isDarkMode = useColorScheme() === "dark";
  let textColor = "#444";

  if (isDarkMode) {
    textColor = "#fff";
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: textColor }]}>Search by name</Text>
      <InputComp onChange={handleSearch} isLoading={queryLoading} />
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
});
