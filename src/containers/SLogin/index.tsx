import React, { useState } from 'react'
import { Text, View, Pressable, Alert } from 'react-native'

import { Layout } from '../../theme'
import { Header, Input, InputPassword, Loading } from '../../components'
import styles from './styles/SLoginStyle'
import Button from './components/Button'
import { navigate } from '../../navigators/utils'
import { login } from '../../redux/user/userSlice'
import { useAppDispatch } from '@/redux/store'

const SLogin = () => {
  const [loading, setLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('0899306681')
  const [password, setPassword] = useState('$King06082001')
  const [valid, setValid] = useState(false)

  const dispatch = useAppDispatch()
  const onLogin = async () => {
    setLoading(true)
    const accoutLogin = { phoneNumber: phoneNumber, password: password }
    try {
      await dispatch(login(accoutLogin)).unwrap()
      navigate('MainNavigation')
    } catch (error) {
      Alert.alert('Thông báo', 'Tên đăng nhập hoặc mật khẩu không chính xác!')
      setLoading(false)
    }
  }
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
            validation={{
              match: /^[0-9]{10}$/,
              require: 'Số điện thoại không được để trống',
              role: 'Số điện thoại bao gồm 9 số và bắt đầu bằng số 0',
            }}
            setValue={setPhoneNumber}
            setFormError={setValid}
            value={phoneNumber}
          />
          <InputPassword
            viewPassword
            input={{ placeholder: 'Mật khẩu' }}
            validation={{
              //match: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
              require: 'Mật khẩu không được để trống',
            }}
            setValue={setPassword}
            value={password}
          />
          <Pressable
            style={styles.btnForgotPassword}
            onPress={() => navigate('SForgotPassword')}>
            <Text style={styles.txtForgotPassword}>Lấy lại mật khẩu</Text>
          </Pressable>
        </View>
        <View style={styles.viewButtonGo}>
          {!!phoneNumber && !!password && valid ? (
            <Button onPress={onLogin} />
          ) : (
            <Button onPress={onLogin} disable={true} type="disable" />
          )}
        </View>
      </View>
    </View>
  )
}

export default SLogin
