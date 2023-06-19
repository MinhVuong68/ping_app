import React, { useEffect, useRef, useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  Text,
} from 'react-native';

import Color from '../theme/Colors';
import { Pressable } from 'react-native';
import Icon from './Icon';
import { Colors } from '../theme';

type InputProps = TextInputProps & {
  label?: string;
  cleanTextBtn?: boolean;
  validation?: any;
  onChangeValue?: (value: string) => {};
  value?: string;
  input?: TextInputProps;
  style?: ViewStyle;
  setValue?: any;
  setFormError?: any;
};
const Input = (props: InputProps) => {
  const {
    label = '',
    validation = {},
    onChangeValue,
    value = '',
    input = {},
    style = {},
    cleanTextBtn,
    setValue = (v: string) => {},
    setFormError = (b: boolean) => {},
  } = props;
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
      setFormError(false);
    } else if (!validation?.match?.test(txtIpt)) {
      setFormError(false);
      setError(validation.role);
    } else {
      setValue(txtIpt);
      setFormError(true);
      setError('');
    }
  }, [txtIpt]);
  const handleCleanText = () => {
    setTxtIpt('');
  };
  const handleOnChangText = (value: string) => {
    setTxtIpt(value);
  };

  return (
    <>
      {label && <Text>{label}</Text>}
      <View style={[styles.input, style]}>
        <TextInput
          value={txtIpt}
          style={styles.txtInput}
          {...input}
          cursorColor={Color.primary}
          onChangeText={handleOnChangText}
        />
        {cleanTextBtn && !!txtIpt && (
          <Pressable onPress={handleCleanText}>
            <Icon type="AntDesign" name="closecircle" size={20} color="#ccc" />
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
    borderColor: Colors.borderIpt,
    paddingHorizontal: 10,
    marginVertical: 4,
    marginBottom: 5,
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

export default Input;
