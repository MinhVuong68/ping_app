import React, { useEffect, useRef, useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  Text,
} from 'react-native';

import Color from '../theme/Colors';
import { Pressable, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { Colors } from '../theme';
import { useDebounce } from '../hooks';
import { getAddressFromText } from '../utils/map';
import { AddressType } from '../containers/SHome/SBooking/SBooking1';

type InputProps = TextInputProps & {
  label?: string;
  cleanTextBtn?: boolean;
  validation?: any;
  onChangeValue?: (value: string) => {};
  value?: string;
  input?: TextInputProps;
  style?: ViewStyle;
  setValue?: any;
  setFormError?: any;
};
const InputAddressAutoComplete = (props: InputProps) => {
  const {
    label = '',
    validation = {},
    onChangeValue,
    value = '',
    input = {},
    style = {},
    cleanTextBtn,
    setValue = (v: AddressType) => {},
    setFormError = (b: boolean) => {},
  } = props;
  const [txtIpt, setTxtIpt] = useState<string>(value);
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState<any>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [error, setError] = useState('');

  const debouncedValue = useDebounce(txtIpt, 500);

  useEffect(() => {
    const getAddress = async () => {
      let listAddress = await getAddressFromText(txtIpt);
      if (listAddress === null) setSearchResult([]);
      else {
        setShowResult(true);
        setSearchResult([...listAddress]);
      }
    };
    getAddress();
  }, [debouncedValue]);

  //   useEffect(() => {
  //     setValue(txtIpt);
  //   }, [txtIpt]);

  const handleCleanText = () => {
    setTxtIpt('');
  };

  const handleOnChangText = (value: string) => {
    setTxtIpt(value);
  };

  const handleChosseResultSerch = (result: any) => {
    //console.log('result',result);

    setValue({
      address: result.address,
      coordinates: {
        latitude: result.location.lat,
        longitude: result.location.lng,
      },
    });
    setTxtIpt(result.address);
    setShowResult(false);
  };

  return (
    <>
      {label && <Text>{label}</Text>}
      <View style={[styles.input, style]}>
        <TextInput
          value={txtIpt}
          style={styles.txtInput}
          {...input}
          cursorColor={Color.primary}
          onChangeText={handleOnChangText}
        />
        {cleanTextBtn && !!txtIpt && (
          <Pressable onPress={handleCleanText}>
            <Icon type="AntDesign" name="closecircle" size={20} color="#ccc" />
          </Pressable>
        )}
      </View>
      {showResult && searchResult.length > 0 && (
        <View style={styles.resultSearch}>
          {searchResult.map((result: any) => {
            return (
              <TouchableOpacity
                key={result.id}
                style={styles.itemResult}
                onPress={() => handleChosseResultSerch(result)}>
                <Text>{result.address}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
      {!!error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
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
  txtInput: {
    fontSize: 16,
    width: '90%',
  },
  error: {
    fontSize: 14,
    color: Colors.error,
  },
  resultSearch: {
    marginTop: 5,
    borderRadius: 10,
    width: '100%',
    minHeight: 50,
    borderWidth: 1,
    borderColor: Colors.borderBottom,
    padding: 10,
    //backgroundColor: '#fff'
  },
  itemResult: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default InputAddressAutoComplete;
