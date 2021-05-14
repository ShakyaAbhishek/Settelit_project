import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {View, Image, StyleSheet} from 'react-native';
import {Home, ChatScreen, AddNewUser, Login} from '../screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Route = () => {

  function DrawerNav(){
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component = {Home} />
      </Drawer.Navigator>
    )
  }

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerNav} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="AddNewUser" component={AddNewUser} />
    </Stack.Navigator>
  );
};

export default Route;
