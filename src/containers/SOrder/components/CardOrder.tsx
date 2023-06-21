import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

import { Colors, Fonts, Layout } from '../../../theme';
import { Icon } from '../../../components';
import { navigate } from '../../../navigators/utils';
const CardOrder = () => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.container} onPress={() => navigate('SOrderDetail')}>
      <View>
        <Text>23-05-2023 | 05:06</Text>
        <View style={styles.viewLocation}>
          <View style={Layout.rowVCenter}>
            <Icon
              type="FontAwesome"
              name="dot-circle-o"
              color="green"
              size={22}
            />
            <Text style={[Fonts.textRegular, { marginLeft: 10 }]}>
              158/7 Tân Sơn Nhì, Tân Phú, Hồ Chí Minh
            </Text>
          </View>
          <Icon type="Entypo" name="dots-three-vertical" size={22} />
          <View style={Layout.rowVCenter}>
            <Icon
              type="Entypo"
              name="location-pin"
              color={Colors.primary}
              size={22}
            />
            <Text
              style={[
                Fonts.textRegular,
                Layout.rowVCenter,
                { marginLeft: 10 },
              ]}>
              147 Lý Thường Kiệt, quận 11, Thành phố Hồ Chí Minh
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={Fonts.textLargeBold}>Đơn giá: 190.000 vnđ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 100,
    borderWidth: 1,
    borderColor: Colors.borderBottom,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  viewLocation: {
    paddingVertical: 10,
    borderBottomColor: Colors.borderBottom,
    borderBottomWidth: 1,
  },
});

export default CardOrder;
