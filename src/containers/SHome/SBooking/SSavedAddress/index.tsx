import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

import { Colors, Fonts, Layout } from '../../../../theme';
import { Header, Icon, Input } from '../../../../components';
import Button from '../../../SIntro/components/Button';
import { navigate } from '../../../../navigators/utils';

const SSavedAddress = () => {
  const [modalVisible, setModalVisible] = useState(false);

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

        <View style={[Layout.rowVCenter, { height: 60 }]}>
          <Icon type="Entypo" name="address" size={20} color={Colors.primary} />
          <TouchableOpacity
            style={styles.btnAddressSave}
            onPress={() => setModalVisible(true)}>
            <Text style={[Fonts.textRegular]}>Thêm địa chỉ</Text>
          </TouchableOpacity>
        </View>
        <View style={[Layout.rowVCenter, { height: 60 }]}>
          <Icon type="Entypo" name="address" size={20} color={Colors.primary} />
          <TouchableOpacity
            style={styles.btnAddressSave}
            onPress={() => setModalVisible(true)}>
            <Text style={[Fonts.textRegular]}>Thêm địa chỉ</Text>
          </TouchableOpacity>
        </View>
        <View style={[Layout.rowVCenter, { height: 60 }]}>
          <Icon type="Entypo" name="address" size={20} color={Colors.primary} />
          <TouchableOpacity
            style={styles.btnAddressSave}
            onPress={() => setModalVisible(true)}>
            <Text style={[Fonts.textRegular]}>Thêm địa chỉ</Text>
          </TouchableOpacity>
        </View>

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
            <Input label="Tên địa điểm:" />
            <TextInput
              style={styles.inputSearch}
              placeholder="Nhập địa chỉ của bạn"
              //onChangeText={text => handleChangeTxt(text)}
            />
            <View style={Layout.rowHCenter}>
              <Button
                title="Lưu"
                //onPress={setInfoOrdera}
                style={{ backgroundColor: Colors.primary, marginTop: 15 }}
                styleTitle={{ color: Colors.white }}
                onPress={function () {
                  throw new Error('Function not implemented.');
                }}
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
  },
});

export default SSavedAddress;
