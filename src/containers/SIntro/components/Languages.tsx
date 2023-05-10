import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Layout } from '../../../theme'
import Color from '../../../theme/Colors'
const Languages = () => {
    return (
        <View style={[Layout.rowCenter,styles.container]}>
            <TouchableOpacity style={styles.optionLanguage} activeOpacity={0.1}>
                <Text>Tiếng Việt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionLanguage} activeOpacity={0.1}>
                <Text>English</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    optionLanguage: {
        marginHorizontal: 18,
        borderBottomWidth: 2,
        paddingBottom: 3,
        borderBottomColor: Color.black,
    }
})
export default Languages