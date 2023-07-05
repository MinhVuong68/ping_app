import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { Layout } from '../../../theme';
import NotOrderAvailable from '../components/NotOrderAvailable';
import CardOrder from '../components/CardOrder';
import axiosClient from '../../../configs/axiosClient';

const SDelivering = () => {
  const [ordersComing, setOrdersComing] = useState([]);
  const currentUser = useSelector((state: any) => state.user);

  useEffect(() => {
    const getOrdersCompleted = async () => {
      const rs: any = await axiosClient(
        `/order/orders?status=${'COMING'}&id=${currentUser.id}`,
      );
      setOrdersComing(rs);
    };
    getOrdersCompleted();
  }, []);

  return (
    <View style={Layout.full}>
      {ordersComing.length ? (
        <View style={styles.contents}>
          <FlatList
            data={ordersComing}
            renderItem={({ item }: any) => (
              <CardOrder
                id={item?.id}
                time={item?.requireAt.time}
                date={item?.requireAt.date}
                fromAddress={item?.fromLocation.address}
                toAddress={item?.toLocation.address}
                totalPrice={item?.totalPrice}
              />
            )}
          />
        </View>
      ) : (
        <NotOrderAvailable />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
});

export default SDelivering;
