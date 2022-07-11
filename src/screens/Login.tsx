import { View, Text } from 'react-native';
import React from 'react';

import LoginSVG from '../../assets/images/login.svg';

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LoginSVG height={300} width={300} />
      <Text>Login</Text>
    </View>
  );
};

export default Login;
