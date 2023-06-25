import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components';
import { setTotalPrice } from '../../../redux/slices/orderSlice';

const ItemPayment = () => {
  const order = useSelector((state: any) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalPrice({ totalPrice: order.price - order.discount }));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={Fonts.textLargeBold}>Phí cước:</Text>
        <Text style={Fonts.textLargeBold}>
          {order.price.toLocaleString('vi-VN')} vnđ
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={Fonts.textLargeBold}>Giảm giá:</Text>
        <Text style={Fonts.textLargeBold}>10.000 vnđ</Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderStyle: 'dashed',
          marginBottom: 10,
        }}></View>
      <View style={styles.row}>
        <Text style={Fonts.textLargeBold}>Thanh toán:</Text>
        <Text style={Fonts.textLargeBold}>
          {order.totalPrice.toLocaleString('vi-VN')} vnđ
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ItemPayment;
