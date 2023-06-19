import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { Fonts, Layout } from '../../../theme';

const NotOrderAvailable = () => {
  return (
    <View style={[Layout.full, styles.container]}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/not-order-available.png')}
      />
      <Text style={Fonts.textRegularBold}>Bạn chưa có đơn hàng nào</Text>
      <Text style={{ textAlign: 'center' }}>
        Bắt đầu đơn đặt hàng đầu tiên của mình và theo dõi tại đây bạn nhé !
      </Text>
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
