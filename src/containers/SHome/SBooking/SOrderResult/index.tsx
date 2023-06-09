import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Colors, Layout } from '../../../../theme'
import { Header } from '../../../../components'
import ItemInfo from '../../components/ItemInfo'
import ItemPayment from '../../components/ItemPayment'
import Button from '../../../SIntro/components/Button'
import { navigate } from '../../../../navigators/utils'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const SOrderResult = () => {
  const orderBooking = useSelector(
    (state: RootState) => state.orderBooking.orderBooking,
  )
  return (
    <View style={Layout.full}>
      <Header title="Chi tiết đơn hàng" />
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
          onPress={() => {
            navigate('SHome')
          }}
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
