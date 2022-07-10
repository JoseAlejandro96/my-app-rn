import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/onboarding2.png')}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#6C63FF',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Let's Begin
        </Text>
        <MaterialIcons name='arrow-forward-ios' size={22} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
