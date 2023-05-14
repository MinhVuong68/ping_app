import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Color from '../theme/Colors';
import Icon from './Icon';

interface InputProps {
  title: string;
  subHeader?: string;
}

const Header = ({ title = '', subHeader = '' }: InputProps) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            type="AntDesign"
            name="arrowleft"
            color={Color.white}
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      {!!subHeader && (
        <View style={styles.subHeader}>
          <Text style={styles.txtSubHeader}>
            {subHeader}
          </Text>
        </View>
      )}
    </>
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
  subHeader: {
    height: 40,
    backgroundColor: '#f2f3f5',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  txtSubHeader: {
    fontSize: 13,
    color: Color.text,
  },
});

export default React.memo(Header);
