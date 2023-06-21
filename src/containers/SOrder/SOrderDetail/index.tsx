import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../theme';
import { Header, Icon } from '../../../components';
import ItemPayment from '../../SHome/components/ItemPayment';
import CardContactDeliver from '../components/CardContactDeliver';
import Button from '../../SIntro/components/Button';
import { navigate } from '../../../navigators/utils';
import Vote from '../components/Vote';
import ItemInfo from '../../SHome/components/ItemInfo';

const SOrderDetail = () => {
  const [status, setStatus] = useState(true);
  return (
    <View style={Layout.full}>
      <Header title="Chi tiết đơn hàng" />
      <View style={styles.contents}>
        <Text>23-05-2023 | 05:06</Text>
        <Text style={[Fonts.textLargeBold, { marginTop: 10 }]}>#1456</Text>
        <CardContactDeliver status/>
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
                158/7 Tân Sơn Nhì, Tân Phú, Hồ Chí Minh
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
                147 Lý Thường Kiệt, quận 11, Thành phố Hồ Chí Minh
              </Text>
            </View>
          </View>
        </View>
        <ItemInfo
          icon={{ type: 'FontAwesome', name: 'truck', color: Colors.primary }}
          text="Xe tải 1000 Kg"
        />
        <ItemInfo
          icon={{
            type: 'MaterialIcons',
            name: 'published-with-changes',
            color: Colors.primary,
          }}
          text="Quay lại điểm nhận hàng"
        />
        <ItemPayment />
        <View style={Layout.colVCenter}>
            <Vote/>
          <Button
            title="Theo dõi giao hàng"
            onPress={() => {
              navigate('SDeliveryTracking');
            }}
            style={{ backgroundColor: Colors.blue, marginTop: 30 }}
            styleTitle={{ color: Colors.white }}
          />
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
