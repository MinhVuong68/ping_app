import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Layout } from '../../../theme';
import CardOrder from '../components/CardOrder';
import NotOrderAvailable from '../components/NotOrderAvailable';

const SDeliverd = () => {
  return (
    <View style={Layout.full}>
      {/* <View style={styles.contents}>
        <ScrollView>
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </ScrollView>
      </View> */}
      <NotOrderAvailable />
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
});

export default SDeliverd;
