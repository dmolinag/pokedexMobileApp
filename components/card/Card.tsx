import React from "react";
import { View, StyleSheet } from "react-native";

interface CardProps {
  bgdColor?: string;
  children: React.ReactElement | undefined;
}

const Card: React.FC<CardProps> = ({ bgdColor, children }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgdColor, borderColor: bgdColor }]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 5,
  },
});

export default Card;
