import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? "#ddd7d3" : "#fff" },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    borderRadius: 8,
    alignItems: "center",
    padding: 5,
    justifyContent: "center",
    minWidth: 50,
    borderWidth: 2,
    borderColor: '#ddd7d3'
  },
  text: {
    color: "grey",
  },
});
