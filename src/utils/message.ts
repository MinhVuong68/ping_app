import { Platform, ToastAndroid } from 'react-native'
export const message = (title: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(title, ToastAndroid.LONG, ToastAndroid.CENTER)
  } else {
    //Handle in IOS Platform
    //AlertIOS.alert('Thay đổi mật khẩu thành công');
  }
}
