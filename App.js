
import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

////////////////////
// IMAGES & ICONS //
////////////////////

import TakePhoto from './assets/FortuneCoffeePNGassets/TakePhoto.png';
import Home from './assets/FortuneCoffeePNGassets/homeBoth.png';
import Shop from './assets/FortuneCoffeePNGassets/shopBoth.png';
import Favorites from './assets/FortuneCoffeePNGassets/favoritesBoth.png';
import VirtualCoffee from './assets/FortuneCoffeePNGassets/VirtualCoffee.png';
import SignInButton from './assets/FortuneCoffeePNGassets/SignInButton.png';
import SignUpButton from './assets/FortuneCoffeePNGassets/SignUpButton.png';
import LargeTitleApp from './assets/FortuneCoffeePNGassets/LargeTitleApp.png';
import PickCard from './assets/FortuneCoffeePNGassets/PickCard.png';
import RightCard from './assets/FortuneCoffeePNGassets/RightCard.png';
import MiddleCard from './assets/FortuneCoffeePNGassets/MiddleCard.png';
import LeftCard from './assets/FortuneCoffeePNGassets/LeftCard.png';
import Love from './assets/FortuneCoffeePNGassets/Love.png';
import Work from './assets/FortuneCoffeePNGassets/Work.png';
import Wish from './assets/FortuneCoffeePNGassets/Wish.png';
import Ellipse1 from './assets/FortuneCoffeePNGassets/Ellipse6.png';
import Ellipse2 from './assets/FortuneCoffeePNGassets/Ellipse7.png';

////////////////////
// Styling  //
////////////////////
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#070631',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authContainer: {
    flex: .25,
    flexDirection: 'row',
  },
  authButton1: {
    right: 90,
    top: 50
  },
  authButton2: {
    left: 90,
    top: 50,
  },
  appTitle: {
    paddingBottom: 10,
    paddingTop: 20,
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
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitleContainer: {
    flex: .01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardL: {
    position: 'absolute',
    flex: 1,
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
  love: {
    position: 'absolute',
    bottom: -65,
    left: -160
  },
  wish: {
    position: 'absolute',
    bottom: -35,
    left: -25
  },
  work: {
    position: 'absolute',
    bottom: -65,
    right: -160
  },
  // iconContainer: {
  //   flex: .5,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  ellipse1: {
    position: 'absolute',
    bottom: -0,
    left: 0
  },
  ellipse2: {
    position: 'absolute',
    bottom: -0,
    left: 0
  },
  favIcon: {
    bottom: -100,
    left: -130
  },
  homeIcon: {
    bottom: 30,
    left: -3
  },
  shopIcon: {
    bottom: 15,
    right: -130
  },
  
});

////////////////////
// Screen Layouts //
////////////////////
function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.authContainer}>
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
      <View style={styles.cardTitleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Virtual')}>
          <Image
            source={Love}
            style={styles.love}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Virtual')}>
          <Image
            source={Work}
            style={styles.work}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Virtual')}>
          <Image
            source={Wish}
            style={styles.wish}
          />
        </TouchableOpacity>
      </View>

      {/* TODO: onPress currently not working on anyting with position absolute. Find fix/workaround */}
      <View style={styles.cardContainer} >
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
        <Image source={Ellipse1} style={styles.ellipse1} />
        <Image source={Ellipse2} style={styles.ellipse2} />
      {/* <View style={styles.iconContainer}> */}
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={styles.favIcon}>
          <Image source={Favorites} onPress={() => navigation.navigate('Favorites')}/>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeIcon}>
          <Image source={Home} onPress={() => navigation.navigate('Home')}/>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.shopIcon}>
          <Image source={Shop} />
        </TouchableOpacity>
      {/* </View> */}
  
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

////////////////////
// Navigation Stack //
////////////////////
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
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