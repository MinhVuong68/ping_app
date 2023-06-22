import { StyleSheet } from 'react-native'
import { Colors } from '../../../../theme'

const styles = StyleSheet.create({
    contents: {
        marginTop: 10,
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
    
      options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      },
      btn: {
        paddingHorizontal: 10,
        height: 40,
        borderWidth: 1,
        borderColor: Colors.borderBottom,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
        btnRadius: {
          borderRadius: 20,
        },
      },
    
      resultSearch: {
        marginTop: 5,
        borderRadius: 10,
        width: '100%',
        minHeight: 50,
        borderWidth: 1,
        borderColor: Colors.borderBottom,
        padding: 10,
      },
      itemResult: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      btnAddressSave: {
        marginLeft: 10,
        height: '100%',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderBottom,
        justifyContent: 'center'
      }
})

export default styles