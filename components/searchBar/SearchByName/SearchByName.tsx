import { StyleSheet, Text, View } from "react-native";
import { InputComp } from "../../input";
import { useDebounce } from "../../../customHooks";

export const SearchByName = () => {
  const { queryByName, queryLoading } = useDebounce();

  const handleSearch = (value: string) => {
    queryByName(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search by name</Text>
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
