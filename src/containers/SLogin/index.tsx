import React from 'react';
import { Text, View } from 'react-native';
import { Layout } from '../../theme';

import { Header } from '../../components';

const SLogin = () => {
  return (
    <View style={Layout.full}>
      <Header title='Đăng nhập'/>
    </View>
  );
};

export default SLogin;
