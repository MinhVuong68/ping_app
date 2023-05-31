import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Alert } from 'react-native';

import { Layout } from '../../../theme';
import { Header, Input } from '../../../components';
import styles from '../../SSignup/SEnterName/styles/SEnterNameStyle';
import { navigate } from '../../../navigators/utils';
import Button from '../components/Button';

const SForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(false);
  console.log(valid);
  
  const createTwoButtonAlert = () =>
    Alert.alert(
      `Xác nhận số điện thoại ${phoneNumber}`,
      'Mã kích hoạt sẽ được gửi tới số điện thoại này',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Xác nhận', onPress: () => navigate('SEnterOTP') },
      ],
    );

  return (
    <View style={Layout.full}>
      <Header
        title="Lấy lại mật khẩu"
        subHeader="Nhập số điện thoại để nhận mã xác nhận"
      />
      <View style={styles.container}>
        <View>
          <Input
            input={{
              keyboardType: 'numeric',
              placeholder: 'Nhập số điện thoại',
            }}
            cleanTextBtn
            validation={{
              match: /^[0-9]{10}$/,
              require: 'Số điện thoại không được để trống',
              role: 'Số điện thoại bao gồm 9 số và bắt đầu bằng số 0',
            }}
            setValue={setPhoneNumber}
            setFormError={setValid}
          />
        </View>
        <View style={[Layout.alignItemsEnd, styles.viewButtonGo]}>
          {!!phoneNumber && valid ? (
            <Button onPress={createTwoButtonAlert} />
          ) : (
            <Button disable={true} />
          )}
        </View>
      </View>
    </View>
  );
};

export default SForgotPassword;
