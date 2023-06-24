import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../theme';
import Icon from './Icon';

const NoDriver = () => {
  return (
    <View style={[Layout.full, styles.container]}>
      <Icon
        type="MaterialIcons"
        name="person-search"
        size={200}
        color="#D9DADC"
      />
      <Text style={Fonts.textLargeBold}>
        Không tìm thấy nhân viên giao hàng thích hợp
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    //textAlign: 'center',
  },
});

export default NoDriver;
