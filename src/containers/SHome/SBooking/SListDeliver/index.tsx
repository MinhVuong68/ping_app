import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Header } from '../../../../components';
import ItemDelivery, { ItemDeliveryProps } from '../../components/ItemDelivery';
import { Layout } from '../../../../theme';

const dataTesst: Array<ItemDeliveryProps> = [
  {
    id: 1,
    imageUri:
      'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira6.jpg?alt=media&token=995ffeba-2148-4fe9-a16b-01496a4247c3',
    name: 'Nguyễn Hải Bảo',
    carNumberPlate: '62L1 456789',
    vote: 5,
    distance: 2.1,
  },
  {
    id: 2,
    imageUri:
      'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira.jfif?alt=media&token=9f645da4-eb52-4010-914c-d00a44697028',
    name: 'Nguyễn Hải Bảo',
    carNumberPlate: '62L1 456789',
    vote: 5,
    distance: 2.1,
  },
  {
    id: 3,
    imageUri:
      'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira2.jfif?alt=media&token=e71ba464-3a86-406a-9d96-0496ea55fdc0',
    name: 'Nguyễn Hải Bảo',
    carNumberPlate: '62L1 456789',
    vote: 5,
    distance: 2.1,
  },
  {
    id: 4,
    imageUri:
      'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira3.jfif?alt=media&token=c1676b9c-ddf7-448e-a9ec-8005f7c48e89',
    name: 'Nguyễn Hải Bảo',
    carNumberPlate: '62L1 456789',
    vote: 5,
    distance: 2.1,
  },
  {
    id: 5,
    imageUri:
      'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira4.jfif?alt=media&token=90328df4-ffbc-4a5e-9b5e-2758b594f9d0',
    name: 'Nguyễn Hải Bảo',
    carNumberPlate: '62L1 456789',
    vote: 5,
    distance: 2.1,
  },
  {
    id: 6,
    imageUri:
      'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira5.jfif?alt=media&token=09da88f3-0679-44c5-a1fd-01f98e02c92f',
    name: 'Nguyễn Hải Bảo',
    carNumberPlate: '62L1 456789',
    vote: 5,
    distance: 2.1,
  },
  {
    id: 7,
    imageUri:
      'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira7.jfif?alt=media&token=91f05810-0a35-4733-bfd7-bf3bd73a5b1d',
    name: 'Nguyễn Hải Bảo',
    carNumberPlate: '62L1 456789',
    vote: 5,
    distance: 2.1,
  },
];

const SListDeliver = () => {
  return (
    <View style={Layout.full}>
      <Header title="Người giao hàng" />
      <View style={styles.contents}>
        <FlatList
          data={dataTesst}
          renderItem={({ item }) => (
            <ItemDelivery
              id={item.id}
              imageUri={item.imageUri}
              name={item.name}
              carNumberPlate={item.carNumberPlate}
              vote={item.vote}
              distance={item.distance}
            />
          )}
          //keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
});

export default SListDeliver;
