import React from 'react';
import { Text, View } from 'react-native';
import Modal from "react-native-modal";

import { Layout } from '../../../theme';
import { Header, Input, Loading } from '../../../components';
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
            input={{
              keyboardType: 'numeric',
              placeholder: 'Nhập số điện thoại',
            }}
            cleanTextBtn
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
