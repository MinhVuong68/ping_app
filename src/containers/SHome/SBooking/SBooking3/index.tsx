import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Colors, Fonts, Layout } from '../../../../theme';
import { Header, Icon, Input } from '../../../../components';
import Button from '../../../SIntro/components/Button';
import { navigate } from '../../../../navigators/utils';

const SBooking3 = () => {
  const [toggleCheckBoxGoBackLocation, setToggleCheckBoxGoBackLocation] =
    useState(false);

  return (
    <View style={Layout.full}>
      <Header title="Bổ sung chi tiết" />
      <View style={styles.content}>
        <Input label="Số lượng gói hàng:" input={{ keyboardType: 'numeric' }} />
        <Input label="Ghi chú:" input={{ multiline: true, numberOfLines: 5 }} />
        <Input label="Mã giảm giá (Nếu có):" />
        <View style={[Layout.rowVCenter, { marginBottom: 10 }]}>
          <CheckBox
            tintColors={{ true: Colors.primary }}
            disabled={false}
            value={toggleCheckBoxGoBackLocation}
            onValueChange={newValue =>
              setToggleCheckBoxGoBackLocation(newValue)
            }
          />
          <Text style={Fonts.textRegular}>Quay lại điểm giao hàng</Text>
        </View>

        <Text style={[Fonts.textRegularBold, { marginBottom: 10 }]}>
          Tải ảnh lên:
        </Text>
        <Pressable style={styles.btnAdd}>
          <Text style={styles.descTxtBtn}>Thêm ảnh</Text>
          <Icon
            type="Entypo"
            name="images"
            size={20}
            color={Colors.borderBottom}
          />
        </Pressable>
      </View>
      <View style={Layout.colVCenter}>
        <Button
          title="Tiếp tục"
          onPress={() => {
            navigate('SListDeliver');
          }}
          style={{ backgroundColor: Colors.primary, marginBottom: 15 }}
          styleTitle={{ color: Colors.white }}
        />
        <Button
          title="Xem chi tiết đơn hàng"
          onPress={() => {
            navigate('SOrderReview');
          }}
          style={{ backgroundColor: Colors.blue, marginBottom: 15 }}
          styleTitle={{ color: Colors.white }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    marginBottom: 20,
  },
  btnAdd: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descTxtBtn: {
    color: '#888',
  },
});

export default SBooking3;
