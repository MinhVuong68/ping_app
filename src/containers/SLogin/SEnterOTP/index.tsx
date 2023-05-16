import React from "react"
import { View } from "react-native"
import { Layout } from "../../../theme"
import { Header } from "../../../components"

const SEnterOTP = () => {
    return (
        <View style={Layout.full}>
            <Header title="Nhập mã xác thực" subHeader="Vui lòng không chia sẽ mã xác thực để tránh mất tài khoản"/>
        </View>
    )
}

export default SEnterOTP