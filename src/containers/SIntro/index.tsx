import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Button from './components/Button';
import Intro from './components/Intro';
import styles from './styles/SIntroStyle';
import { Colors, Images, Layout } from '../../theme';
import Languages from './components/Languages';
import { navigate } from '../../navigators/utils';

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
      imgLink: Images.intro1,
      title: 'Giao hàng nhanh chóng',
      content: 'Hãy để chúng tôi mang đến cho bạn trải nghiệm giao hàng nhanh chóng nhất!',
    },
    {
      imgLink: Images.intro2,
      title: 'Giao hàng tận nơi',
      content:
        'Không cần lo lắng về việc nhận hàng, chúng tôi sẽ đến tận nơi mang đến sự tiện lợi cho bạn!',
    },
    {
      imgLink: Images.intro3,
      title: 'Giao hàng mọi nơi',
      content:
        'Chinh phục mọi khoảng cách - Giao hàng đến mọi ngõ ngách, không giới hạn!',
    },
  ];

  const _renderItem = ({ item }: { item: CarouselItemType; index: number }) => {
    return (
      <Intro imgLink={item.imgLink} title={item.title} content={item.content} />
    );
  };
  return (
    <View style={[Layout.full]}>
      <Text style={styles.txtHeader}>Ping</Text>
      <View style={styles.viewIntro}>
        <Carousel
          data={images}
          renderItem={_renderItem}
          loop
          width={screenSizeWidth}
          //height={width / 2}
          autoPlay={true}
          autoPlayInterval={2000}
          enableSnap={true}
          autoPlayReverse
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
          onPress={() => {
            navigate('SLogin');
          }}
          style={{ backgroundColor: Colors.primary, marginBottom: 15 }}
          styleTitle={{ color: Colors.white }}
        />
        <Button
          title="ĐĂNG KÝ"
          onPress={() => {
            navigate('SRegitration');
          }}
          style={{ backgroundColor: Colors.secondary }}
          styleTitle={{ color: Colors.text }}
        />
      </View>
      {/* <Languages/> */}
    </View>
  );
};

export default SIntro;
