import { createNavigationContainerRef } from '@react-navigation/native';

type RootStackParamList = {
  SIntro: undefined;
  SLogin: undefined;
  SRegitration: undefined;
  MainNavigation: undefined;
  Profile: undefined;

  SEnterPhoneNumber: undefined;
  SForgotPassword: undefined;
  SEnterOTP: undefined;
  SHome: undefined;
  SOrder: undefined;
  SProfile: undefined;
  SChangePassword: undefined;
  SEditProfile: undefined;
  SSupport: undefined
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
