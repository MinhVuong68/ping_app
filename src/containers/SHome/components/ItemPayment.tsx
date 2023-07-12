import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../../utils';
import { RootState, useAppDispatch } from '@/redux/store';
import { setTotalPrice } from '@/redux/booking/orderBookingSlice';

interface ItemPaymentProps {
  price?: number;
  discountMoney?: number;
  totalPrice?: number;
}

const ItemPayment = ({
  price = 0,
  discountMoney = 0,
  totalPrice,
}: ItemPaymentProps) => {
  const orderBooking = useSelector((state: RootState) => state.orderBooking.orderBooking);

  const dispatch = useAppDispatch();

  //const ref = useRef(price*order.discount.discountPercentage/100)

  //console.log(order);

  useEffect(() => {
    dispatch(setTotalPrice({ totalPrice: price - discountMoney }));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={Fonts.textLargeBold}>Phí cước:</Text>
        <Text style={Fonts.textLargeBold}>
          {formatCurrency(price)}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={Fonts.textLargeBold}>Giảm giá:</Text>
        <Text style={Fonts.textLargeBold}>
          {formatCurrency(discountMoney)}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderStyle: 'dashed',
          marginBottom: 10,
        }}></View>
      <View style={styles.row}>
        <Text style={Fonts.textLargeBold}>Thanh toán:</Text>
        {!!totalPrice ? (
          <Text style={Fonts.textLargeBold}>
            {formatCurrency(totalPrice)}
          </Text>
        ) : (
          <Text style={Fonts.textLargeBold}>
            {formatCurrency(orderBooking.totalPrice)}
          </Text>
        )}
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
