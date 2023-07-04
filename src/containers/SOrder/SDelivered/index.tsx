import React, { useEffect, useState } from 'react';
import { View,StyleSheet, FlatList } from 'react-native';

import { Layout } from '../../../theme';
import CardOrder from '../components/CardOrder';
import NotOrderAvailable from '../components/NotOrderAvailable';
import { useSelector } from 'react-redux';
import axiosClient from '../../../configs/axiosClient';

const SDeliverd = () => {
  const [ordersCompleted, setOrdersCompleted] = useState([]);
  const currentUser = useSelector((state: any) => state.user);

  useEffect(() => {
    console.log(123);
    const getOrdersCompleted = async () => {
      const rs: any = await axiosClient(
        `/order/orders?status=${'COMPLETED'}&id=${currentUser.id}`,
      );
      setOrdersCompleted(rs);
    };
    getOrdersCompleted();
  }, []);
  return (
    <View style={Layout.full}>
      <View style={styles.contents}>
        <FlatList
          data={ordersCompleted}
          renderItem={({ item }:any) => (
            <CardOrder
              id = {item?.id}
              time={item?.requireAt.time}
              date={item?.requireAt.date}
              fromAddress={item?.fromLocation.address}
              toAddress={item?.toLocation.address}
              totalPrice={item?.totalPrice}
            />
          )}
          //keyExtractor={item => item.id}
        />
      </View>
      {/* <NotOrderAvailable /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
});

export default SDeliverd;
