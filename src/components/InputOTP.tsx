import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Layout } from '../theme';
import Color from '../theme/Colors';
import { updateOTP } from '../redux/slices/otpSlice';

const InputOTP = () => {
  const dispatch = useDispatch();
  const firstOTPRef = useRef<TextInput>(null);
  const secondOTPRef = useRef<TextInput>(null);
  const thirdOTPRef = useRef<TextInput>(null);
  const fourOTPRef = useRef<TextInput>(null);
  const fiveOTPRef = useRef<TextInput>(null);
  const sixOTPRef = useRef<TextInput>(null);

  const otp: string[] = [];

  const handleOTP = () => {
    const otpString = otp.join('');
    //console.log(otpString);
    dispatch(updateOTP(otpString));
  };

  return (
    <View style={Layout.row}>
      <TextInput
        //value={firstOTP}
        cursorColor={Color.primary}
        autoFocus
        ref={firstOTPRef}
        keyboardType="numeric"
        maxLength={1}
        style={[styles.otp]}
        onChangeText={text => {
          otp[0] = text;
          handleOTP();
          if (text !== '') {
            secondOTPRef.current?.focus();
          }
        }}
      />
      <TextInput
        //value={secondOTP}
        cursorColor={Color.primary}
        ref={secondOTPRef}
        keyboardType="numeric"
        maxLength={1}
        style={[styles.otp]}
        onChangeText={text => {
          otp[1] = text;
          handleOTP();
          if (text !== '') {
            thirdOTPRef.current?.focus();
          }
        }}
      />
      <TextInput
        //value={thirdOTP}
        cursorColor={Color.primary}
        ref={thirdOTPRef}
        keyboardType="numeric"
        maxLength={1}
        style={[styles.otp]}
        onChangeText={text => {
          otp[2] = text;
          handleOTP();
          if (text !== '') {
            fourOTPRef.current?.focus();
          }
        }}
      />
      <TextInput
        //value={fourOTP}
        cursorColor={Color.primary}
        ref={fourOTPRef}
        keyboardType="numeric"
        maxLength={1}
        style={[styles.otp]}
        onChangeText={text => {
          otp[3] = text;
          handleOTP();
          if (text !== '') {
            fiveOTPRef.current?.focus();
          }
        }}
      />
      <TextInput
        //value={fiveOTP}
        cursorColor={Color.primary}
        ref={fiveOTPRef}
        keyboardType="numeric"
        maxLength={1}
        style={[styles.otp]}
        onChangeText={text => {
          otp[4] = text;
          handleOTP();
          if (text !== '') {
            sixOTPRef.current?.focus();
          }
        }}
      />
      <TextInput
        //value={sixOTP}
        cursorColor={Color.primary}
        ref={sixOTPRef}
        keyboardType="numeric"
        maxLength={1}
        style={[styles.otp]}
        onChangeText={text => {
          otp[5] = text;
          handleOTP();
          if (text !== '') {
            //handleOTP()
          }
        }}
      />
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
    color: Color.primary,
  },
});

export default InputOTP;
