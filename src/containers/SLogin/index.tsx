import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { useFormik } from 'formik'
import * as Yup from 'yup';

import { Layout } from '../../theme';
import { Header, Input, InputPassword, Loading } from '../../components';
import styles from './styles/SLoginStyle';
import Button from './components/Button';
import { navigate } from '../../navigators/utils';

const SLogin = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
        phoneNumber: '',
        password: '',
    },
    validationSchema: Yup.object({
        user: Yup.string().required('Số điện thoại không được để trống').matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ'),
        password: Yup.string().required("Mật khẩu không được để trống"),
    }),
    onSubmit: (values) => {
    }
  })
  const onLogin = () => {
    setLoading(true)
  };
  return (
    <View style={Layout.full}>
      <Loading isLoading={loading} backBtn={setLoading} />
      <Header
        title="Đăng nhập"
        subHeader="Vui lòng nhập số điện thoại và mật khẩu để đăng nhập"
      />
      <View style={styles.viewFormLogin}>
        <View>
          <Input
            cleanTextBtn
            input={{ placeholder: 'Số điện thoại', keyboardType: 'numeric' }}
            error={formik.errors.phoneNumber}
            value={formik.values.phoneNumber}
            //onChangeValue={formik.handleChange}
          />
          <InputPassword viewPassword input={{ placeholder: 'Mật khẩu' }} />
          <Pressable style={styles.btnForgotPassword} onPress={() => navigate('SForgotPassword')}>
            <Text style={styles.txtForgotPassword}>Lấy lại mật khẩu</Text>
          </Pressable>
        </View>
        <View style={styles.viewButtonGo}>
          <Button onPress={onLogin} />
        </View>
      </View>
    </View>
  );
};

export default SLogin;
