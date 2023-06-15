import React from 'react';
import { Text, View } from 'react-native';

import { Layout } from '../../../theme';
import { Header } from '../../../components';

const SEditProfile = () => {
  return (
    <View style={Layout.full}>
      <Header title="Thông tin cá nhân" />
    </View>
  );
};

export default SEditProfile;
