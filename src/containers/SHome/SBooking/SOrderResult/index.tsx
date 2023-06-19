import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { Colors, Layout } from '../../../../theme';
import { Header } from '../../../../components';
import ItemInfo from '../../components/ItemInfo';
import ItemPayment from '../../components/ItemPayment';
import Button from '../../../SIntro/components/Button';
import { navigate } from '../../../../navigators/utils';

const WIDTH_SCREEN = Dimensions.get('window').width;
const SOrderResult = () => {
  return (
    <View style={Layout.full}>
      <Header title="Chi tiết đơn hàng" />
      <View style={styles.content}>
        <View style={styles.box}>
          <Text>Bên giao hàng:</Text>
          <ItemInfo
            icon={{ type: 'AntDesign', name: 'user', color: Colors.primary }}
            text="Nguyễn Minh Vương"
          />
          <ItemInfo
            icon={{ type: 'AntDesign', name: 'phone', color: Colors.primary }}
            text="0899306681"
          />
          <ItemInfo
            icon={{ type: 'FontAwesome', name: 'bullseye', color: 'green' }}
            text="158/7 Tân Sơn Nhì, phường Tân Sơn Nhì, Tân Phú, Hồ Chí Minh"
          />
        </View>
        <View style={styles.box}>
          <Text>Bên nhận hàng:</Text>
          <ItemInfo
            icon={{ type: 'AntDesign', name: 'user', color: Colors.blue }}
            text="Nguyễn Văn Nam"
          />
          <ItemInfo
            icon={{ type: 'AntDesign', name: 'phone', color: Colors.blue }}
            text="0797002411"
          />
          <ItemInfo
            icon={{ type: 'Entypo', name: 'location-pin', color: 'red' }}
            text="143 Lý Thường Kiệt, Quận 11, Thành Phố Hồ Chí Minh"
          />
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
          text="Quay lại điểm giao hàng"
        />
        <ItemPayment/>
        
      </View>
      <View style={Layout.rowCenter}>
      <Button
          title="Đặt đơn"
          onPress={() => {navigate('SListDeliver')}}
          style={{ backgroundColor: Colors.primary, marginBottom: 15 }}
          styleTitle={{ color: Colors.white }}
        />
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    //alignItems: 'center'
  },
  box: {
    width: '100%',
    minHeight: 100,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: Colors.borderBottom,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: Colors.borderBottom,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
  },
  viewPayment: {
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default SOrderResult;
