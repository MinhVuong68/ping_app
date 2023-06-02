import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { Layout } from '../../../theme';
import { Header, Input, Loading } from '../../../components';
import styles from '../SEnterName/styles/SEnterNameStyle';
import Button from '../../SLogin/components/Button';
import { navigate } from '../../../navigators/utils';
import store from '../../../redux/store';
import { updatePhoneNumber } from '../../../redux/slices/userSlice';

const SEnterPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState('');

  const dispatch = useDispatch();

  const onGo = () => {
    Alert.alert(
      'Xác nhận số điện thoại +84 899 306681',
      'Mã kích hoạt sẽ được gửi tới số điện thoại này',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Xác nhận', onPress: handleSendOTP },
      ],
    );
  };

  const handleSendOTP = () => {
    dispatch(updatePhoneNumber(phoneNumber));
    console.log(store.getState().user);
  };
  return (
    <View style={Layout.full}>
      <Header
        title="Tạo tài khoản"
        subHeader="Nhập số điện thoại của bạn để tạo tài khoản mới"
      />
      <View style={styles.container}>
        <View>
          <Input
            input={{
              keyboardType: 'numeric',
              placeholder: 'Nhập số điện thoại',
            }}
            validation={{
              match: /^[0-9]{10}$/,
              require: 'Số điện thoại không được để trống',
              role: 'Số điện thoại bao gồm 9 số và bắt đầu bằng số 0',
            }}
            setValue={setPhoneNumber}
            setFormError={setValid}
            cleanTextBtn
          />
        </View>
        <View style={[Layout.alignItemsEnd, styles.viewButtonGo]}>
          {!!phoneNumber && valid ? (
            <Button onPress={onGo} />
          ) : (
            <Button onPress={onGo} disable={true} type="disable" />
          )}
        </View>
      </View>
    </View>
  );
};

export default SEnterPhoneNumber;
