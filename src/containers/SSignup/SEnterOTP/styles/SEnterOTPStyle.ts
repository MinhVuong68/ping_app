import { StyleSheet } from 'react-native';
import Color from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-between'
  },
  viewNoti: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNoti: {
    fontSize: 15,
    color: Color.black,
    fontWeight: 'bold',
  },
  txtPlease: {
    fontSize: 15,
    color: Color.black,
  },
  viewButtonGo: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  }
});

export default styles;
