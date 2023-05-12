import React, { useState } from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
  StyleSheet,
  Pressable,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Color from '../theme/Colors';

type InputProps = TextInputProps & {
  viewPassword?: boolean;
  onChangeValue?: (v: string) => {};
  input?: TextInputProps;
  style?: ViewStyle;
};

const InputPassword = (props: InputProps) => {
  const { viewPassword = false, onChangeValue, input = {}, style = {} } = props;
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <View style={[styles.input, style]}>
      <TextInput
        secureTextEntry={showPassword}
        style={styles.txtInput}
        {...input}
        cursorColor={Color.primary}
      />
      {viewPassword && (
        <Pressable onPress={handleShowPassword}>
          {showPassword ? (
            <Entypo name="eye" size={22} color="#ccc" />
          ) : (
            <Entypo name="eye-with-line" size={22} color="#ccc" />
          )}
        </Pressable>
      )}
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

export default InputPassword;
