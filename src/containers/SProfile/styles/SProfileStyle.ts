import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme';

const styles = StyleSheet.create({
  viewItem: {
    paddingVertical: 15,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottom,
  },
  titleItem: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.text,
  },
  viewInfo: {
    minHeight: 130,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: Colors.borderBottom,
  },
});

export default styles;
