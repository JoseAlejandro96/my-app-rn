import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import LoginSVG from '../../assets/images/login.svg';
import { TextInput } from 'react-native-gesture-handler';

import GoogleSVG from '../../assets/images/google.svg';
import FacebookSVG from '../../assets/images/facebook.svg';
import TwitterSVG from '../../assets/images/twitter.svg';

const Login = ({ navigation }) => {
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

        <TouchableOpacity onPress={() => {}} style={styles.loginButtom}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <TouchableOpacity onPress={() => {}} style={styles.footerButton}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.footerButton}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.footerButton}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <Text
              style={{ color: '#AD40AF', fontWeight: '700', marginLeft: 5 }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginButtom: {
    backgroundColor: '#AD40AF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  loginButtonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  footerButton: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default Login;
