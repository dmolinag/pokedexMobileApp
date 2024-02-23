import React from "react";
import { useColorScheme } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Footer = () => {
  const isDarkMode = useColorScheme() === "dark";
  const renderYear = new Date().getFullYear();

  const textStyle = {
    color: !isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.footer}>
      <Text style={[textStyle, styles.footerText]}>
        Derechos de imagen para Nintendo & The Pokemon Company
      </Text>
      <Text style={[textStyle, styles.footerText]}>Datos obtenidos de API - pokeapi.co</Text>
      <Text style={[textStyle, styles.footerText]}>Pokemon Company &copy; {renderYear}</Text>
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
    textAlign: 'center',
  },
});
