import { View, Text, Button } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type UsersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Users'
>;

type Props = {
  navigation: UsersScreenNavigationProp;
};

const Users = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
};

export default Users;
