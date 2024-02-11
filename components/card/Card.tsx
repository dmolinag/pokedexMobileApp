import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';

interface CardProps {
	bgdColor?: string;
	children: React.ReactElement | undefined;
}

const Card: React.FC<CardProps> = ({
    bgdColor,
  children,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: bgdColor }]}>
    {children}
</View>
  );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 10
      }
});

export default Card;