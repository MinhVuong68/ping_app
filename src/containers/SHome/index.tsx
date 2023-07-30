import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Alert,
} from 'react-native'
import firestore from '@react-native-firebase/firestore'

import Button from '../SIntro/components/Button'
import { navigate } from '../../navigators/utils'
import { Colors, Images, Layout } from '@/theme'
import { RootState } from '@/redux/store'
import {
  BOOKING_STATE_COMING,
  BOOKING_STATE_REJECTED,
} from '@/configs/constants'

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').width

const SHome = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const imagesIntroHome = [Images.home1, Images.home2, Images.home3]

  useEffect(() => {
    const subscriber = firestore()
      .collection('orders')
      .where('customerId', '==', currentUser.id)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          const orderData = change.doc.data()
          // Kiểm tra xem trường "orderStatus" có thay đổi không
          if (
            change.type === 'modified' &&
            orderData.hasOwnProperty('orderStatus') &&
            !orderData.hasOwnProperty('chat')
          ) {
            if (orderData.orderStatus === BOOKING_STATE_COMING) {
              Alert.alert(
                'Thông báo',
                `Đơn hàng giao đến  ${orderData.toAddress} đã được chập nhận, nhân viên giao hàng đang đến`,
              )
            } else if (orderData.orderStatus === BOOKING_STATE_REJECTED) {
              Alert.alert(
                'Thông báo',
                `Đơn hàng giao đến  ${orderData.toAddress} đã bị từ chối`,
              )
            }
          }
        })
      })
    // Stop listening for updates when no longer required
    return () => subscriber()
  }, [])

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
