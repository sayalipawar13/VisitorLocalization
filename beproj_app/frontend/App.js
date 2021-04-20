import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Upload from './components/Upload';
import DisplayMap from './components/DisplayMap';
import {GlobalProvider} from './context/GlobalState';

const Stack = createStackNavigator();

export default App = () => {
    return (
      <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Upload}
          />
          <Stack.Screen
            name="DisplayMap"
            component={DisplayMap}
            options={{ title: 'Overview' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </GlobalProvider>
    );
  }
