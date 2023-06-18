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
    minHeight: 92,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderBottom,
  },
});

export default styles;
