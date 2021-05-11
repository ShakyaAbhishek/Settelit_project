import React, {useEffect} from 'react';
import {View, Text, Platform, SafeAreaView, StatusBar} from 'react-native';
import Route from './src/navigation';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import  Colors  from './src/common'

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor={Colors.Theme_Color} barStyle="light-content" />
      <SafeAreaView style={{flex: 0, backgroundColor: '#5B4AD0'}} />
      <NavigationContainer>
        <Provider store={store}>
          <Route />
        </Provider>
      </NavigationContainer>
    </View>
  );
};

export default App;
