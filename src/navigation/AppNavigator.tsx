import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

export type RootStackParamList = {
  Home: undefined;
  Users: undefined;
};

export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
