import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  full: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowVCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowHCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  alignItemsEnd: {
    alignItems: 'flex-end'
  }
});
