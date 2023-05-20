import React from 'react';
import { Text, View, Alert } from 'react-native';

import { Layout } from '../../../theme';
import { Header, Input, Loading } from '../../../components';
import styles from '../SEnterName/styles/SEnterNameStyle';
import Button from '../../SLogin/components/Button';
import { navigate } from '../../../navigators/utils';

const SEnterPhoneNumber = () => {
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
        { text: 'Xác nhận', onPress: () => navigate('SEnterOTP') },
      ],
    );
  }
  return (
    <View style={Layout.full}>
      <Header title="Tạo tài khoản" subHeader='Nhập số điện thoại của bạn để tạo tài khoản mới'/>
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
        <View style={[Layout.alignItemsEnd,styles.viewButtonGo]}>
          <Button onPress={onGo}/>
        </View>
      </View>
    </View>
  );
};

export default SEnterPhoneNumber;
