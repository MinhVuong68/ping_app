import { StyleSheet } from 'react-native';
import Color from '../../../theme/Colors';

const styles = StyleSheet.create({
  viewFormLogin: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  subHeader: {
    height: 40,
    backgroundColor: '#f2f3f5',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  txtSubHeader: {
    fontSize: 13,
    color: Color.text,
  },
  btnForgotPassword: {
    marginTop: 15,
  },
  txtForgotPassword: {
    color: Color.primary,
    fontWeight: 'bold',
  },
  viewButtonGo: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
});

export default styles;
