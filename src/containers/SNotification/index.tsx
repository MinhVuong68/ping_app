import React,{useEffect} from "react"
import { Text, View } from "react-native"

import { Header, Updating } from "../../components"
import { Layout } from "../../theme"

const SNotification = () => {
    return (
        <View style={Layout.full}>
            <Header title="Thông báo"/>
            {/* <Updating/> */}
        </View>
    )
}

export default SNotification