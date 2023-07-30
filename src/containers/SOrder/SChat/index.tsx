import React , { useState,useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity,FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore'

import { Layout } from '../../../theme'
import { Header, Icon } from '../../../components'
import styles from './styles/SChatStyle'
import Color from '@/theme/Colors'
import ChatContent from './components/ChatContent'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'



const SChat = ({ route }: any) => {

  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const [dataChat,setDataChat] = useState<any>([])
  const [inputChat,setInputChat] = useState('')

  useEffect(() => {
    const getChatArrayFromOrders = async (customerId:number|null, driverId:number) => {
      try {
        const ordersRef = firestore().collection('orders');
        // Truy vấn sử dụng where để lọc dữ liệu với customerId và driverId cụ thể
        const querySnapshot = await ordersRef
          .where('customerId', '==', customerId)
          .where('driverId', '==', driverId)
          .get();
    
        const chatArray: any[] = [];
    
        // Lặp qua các document kết quả
        querySnapshot.forEach((doc) => {
          const orderData = doc.data();
          // Kiểm tra xem document có chứa trường "chat" hay không
          if (orderData.hasOwnProperty('chat') && Array.isArray(orderData.chat)) {
            // Thêm mảng chat từ mỗi document vào chatArray
            chatArray.push(...orderData.chat);
          }
        });
    
        
       setDataChat(chatArray)
      } catch (error) {
        console.error('Error getting chat array from orders:', error);
        return [];
      }
    };
    getChatArrayFromOrders(currentUser.id,route.params.driverId)
  },[dataChat])


  const onSend = () => {
    // setDataChat([
    //   ...data,{id: 4, userId: 2, chat: inputChat}
    // ])
    // setInputChat('')
  }

  return (
    <View style={Layout.full}>
      <Header
        title={`Nhắn tin với nhân viên giao hàng ${route.params.driverName}`}
      />
      <View style={styles.viewChat}>
      <FlatList
        data={dataChat}
        renderItem={({item}) => <ChatContent userId={item.userId} chat={item.chat} />}
        //keyExtractor={item => item.id}
      />
      </View>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder="Nội dung..." value={inputChat} onChangeText={(text) => setInputChat(text)}/>
        <TouchableOpacity style={styles.btnSend} onPress={onSend}>
          <Icon
            type="FontAwesome"
            name="send"
            color={Color.primary}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SChat
