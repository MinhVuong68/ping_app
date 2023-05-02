import React, { useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Button from './components/Button';
import Intro from './components/Intro';
import styles from './styles/SIntroStyle';
import { Colors, Layout } from '../../theme';

const screenSizeWidth = Dimensions.get('window').width;

type CarouselItemType = {
  imgLink: any;
  title: string;
  content: string;
};
const SIntro = () => {
  const [, setCurrentPage] = useState(1);
  
  const images: Array<CarouselItemType> = [
    {
      imgLink: require('../../assets/images/intro1.png'),
      title: 'Trò chuyện mọi lúc mọi nơi',
      content: 'Trò chuyện thật đã và chất lượng mọi lúc, mọi nơi',
    },
    {
      imgLink: require('../../assets/images/intro2.png'),
      title: 'Gọi video ổn định',
      content:
        'Trò chuyện thật đã và chất lượng video ổn định, mọi lúc mọi nơi',
    },
    {
      imgLink: require('../../assets/images/intro3.png'),
      title: 'Gửi ảnh nhanh chống',
      content:
        'Trao đổi hình ảnh chất lượng cao với bạn bè và người thân thật nhanh chóng và dễ dàng',
    },
  ];

  const _renderItem = ({ item }: { item: CarouselItemType; index: number }) => {
    return (
      <Intro imgLink={item.imgLink} title={item.title} content={item.content} />
    );
  };
  return (
    <View
      style={[Layout.full]}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 34,
          color: '#0273fc',
        }}>
        Ping
      </Text>
      <View style={styles.viewIntro}>
        <Carousel
          data={images}
          renderItem={_renderItem}
          loop
          width={screenSizeWidth}
          // height={width / 2}
          autoPlay={true}
          autoPlayInterval={2000}
          enableSnap={true}
          onSnapToItem={(slideIndex: number) => {
            setCurrentPage(slideIndex);
          }}
          style={{
            flex: 0,
            width: '100%',
            justifyContent: 'center',
          }}
        />
      </View>
      <View style={styles.viewBtnGroup}>
        <Button
          title="ĐĂNG NHẬP"
          onPress={() => {}}
          style={{ backgroundColor: Colors.primary, marginBottom: 15 }}
          styleTitle={{ color: Colors.white }}
        />
        <Button
          title="ĐĂNG KÝ"
          onPress={() => {}}
          style={{ backgroundColor: Colors.secondary }}
          styleTitle={{ color: Colors.text }}
        />
      </View>
    </View>
  );
};

export default SIntro;
