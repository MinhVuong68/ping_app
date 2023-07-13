import React from 'react'
import { View, StyleSheet, Dimensions, Image, FlatList } from 'react-native'

import Button from '../SIntro/components/Button'
import { navigate } from '../../navigators/utils'
import { Colors, Images, Layout } from '@/theme'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').width

const SHome = () => {
  const imagesIntroHome = [Images.home1, Images.home2, Images.home3]
  return (
    <View style={[Layout.colVCenter, styles.container]}>
      <FlatList
        data={imagesIntroHome}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewImage}>
              <Image source={item} style={styles.image} />
            </View>
          )
        }}
        //keyExtractor={item => item.id}
      />
      <Button
        title="Lên đơn hàng"
        onPress={() => {
          navigate('SBooking1')
        }}
        style={{ backgroundColor: Colors.primary }}
        styleTitle={{ color: Colors.white }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  viewImage: {
    width: WIDTH_SCREEN * 0.9,
    height: HEIGHT_SCREEN * 0.5,
    backgroundColor: '#ccc',
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})

export default SHome
