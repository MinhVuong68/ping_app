import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';

import { Colors, Fonts, Layout } from '../../../../theme';
import { Header, Icon, Input } from '../../../../components';
import Button from '../../../SIntro/components/Button';
import { navigate } from '../../../../navigators/utils';
import { setAdditionalOrder } from '../../../../redux/slices/orderSlice';

const SBooking3 = () => {

  const dispatch = useDispatch()

  const [note, setNote] = useState('Không');
  const [discountCode, setDiscountCode] = useState('');
  const [toggleCheckBoxGoBackLocation, setToggleCheckBoxGoBackLocation] =
    useState(false);

    useEffect(() => {
      dispatch(setAdditionalOrder({
        note: note,
        discountCode: discountCode,
        rollBack: toggleCheckBoxGoBackLocation,
      }))
    },[note,discountCode,toggleCheckBoxGoBackLocation])
    
    const orderksk = useSelector((state: any) => state.order);
  console.log(orderksk);
    
  return (
    <View style={Layout.full}>
      <Header title="Bổ sung chi tiết" />
      <View style={styles.content}>
        {/* <Input label="Số lượng gói hàng:" input={{ keyboardType: 'numeric' }} /> */}
        <Input
          label="Ghi chú:"
          input={{ multiline: true, numberOfLines: 5 }}
          value={note}
          setValue={setNote}
            validation={{  
              // a-z và A-Z là các ký tự từ a đến z và A đến Z.
              // 0-9 là các số từ 0 đến 9.
              // \u00C0-\u017F là các ký tự Unicode tiếng Việt bắt đầu từ U+00C0 (À) đến U+017F (ſ).
              // \s đại diện cho khoảng trắng (space).
              // \W đại diện cho tất cả các ký tự đặc biệt.
              match: /^[a-zA-Z0-9\u00C0-\u017F\s\W]+$/
            }}
        />
        <Input
          label="Mã giảm giá (Nếu có):"
          value={discountCode}
          setValue={setDiscountCode}
          validation={{
            match: /^[a-zA-Z0-9]*$/
          }}
        />
        <View style={[Layout.rowVCenter, { marginBottom: 10 }]}>
          <CheckBox
            tintColors={{ true: Colors.primary }}
            disabled={false}
            value={toggleCheckBoxGoBackLocation}
            onValueChange={newValue =>
              setToggleCheckBoxGoBackLocation(newValue)
            }
          />
          <Text style={Fonts.textRegular}>Quay lại điểm nhận hàng</Text>
        </View>
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
