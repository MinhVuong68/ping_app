import React, { useEffect, useRef } from 'react'
import { View, Animated, ViewStyle, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

type SkeletonProps = {
  width: number 
  height: number
  style?: ViewStyle
}

const Skeleton = ({ width, height, style }: SkeletonProps) => {
  const translateX = useRef(new Animated.Value(-width)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      }),
    ).start()
  }, [width])
  return (
    <View
      style={StyleSheet.flatten([
        {
          width: width,
          height: height,
          backgroundColor: 'rgba(0,0,0,0.12)',
          overflow: 'hidden',
        },
        style,
      ])}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [{ translateX: translateX }],
        }}>
        <LinearGradient
          style={{ width: '100%', height: '100%' }}
          colors={['transparent', 'rgba(0,0,0,0.05)', 'transparent']}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  )
}

export default Skeleton
