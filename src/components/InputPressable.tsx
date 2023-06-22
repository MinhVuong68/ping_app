import React from 'react';
import { Pressable, Text, View, StyleSheet, ViewStyle } from 'react-native';

import { Colors, Fonts } from '../theme';
import { AddressType } from '../containers/SHome/SBooking/SBooking1';

type InputProps = {
  label?: string;
  value?: string;
  style?: ViewStyle;
  onPress?: any
};

const InputPressable = ({
  label = '',
  value = '',
  style = {},
  onPress = () => {}
}: InputProps) => {
  return (
    <View>
      <Text>{label}:</Text>
      <Pressable style={styles.input} onPress={onPress}>
        <Text style={Fonts.textRegular}>{value}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.borderIpt,
    paddingHorizontal: 10,
    marginVertical: 4,
    marginBottom: 5,
    height: 50,
  },
});

export default InputPressable;
