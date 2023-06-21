import React,{useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { navigate } from '../../../navigators/utils';
const Vote = () => {
  //const orderId  = route.params.id && `${route.params.id}`
    //const navigation = useNavigation()

  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
 

  const handleVote = async (item:any) => {
    setDefaultRating(item)
    //updateVotdOrder(orderId, item)
    setTimeout(() => {
        navigate('SHome')
    },1500)
  }
  return (
    <View style={styles.wrapper}>
        <Text>Đánh giá dịch vụ giao hàng</Text>
        <View style={styles.customRatingBar}>
      {maxRating.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => handleVote(item)}
          >
            <Image
              style={styles.imgStar}
              source={
                item <= defaultRating
                  ? require("../../../assets/images/star_filled.png")
                  : require("../../../assets/images/star_corner.png")
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        //flex: 1,
    },
    customRatingBar: {
        marginTop: 10,
        flexDirection: 'row',
    },
    imgStar: {
        marginHorizontal: 8,
        width: 40,
        height: 40,
        resizeMode: 'cover'
    }
})

export default Vote;