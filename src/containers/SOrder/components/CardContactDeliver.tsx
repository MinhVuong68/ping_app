import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { Colors, Fonts, Layout } from '../../../theme';
import { Icon } from '../../../components';

const WIDTH_SCREEN = Dimensions.get('window').width;

const CardContactDeliver = ({status}:any) => {
  return (
    <View style={styles.container}>
      <View style={Layout.row}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira2.jfif?alt=media&token=e71ba464-3a86-406a-9d96-0496ea55fdc0',
          }}
          style={styles.image}
        />
        <View style={[Layout.col, { marginLeft: 10 }]}>
          <Text style={Fonts.textRegularBold}>Mira</Text>
          <Text>Biển số: 62L1 08976</Text>
          <Text>Đánh giá: 4.8/5</Text>
        </View>
        {
            !status && (
                <View style={[Layout.full,Layout.rowEnd]}>
          <View style={styles.wrapperIcon}>
            <Icon
              type="MaterialCommunityIcons"
              name="chat-processing-outline"
              size={30}
              color={Colors.white}
            />
          </View>
          <View style={styles.wrapperIcon}>
            <Icon
              type="MaterialCommunityIcons"
              name="phone"
              size={30}
              color={Colors.white}
            />
          </View>
        </View>
            )
        }
        
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    width: WIDTH_SCREEN * 0.9,
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  wrapperIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5
  },
});

export default CardContactDeliver;
