import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Header, NoDriver } from '../../../../components';
import ItemDelivery, { ItemDeliveryProps } from '../../components/ItemDelivery';
import { Layout } from '../../../../theme';
import axiosClient from '../../../../configs/axiosClient';
import { useSelector } from 'react-redux';

const SListDeliver = () => {
  const order = useSelector((state: any) => state.order);

  const [lsDriver, setLsDriver] = useState<any>([]);
  const [showNoDriver, setShowNoDriver] = useState(false);

  useEffect(() => {
    const getLsDriver = async () => {
      const res: any = await axiosClient.get(
        `/driver/online/${order.vehicleId}`,
      );
      setLsDriver(res);
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
                distance={4}
              />
            )}
            //keyExtractor={item => item.id}
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
