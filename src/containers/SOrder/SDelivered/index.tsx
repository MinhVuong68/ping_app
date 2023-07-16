import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { Layout } from '../../../theme'
import CardOrder from '../components/CardOrder'
import NotOrderAvailable from '../components/NotOrderAvailable'
import { RootState } from '@/redux/store'
import { useGetOrderByStatusAndCustomerIdQuery } from '@/services/modules/order'

const SDeliverd = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const { data,isFetching } = useGetOrderByStatusAndCustomerIdQuery({ status: 'COMPLETED', customerId: currentUser.id })

  return (
    <View style={Layout.full}>
      {data?.length ? (
        <View style={styles.contents}>
          <FlatList
            data={data}
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
