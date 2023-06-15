import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { Layout } from '../../../theme';
import { Header, Icon, InputOTP, Loading } from '../../../components';
import styles from './styles/SEnterOTPStyle';
import Color from '../../../theme/Colors';
import store from '../../../redux/store';
import Button from '../../SLogin/components/Button';
import firebaseConfig from '../../../configs/firebase.config';
import axiosClient from '../../../configs/axiosClient';
import { navigate } from '../../../navigators/utils';
import { setCurrentUser } from '../../../redux/slices/userSlice';

const SEnterOTP = ({ route }: any) => {
  const { auth,firebase } = firebaseConfig();
  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch()

  const { verificationId } = route.params;
  const handlea = async () => {
    const credential = auth.PhoneAuthProvider.credential(verificationId, store.getState().otp.otp);
    try {
      await auth().signInWithCredential(credential);
      setLoading(true);
      try {
        const userLogin = await axiosClient.post('/customer/register',{
          name: store.getState().user.name,
          phoneNumber: store.getState().user.phoneNumber
        });
        dispatch(setCurrentUser(userLogin))
        setLoading(false)
        navigate('MainNavigation')
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    } catch (error: any) {
      if (error?.code === 'auth/invalid-verification-code') {
        Alert.alert('Thông báo', 'Mã OTP không chính xác!');
      } else if (error?.code === 'auth/code-expired') {
        Alert.alert(
          'Thông báo',
          'Đã hết hạn nhập mã OTP\nVui lòng xác minh lại',
        );
      }
    }
  };
  return (
    <View style={Layout.full}>
      <Loading isLoading={loading} backBtn={setLoading} />
      <Header
        title="Nhập mã xác thực"
        subHeader="Vui lòng không chia sẽ mã xác thực để tránh mất tài khoản"
      />
      <View style={styles.container}>
        <View style={Layout.center}>
          <Icon
            type="AntDesign"
            name="message1"
            size={50}
            color={Color.primary}
          />
          <View style={styles.viewNoti}>
            <Text style={styles.txtNoti}>
              Đã gửi mã đến số điện thoại 0899306681
            </Text>
            <Text style={styles.txtPlease}>
              Xin kiểm tra SMS và điền mã xác nhận bên dưới
            </Text>
          </View>
          <InputOTP />
        </View>
        <View style={styles.viewButtonGo}>
          <Button onPress={handlea} />
        </View>
      </View>
    </View>
  );
};

export default SEnterOTP;
