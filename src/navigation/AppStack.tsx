import { View, Text } from 'react-native';
import React from 'react';

import CustomDrawer from '../components/CustomDrawer';
import Home from '../screens/Home';
import Users from '../screens/Users';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from '../screens/Profile';
import Messages from '../screens/Messages';
import Orders from '../screens/Orders';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
        }}
      >
        <Drawer.Screen
          name='Home'
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name='home-outline' size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name='Profile'
          component={Profile}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name='person-outline' size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name='Users'
          component={Users}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name='people-outline' size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name='Messages'
          component={Messages}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name='mail-outline' size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name='Orders'
          component={Orders}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name='qr-code-outline' size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name='Settings'
          component={Settings}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name='settings-outline' size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
