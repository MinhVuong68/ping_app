import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Header, NoDriver } from '../../../../components';
import ItemDelivery, { ItemDeliveryProps } from '../../components/ItemDelivery';
import { Layout } from '../../../../theme';
import axiosClient from '../../../../configs/axiosClient';
import { useSelector } from 'react-redux';
import { calcDistance2Location } from '../../../../utils/map';
import { convertMeterToKilometer } from '../../../../utils';

const SListDeliver = () => {
  const order = useSelector((state: any) => state.order);

  const [lsDriver, setLsDriver] = useState<any>([]);
  const [showNoDriver, setShowNoDriver] = useState(false);

  useEffect(() => {
    const getLsDriver = async () => {
      const res: any = await axiosClient.get(
        `/driver/online/${order.vehicle.vehicleId}`,
      );

      for(let i = 0;i<res.length;i++){
        const locationSender = order.locationSender.coordinate;
        const locationDriver = {latitude: res[i].latitude, longitude: res[i].longitude}

        const coordinateSender = locationSender.latitude+','+locationSender.longitude
        const coordinateDriver = locationDriver.latitude+','+locationDriver.longitude

        const rs:any = await calcDistance2Location(coordinateSender,coordinateDriver)
        const distanceKm = convertMeterToKilometer(rs.result.routeRows[0].elements[0]?.distance?.value)
        
        setLsDriver((prevLsDriver:any) => [...prevLsDriver,{...res[i],distance: distanceKm}])
      }

      setShowNoDriver(res.length == 0);
    };
    getLsDriver();
  }, []);

  return (
    <View style={Layout.full}>
      <Header title="Nhân viên giao hàng" />
      {!showNoDriver ? (
        <View style={styles.contents}>
          <FlatList
            data={lsDriver}
            renderItem={({ item }) => (
              <ItemDelivery
                id={item.id}
                imageUri={item.avatar}
                name={item.fullName}
                carNumberPlate={item.licensePlate}
                vote={item.reviewRate}
                distance={item.distance}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <NoDriver />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
});

export default SListDeliver;
