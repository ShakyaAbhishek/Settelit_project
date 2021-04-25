import React, {useEffect} from 'react';
import {View, Text, Platform} from 'react-native';
import Route from './src/navigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Provider store={store}>
            <Route />
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
