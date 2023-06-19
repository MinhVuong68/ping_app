import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors, Fonts, Layout } from '../../../theme';
import { Icon } from '../../../components';
import { navigate } from '../../../navigators/utils';

export interface ItemVehicleProps {
  id: number;
  nameVehicle: string;
  imageVehicle: string;
  weight: number;
  cbm: number;
  length: number;
  width: number;
  height: number;
}

const ItemVehicle = ({
  id,
  nameVehicle,
  imageVehicle,
  weight,
  cbm,
  length,
  width,
  height,
}: ItemVehicleProps) => {
  const handleChooseVehicle = () => {
    navigate('SBooking3');
  };

  return (
    <>
      <TouchableOpacity
        style={styles.viewVehicleItem}
        onPress={handleChooseVehicle}>
        <Image source={{ uri: imageVehicle }} style={styles.imgVehicle} />
        <View style={styles.viewVehiclesInfo}>
          <Text
            style={Fonts.textRegularBold}>{`${nameVehicle} ${weight} Kg`}</Text>
          <Text>{`Hoạt động tất cả khung giờ | Chở tối đa ${weight}Kg & ${cbm}CBM`}</Text>
          <View style={Layout.rowVCenter}>
            <Icon
              type="AntDesign"
              name="CodeSandbox"
              size={16}
              color={Colors.borderIpt}
            />
            <Text style={{ marginLeft: 8 }}>
              {`${length} x ${width} x ${height} Mét * Đến ${weight} Kg`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  viewVehicleItem: {
    height: 110,
    width: '90%',
    borderColor: Colors.borderBottom,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgVehicle: {
    marginHorizontal: 15,
    width: 55,
    height: 55,
  },

  viewVehiclesInfo: {
    maxWidth: 250,
    justifyContent: 'space-between',
  },
});

export default ItemVehicle;
