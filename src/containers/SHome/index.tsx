import React, { useEffect } from 'react'
import { View, StyleSheet, Dimensions, Image, FlatList,Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore';


import Button from '../SIntro/components/Button'
import { navigate } from '../../navigators/utils'
import { Colors, Images, Layout } from '@/theme'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import firebaseConfig from '@/configs/firebase.config'
import { collection, getDocs } from 'firebase/firestore'




const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').width

const SHome = () => {
  const currentUser = useSelector((state:RootState) => state.user.currentUser)
  const imagesIntroHome = [Images.home1, Images.home2, Images.home3]

  useEffect(() => {
    const subscriber = firestore()
    .collection('orders')
    .where('customerId','==',currentUser.id)
    .onSnapshot(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const userData = documentSnapshot.data();
        // Kiểm tra và thực hiện hành động khi trường isAccept thay đổi
        if (userData && userData.isAccept) {
          // Thực hiện các hành động khi isAccept là true
          console.log('isAccept changed to true');
          Alert.alert(`Đơn hang chap nhan đi ${userData.toAddress} đã được chấp nhận`)
          // Ví dụ: Hiển thị thông báo, gửi notification, vv.
        } else if (userData && !userData.isAccept) {
          // Thực hiện các hành động khi isAccept là false
          console.log('isAccept changed to false');
          Alert.alert(`Đơn hang tu choi đi ${userData.toAddress} đã bị từ chối chấp nhận`)
        }
      });
    });
  // Stop listening for updates when no longer required
  return () => subscriber();
  },[])
  
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
