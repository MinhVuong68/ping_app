import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';

import { Colors, Fonts, Layout } from '../../../../theme';
import { Header, Icon, Input } from '../../../../components';
import Button from '../../../SIntro/components/Button';
import { navigate } from '../../../../navigators/utils';

const WIDTH_SCREEN = Dimensions.get('window').width;
const SBooking1 = () => {
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
            <Input label="Họ tên người gửi:" />
            <Input label="Số điện thoại người gửi:" />
            <Input label="Địa chỉ:" />
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
            <Input label="Họ tên người nhận:" />
            <Input label="Số điện thoại người nhận:" />
            <Input label="Địa chỉ:" />
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
