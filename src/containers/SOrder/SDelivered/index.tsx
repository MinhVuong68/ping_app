import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { Layout } from '../../../theme'
import CardOrder from '../components/CardOrder'
import NotOrderAvailable from '../components/NotOrderAvailable'
import { RootState } from '@/redux/store'
import { useGetOrderByStatusAndCustomerIdQuery } from '@/services/modules/order'
import { orderAPI } from '@/services/api'

const SDeliverd = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const [orderCompleted, setOrdersCompleted] = useState<any>([])

  useFocusEffect(
    React.useCallback(() => {
      const getOrdersCompleted = async () => {
        const rs: any = await orderAPI.getOrderByStatus({
          status: 'COMPLETED',
          customerId: currentUser.id,
        })
        setOrdersCompleted(rs)
      }
      getOrdersCompleted()
    }, []),
  )

  //const { data,isFetching } = useGetOrderByStatusAndCustomerIdQuery({ status: 'COMPLETED', customerId: currentUser.id })

  return (
    <View style={Layout.full}>
      {orderCompleted?.length ? (
        <View style={styles.contents}>
          <FlatList
            data={orderCompleted}
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
