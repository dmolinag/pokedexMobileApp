import React from "react";
import { View, StyleSheet } from "react-native";

interface CardProps {
  bgdColor?: string;
  borderColor: string;
  children: React.ReactElement | undefined;
}

export const Card: React.FC<CardProps> = ({
  bgdColor,
  borderColor,
  children,
}) => {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: bgdColor, borderColor: borderColor },
      ]}
    >
      {children}
    </View>
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
