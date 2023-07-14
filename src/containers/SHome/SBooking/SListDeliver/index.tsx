import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { Header, NoDriver } from '../../../../components'
import ItemDelivery from '../../components/ItemDelivery'
import { Layout } from '../../../../theme'
import { useSelector } from 'react-redux'
import { calcDistance2Location } from '../../../../utils/map'
import { convertMeterToKilometer } from '../../../../utils'
import { RootState, useAppDispatch } from '@/redux/store'
import { getAllDriverReady } from '@/redux/booking/orderBookingSlice'
import SkeletonItemDelivery from '../../components/SkeletonItemDelivery'

const SListDeliver = () => {
  const orderBooking = useSelector(
    (state: RootState) => state.orderBooking.orderBooking,
  )
  const dispatch = useAppDispatch()

  const [lsDriver, setLsDriver] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getLsDriver = async () => {
      const res: any = await dispatch(
        getAllDriverReady(orderBooking.vehicle.vehicleId),
      ).unwrap()

      for (let i = 0; i < res.length; i++) {
        const locationSender = orderBooking.locationSender.coordinate
        const locationDriver = {
          latitude: res[i].latitude,
          longitude: res[i].longitude,
        }

        const coordinateSender =
          locationSender.latitude + ',' + locationSender.longitude
        const coordinateDriver =
          locationDriver.latitude + ',' + locationDriver.longitude

        const rs: any = await calcDistance2Location(
          coordinateSender,
          coordinateDriver,
        )
        const distanceKm = convertMeterToKilometer(
          rs.result.routeRows[0].elements[0]?.distance?.value,
        )

        setLsDriver((prevLsDriver: any) => [
          ...prevLsDriver,
          { ...res[i], distance: distanceKm },
        ])
      }
      setLoading(false)
      return () => res.abort()
    }
    getLsDriver()
    console.log(lsDriver)
  }, [])

  return (
    <View style={Layout.full}>
      <Header title="Nhân viên giao hàng" />

      <View style={styles.contents}>
        {loading ? (
          <>
            <SkeletonItemDelivery />
            <SkeletonItemDelivery />
            <SkeletonItemDelivery />
            <SkeletonItemDelivery />
          </>
        ) : (
          <FlatList
            data={lsDriver}
            renderItem={({ item }) => (
              <ItemDelivery
                id={item.id}
                imageUri={item.avatar}
                name={item.fullName}
                carNumberPlate={item.licensePlate}
                vote={item.reviewRate}
                distance={item.distance}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
      {!loading && lsDriver.length === 0 && <NoDriver />}
    </View>
  )
}

const styles = StyleSheet.create({
  contents: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
})

export default SListDeliver
