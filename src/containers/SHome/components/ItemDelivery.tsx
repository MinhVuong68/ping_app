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
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={() => navigate('SOrderResult')}>
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
