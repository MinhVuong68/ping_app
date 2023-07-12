import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors, Fonts, Layout } from '../../../theme';
import { navigate } from '../../../navigators/utils';
import { useDispatch, useSelector } from 'react-redux';
import { calcDistance2Location } from '../../../utils/map';
import { convertMeterToKilometer } from '../../../utils';
import { setDriver, setPrice } from '@/redux/booking/orderBookingSlice';
import { RootState, useAppDispatch } from '@/redux/store';

const WIDTH_SCREEN = Dimensions.get('window').width;

export type ItemDeliveryProps = {
  id: number;
  imageUri: string;
  name: string;
  carNumberPlate: string;
  vote: number;
  distance: number;
};

const ItemDelivery = ({
  id,
  imageUri,
  name,
  carNumberPlate,
  vote,
  distance,
}: ItemDeliveryProps) => {
  const dispatch = useAppDispatch();

  const orderBooking = useSelector((state: RootState) => state.orderBooking.orderBooking);

  const handleChooseDriver = async () => {
    dispatch(setDriver({ driverId: id }));

    const coordinateSender =
      orderBooking.locationSender.coordinate.latitude +
      ',' +
      orderBooking.locationSender.coordinate.longitude;
    const coordinateReceiver =
      orderBooking.locationReceiver.coordinate.latitude +
      ',' +
      orderBooking.locationReceiver.coordinate.longitude;

      const rs:any = await calcDistance2Location(coordinateSender,coordinateReceiver)
      const distanceKm = convertMeterToKilometer(rs?.result.routeRows[0].elements[0]?.distance?.value)

      let price = distanceKm * 500000
      if(orderBooking.rollBack) {
        price = price + price*20/100
      }

      dispatch(setPrice({price: price}))

    navigate('SOrderResult');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={handleChooseDriver}>
      <View style={Layout.row}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
        />
        <View style={[Layout.col, { marginLeft: 10 }]}>
          <Text style={Fonts.textRegularBold}>{name}</Text>
          <Text>Biển số: {carNumberPlate}</Text>
          <Text>Đánh giá: {vote}/5</Text>
          <Text>Khoảng cách: {distance} Km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    width: WIDTH_SCREEN * 0.9,
    borderColor: Colors.borderBottom,
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
});

export default ItemDelivery;
