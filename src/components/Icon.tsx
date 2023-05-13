import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Color from '../theme/Colors';

type IconProps = {
  type?: string;
  name?: string;
  size?: number;
  color?: any;
};

const Icon = ({
  type = 'AntDesign',
  name = '',
  size = 15,
  color = Color.black,
}: IconProps) => {
  switch (type) {
    case 'AntDesign':
      return <AntDesign name={name} size={size} color={color} />;
    case 'Entypo':
      return <Entypo name={name} size={size} color={color} />;
    default: return <></>
  }
};

export default React.memo(Icon);
