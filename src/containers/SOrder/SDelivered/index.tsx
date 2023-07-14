import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { Layout } from '../../../theme'
import CardOrder from '../components/CardOrder'
import NotOrderAvailable from '../components/NotOrderAvailable'
import { RootState } from '@/redux/store'
import { orderAPI } from '@/services/api'

const SDeliverd = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const [ordersCompleted, setOrdersCompleted] = useState([])

  useEffect(() => {
    const getOrdersCompleted = async () => {
      const rs: any = await orderAPI.getOrderByStatus({ status: 'COMPLETED', customerId: currentUser.id })
      setOrdersCompleted(rs)
    }
    getOrdersCompleted()
  }, [])
  return (
    <View style={Layout.full}>
      {ordersCompleted.length ? (
        <View style={styles.contents}>
          <FlatList
            data={ordersCompleted}
            renderItem={({ item }: any) => (
              <CardOrder
                id={item?.id}
                time={item?.requireAt.time}
                date={item?.requireAt.date}
                fromAddress={item?.fromLocation.address}
                toAddress={item?.toLocation.address}
                totalPrice={item?.totalPrice}
              />
            )}
          />
        </View>
      ) : (
        <NotOrderAvailable />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
})

export default SDeliverd
