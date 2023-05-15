import { StyleSheet } from 'react-native';

import Color from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 17,
    color: Color.text,
    fontWeight: 'bold',
  },
  viewButtonGo: {
    marginRight: 10,
    marginBottom: 10,
  }
});

export default styles;
