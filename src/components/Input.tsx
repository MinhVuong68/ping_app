import React, { useRef, useState } from 'react';
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
  cleanTextBtn?: boolean;
  onChangeValue?: (value: string) => {};
  value?: any;
  input?: TextInputProps;
  style?: ViewStyle;
  error?: string;
};
const Input = (props: InputProps) => {
  //const [showCleanText,setShowCleanText] = useState(false)
  const [txtIpt, setTxtIpt] = useState('');
  const {
    onChangeValue,
    value = '',
    input = {},
    style = {},
    error = '',
    cleanTextBtn,
  } = props;
  console.log(txtIpt);

  const handleCleanText = () => {
    setTxtIpt('');
  };
  return (
    <>
      <View style={[styles.input, style]}>
        <TextInput
          value={txtIpt}
          style={styles.txtInput}
          {...input}
          cursorColor={Color.primary}
          onChangeText={value => setTxtIpt(value)}
        />
        {cleanTextBtn && !!txtIpt && (
          <Pressable onPress={handleCleanText}>
            <Icon type="AntDesign" name="closecircle" size={20} color="#ccc" />
          </Pressable>
        )}
      </View>
      <Text style={styles.error}>Số điện thoại không hợp lệ</Text>
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
    color: Colors.error
  }
});

export default Input;
