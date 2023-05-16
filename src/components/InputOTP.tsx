import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, View } from 'react-native';

import { Layout } from '../theme';

const InputOTP = () => {
  return (
    <View style={Layout.row}>
      <TextInput keyboardType="numeric" maxLength={1} style={[styles.otp]} />
      <TextInput keyboardType="numeric" maxLength={1} style={[styles.otp]} />
      <TextInput keyboardType="numeric" maxLength={1} style={[styles.otp]} />
      <TextInput keyboardType="numeric" maxLength={1} style={[styles.otp]} />
      <TextInput keyboardType="numeric" maxLength={1} style={[styles.otp]} />
      <TextInput keyboardType="numeric" maxLength={1} style={[styles.otp]} />
    </View>
  );
};

const styles = StyleSheet.create({
  otp: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: 35,
    height: 60,
    fontSize: 25,
    textAlign: 'center',
    marginHorizontal: 5,
  },
});

export default InputOTP;
