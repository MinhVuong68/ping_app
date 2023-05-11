import React from 'react';
import { Text, View, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Layout } from '../../theme';
import { Header, Input } from '../../components';
import styles from './styles/SLoginStyle';
import Color from '../../theme/Colors';


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
          <Input
            input={{ placeholder: 'Mật khẩu',secureTextEntry: true }}
            icon={<Entypo name="eye" size={22} color="#ccc" />}
          />
          <Pressable style={styles.btnForgotPassword}>
            <Text style={styles.txtForgotPassword}>Lấy lại mật khẩu</Text>
          </Pressable>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: 50,
              height: 50,
              marginRight: 10,
              marginBottom: 10,
              borderRadius: 50,
              backgroundColor: Color.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowright" size={22} color={Color.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SLogin;
