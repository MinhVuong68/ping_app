import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import Color from '../theme/Colors';

type InputProps = TextInputProps & {
  icon?: any;
  onChangeValue?: (value: string) => {};
  value?: any;
  input?: TextInputProps;
  style?: ViewStyle;
};
const Input = (props: InputProps) => {
  const {
    icon = null,
    onChangeValue,
    value = '',
    input = {},
    style = {},
  } = props;
  return (
    <View style={[styles.input, style]}>
      <TextInput
        style={styles.txtInput}
        {...input}
        cursorColor={Color.primary}
      />
      {!!icon && icon}
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
    borderColor: '#2ecced',
    paddingHorizontal: 10,
    marginVertical: 4,
  },
  txtInput: {
    fontSize: 16,
    width: '90%',
  },
});

export default Input;
