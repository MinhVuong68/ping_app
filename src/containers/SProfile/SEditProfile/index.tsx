import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable, ToastAndroid } from 'react-native';
import { useSelector } from 'react-redux';
import storage from '@react-native-firebase/storage';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { useDispatch } from 'react-redux';

import { Colors, Layout } from '../../../theme';
import { Header, Icon, ImageAvatar, Input, Loading } from '../../../components';
import Button from '../../SIntro/components/Button';
import axiosClient from '../../../configs/axiosClient';
import { setCurrentUser } from '../../../redux/slices/userSlice';

const SEditProfile = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state: any) => state.user);

  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [name, setName] = useState(currentUser.name);
  const [phoneContact, setPhoneContact] = useState(currentUser.phoneContact);

  const [loading, setLoading] = useState(false);

  console.log(name);

  const handleImageUpload = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        const { assets } = response;
        if (assets && assets.length > 0) {
          const { uri, fileName } = assets[0] as Asset;
          const storageRef = storage().ref(`images/${fileName}`);
          if (uri == undefined) return;
          const task = storageRef.putFile(uri);

          task.on(
            'state_changed',
            snapshot => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% complete`);
              setAvatar(uri);
            },
            error => {
              console.error('Image upload error:', error);
            },
          );
        }
      }
    });
  };

  const onChange = async () => {
    setLoading(true);
    const userChange = await axiosClient.put(`/customer/${currentUser.id}`, {
      name,
      avatar,
      phoneContact,
    });
    dispatch(setCurrentUser(userChange));
    setLoading(false);
    ToastAndroid.showWithGravity(
      'Cập nhật thông tin thành công',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={Layout.full}>
      <Loading isLoading={loading} backBtn={setLoading} />
      <Header title="Thông tin cá nhân" />
      <View style={styles.viewInfo}>
        <Pressable style={styles.viewAvatar} onPress={handleImageUpload}>
          <ImageAvatar uri={avatar} />
          <Icon name="camerao" />
        </Pressable>
        <Text style={{ color: Colors.text, fontSize: 20,fontWeight: 'bold' }}>
          {currentUser.name}
        </Text>
      </View>
      <View style={styles.viewFormUpdate}>
        <Input
          label='Tên của bạn:'
          input={{ placeholder: 'Tên' }}
          value={name}
          setValue={setName}
          validation={{
            match: /^[\p{L} ]{2,}$/u,
            require: 'Tên không được để trống',
            role: 'Tên phải có ít nhất 2 ký tự',
          }}
        />
        <Input
        label="Số điện thoại liên hệ:"
          input={{ placeholder: 'Số điện thoại liên hệ' }}
          validation={{
            match: /^[0-9]{10}$/,
            require: 'Số điện thoại không được để trống',
            role: 'Số điện thoại bao gồm 9 số và bắt đầu bằng số 0',
          }}
          value={phoneContact}
          setValue={setPhoneContact}
        />
        <Input input={{ placeholder: 'Địa chỉ' }} label='Địa chỉ đã lưu:'/>
      </View>
      <View style={Layout.rowCenter}>
        <Button
          title="Thay đổi"
          style={{ backgroundColor: '#1b92fc' }}
          styleTitle={{ fontSize: 18, color: Colors.white }}
          onPress={onChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewInfo: {
    minHeight: 130,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  viewAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFormUpdate: {
    paddingHorizontal: 12,
    marginBottom: 12,
  },
});

export default SEditProfile;
