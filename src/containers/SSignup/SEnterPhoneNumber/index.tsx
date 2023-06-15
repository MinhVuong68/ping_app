import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { Layout } from '../../../theme';
import { Header, Input, Loading } from '../../../components';
import styles from '../SEnterName/styles/SEnterNameStyle';
import Button from '../../SLogin/components/Button';
import { navigate } from '../../../navigators/utils';
import store from '../../../redux/store';
import { updatePhoneNumber } from '../../../redux/slices/userSlice';
import firebaseConfig from '../../../configs/firebase.config';

const SEnterPhoneNumber = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState('');

  const { auth, firebase } = firebaseConfig();
  const dispatch = useDispatch();

  const onGo = () => {
    Alert.alert(
      `Xác nhận số điện thoại ${phoneNumber}`,
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

  const handleSendOTP = async () => {
    setLoading(true);
    dispatch(updatePhoneNumber(phoneNumber));
    let phoneVN = '+84' + phoneNumber;
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneVN);
      navigate('SEnterOTP', { verificationId: confirmation.verificationId });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.code === 'auth/too-many-requests')
        Alert.alert(
          'Thông báo',
          'Bạn đã yêu cầu gửi mã OTP quá nhiều lần\nVui lòng thử lại sau',
        );
    }
  };

  return (
    <View style={Layout.full}>
      <Loading isLoading={loading} backBtn={setLoading} />
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
