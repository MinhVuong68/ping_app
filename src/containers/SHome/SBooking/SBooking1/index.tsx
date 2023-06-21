import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors, Fonts, Layout } from '../../../../theme';
import { Header, Icon, Input, InputAddressAutoComplete } from '../../../../components';
import Button from '../../../SIntro/components/Button';
import { navigate } from '../../../../navigators/utils';

const WIDTH_SCREEN = Dimensions.get('window').width;

export type CoordinateType = {
  latitude: number,
  longitude: number
}

export type AddressType = {
  address: string,
  coordinates: CoordinateType
}


const SBooking1 = () => {
  const currentUser = useSelector((state: any) => state.user);

  //Information of the sending point
  const [addressSender,setAddressSender] = useState<AddressType|undefined>(undefined)
  const [nameSender, setNameSender] = useState(currentUser.name);
  const [phoneContactSender,setPhoneContactSender] = useState(currentUser.phoneContact)

  //Information of the receiving point
  const [addressReceiver,setAddressReceiver] = useState<AddressType|undefined>(undefined)
  const [nameReceiver, setNameReceiver] = useState('');
  const [phoneContactReceiver,setPhoneContactReceiver] = useState('')
  

  console.log('sender',addressSender);
  
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
            <Input label="Số điện thoại người gửi:"
              value={phoneContactSender}
              setValue={setPhoneContactSender}
              validation={{
                match: /^[0-9]{10}$/,
                require: 'Số điện thoại không được để trống',
                role: 'Số điện thoại bao gồm 9 số và bắt đầu bằng số 0',
              }}
            />
            {/* <Input label="Địa chỉ:" style={{}}/> */}
            <InputAddressAutoComplete label="Địa chỉ:" setValue={setAddressSender} value={addressSender?.address}/>
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
            <Input label="Số điện thoại người nhận:"
              value={phoneContactReceiver}
              setValue={setPhoneContactReceiver}
              validation={{
                match: /^[0-9]{10}$/,
                require: 'Số điện thoại không được để trống',
                role: 'Số điện thoại bao gồm 9 số và bắt đầu bằng số 0',
              }}
            />
            {/* <Input label="Địa chỉ:" /> */}
            <InputAddressAutoComplete label="Địa chỉ:"/>
          </View>
          <View style={Layout.rowCenter}>
            <Button
              title="Tiếp tục"
              onPress={() => {
                navigate('SBooking2');
              }}
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
