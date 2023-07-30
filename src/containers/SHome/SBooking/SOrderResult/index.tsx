import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, View, StyleSheet, Alert } from 'react-native'

import { Colors, Layout } from '../../../../theme'
import { Header, Loading } from '../../../../components'
import ItemInfo from '../../components/ItemInfo'
import ItemPayment from '../../components/ItemPayment'
import Button from '../../../SIntro/components/Button'
import { navigate } from '../../../../navigators/utils'
import { RootState, useAppDispatch } from '@/redux/store'
import orderBookingSlice, {
  initialState,
  requireOrderBooking,
  setDiscountMoney,
} from '@/redux/booking/orderBookingSlice'
import { message } from '@/utils/message'
import { addDocument } from '@/firebase/services'
import { unwrapResult } from '@reduxjs/toolkit'

const SOrderResult = () => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const orderBooking = useSelector(
    (state: RootState) => state.orderBooking.orderBooking,
  )
  console.log(orderBooking)

  useEffect(() => {
    if (orderBooking.discount.discountPercentage !== null) {
      dispatch(
        setDiscountMoney(
          (orderBooking.discount.discountPercentage / 100) * orderBooking.price,
        ),
      )
    }
  }, [])

  const handleRequireOrder = async () => {
    setLoading(true)
    try {
      const res: any = await dispatch(
        requireOrderBooking({
          fromAddress: orderBooking.locationSender.address,
          fromLatitude: orderBooking.locationSender.coordinate.latitude,
          fromLongitude: orderBooking.locationSender.coordinate.longitude,
          toAddress: orderBooking.locationReceiver.address,
          toLatitude: orderBooking.locationReceiver.coordinate.latitude,
          toLongitude: orderBooking.locationReceiver.coordinate.longitude,
          customerNote: orderBooking.note,
          backTo: orderBooking.rollBack,
          distance: 0,
          price: orderBooking.price,
          priceDiscount: orderBooking.discount.discountMoney,
          totalPrice: orderBooking.totalPrice,
          customerId: orderBooking.customerId,
          driverId: orderBooking.driverId,
          discountId: orderBooking.discount.discountId,
        }),
      ).unwrap()
      //const res:any = unwrapResult(actionResult)
      //console.log('123',res);

      addDocument('orders', {
        orderId: res.id,
        fromAddress: res.fromAddress,
        fromLatitude: res.fromLatitude,
        fromLongitude: res.fromLongitude,
        toAddress: res.toAddress,
        toLatitude: res.toLatitude,
        toLongitude: res.toLongitude,
        totalPrice: res.totalPrice,
        customerId: res.customer.id,
        avatarCustomer: res.customer.avatar,
        customerName: res.customer.name,
        driverId: res.driver.id,
        orderStatus: 'DRIVER_ACCEPT_PENDING',
        chat: []
      })
      setLoading(false)
      message('Đơn hàng được gửi yêu cầu thành công')
      //dispatch(setInitialState(initialState))
      navigate('SHome')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={Layout.full}>
      <Header title="Chi tiết đơn hàng" />
      <Loading isLoading={loading} backBtn={setLoading} />
      <View style={styles.content}>
        <View style={styles.box}>
          <Text>Bên giao hàng:</Text>
          <ItemInfo
            icon={{ type: 'AntDesign', name: 'user', color: Colors.primary }}
            text={orderBooking.nameSender}
          />
          <ItemInfo
            icon={{ type: 'AntDesign', name: 'phone', color: Colors.primary }}
            text={orderBooking.phoneSender}
          />
          <ItemInfo
            icon={{ type: 'FontAwesome', name: 'bullseye', color: 'green' }}
            text={orderBooking.locationSender.address}
          />
        </View>
        <View style={styles.box}>
          <Text>Bên nhận hàng:</Text>
          <ItemInfo
            icon={{ type: 'AntDesign', name: 'user', color: Colors.blue }}
            text={orderBooking.nameReceiver}
          />
          <ItemInfo
            icon={{ type: 'AntDesign', name: 'phone', color: Colors.blue }}
            text={orderBooking.phoneReceiver}
          />
          <ItemInfo
            icon={{ type: 'Entypo', name: 'location-pin', color: 'red' }}
            text={orderBooking.locationReceiver.address}
          />
        </View>
        <ItemInfo
          icon={{ type: 'FontAwesome', name: 'truck', color: Colors.primary }}
          text={`${orderBooking.vehicle.vehicleName} ${orderBooking.vehicle.weight} Kg`}
        />

        {orderBooking.rollBack && (
          <ItemInfo
            icon={{
              type: 'MaterialIcons',
              name: 'published-with-changes',
              color: Colors.primary,
            }}
            text="Quay lại điểm nhận hàng"
          />
        )}
        <ItemPayment
          price={orderBooking.price}
          discountMoney={
            orderBooking.discount.discountPercentage !== null
              ? (orderBooking.discount.discountPercentage / 100) *
                orderBooking.price
              : 0
          }
        />
      </View>
      <View style={Layout.rowCenter}>
        <Button
          title="Đặt đơn"
          onPress={handleRequireOrder}
          style={{ backgroundColor: Colors.primary, marginBottom: 15 }}
          styleTitle={{ color: Colors.white }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  box: {
    width: '100%',
    minHeight: 100,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: Colors.borderBottom,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: Colors.borderBottom,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
  },
  viewPayment: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default SOrderResult
