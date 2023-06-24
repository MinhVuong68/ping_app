import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Fonts, Layout } from '../theme';


const Updating = () => {
  return (
    <View style={[Layout.full, styles.container]}>
      <Image
        style={styles.img}
        source={require('../assets/images/updating.png')}
      />
      <Text style={Fonts.textLargeBold}>Chức năng hiện tại đang cập nhật</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 15
  },
});

export default Updating;
