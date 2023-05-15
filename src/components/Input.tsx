import React, { useRef, useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import Color from '../theme/Colors';
import { Pressable } from 'react-native';
import Icon from './Icon';

type InputProps = TextInputProps & {
  cleanTextBtn?: boolean;
  onChangeValue?: (value: string) => {};
  value?: any;
  input?: TextInputProps;
  style?: ViewStyle;
};
const Input = (props: InputProps) => {
  //const [showCleanText,setShowCleanText] = useState(false)
  const [txtIpt, setTxtIpt] = useState('')
  const {
    onChangeValue,
    value = '',
    input = {},
    style = {},
    cleanTextBtn,
  } = props;
  console.log(txtIpt);
  
  const handleCleanText = () => {
    setTxtIpt('')
  };
  return (
    <View style={[styles.input, style]}>
      <TextInput
        value={txtIpt}
        style={styles.txtInput}
        {...input}
        cursorColor={Color.primary}
        onChangeText={(value) => setTxtIpt(value)}
      />
      {cleanTextBtn && !!txtIpt && (
        <Pressable onPress={handleCleanText}>
          <Icon type="AntDesign" name="closecircle" size={20} color="#ccc" />
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

export default Input;
