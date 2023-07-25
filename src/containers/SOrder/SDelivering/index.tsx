import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { Layout } from '../../../theme'
import NotOrderAvailable from '../components/NotOrderAvailable'
import CardOrder from '../components/CardOrder'
import SkeletonCardOrder from '../components/SkeletonCardOrder'
import { RootState } from '@/redux/store'
import { orderAPI } from '@/services/api'
import { useGetOrderByStatusAndCustomerIdQuery } from '@/services/modules/order'

const SDelivering = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const [ordersComing, setOrdersComing] = useState([])
  const [loading, setLoading] = useState(true)

  //console.log(currentUser)

  useFocusEffect(
    React.useCallback(() => {
      const getOrdersCompleted = async () => {
        const rs: any = await orderAPI.getOrderByStatus({
          status: 'COMING',
          customerId: currentUser.id,
        })
        setOrdersComing(rs)
        setLoading(false)
      }
      getOrdersCompleted()
    }, []),
  )

  //const { data,isFetching } = useGetOrderByStatusAndCustomerIdQuery({ status: 'COMING', customerId: currentUser.id })

  // useEffect(() => {
  //   setLoading(true)
  //   const getOrdersCompleted = async () => {
  //     const rs: any = await orderAPI.getOrderByStatus({ status: 'COMING', customerId: currentUser.id })
  //     setOrdersComing(rs)
  //     setLoading(false)
  //   }
  //   getOrdersCompleted()
  // }, [])

  return (
    <View style={Layout.full}>
      <View style={styles.contents}>
        {ordersComing?.length > 0 && (
          <FlatList
            data={ordersComing}
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
        )}
        {loading && (
          <>
            <SkeletonCardOrder />
            <SkeletonCardOrder />
          </>
        )}
      </View>
      {!loading && ordersComing?.length === 0 && <NotOrderAvailable />}
    </View>
  )
}

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
})

export default SDelivering
