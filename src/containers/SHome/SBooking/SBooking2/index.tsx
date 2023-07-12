import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { Header } from '../../../../components';
import { Fonts, Layout } from '../../../../theme';
import { ScrollView } from 'react-native-gesture-handler';
import ItemVehicle, { ItemVehicleProps } from '../../components/ItemVehicle';
import axiosClient from '../../../../configs/axiosClient';
import { RootState, useAppDispatch } from '@/redux/store';
import { getAllVehicle } from '@/redux/booking/orderBookingSlice';

const SBooking2 = () => {
  const [vehicles, setVehicles] = useState<any>([]);

  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchVehicle = async () => {
      const response = await dispatch(getAllVehicle()).unwrap()
      setVehicles(response);
    };
    fetchVehicle();
  }, []);

  return (
    <SafeAreaView style={Layout.full}>
      <Header title="Phương tiện giao hàng" />
      <View style={styles.content}>
        <Text style={[Fonts.textRegularBold, { marginLeft: 20 }]}>
          Phương tiện có sẳn
        </Text>
        <ScrollView>
          <View style={styles.viewVehicles}>
            {vehicles.map((item: ItemVehicleProps) => {
              return (
                <ItemVehicle
                  key={item.id}
                  id={item.id}
                  nameVehicle={item.nameVehicle}
                  imageVehicle={item.imageVehicle}
                  weight={item.weight}
                  cbm={item.cbm}
                  length={item.length}
                  width={item.width}
                  height={item.height}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 15,
  },
  viewVehicles: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 80,
  },
});

export default SBooking2;
