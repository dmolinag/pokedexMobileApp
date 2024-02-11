// CustomButton.tsx
import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {backgroundColor: pressed ? 'red': 'grey'},
      ]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
	borderRadius: 8,
	color: '#0000',
    height: 50,
    width: 50, 
    alignItems: 'center',
    padding: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
