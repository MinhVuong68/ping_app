import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../../../components';
import { Fonts, Layout } from '../../../../theme';
import { ScrollView } from 'react-native-gesture-handler';
import ItemVehicle, { ItemVehicleProps } from '../../components/ItemVehicle';
import axiosClient from '../../../../configs/axiosClient';

const SBooking2 = () => {
  const [vehicles, setVehicles] = useState<any>([]);

  useEffect(() => {
    const fetchVehicle = async () => {
      const response = await axiosClient.get('/vehicle');
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
