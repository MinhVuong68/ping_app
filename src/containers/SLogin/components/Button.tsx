import React from 'react';
import { TouchableOpacity } from 'react-native';

import Color from '../../../theme/Colors';
import { Icon } from '../../../components';
import { StyleSheet } from 'react-native';

const Button = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.btn}>
      <Icon type="AntDesign" name="arrowright" size={22} color={Color.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
