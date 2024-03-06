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
        { backgroundColor: pressed ? "red" : "grey" },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    borderRadius: 8,
    alignItems: "center",
    padding: 5,
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
  }
});
