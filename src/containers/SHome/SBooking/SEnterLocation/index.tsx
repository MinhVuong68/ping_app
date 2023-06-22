import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';

import { Colors, Fonts, Layout } from '../../../../theme';
import { Header, Icon } from '../../../../components';
import { useDebounce } from '../../../../hooks';
import { getAddressFromText } from '../../../../utils/map';
import styles from './styles';
import { navigate } from '../../../../navigators/utils';
import Color from '../../../../theme/Colors';

const SEnterLocation = (params: any) => {
  const [txtLocation, setTxtLocation] = useState('');
  const [searchResult, setSearchResult] = useState<any>([]);
  const debouncedValue = useDebounce(txtLocation, 500);

  const setValue = params.route.params.setValue;
  const handleChangeTxt = (value: string) => {
    setTxtLocation(value);
  };

  // useEffect(() => {
  //   const getAddress = async () => {
  //     let listAddress = await getAddressFromText(txtLocation);
  //     if (listAddress === null) setSearchResult([]);
  //     else setSearchResult([...listAddress]);

  //   };
  //   getAddress();
  // }, [debouncedValue]);

  const handleChosseResultSerch = (result: any) => {
    setValue({
      address: result.address,
      coordinate: {
        latitude: result.location.lat,
        longitude: result.location.lng,
      },
    });
    navigate('SBooking1');
  };

  return (
    <View style={Layout.full}>
      <Header title="Nhập địa chỉ" />
      <View style={styles.contents}>
        <View style={styles.options}>
          <TouchableOpacity
            style={[styles.btn, styles.btn.btnRadius]}
            //onPress={handleChooseCurrentLocation}
          >
            <Icon
              type="MaterialIcons"
              name="my-location"
              size={20}
              color={Colors.primary}
            />
            <Text style={{ marginLeft: 6 }}>Vị trí hiện tại của bạn</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.inputSearch}
          placeholder="Nhập địa chỉ của bạn"
          onChangeText={text => handleChangeTxt(text)}
        />
        {searchResult.length > 0 && (
          <View style={styles.resultSearch}>
            {searchResult.map((result: any) => {
              return (
                <TouchableOpacity
                  key={result.id}
                  style={styles.itemResult}
                  onPress={() => handleChosseResultSerch(result)}>
                  <Text>{result.address}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        <View style={[Layout.rowVCenter, { height: 60 }]}>
          <Icon type="Entypo" name="save" size={20} color={Colors.primary} />
          <TouchableOpacity
            style={styles.btnAddressSave}
            onPress={() => navigate('SSavedAddress')}>
            <Text style={[Fonts.textRegular]}>Địa chỉ đã lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SEnterLocation;
