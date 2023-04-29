import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from './components/Button';

const SIntro = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff'
    }}>
      <Button
        title='ĐĂNG NHẬP'
        onPress={() => {}}
        style={{backgroundColor: '#41b1fe'}}
        styleTitle={{color: '#fff'}}
      />
      <Button
        title='ĐĂNG KÝ'
        onPress={() => {}}
        style={{backgroundColor: '#f3f4f8'}}
        styleTitle={{color: '#000'}}
      />
    </View>
  );
};

export default SIntro;
