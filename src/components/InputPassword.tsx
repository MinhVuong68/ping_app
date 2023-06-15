import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
  StyleSheet,
  Pressable,
} from 'react-native';

import Color from '../theme/Colors';
import Icon from './Icon';
import { Colors } from '../theme';

type InputProps = TextInputProps & {
  viewPassword?: boolean;
  validation?: any;
  value?: string;
  onChangeValue?: (v: string) => {};
  input?: TextInputProps;
  style?: ViewStyle;
  setValue?: any;
  setFormError?: any;
};

const InputPassword = (props: InputProps) => {
  const {
    viewPassword = false,
    value = '',
    onChangeValue,
    input = {},
    style = {},
    validation = {},
    setValue = (v: string) => {},
    setFormError = (b: boolean) => {},
  } = props;
  const [showPassword, setShowPassword] = useState(true);
  const [txtIpt, setTxtIpt] = useState<string | undefined>(value);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (txtIpt === '') {
      setError(validation.require);
      setValue(txtIpt);
      setFormError(false);
    } else if (!validation?.match?.test(txtIpt)) {
      setFormError(false);
      setError(validation.role);
      setValue(txtIpt);
    } else {
      setValue(txtIpt);
      setFormError(true);
      setError('');
    }
  }, [txtIpt]);
  const handleOnChangText = (value: string) => {
    setTxtIpt(value);
  };
  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <>
      <View style={[styles.input, style]}>
        <TextInput
          value={txtIpt}
          secureTextEntry={showPassword}
          style={styles.txtInput}
          {...input}
          cursorColor={Color.primary}
          onChangeText={handleOnChangText}
        />
        {viewPassword && (
          <Pressable onPress={handleShowPassword}>
            {showPassword ? (
              <Icon type="Entypo" name="eye" size={22} color="#ccc" />
            ) : (
              <Icon type="Entypo" name="eye-with-line" size={22} color="#ccc" />
            )}
          </Pressable>
        )}
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </>
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
  error: {
    fontSize: 14,
    color: Colors.error,
  },
});

export default InputPassword;
