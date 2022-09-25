import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ButtonProps {
  onPress: () => void;
  buttonText: string;
  customStyle?: object;
}

export const Button = ({onPress, buttonText, customStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityRole={'button'}
      onPress={onPress}
      style={{...styles.buttonContainer, ...customStyle}}>
      <Text
        // testId="buttonText"
        accessibilityRole={'text'}
        style={styles.buttonText}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};
