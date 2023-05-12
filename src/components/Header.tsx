import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import Color from '../theme/Colors';

interface InputProps {
  title: string;
}

const Header = ({ title = '' }: InputProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" color="#fff" size={25} />
      </TouchableOpacity>
      <Text style={styles.txtTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#1b92fc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  txtTitle: {
    color: Color.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default React.memo(Header);
