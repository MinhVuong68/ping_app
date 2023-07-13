import React from 'react'
import { View } from 'react-native'

import { Skeleton } from '@/components'
import { Colors } from '@/theme'

const SkeletonCardOrder = () => {
  return (
    <View
      style={{
        width: '100%',
        minHeight: 100,
        borderWidth: 1,
        borderColor: Colors.borderBottom,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
      }}>
      <Skeleton
        height={12}
        width={130}
        style={{ borderRadius: 8, marginBottom: 10 }}
      />
      <View
        style={{
          borderBottomColor: Colors.borderBottom,
          borderBottomWidth: 1,
        }}>
        <Skeleton height={30} width={350} style={{ marginBottom: 30 }} />
        <Skeleton height={30} width={350} style={{ marginBottom: 10 }} />
      </View>
      <Skeleton height={30} width={150} style={{ marginVertical: 10 }} />
    </View>
  )
}

export default SkeletonCardOrder
