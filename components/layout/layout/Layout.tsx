import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
