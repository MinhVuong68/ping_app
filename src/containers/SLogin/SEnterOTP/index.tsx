import React from 'react';
import { Text, View } from 'react-native';

import { Layout } from '../../../theme';
import { Header, Icon, InputOTP } from '../../../components';
import styles from './styles/SEnterOTPStyle';
import Color from '../../../theme/Colors';

const SEnterOTP = () => {
  return (
    <View style={Layout.full}>
      <Header
        title="Nhập mã xác thực"
        subHeader="Vui lòng không chia sẽ mã xác thực để tránh mất tài khoản"
      />
      <View style={[Layout.center, styles.container]}>
        <View style={Layout.center}>
          <Icon
            type="AntDesign"
            name="message1"
            size={50}
            color={Color.primary}
          />
          <View style={styles.viewNoti}>
            <Text style={styles.txtNoti}>
              Đã gửi mã đến số điện thoại 0899306681
            </Text>
            <Text style={styles.txtPlease}>
              Xin kiểm tra SMS và điền mã xác nhận bên dưới
            </Text>
          </View>
        </View>
        <InputOTP />
      </View>
    </View>
  );
};

export default SEnterOTP;