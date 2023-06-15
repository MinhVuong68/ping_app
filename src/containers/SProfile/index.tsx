import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useSelector } from 'react-redux';

import { Icon, ImageAvatar } from '../../components';
import { Colors, Layout } from '../../theme';
import { IconProps } from '../../components/Icon';
import { navigate } from '../../navigators/utils';
import styles from './styles/SProfileStyle';

const SProfile = () => {

  const currentUser = useSelector((state:any) => state.user)

  const onLogout = () => {
    Alert.alert(
      `Đăng xuất`,
      'Bạn chắc chắn muốn đăng xuất khỏi tài khoản này',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        { text: 'Xác nhận', onPress: () => navigate('SIntro') },
      ],
    );
  };

  type OptionItemType = {
    icon?: IconProps;
    title: string;
    onPress?: () => any;
  };

  const options: Array<OptionItemType> = [
    {
      icon: {
        type: 'AntDesign',
        name: 'infocirlce',
        size: 25,
        color: Colors.primary,
      },
      title: 'Thông tin cá nhân',
      onPress: () => navigate("SEditProfile"),
    },
    {
      icon: {
        type: 'MaterialIcons',
        name: 'support-agent',
        size: 25,
        color: Colors.primary,
      },
      title: 'Hỗ trợ',
      onPress: () => navigate('SSupport')
    },
    {
      icon: {
        type: 'MaterialIcons',
        name: 'published-with-changes',
        size: 25,
        color: Colors.primary,
      },
      title: 'Đổi mật khẩu',
      onPress: () => navigate('SChangePassword'),
    },
    {
      icon: {
        type: 'AntDesign',
        name: 'logout',
        size: 25,
        color: Colors.primary,
      },
      title: 'Đăng xuất',
      onPress: onLogout,
    },
  ];

  const Option = ({ icon, title, onPress }: OptionItemType) => {
    return (
      <TouchableOpacity
        activeOpacity={0.4}
        style={[Layout.rowVCenter, styles.viewItem]}
        onPress={onPress}>
        <Icon
          type={icon?.type}
          name={icon?.name}
          size={icon?.size}
          color={icon?.color}
        />
        <Text style={styles.titleItem}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
      <SafeAreaView>
        <View style={styles.viewInfo}>
          <ImageAvatar
            uri={currentUser.avatar}
          />
          <Text style={{color: Colors.text,fontSize: 20}}>{currentUser.name}</Text>
        </View>
        <FlatList
          data={options}
          renderItem={({ item }) => (
            <Option
              icon={item.icon}
              title={item.title}
              onPress={item.onPress}
            />
          )}
          //keyExtractor={item => item.id}
        />
      </SafeAreaView>
  
  );
};



export default SProfile;
