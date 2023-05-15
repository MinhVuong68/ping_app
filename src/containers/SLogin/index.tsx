import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';

import { Layout } from '../../theme';
import { Header, Input, InputPassword, Loading } from '../../components';
import styles from './styles/SLoginStyle';
import Button from './components/Button';

const SLogin = () => {
  const [loading, setLoading] = useState(false);
  const onLogin = () => {
    setLoading(true)
  };
  return (
    <View style={Layout.full}>
      <Loading isLoading={loading} backBtn={setLoading} />
      <Header
        title="Đăng nhập"
        subHeader="Vui lòng nhập số điện thoại và mật khẩu để đăng nhập"
      />
      <View style={styles.viewFormLogin}>
        <View>
          <Input
            cleanTextBtn
            input={{ placeholder: 'Số điện thoại', keyboardType: 'numeric' }}
          />
          <InputPassword viewPassword input={{ placeholder: 'Mật khẩu' }} />
          <Pressable style={styles.btnForgotPassword}>
            <Text style={styles.txtForgotPassword}>Lấy lại mật khẩu</Text>
          </Pressable>
        </View>
        <View style={styles.viewButtonGo}>
          <Button onPress={onLogin} />
        </View>
      </View>
    </View>
  );
};

export default SLogin;
