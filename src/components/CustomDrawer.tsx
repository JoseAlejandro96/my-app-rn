import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#8200d6' }}
      >
        <ImageBackground
          source={require('../../assets/headerbg.svg')}
          style={{ padding: 20 }}
        >
          <Image
            source={require('../../assets/jiraiya.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Jose Alejandro</Text>
          <View>
            <Text style={styles.profileLastLoginDateLabel}>
              Last Loging Day:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.profileLastLoginDateValue}>
                22-06-2022 20:45
              </Text>
              <FontAwesome5 name='calendar' size={14} color='#fff' />
            </View>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.drawerFooter}>
        <TouchableOpacity onPress={() => {}} style={styles.footerButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='share-social-outline' size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.footerButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='exit-outline' size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  profileLastLoginDateLabel: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  profileLastLoginDateValue: {
    color: '#fff',
    fontSize: 12,
    marginRight: 5,
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerButton: { paddingVertical: 15 },
});

export default CustomDrawer;
