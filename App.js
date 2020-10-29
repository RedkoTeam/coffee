import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './routes/HomeScreen.js';
import FavoritesScreen from './routes/FavoritesScreen.js';
import ShopScreen from './routes/ShopScreen.js';
import SignUpScreen from './routes/SignupScreen.js';
import SignInScreen from './routes/SignInScreen.js';
import VirtualCoffeeReadingScreen from './routes/VirtualCoffeeReadingScreen.js';
import VirtualLoadingScreen from './routes/VirtualLoadingScreen.js';
import PhotoReadingScreen from './routes/PhotoReadingScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Virtual" component={VirtualCoffeeReadingScreen} />
          <Stack.Screen name="VirtualLoading" component={VirtualLoadingScreen} />
          <Stack.Screen name="PhotoReading" component={PhotoReadingScreen} />
          <Stack.Screen name="Shop" component={ShopScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
