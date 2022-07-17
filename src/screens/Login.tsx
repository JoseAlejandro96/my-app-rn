import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import LoginSVG from '../../assets/images/login.svg';
import { TextInput } from 'react-native-gesture-handler';

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ padding: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <LoginSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: '-5deg' }] }}
          />
        </View>
        <Text style={{ fontSize: 28, fontWeight: '500', color: '#333' }}>
          Login
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name='alternate-email'
            size={20}
            color={'#666'}
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder='Email ID'
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType={'email-address'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name='ios-lock-closed-outline'
            size={20}
            color={'#666'}
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder='Password'
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />

          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Forgot?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
