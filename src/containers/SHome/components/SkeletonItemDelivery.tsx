import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Skeleton } from '@/components'
import { Colors } from '@/theme'

const WIDTH_SCREEN = Dimensions.get('window').width
const SkeletonItemDelivery = () => {
  return (
    <View style={styles.container}>
      <Skeleton width={75} height={75} style={{ borderRadius: 10 }} />
      <View style={{ justifyContent: 'space-between',marginLeft: 10 }}>
        <Skeleton width={150} height={10} style={{ marginVertical: 5 }} />
        <Skeleton width={160} height={10} style={{ marginVertical: 5 }} />
        <Skeleton width={100} height={10} style={{ marginVertical: 5 }} />
        <Skeleton width={180} height={10} style={{ marginVertical: 5 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    width: WIDTH_SCREEN * 0.9,
    borderColor: Colors.borderBottom,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
})

export default SkeletonItemDelivery
