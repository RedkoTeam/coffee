
import React, {useState} from 'react'
import { Button, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, ImageBackground, StyleSheet, FlatList, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


////////////////////
// Firebase //
////////////////////
import * as firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


////////////////////
// IMAGES & ICONS //
////////////////////

//HOMEPAGE//
import TakePhoto from './assets/FortuneCoffeePNGassets/TakePhoto.png';
import Home from './assets/FortuneCoffeePNGassets/homeBoth.png';
import Shop from './assets/FortuneCoffeePNGassets/shopBoth.png';
import Favorites from './assets/FortuneCoffeePNGassets/favoritesBoth.png';
import VirtualCoffee from './assets/FortuneCoffeePNGassets/VirtualCoffee.png';
import SignInButton from './assets/FortuneCoffeePNGassets/SignInButton.png';
import SignUpButton from './assets/FortuneCoffeePNGassets/SignUpButton.png';
import LargeTitleApp from './assets/FortuneCoffeePNGassets/LargeTitleApp.png';
import PickCard from './assets/FortuneCoffeePNGassets/PickCard.png';
import Cards from './assets/FortuneCoffeePNGassets/allCards.png';
import Ellipse1 from './assets/FortuneCoffeePNGassets/Ellipse6.png';
import Ellipse2 from './assets/FortuneCoffeePNGassets/Ellipse7.png';
//SHOP PAGE// 
import Products from './assets/FortuneCoffeePNGassets/Products.png';
import TurkishCoffee from './assets/FortuneCoffeePNGassets/TurkishCoffee.png';
import TurkishPot from './assets/FortuneCoffeePNGassets/TurkishPot.png';
import TurkishCard from './assets/FortuneCoffeePNGassets/TurkishCard.png';
// LOGIN PAGE //
import facebookTitle from './assets/FortuneCoffeePNGassets/ContinueFacebook.png';
import googleTitle from './assets/FortuneCoffeePNGassets/ContinueGoogle.png';
import login from './assets/FortuneCoffeePNGassets/LogInButton.png';
import backgroundPicture from './assets/FortuneCoffeePNGassets/backgroundPicture.png'
// SIGNUP PAGE //
import signin from './assets/FortuneCoffeePNGassets/signin.png';

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
  shopContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070631',
  },
  authContainer: {
    flex: .25,
    flexDirection: 'row',
  },
  authButton1: {
    right: 90,
    top: 30
  },
  authButton2: {
    left: 90,
    top: 30,
  },
  appTitle: {
    paddingBottom: 30,
    paddingTop: 30,
  },
  cardTitle: {
    paddingTop: 15,
  },
  circleContainer: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  circleL: {
    left: 145
  },
  circleR: {
    right: 145
  },
  cards: {
    paddingTop: 10,
    bottom: -20,
  },
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
    bottom: -124,
    left: -130
  },
  homeIcon: {
    bottom: -10,
    left: -0
  },
  shopIcon: {
    bottom: -10,
    right: -130
  },
  products: {
    marginVertical: 90
  },
  container: {
    flex: 1,
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 160,
    height: 130,
  },
  buttonImage: {
    width: 360,
    height: 38,
    paddingBottom: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40
  },
  instructions: {
    color: '#888',
    fontSize: 18,
  },
  title: {
    color: '#FFF',
    fontSize: 40,
    textAlign: 'center'
  },
  login: {
    color: '#1E90FF',
    fontSize: 20,
    marginTop: 10
  },
  underTitle: {
    color: '#0080ff',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  underSignup: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
  },
  underFacebook: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  textBox: {
    margin: 15,
    height: 60,
    width: 360,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 40
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 2
  },
});

////////////////////
// Helper Functions //
////////////////////
checkIfLoggedIn = () => {
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      this.props.navigation.navigate('Dashboard');
    } else {
      this.props.navigation.navigate('SignIn')
    }
  })
}


////////////////////
// Screen Layouts //
////////////////////

// Completed and Ready for code review
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
          <Image source={TakePhoto} style={styles.circleL} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Virtual')}>
          <Image source={VirtualCoffee} style={styles.circleR}/>
        </TouchableOpacity>
      </View>
      <View style={styles.cardTitle}>
        <Image source={PickCard} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Virtual')} style={styles.cards}>
        <Image source={Cards} />
      </TouchableOpacity>
      <Image source={Ellipse1} style={styles.ellipse1} />
      <Image source={Ellipse2} style={styles.ellipse2} />
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={styles.favIcon}>
          <Image source={Favorites} />
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeIcon}>
          <Image source={Home} />
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.shopIcon}>
          <Image source={Shop} />
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

// Mostly done. Still need back button and add onPress with href to shopify site
function ShopScreen() {
  return (
    <ScrollView contentContainerStyle={styles.shopContainer}>
      <Image source={Products} style={styles.products} />
      <Image source={TurkishCoffee} />
      <Image source={TurkishPot} />
      <Image source={TurkishCard} />
    </ScrollView>
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundPicture} style={styles.backgroundImage}>
        <Text style={styles.title}>
          fortune coffee
        </Text>
        <Text style={styles.underTitle}>
          We see many fortunes in your near future.
        </Text>
        <TouchableOpacity onPress={() => console.log('google pressed')}>
          <Image source={googleTitle} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text>
        </Text>
        <TouchableOpacity onPress={() => console.log('facebook pressed')}>
          <Image source={facebookTitle} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.underFacebook}>
          OR SIGN UP WITH EMAIL
        </Text>

        <TextInput style={styles.textBox}
          label="Email"
          placeholder="   Email address"
          placeholderTextColor='#DCDCDC'
          onChangeText={email => setEmail(email)}
        />
        <TextInput style={styles.textBox}
          label="Password"
          placeholder="    Password"
          placeholderTextColor='#DCDCDC'
          onChangeText={password => setPassword(password)}
        />
        <TextInput style={styles.textBox}
          label="Re-enter Password"
          placeholder="    Re-enter Password"
          placeholderTextColor='#DCDCDC'
        />
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => {SignUp(email, password)}}>
          <Image source={signin} style={styles.buttonImage}  />
  
        </TouchableOpacity>
        <Text style={styles.underSignup}>
          Already have an account?
          <TouchableOpacity onPress={() => console.log('log in pressed')}>
            <Text style={styles.login}> Login</Text>
          </TouchableOpacity>
        </Text>
      </ImageBackground>

    </View>
  )
  async function SignUp() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user)
        })
    } catch (error) {
      console.log(error.toString(error))
    }
  }
}



function SignInScreen() {

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundPicture} style={styles.backgroundImage}>
        <Text style={styles.title}>
          fortune coffee
        </Text>
        <Text style={styles.underTitle}>
        </Text>
        <TouchableOpacity onPress={() => console.log('google pressed')}>
          <Image source={googleTitle} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text>
        </Text>
        <TouchableOpacity onPress={() => console.log('facebook pressed')}>
          <Image source={facebookTitle} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.underFacebook}>
          OR LOG IN WITH EMAIL
        </Text>
        <TextInput style={styles.textBox}
          label="Email"
          placeholder="   Email address"
          placeholderTextColor='#DCDCDC'
        />
        <TextInput style={styles.textBox}
          label="Password"
          placeholder="    Password"
          placeholderTextColor='#DCDCDC'
        />
        <Text>
        </Text>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => console.log('Sign up pressed')}>
          <Image source={login} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.underSignup}>
          Forgot Password?{"\n"}
          Create a new
          <TouchableOpacity onPress={() => console.log('account pressed')}>
            <Text style={styles.login}> account</Text>
          </TouchableOpacity>
        </Text>
      </ImageBackground>

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