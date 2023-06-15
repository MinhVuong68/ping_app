import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

const SHome = () => {
  const currentUser = useSelector((state: any) => state.user);
  return (
    <View>
      <Image
        source={{ uri: currentUser.avatar }}
        style={{ width: 20, height: 20 }}
      />
      <Text>{currentUser.name}</Text>
    </View>
  );
};

export default SHome;
