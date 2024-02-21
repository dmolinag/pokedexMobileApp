import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../../buttons/Button";
import Icon from "react-native-vector-icons/FontAwesome";

export const Header = () => {
  const handleSubmit = () => {
    return;
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/logo-pokemon.png")}
        style={styles.logo}
      />
      <Button onPress={handleSubmit}>
        <Icon name="user" size={30} color="#900" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: '25%',
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "50%",
    height: "80%",
  },
});
