import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {View, Image, StyleSheet} from 'react-native';
import Home from '../screens/Home'

const Stack = createStackNavigator();

const Route = () => {  

  return (
    <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
  );
};

export default Route;

