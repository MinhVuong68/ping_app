import React from 'react';
import { Text, View, Pressable } from 'react-native';

import { Layout } from '../../theme';
import { Header, Input, InputPassword } from '../../components';
import styles from './styles/SLoginStyle';
import Button from './components/Button';

const SLogin = () => {
  return (
    <View style={Layout.full}>
      <Header title="Đăng nhập" />
      <View style={styles.subHeader}>
        <Text style={styles.txtSubHeader}>
          Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
        </Text>
      </View>
      <View style={styles.viewFormLogin}>
        <View>
          <Input
            input={{ placeholder: 'Số điện thoại', keyboardType: 'numeric' }}
          />
          <InputPassword viewPassword input={{ placeholder: 'Mật khẩu' }} />
          <Pressable style={styles.btnForgotPassword}>
            <Text style={styles.txtForgotPassword}>Lấy lại mật khẩu</Text>
          </Pressable>
        </View>
        <View style={styles.viewButtonGo}>
          <Button />
        </View>
      </View>
    </View>
  );
};

export default SLogin;
