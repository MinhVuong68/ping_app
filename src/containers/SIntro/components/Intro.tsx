import React from 'react';
import { Dimensions } from 'react-native';
import { View, Image, Text, StyleSheet } from 'react-native';

interface IIntroProps {
  imgLink: any;
  title: string;
  content: string;
}

const windowWidth = Dimensions.get('window').width;

const Intro = ({
  imgLink = require('../../../assets/images/intro1.png'),
  title = '',
  content = '',
}: IIntroProps) => {
  return (
    <View style={styles.imageView}>
      <Image style={styles.image} source={imgLink} />
      <View style={styles.contentView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
  },
  contentView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 170,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  content: {
    textAlign: 'center',
  },
});

export default Intro;
