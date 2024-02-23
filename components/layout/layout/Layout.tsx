import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = ({ children }: any) => {
  return (
    <View>
      <Header />
      {children}
      <Footer />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
