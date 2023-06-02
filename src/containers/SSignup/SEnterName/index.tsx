import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Layout } from '../../../theme';
import { Header, Input } from '../../../components';
import styles from './styles/SEnterNameStyle';
import Button from '../../SLogin/components/Button';
import { navigate } from '../../../navigators/utils';
import { updateName } from '../../../redux/slices/userSlice';

const SEnterName = () => {
  const [name, setName] = useState('');
  const [valid, setValid] = useState(false);

  const dispatch = useDispatch()

  const onEnterName = () => {
    dispatch(updateName(name))
    navigate('SEnterPhoneNumber')
  }

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
            validation={{
              match: /^[A-Za-z ]{2,}$/,
              require: 'Tên không được để trống',
              role: 'Tên phải có ít nhất 2 ký tự',
            }}
            setValue={setName}
            setFormError={setValid}
          />
        </View>
        <View style={[Layout.alignItemsEnd, styles.viewButtonGo]}>
          {!!name && valid ? (
            <Button onPress={onEnterName}/>
          ) : (
            <Button disable={true} type="disable" />
          )}
        </View>
      </View>
    </View>
  );
};

export default SEnterName;
