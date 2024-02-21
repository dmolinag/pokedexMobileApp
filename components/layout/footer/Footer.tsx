import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Footer = () => {
  const renderYear = new Date().getFullYear();
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Derechos de imagen para Nintendo & The Pokemon Company
      </Text>
      <Text style={styles.footerText}>Datos obtenidos de API - pokeapi.co</Text>
      <Text style={styles.footerText}>Pokemon Company &copy; {renderYear}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: 10,
  },
  footerText: {
    color: "#333",
    textAlign: 'center',
  },
});
