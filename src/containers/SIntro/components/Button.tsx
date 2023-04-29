import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface IbuttonProps {
  title: string;
  onPress: () => any;
  style?: any;
  styleTitle?: any
}

const Button = ({ title = '', onPress, style = {}, styleTitle= {} }: IbuttonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,style]} activeOpacity={0.8}>
      <Text style={[styles.text,styleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '58%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Button;
