import React from 'react';
import { View } from 'react-native';

import Button from './components/Button';

const SIntro = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff',
    }}>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 50,
        }}>
        <Button
          title="ĐĂNG NHẬP"
          onPress={() => {}}
          style={{ backgroundColor: '#41b1fe',marginBottom: 15 }}
          styleTitle={{ color: '#fff' }}
        />
        <Button
          title="ĐĂNG KÝ"
          onPress={() => {}}
          style={{ backgroundColor: '#f3f4f8' }}
          styleTitle={{ color: '#000' }}
        />
      </View>
    </View>
  );
};

export default SIntro;
