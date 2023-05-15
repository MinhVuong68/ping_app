import React from 'react';
import { View } from 'react-native';

import { Layout } from '../../../theme';
import { Header, Input } from '../../../components';
import styles from '../SEnterName/styles/SEnterNameStyle';
import Button from '../../SLogin/components/Button';
import { navigate } from '../../../navigators/utils';

const SEnterPhoneNumber = () => {
  return (
    <View style={Layout.full}>
      <Header title="Tạo tài khoản" subHeader='Nhập số điện thoại của bạn để tạo tài khoản mới'/>
      <View style={styles.container}>
        <View>
          <Input
            cleanTextBtn
            input={{
              keyboardType: 'numeric',
              placeholder: 'Nhập số điện thoại',
            }}
          />
        </View>
        <View style={[Layout.alignItemsEnd,styles.viewButtonGo]}>
          <Button/>
        </View>
      </View>
    </View>
  );
};

export default SEnterPhoneNumber;
