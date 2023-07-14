import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Skeleton } from '@/components'
import { Colors } from '@/theme'

const SkeletonItemVehicle = () => {
  return (
    <View style={styles.container}>
      <Skeleton width={55} height={55} style={{ marginHorizontal: 15 }} />
      <View style={{ justifyContent: 'space-between' }}>
        <Skeleton width={100} height={10} style={{ marginVertical: 5 }} />
        <Skeleton width={250} height={20} style={{ marginVertical: 5 }} />
        <Skeleton width={240} height={15} style={{ marginVertical: 5 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: '90%',
    borderColor: Colors.borderBottom,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default SkeletonItemVehicle
