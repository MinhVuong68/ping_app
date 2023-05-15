import React from 'react';
import { Text, View } from 'react-native';

import { Layout } from '../../../theme';
import { Header, Input } from '../../../components';
import styles from './styles/SEnterNameStyle';
import Button from '../../SLogin/components/Button';
import { navigate } from '../../../navigators/utils';

const SEnterName = () => {
  return (
    <View style={Layout.full}>
      <Header title="Tạo tài khoản" />
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Tên của bạn</Text>
          <Input
            cleanTextBtn
            input={{
              placeholder: 'Gồm 2-40 ký tự',
            }}
          />
        </View>
        <View style={[Layout.alignItemsEnd,styles.viewButtonGo]}>
          <Button onPress={() => navigate('SPhoneNumber')}/>
        </View>
      </View>
    </View>
  );
};

export default SEnterName;
