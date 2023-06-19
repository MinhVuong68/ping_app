import { createNavigationContainerRef } from '@react-navigation/native';

type RootStackParamList = {
  SIntro: undefined;
  SLogin: undefined;
  SRegitration: undefined;
  MainNavigation: undefined;
  SEnterPhoneNumber: undefined;
  SForgotPassword: undefined;
  SEnterOTP: undefined;
  
  
  Profile: undefined;
  SProfile: undefined;
  SChangePassword: undefined;
  SSupport: undefined
  SEditProfile: undefined;
  
  SNotification: undefined

  SHome: undefined;
  SBooking1: undefined
  SBooking2: undefined
  SBooking3: undefined
  SOrderReview: undefined
  SListDeliver: undefined
  SOrderResult: undefined

  SOrder: undefined;
  SDelivering: undefined;
  SDeliverd: undefined
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
