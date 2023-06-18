import React, { useState } from 'react';
import { View, Alert, ToastAndroid,Platform } from "react-native";
import { useSelector } from 'react-redux';

import { Colors, Layout } from '../../../theme';
import { Header, InputPassword, Loading } from '../../../components';
import Button from '../../SIntro/components/Button';
import axiosClient from '../../../configs/axiosClient';
import { navigate } from '../../../navigators/utils';

const SChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentUser = useSelector((state: any) => state.user);

  const onChangePassword = async () => {
    if (currentPassword === '' || newPassword === '' || rePassword === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ !!');
    } else if (newPassword !== rePassword) {
      Alert.alert('Thông báo', 'Mật khẩu nhập lại không trùng khớp !!');
    } else if (!valid) return;
    else {
      setLoading(true);
      try {
        await axiosClient.post('/customer/change-password', {
          id: currentUser.id,
          oldPassword: currentPassword,
          newPassword: newPassword,
        });
        setLoading(false);
        navigate('SProfile');
        if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity(
          'Đổi mật khẩu thành công',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        } else {
          //Handle in IOS Platform
          //AlertIOS.alert('Thay đổi mật khẩu thành công');
        }
      } catch (error) {
        setLoading(false);
        Alert.alert('Thông báo', 'Thay đổi mật khẩu thất bại');
      }
    }
  };
  return (
    <View style={[Layout.full]}>
      <Loading isLoading={loading} backBtn={setLoading} />
      <Header
        title="Thay đổi mật khẩu"
        subHeader="Hãy thay đổi mật khẩu mới an toàn hơn"
      />
      <View style={{ padding: 10 }}>
        <InputPassword
          input={{ placeholder: 'Nhập mật khẩu hiện tại' }}
          setValue={setCurrentPassword}
          viewPassword
        />
        <InputPassword
          input={{ placeholder: 'Nhập mật khẩu mới' }}
          setValue={setNewPassword}
          viewPassword
          validation={{
            match:
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
            require: 'Mật khẩu không được để trống',
            role: 'Mật khẩu gồm ít nhất 8 ký tự bao gồm: Chữ hoa, chữ thường, số và ký tự đặc biệt',
          }}
          setFormError={setValid}
        />
        <InputPassword
          input={{ placeholder: 'Nhập lại mật khẩu mới' }}
          viewPassword
          setValue={setRePassword}
        />
      </View>
      <View style={Layout.colVCenter}>
        <Button
          title="Thay đổi"
          onPress={onChangePassword}
          style={{ backgroundColor: Colors.primary }}
          styleTitle={{ fontSize: 18, color: Colors.white }}
        />
      </View>
    </View>
  );
};

export default SChangePassword;
