import React, { useMemo } from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

import Color from '../../../theme/Colors';
import { Icon } from '../../../components';
import { Colors } from '../../../theme';

const Button = ({ onPress = () => {}, disable = false, type = '' }) => {
  const customStyle: {
    container?: ViewStyle;
    text?: TextStyle;
  } = useMemo(() => {
    switch (type) {
      case 'disable': {
        return {
          container: {
            backgroundColor: '#ccc',
          },
          text: {
            color: Colors.black,
          },
        };
      }
    }
    return {};
  }, [type]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.btn,customStyle.container]}
      disabled={disable}>
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
  btnDisabled: {
    backgroundColor: Colors.secondary,
  },
});

export default Button;
