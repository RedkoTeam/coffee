
import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

////////////////////
// IMAGES & ICONS //
////////////////////
import FavHeart from './assets/FortuneCoffeePNGassets/NavTargetFavorites.png';
import HomeIcon from './assets/FortuneCoffeePNGassets/HomeIcon.png';
import ShopIcon from './assets/FortuneCoffeePNGassets/ShopIcon.png';
import TakePhoto from './assets/FortuneCoffeePNGassets/TakePhoto.png';
import Home from './assets/FortuneCoffeePNGassets/Home.png';
import Shop from './assets/FortuneCoffeePNGassets/Shop.png';
import Favorites from './assets/FortuneCoffeePNGassets/Favorites.png';
import VirtualCoffee from './assets/FortuneCoffeePNGassets/VirtualCoffee.png';
import SignInButton from './assets/FortuneCoffeePNGassets/SignInButton.png';
import SignUpButton from './assets/FortuneCoffeePNGassets/SignUpButton.png';
import LargeTitleApp from './assets/FortuneCoffeePNGassets/LargeTitleApp.png';
import PickCard from './assets/FortuneCoffeePNGassets/PickCard.png';
import RightCard from './assets/FortuneCoffeePNGassets/RightCard.png';
import MiddleCard from './assets/FortuneCoffeePNGassets/MiddleCard.png';
import LeftCard from './assets/FortuneCoffeePNGassets/LeftCard.png';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#070631',
    alignItems: 'center',
    justifyContent: 'center',
  },
  auth: {
    flex: .25,
    flexDirection: 'row',
  },
  authButton1: {
    right: 90,
    top: 20
  },
  authButton2: {
    left: 90,
    top: 20
  },
  appTitle: {
    paddingBottom: 20
  },
  cardTitle: {
    paddingTop: 15,
    paddingBottom: 5
  },
  circleContainer: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleL: {
    left: 145
  },
  circleR: {
    right: 145
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  cardL: {
    position: 'absolute',
    left: -200,
    bottom: -150,
  },
  cardM: {
    position: 'absolute',
    left: -110,
    bottom: -150,
  },
  cardR: {
    position: 'absolute',
    bottom: -150,
    right: -200,
  },
  iconContainer: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.auth}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.authButton1}>
          <Image source={SignUpButton}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.authButton2}>
          <Image source={SignInButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.appTitle}>
        <Image source={LargeTitleApp} />
      </View>
      <View style={styles.circleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('PhotoReading')}>
          <Image 
            source={TakePhoto} 
            style={styles.circleL}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Virtual')}>
          <Image 
            source={VirtualCoffee} 
            style={styles.circleR}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardTitle}>
        <Image source={PickCard} />
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Virtual')}>
          <Image 
            source={LeftCard}
            style={styles.cardL}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PhotoReading')}>
          <Image
            source={RightCard}
            style={styles.cardR}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PhotoReading')}>
          <Image 
            source={MiddleCard}
            style={styles.cardM}
          />
        </TouchableOpacity>
        
      </View>
      
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <Image source={FavHeart}/>
          <Image source={Favorites}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={HomeIcon} />
          <Image source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <Image source={ShopIcon}/>
          <Image source={Shop} />
        </TouchableOpacity>
      </View>
  
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