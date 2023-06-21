import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { Layout } from '../../../theme';
import NotOrderAvailable from '../components/NotOrderAvailable';
import CardOrder from '../components/CardOrder';

const SDelivering = () => {
  return (
    <View style={Layout.full}>
      <View style={styles.contents}>
        {/* code when have in list delivered not empty */}
        <ScrollView>
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </ScrollView>
      </View>
      {/* <NotOrderAvailable /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
});

export default SDelivering;
