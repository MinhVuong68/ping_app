import React from "react"
import { Text, View, StyleSheet} from "react-native"

import { Layout } from "../../../theme"
import { Header, Input } from "../../../components"

const SBooking3 = () => {
    return (
        <View style={Layout.full}>
            <Header title="Bổ sung chi tiết"/>
            <View style={styles.content}>
                <Input label="Số lượng gói hàng:"/>
                <Input label="ghi chú:" input={{multiline: true,numberOfLines: 5}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 10
    }
})

export default SBooking3