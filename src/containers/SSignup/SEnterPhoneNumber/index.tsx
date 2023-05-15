import React from 'react';
import { Text, View } from 'react-native';
import { Layout } from '../../../theme';
import { Header } from '../../../components';

const SEnterPhoneNumber = () => {
  return (
    <View style={Layout.full}>
      <Header title="Tạo tài khoản" subHeader='Nhập số điện thoại của bạn để tạo tài khoản mới'/>
    </View>
  );
};

export default SEnterPhoneNumber;
