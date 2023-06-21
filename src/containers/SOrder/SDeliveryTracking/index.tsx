import React from "react"
import { Dimensions, Text, View } from "react-native"
import { Layout } from "../../../theme"
import { Header } from "../../../components"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.02;

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let INITIAL_POSITION = {
  latitude: 10.824371876108833,
  longitude: 106.69208107191297,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const SDeliveryTracking = () => {
    return (
        <View style={Layout.full}>
            <Header title="Giám sát giao hàng"/>
            
            <MapView
          //ref={mapRef}
          style={{
            width: '100%',
            height: Dimensions.get("window").height,
          }}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
          zoomEnabled={true}
          //onRegionChangeComplete={handleGetPossion}
        ></MapView>
           
            
          {/* {isEnabled && <Marker coordinate={currentLoction?.coordinate} />} */}
        
            
        </View>
    )
}

export default SDeliveryTracking