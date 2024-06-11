import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './assets/components/LoginScreen';
import HomeScreen from './assets/components/HomeScreen';
import CalculatorScreen from './assets/components/CalculatorScreen';
import DzikirScreen from './assets/components/DzikirScreen';
import ContactsScreen from './assets/components/ContactsScreen';
import GalleryScreen from './assets/components/GalleryScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: '#13aff2' }, // rubah warna header stak navigator
        headerTintColor: '#fff', // warna text 
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen name="Welcome" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Dzikir" component={DzikirScreen} />
      <Stack.Screen name="Contact" component={ContactsScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
