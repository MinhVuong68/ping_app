import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Colors, Fonts, Layout } from '../../../theme';
import { Header, Icon } from '../../../components';
import ItemPayment from '../../SHome/components/ItemPayment';
import CardContactDeliver from '../components/CardContactDeliver';
import Button from '../../SIntro/components/Button';
import { navigate } from '../../../navigators/utils';
import Vote from '../components/Vote';
import ItemInfo from '../../SHome/components/ItemInfo';
import axiosClient from '../../../configs/axiosClient';

const SOrderDetail = ({ route }: any) => {
  const orderId = route.params.id;
  const [orderDetail, setOrderDetail] = useState<any>({});

  console.log(orderId);

  useEffect(() => {
    const getOrderDetail = async () => {
      const res: any = await axiosClient.get(`/order/${orderId}`);
      setOrderDetail(res);
    };
    getOrderDetail();
  }, []);

  return (
    <View style={Layout.full}>
      <Header title="Chi tiết đơn hàng" />
      <View style={styles.contents}>
        <Text>
          {orderDetail?.requireAt?.date} | {orderDetail?.requireAt?.time}
        </Text>
        <Text style={[Fonts.textLargeBold, { marginTop: 10 }]}>
          #{orderDetail?.id}
        </Text>
        <CardContactDeliver
          linkAvatar={orderDetail?.driver?.avatar}
          name={orderDetail?.driver?.fullName}
          licensePlate={orderDetail?.driver?.licensePlate}
          reviewRate={orderDetail?.driver?.reviewRate}
          status={false}
          phoneContact={orderDetail?.driver?.phoneNumber}
        />
        <View style={styles.viewLocation}>
          <View style={Layout.rowVCenter}>
            <Icon
              type="FontAwesome"
              name="dot-circle-o"
              color="green"
              size={22}
            />
            <View style={[Layout.col, { marginLeft: 10 }]}>
              <Text>Nhận hàng:</Text>
              <Text style={Fonts.textRegular}>
                {orderDetail?.fromLocation?.address}
              </Text>
            </View>
          </View>
          <Icon type="Entypo" name="dots-three-vertical" size={22} />
          <View style={Layout.rowVCenter}>
            <Icon
              type="Entypo"
              name="location-pin"
              color={Colors.primary}
              size={22}
            />
            <View style={[Layout.col, { marginLeft: 10 }]}>
              <Text>Giao hàng:</Text>
              <Text style={[Fonts.textRegular, Layout.rowVCenter]}>
                {orderDetail?.toLocation?.address}
              </Text>
            </View>
          </View>
        </View>
        <ItemInfo
          icon={{ type: 'FontAwesome', name: 'truck', color: Colors.primary }}
          text={`${orderDetail?.vehicle?.nameVehicle} ${orderDetail?.vehicle?.weight} Kg`}
        />
        {orderDetail.goBack && (
          <ItemInfo
            icon={{
              type: 'MaterialIcons',
              name: 'published-with-changes',
              color: Colors.primary,
            }}
            text="Quay lại điểm nhận hàng"
          />
        )}
        {!!orderDetail.customerNote && (
          <ItemInfo
            icon={{
              type: 'MaterialCommunityIcons',
              name: 'note-edit-outline',
              color: Colors.primary,
            }}
            text={orderDetail.customerNote}
          />
        )}
        <ItemPayment
          price={orderDetail?.price}
          discountMoney={orderDetail?.priceDiscount}
          totalPrice={orderDetail?.totalPrice}
        />
        <View style={Layout.colVCenter}>
          {orderDetail.orderStatus !== 'COMPLETED' ? (
            <Button
              title="Theo dõi giao hàng"
              onPress={() => {
                navigate('SDeliveryTracking');
              }}
              style={{ backgroundColor: Colors.blue, marginTop: 30 }}
              styleTitle={{ color: Colors.white }}
            />
          ) : (
            <Vote />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
  viewLocation: {
    paddingVertical: 10,
    borderBottomColor: Colors.borderBottom,
    borderBottomWidth: 1,
  },
});

export default SOrderDetail;
