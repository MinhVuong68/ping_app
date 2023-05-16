import React from 'react';
import { Text, View } from 'react-native';
import { Alert } from 'react-native';

import { Layout } from '../../../theme';
import { Header, Input } from '../../../components';
import styles from '../../SSignup/SEnterName/styles/SEnterNameStyle';
import { navigate } from '../../../navigators/utils';
import Button from '../components/Button';

const SForgotPassword = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Xác nhận số điện thoại +84 899 306681',
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
          />
        </View>
        <View style={[Layout.alignItemsEnd, styles.viewButtonGo]}>
          <Button onPress={createTwoButtonAlert} />
        </View>
      </View>
    </View>
  );
};

export default SForgotPassword;
