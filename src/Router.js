import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome'
import MemberSign from './pages/MemberSign'

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MemberResult from './pages/MemberResult';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='WelcomeScreen' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name='MemberSignScreen' component={MemberSign} />
        <Stack.Screen name='MemberResultScreen' component={MemberResult} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
