import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Colors, Fonts, Layout } from '../../../../theme';
import { Header, Icon, Input, InputPressable } from '../../../../components';
import Button from '../../../SIntro/components/Button';
import { navigate } from '../../../../navigators/utils';
import { setInfoOrder, setIsWho } from '../../../../redux/slices/orderSlice';
import { LocationType } from '../../../../redux/type';

const WIDTH_SCREEN = Dimensions.get('window').width;

export type CoordinateType = {
  latitude: number;
  longitude: number;
};

export type AddressType = {
  address: string;
  coordinate: CoordinateType;
};

const SBooking1 = () => {
  const currentUser = useSelector((state: any) => state.user);

  const order = useSelector((state: any) => state.order);

  useEffect(() => {
    setLocationReceiver(order.locationReceiver);
    setLocationSender(order.locationSender);
  }, []);

  const dispatch = useDispatch();

  //Information of the sending point
  const [locationSender, setLocationSender] = useState<LocationType | null>(
    order.locationSender,
  );
  const [nameSender, setNameSender] = useState(currentUser.name);
  const [phoneContactSender, setPhoneContactSender] = useState(
    currentUser.phoneContact,
  );

  //Information of the receiving point
  const [locationReceiver, setLocationReceiver] = useState<LocationType | null>(
    order.locationReceiver,
  );
  const [nameReceiver, setNameReceiver] = useState('NGuyễn Văn Trinh');
  const [phoneContactReceiver, setPhoneContactReceiver] =
    useState('0325632125');

  //console.log(order);

  const setInfoOrdera = () => {
    dispatch(
      setInfoOrder({
        customerId: currentUser.id,
        nameSender: nameSender,
        phoneSender: phoneContactSender,
        locationSender: order.locationSender,
        nameReceiver: nameReceiver,
        phoneReceiver: phoneContactReceiver,
        locationReceiver: order.locationReceiver,
      }),
    );
    if (
      order.nameSender === '' ||
      order.phoneSender ==='' ||
      order.locationSender.address === '' ||
      order.nameReceiver === '' ||
      order.phoneReceiver === '' ||
      order.locationReceiver.address == ''
      ) {
        Alert.alert("Vui lòng nhập đầy đủ thông tin")
        return ;
      }
    navigate('SBooking2')
  };

  return (
    <>
      <Header title="Thông tin đơn hàng" />
      <ScrollView>
        <View style={[Layout.colVCenter]}>
          <View style={[styles.viewChooseAddess]}>
            <View style={[Layout.row, { marginBottom: 10 }]}>
              <Icon
                type="FontAwesome"
                name="bullseye"
                color="green"
                size={20}
              />
              <Text style={[Fonts.textRegularBold, { marginLeft: 10 }]}>
                Địa điểm nhận hàng
              </Text>
            </View>
            <Input
              label="Họ tên người gửi:"
              value={nameSender}
              setValue={setNameSender}
              validation={{
                match: /^[\p{L} ]{2,}$/u,
                require: 'Tên không được để trống',
                role: 'Tên phải có ít nhất 2 ký tự',
              }}
            />
            <Input
              label="Số điện thoại người gửi:"
              value={phoneContactSender}
              setValue={setPhoneContactSender}
              validation={{
                match: /^[0-9]{10}$/,
                require: 'Số điện thoại không được để trống',
                role: 'Số điện thoại bao gồm 9 số và bắt đầu bằng số 0',
              }}
            />
            <InputPressable
              label="Địa chỉ"
              onPress={() => {
                dispatch(setIsWho({ isWho: 'sender' }));
                navigate('SEnterLocation');
              }}
              value={order.locationSender.address}
            />
          </View>
          <View style={[styles.viewChooseAddess]}>
            <View style={[Layout.row, { marginBottom: 10 }]}>
              <Icon
                type="Entypo"
                name="location-pin"
                color={Colors.primary}
                size={20}
              />
              <Text style={[Fonts.textRegularBold, { marginLeft: 10 }]}>
                Địa điểm giao hàng
              </Text>
            </View>
            <Input
              label="Họ tên người nhận:"
              value={nameReceiver}
              setValue={setNameReceiver}
              validation={{
                match: /^[\p{L} ]{2,}$/u,
                require: 'Tên không được để trống',
                role: 'Tên phải có ít nhất 2 ký tự',
              }}
            />
            <Input
              label="Số điện thoại người nhận:"
              value={phoneContactReceiver}
              setValue={setPhoneContactReceiver}
              validation={{
                match: /^[0-9]{10}$/,
                require: 'Số điện thoại không được để trống',
                role: 'Số điện thoại bao gồm 9 số và bắt đầu bằng số 0',
              }}
            />
            <InputPressable
              label="Địa chỉ"
              onPress={() => {
                dispatch(setIsWho({ isWho: 'receiver' }));
                navigate('SEnterLocation');
              }}
              value={order.locationReceiver.address}
            />
          </View>
          <View style={Layout.rowCenter}>
            <Button
              title="Tiếp tục"
              onPress={setInfoOrdera}
              style={{ backgroundColor: Colors.primary, marginBottom: 15 }}
              styleTitle={{ color: Colors.white }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  viewChooseAddess: {
    width: WIDTH_SCREEN * 0.9,
    minHeight: 100,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: Colors.borderBottom,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: Colors.borderBottom,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
  },
});

export default SBooking1;
