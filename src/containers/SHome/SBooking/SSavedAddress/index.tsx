import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';

import { Colors, Fonts, Layout } from '../../../../theme';
import { Header, Icon, Input } from '../../../../components';
import Button from '../../../SIntro/components/Button';
import axiosClient from '../../../../configs/axiosClient';
import {
  setLocationReceiver,
  setLocationSender,
} from '../../../../redux/slices/orderSlice';
import { navigate } from '../../../../navigators/utils';
import { useDebounce } from '../../../../hooks';
import { getAddressFromText } from '../../../../utils/map';
import { AddressType } from '../SBooking1';
import { LocationType } from '../../../../redux/type';

type SavedAddressType = {
  id: number;
  placeName: string;
  address: string;
  latitude: number;
  longitude: number;
  customerId?: number
};

const SSavedAddress = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user);
  const order = useSelector((state: any) => state.order);

  const [loading, setLoading] = useState(false);
  const [savedAddress, setSavedAddress] = useState<Array<SavedAddressType>>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [placeName, setPlaceName] = useState('');
  const [txtLocation, setTxtLocation] = useState('');
  const [searchResult, setSearchResult] = useState<any>([]);
  const [location,setLocation] = useState<LocationType|null>(null)
  const debouncedValue = useDebounce(txtLocation, 5000);

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
  //   //if(searchResult.length === 0) return ;
  // }, [debouncedValue]);
  useEffect(() => {
    const getAllSaveAddress = async () => {
      setLoading(true);
      const placeSaved: Array<SavedAddressType> = await axiosClient.get(
        `/place-saved/${currentUser.id}`,
      );
      setSavedAddress(placeSaved);
      setLoading(false);
    };
    getAllSaveAddress();
  }, []);

  const handleChoosePlaceSaved = (item: any) => {
    if (order.isWho === 'sender') {
      dispatch(
        setLocationSender({
          address: item.address,
          latitude: item.latitude,
          longitude: item.longitude,
        }),
      );
      navigate('SBooking1');
    } else if (order.isWho === 'receiver') {
      dispatch(
        setLocationReceiver({
          address: item.address,
          latitude: item.latitude,
          longitude: item.longitude,
        }),
      );
      navigate('SBooking1');
    }
  };

  const handleChosseResultSearch = (result: any) => {
    setTxtLocation(result.address)
    setLocation({
      address: result.address,
      coordinate: {
        latitude: result.location.lat,
        longitude: result.location.lng,
      }
    })
    setSearchResult([])
  };

  const onSave = async () => {
    const res:SavedAddressType = await axiosClient.post("/place-saved",{
      placeName: placeName,
      address: location?.address,
      latitude: location?.coordinate.latitude,
      longitude: location?.coordinate.longitude,
      customerId: currentUser.id
    })
    setSavedAddress([...savedAddress,res])
    setModalVisible(false)
  }
  const _renderItem = ({ item }: { item: SavedAddressType; index: number }) => {
    return (
      <View style={[Layout.rowVCenter, { height: 60 }]}>
        <Icon type="Entypo" name="address" size={20} color={Colors.primary} />
        <TouchableOpacity
          style={[styles.btnAddressSave]}
          onPress={() => {
            handleChoosePlaceSaved(item);
          }}>
          <Text style={Fonts.textRegular}>{item.placeName}</Text>
          <Text>{item.address}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Layout.full}>
      <Header title="Địa chỉ đã lưu" />
      <View style={styles.contents}>
        <View style={[Layout.rowVCenter, { height: 60 }]}>
          <Icon
            type="AntDesign"
            name="addfile"
            size={20}
            color={Colors.primary}
          />
          <TouchableOpacity
            style={styles.btnAddressSave}
            onPress={() => setModalVisible(true)}>
            <Text style={[Fonts.textRegular]}>Thêm địa chỉ</Text>
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator color={Colors.primary} />}
        <FlatList
          data={savedAddress}
          renderItem={_renderItem}
          //keyExtractor={item => item.id}
        />

        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={modalVisible}
          onBackButtonPress={() => setModalVisible(false)}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 10,
              minHeight: 400,
            }}>
            <Input
              label="Tên địa điểm:"
              value={placeName}
              setValue={setPlaceName}
              validation={{
                match: /^[\p{L} ]*[0-9]*$/u,
              }}
            />
            <TextInput
              style={styles.inputSearch}
              placeholder="Nhập địa chỉ của bạn"
              onChangeText={text => handleChangeTxt(text)}
              value={txtLocation}
            />
            {searchResult.length > 0 && (
              <View style={styles.resultSearch}>
                {searchResult.map((result: any) => {
                  return (
                    <TouchableOpacity
                      key={result.id}
                      style={styles.itemResult}
                      onPress={() => handleChosseResultSearch(result)}>
                      <Text>{result.address}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
            <View style={Layout.rowHCenter}>
              <Button
                title="Lưu"
                //onPress={setInfoOrdera}
                style={{ backgroundColor: Colors.primary, marginTop: 15 }}
                styleTitle={{ color: Colors.white }}
                onPress={onSave}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.borderIpt,
    paddingHorizontal: 10,
    marginVertical: 4,
    marginBottom: 5,
  },
  btnAddressSave: {
    marginLeft: 10,
    height: '100%',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottom,
    justifyContent: 'center',
    paddingRight: 30,
  },
  resultSearch: {
    marginTop: 5,
    borderRadius: 10,
    width: '100%',
    minHeight: 50,
    borderWidth: 1,
    borderColor: Colors.borderBottom,
    padding: 10,
  },
  itemResult: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SSavedAddress;
