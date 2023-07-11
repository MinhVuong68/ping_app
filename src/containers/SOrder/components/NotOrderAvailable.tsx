import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { Fonts, Images, Layout } from '@/theme';

const NotOrderAvailable = () => {
  return (
    <View style={[Layout.full, styles.container]}>
      <Image
        style={styles.img}
        source={Images.notOrder}
      />
      <Text style={Fonts.textLargeBold}>Chưa có đơn hàng ở trạng thái này</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default NotOrderAvailable;
