import React from 'react'
import { Dimensions, Text, View, StyleSheet} from 'react-native'

import { Header, Skeleton } from '../../components'
import { Layout } from '../../theme'

const SNotification = () => {
  const cardWidth = Dimensions.get('window').width * 0.8
  const skeWidth = cardWidth - 32

  return (
    <View style={Layout.full}>
      <Header title="Thông báo" />
      <View style={[styles.card, { width: cardWidth }]}>
        <Skeleton height={40} width={40} style={{ borderRadius: 20 }} />
        <Skeleton
          height={(skeWidth / 16) * 9}
          width={skeWidth}
          style={{ borderRadius: 8, marginTop: 10 }}
        />
        <Skeleton
          height={10}
          width={skeWidth}
          style={{ borderRadius: 8, marginTop: 8 }}
        />
        <Skeleton
          height={10}
          width={skeWidth}
          style={{ borderRadius: 8, marginTop: 8 }}
        />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    borderRadius: 8,
  },
})

export default SNotification
