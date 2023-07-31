import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Colors, Fonts, Layout } from '../../../theme';
import { Icon } from '../../../components';
import { callNumber } from '../../../utils/call';
import { navigate } from '../../../navigators/utils';
import { BOOKING_STATE_COMPLETE } from '@/configs/constants';

const WIDTH_SCREEN = Dimensions.get('window').width;

type CardContactDeliverProps = {
  driverId: number
  linkAvatar: string;
  name: string;
  licensePlate: string;
  reviewRate: number;
  status?: any;
  phoneContact?: string;
};

const CardContactDeliver = ({
  driverId,
  linkAvatar,
  name,
  licensePlate,
  reviewRate,
  status,
  phoneContact = '',
}: CardContactDeliverProps) => {
  return (
    <View style={styles.container}>
      <View style={Layout.row}>
        {linkAvatar && (
          <Image
            source={{
              uri: linkAvatar,
            }}
            style={styles.image}
          />
        )}
        <View style={[Layout.col, { marginLeft: 10 }]}>
          <Text style={Fonts.textRegularBold}>{name}</Text>
          <Text>Biển số: {licensePlate}</Text>
          <Text>Đánh giá: {reviewRate}/5</Text>
        </View>
        {status !== BOOKING_STATE_COMPLETE && (
          <View style={[Layout.full, Layout.rowEnd]}>
            <TouchableOpacity style={styles.wrapperIcon} onPress={() => navigate('SChat',{
              driverId: driverId,
              driverName: name,
            })}>
              <Icon
                type="MaterialCommunityIcons"
                name="chat-processing-outline"
                size={30}
                color={Colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => callNumber(phoneContact)}>
              <Icon
                type="MaterialCommunityIcons"
                name="phone"
                size={30}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    width: WIDTH_SCREEN * 0.9,
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  wrapperIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5,
  },
});

export default CardContactDeliver;
