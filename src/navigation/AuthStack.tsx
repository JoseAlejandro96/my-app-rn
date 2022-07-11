import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Onboarding' component={Onboarding}></Stack.Screen>
      <Stack.Screen name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name='Register' component={Register}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
