
import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FavHeart from './assets/FortuneCoffeePNGassets/NavTargetFavorites.png';
import ShopIcon from './assets/FortuneCoffeePNGassets/ShopIcon.png';
import TakePhoto from './assets/FortuneCoffeePNGassets/TakePhoto.png';
import VirtualCoffee from './assets/FortuneCoffeePNGassets/VirtualCoffee.png';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#070631',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text>Home Screen</Text>
      <View style={styles.circleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Virtual')}>
          <Image source={VirtualCoffee} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PhotoReading')}>
          <Image source={TakePhoto} />
        </TouchableOpacity>

      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Image source={FavHeart}/>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
        <Image source={ShopIcon}/>
      </TouchableOpacity>
  
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favorites Screen</Text>
    </View>
  )
}

function ShopScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Shop Screen</Text>
    </View>
  )
}

function VirtualCoffeeReadingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Virtual Coffee Reading Screen</Text>
    </View>
  )
}

function VirtualLoadingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Virtual Loading Screen</Text>
    </View>
  )
}

function PhotoReadingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Photo Reading Screen</Text>
    </View>
  )
}

function SignUpScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign Up Screen</Text>
    </View>
  )
}

function SignInScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign In Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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

export default App;