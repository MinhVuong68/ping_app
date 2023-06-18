import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Button from '../SIntro/components/Button';
import { navigate } from '../../navigators/utils';
import { Colors, Layout } from '../../theme';

const WIDTH_SCREEN = Dimensions.get('window').width;
const SHome = () => {
  return (
    <View style={[Layout.colVCenter, styles.container]}>
        <View
          style={{
            width: WIDTH_SCREEN * 0.9,
            height: 200,
            backgroundColor: '#ccc',
            marginBottom: 12,
          }}></View>

      <View
        style={{
          width: WIDTH_SCREEN * 0.9,
          height: 200,
          backgroundColor: '#ccc',
          marginBottom: 12,
        }}></View>
      <View
        style={{
          width: WIDTH_SCREEN * 0.9,
          height: 200,
          backgroundColor: '#ccc',
          marginBottom: 12,
        }}></View>

      <Button
        title="Lên đơn hàng"
        onPress={() => {
          navigate('SBooking1');
        }}
        style={{ backgroundColor: Colors.primary, marginBottom: 15 }}
        styleTitle={{ color: Colors.white }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default SHome;
