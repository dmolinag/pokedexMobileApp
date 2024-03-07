import { StyleSheet, Text, View } from "react-native";

interface ModalCompProps {
  value: number;
}

export const Meter = ({ value }: ModalCompProps) => {
  let bgcolor = "green";

  if (value < 30) {
    bgcolor = "red";
  }

  if (value >= 30 && value < 70) {
    bgcolor = "yellow";
  }

  return (
    <View style={styles.container}>
      <View
        style={[styles.stat, { width: `${value}%`, backgroundColor: bgcolor }]}
      >
        <Text />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#fff",
    width: "40%",
    height: "100%",
    borderRadius: 10,
  },
  stat: {
    borderRadius: 10,
  },
});
