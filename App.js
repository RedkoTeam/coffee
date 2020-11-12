
import React, { useRef, useEffect, useState, Componenet } from 'react';
import { Button, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, ImageBackground, StyleSheet, FlatList, ScrollView, SafeAreaView, StatusBar , Animated, Easing, InteractionManager } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

////////////////////
// IMAGES & ICONS //
////////////////////

//HOMEPAGE//
import TakePhoto from './assets/FortuneCoffeePNGassets/TakePhoto.png';
import Home from './assets/FortuneCoffeePNGassets/home.png';
import Shop from './assets/FortuneCoffeePNGassets/shop.png';
import Favorites from './assets/FortuneCoffeePNGassets/favorites.png';
import VirtualCoffee from './assets/FortuneCoffeePNGassets/VirtualCoffee.png';
import SignInButton from './assets/FortuneCoffeePNGassets/SignInButton.png';
import SignUpButton from './assets/FortuneCoffeePNGassets/SignUpButton.png';
import LargeTitleApp from './assets/FortuneCoffeePNGassets/LargeTitleApp.png';
import PickCard from './assets/FortuneCoffeePNGassets/PickCard.png';
import Cards from './assets/FortuneCoffeePNGassets/allCards.png';
import Ellipse1 from './assets/FortuneCoffeePNGassets/ellipse.png';
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
// READING ANIMATION PAGE //
import coffee from './assets/FortuneCoffeePNGassets/readingAnimationPage/coffee.png';
import readingCoffee from './assets/FortuneCoffeePNGassets/readingAnimationPage/readingCoffee.png';
import readingAnimationBackground from './assets/FortuneCoffeePNGassets/readingAnimationPage/readingAnimationBackground.png';
// VIRTUAL COFFEE READING PAGE //
import backgroundOne from './assets/FortuneCoffeePNGassets/virtualPage/backgroundOne.png';
import backgroundTwo from './assets/FortuneCoffeePNGassets/virtualPage/backgroundTwo.png';
import backgroundThree from './assets/FortuneCoffeePNGassets/virtualPage/backgroundThree.png';
import backgroundFour from './assets/FortuneCoffeePNGassets/virtualPage/backgroundFour.png';
import backgroundFive from './assets/FortuneCoffeePNGassets/virtualPage/backgroundFive.png';
import coffee_v from './assets/FortuneCoffeePNGassets/virtualPage/coffee_v.png';
import dontWantToWaitText from './assets/FortuneCoffeePNGassets/virtualPage/dontWantToWait.png';
import getCrystalsButton from './assets/FortuneCoffeePNGassets/virtualPage/getCrystalsButton.png';
import pysicReadingText from './assets/FortuneCoffeePNGassets/virtualPage/ourPysicReading.png';
import tapToDrinkText from './assets/FortuneCoffeePNGassets/virtualPage/tapToDrink.png';

// READING PAGE //
import backButton from './assets/FortuneCoffeePNGassets/reading/backButton.png';
import coffeeImg from './assets/FortuneCoffeePNGassets/reading/coffee.png';
import readingBackground from './assets/FortuneCoffeePNGassets/reading/readingBackground.png';
import saveButton from './assets/FortuneCoffeePNGassets/reading/saveButton.png';
import shareButton from './assets/FortuneCoffeePNGassets/reading/shareButton.png';
import user from './assets/FortuneCoffeePNGassets/reading/user.png';
import whatHappen from './assets/FortuneCoffeePNGassets/reading/whatHappen.png';
import yourPresent from './assets/FortuneCoffeePNGassets/reading/yourPresent.png';

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
  ellipse: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
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
  readingAnimationBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    width:'100%',
    opacity: 0.8
  },
  readingCoffeeImage: {
    top: 0,
  },
  virtualContainer: {
    flex: 1,
    backgroundColor: '#070631',
    width:'100%'

  },
  virtualOne: {
    flex: 1,
    resizeMode:'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    opacity: 0.7,
  },
});

////////////////////
//   Navigation   //
////////////////////

////////////////////
// Screen Layouts //
////////////////////

// Completed and Ready for code review
//ReadingAnimation back to PhotoReading 
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
        <TouchableOpacity onPress={() => navigation.navigate('ReadingAnimation')}> 
          <Image source={TakePhoto} style={styles.circleL} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VirtualOne')}>
          <Image source={VirtualCoffee} style={styles.circleR}/>
        </TouchableOpacity>
      </View>
      <View style={styles.cardTitle}>
        <Image source={PickCard} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Virtual')} style={styles.cards}>
        <Image source={Cards} />
      </TouchableOpacity>
      <NavBar />
    </View>
  );
}

function NavBar(){
  const navigation = useNavigation();
  return(
    <View style={{flex:1, alignItems:'center', alignContent:'center'}}>
      <Image source={Ellipse1} style={styles.ellipse} />
      <View style={{flexDirection:'row', width:'80%', justifyContent: 'space-between', position:'absolute', bottom: 0, paddingBottom:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Image source={Favorites}/>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={Home} style={{bottom:'80%'}}/>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
            <Image source={Shop} />
        </TouchableOpacity>
      </View>
    </View>
  )
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
    <View style={styles.virtualContainer}>
      <Text> Hello </Text>
    </View>
  )
}

function VirtualOne(){
  const navigation = useNavigation();
  return(
    <View style={styles.virtualContainer}>
      <ImageBackground source={ backgroundOne } style={ styles.virtualOne }>
        <Image source={ tapToDrinkText } />
        <TouchableOpacity onPress={() => navigation.navigate('VirtualTwo')}>
          <Image source={ coffee_v } />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}




function VirtualTwo(){
  const navigation = useNavigation();
  return (
    <View style={styles.virtualContainer}>
      <ImageBackground source={ backgroundTwo } style={ styles.virtualOne }>
        <Image source={ tapToDrinkText } />
        <TouchableOpacity onPress={ () => navigation.navigate('VirtualThree')}>
          <Image source={ coffee_v } />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

function VirtualThree(){
  const navigation = useNavigation();
  return (
    <View style={styles.virtualContainer}>
      <ImageBackground source={ backgroundThree } style={ styles.virtualOne }>
        <Image source={ tapToDrinkText } />
        <TouchableOpacity onPress={ () => navigation.navigate('VirtualFour')}>
          <Image source={ coffee_v } />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

function VirtualFour(){
  const navigation = useNavigation();
  return (
    <View style={styles.virtualContainer}>
      <ImageBackground source={ backgroundFour } style={ styles.virtualOne }>
        <Image source={ tapToDrinkText } />
        <TouchableOpacity onPress={ () => navigation.navigate('VirtualFive')}>
          <Image source={ coffee_v } />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

function VirtualFive(){
  const navigation = useNavigation();
  return(
    <View style={styles.virtualContainer}>
      <ImageBackground source={backgroundFive} style={ styles.virtualOne }>
        <Image source={ pysicReadingText } style={{ margin: '40%'}}/>
        <Image source={ dontWantToWaitText } style={{ marginBottom:10 }} />
        <TouchableOpacity onPress={ () => navigation.navigate('GetCrystals')}>
          <Image source={ getCrystalsButton } />
        </TouchableOpacity>
        <NavBar/>
      </ImageBackground>
    </View>
  )

}



function GetCrystals(){
  return(
    <View style={styles.virtualContainer}>
      <Text> get crystals Page</Text>
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
        />
        <TextInput style={styles.textBox}
          label="Password"
          placeholder="    Password"
          placeholderTextColor='#DCDCDC'
        />
        <TextInput style={styles.textBox}
          label="Re-enter Password"
          placeholder="    Re-enter Password"
          placeholderTextColor='#DCDCDC'
        />
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => console.log('Sign up pressed')}>
          <Image source={signin} style={styles.buttonImage} />
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

function ReadingAnimationScreen({navigation}){

  const rotateValueHolder = useRef(new Animated.Value(0)).current;


  const startImageRotationFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.loop(
      Animated.timing(rotateValueHolder, 
                      { toValue: 1,
                        easing: Easing.quad, 
                        duration: 3000,
                        useNativeDriver: false,
                    }),
                      {
                        iterations: 1
                      }
                      ).start();
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['-45deg', '180deg'],
  });
  
  useEffect(startImageRotationFunction);
  InteractionManager.runAfterInteractions(() => navigation.navigate("Reading"));

  return(
    <View style={styles.mainContainer}>
      <ImageBackground source={ readingAnimationBackground } style={ styles.readingAnimationBackground }>
        <Image source={ readingCoffee } style={ styles.readingCoffeeImage } />
        <Animated.View>
          <Animated.Image style={ {
                                  width: 200,
                                  height: 200,
                                  transform: [ { rotate: RotateData } ]
                                } }
                  source={coffee} 
                  
          />
        </Animated.View>
      </ImageBackground>
    </View>
  )
}

function Reading(){
  return(
    <View style={styles.container}>
      <Text>Welcome to Reading Screen</Text>
    </View>
  )
}


////////////////////
// Navigation Stack //
////////////////////
const Stack = createStackNavigator();
const raStack = createStackNavigator();

function ReadingAnimationStack() {
  return (
    <raStack.Navigator screenOptions={{ headerShown: true }}>
      <raStack.Screen name="ReadingAnimation" component={ReadingAnimationScreen} />
      <raStack.Screen name="Read" component={Reading} />
    </raStack.Navigator>
  )
}

//<NavigationContainer>
//<virtualStack.Navigator>
//<virtualStack.Screen name="VirtualOne" component={VirtualOne} />
//<virtualStack.Screen name="VirtualTwo" component={VirtualTwo} /> 
//<virtualStack.Screen name="VirtualThree" component={VirtualThree} />
//<virtualStack.Screen name="VirtualFour" component={VirtualFour} />
//<virtualStack.Screen name="VirtualFive" component={VirtualFive} />
//</virtualStack.Navigator>
//</NavigationContainer>


function App() {
  const forFade = ({ current }) => ({ cardStyle: { opacity: current.progress }});
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Virtual" component={VirtualCoffeeReadingScreen} />
        <Stack.Screen name="VirtualOne" component={VirtualOne} options={{ cardStyleInterpolator:forFade}} />
        <Stack.Screen name="VirtualTwo" component={VirtualTwo} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="VirtualThree" component={VirtualThree} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="VirtualFour" component={VirtualFour} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="VirtualFive" component={VirtualFive} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="GetCrystals" component={GetCrystals} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="VirtualLoading" component={VirtualLoadingScreen} />
        <Stack.Screen name="PhotoReading" component={PhotoReadingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ReadingAnimation" component={ReadingAnimationScreen} />
        <Stack.Screen name="Reading" component={Reading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;