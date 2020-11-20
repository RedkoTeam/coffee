
import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, ImageBackground, StyleSheet, FlatList, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
// SUBSCRIPTION PAGE //
import sub1 from './assets/FortuneCoffeePNGassets/subscription1.png';
import sub2 from './assets/FortuneCoffeePNGassets/subscription2.png';
import sub3 from './assets/FortuneCoffeePNGassets/subscription3.png';
import sub4 from './assets/FortuneCoffeePNGassets/subscription4.png';
import subscriptionDescription from './assets/FortuneCoffeePNGassets/subscriptionDescription.png';
import subBackgorund1 from './assets/FortuneCoffeePNGassets/Vector.png';
import subBackgorund2 from './assets/FortuneCoffeePNGassets/Vector-3.png';

// Fortune Page //
import Modal from 'react-native-modal';
import FlipCard from 'react-native-flip-card';
import card from './assets/FortuneCoffeePNGassets/MiddleCard-1.png';
import card2 from './assets/FortuneCoffeePNGassets/MiddleCard-2.png';
import { useState } from 'react';
// GET CRYSTAL PAGE //
import crystalBackground from './assets/FortuneCoffeePNGassets/crystalBackground.png';
import getCrystals from './assets/FortuneCoffeePNGassets/getCrystals.png';
import xButton from './assets/FortuneCoffeePNGassets/bi_x.png';

//Virtual Coffee Reading Page //
'use strict';
import {Component} from 'react';
import {AppRegistry, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import useAVirtualCoffee from './assets/useAVirtualCoffee.png';
import virtualImage from './assets/virtualImage.png';
import submitPhoto from './assets/submitPhoto.png';
import photoGallery from './assets/photoGallery.png';

//Saved Fortunes //

//Profile //
import profileImage from './assets/FortuneCoffeePNGassets/Profile.png';
import skipImage from './assets/FortuneCoffeePNGassets/Skip.png';
import continueImage from './assets/FortuneCoffeePNGassets/Continue.png';
import { Input } from 'react-native-elements';
import profile_bg from './assets/FortuneCoffeePNGassets/Profile_bg.png';
import backButton from './assets/backButton.png';
import pencil from './assets/pencil.png';
import pageButton from './assets/pageButton.png';

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
  getCrystalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapCard: {
    color: '#FFF',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  cardStyle: {
    width: 250,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60
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
  getCrystalImage: {
    width: 300,
    height: 38,
    paddingBottom: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 290
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
  xbutton: {
    padding: 20,
    borderRadius: 5,
    marginLeft: 280,
    marginTop: 7
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
  crystalBackground: {
    flex:1,
    width: 350,
    height: 400,
    justifyContent: "center",
    marginHorizontal: 12,
    marginBottom: 450
  },
  subBackgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 2
  },
  subButton1: {
    width: 390,
    height: 110,
    borderRadius: 30,
    marginHorizontal: 1,
    marginTop: 30
  },
  subButton2: {
    width: 390,
    height: 110,
  },
  ellipse3: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    marginBottom: 20
  },
  ellipse4: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    marginBottom: 20
  },
  cameraContainer: {
    flex: 1,
  },
  cameraPreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor : '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
  textBox2: {
    margin: 15,
    height: 60,
    width: 70,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 40
  },
  textBox3: {
    margin: 15,
    height: 60,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 40
  },
  savedFortuneTextBox: {
    height: 60,
    width: 360,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  savedFortuneTextBox2: {
    height: 60,
    width: 70,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  savedFortuneTextBox3: {
    height: 60,
    width: 90,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
    marginRight: 130
  },
});

////////////////////
// Screen Layouts //
////////////////////

// Completed and Ready for code review
function HomeScreen({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => { 
    setModalVisible(!isModalVisible);
  };
  state = {
    open: true,
    open2: true,
  };
  toggleImage = () => {
    this.setState(state => ({ open: !state.open}))
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.authContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SavedFortunes')} style={styles.authButton1}>
          <Image source={SignUpButton}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.authButton2}>
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
      
      <View>
      <Button title="Show modal" onPress={toggleModal} />
        <Modal isVisible={isModalVisible}>
          <View style = {styles.modalStyle}>
            <Text style = {styles.tapCard}>Tap card to flip</Text>
            <Button title="Hide modal" onPress={toggleModal} />
            <View style={{marginBottom:500}}>
              <FlipCard
                flipHorizontal={true}
                flipVertical={false}>
                <View style={styles.face, {marginBottom: 400}}>
                  <Text>The Face</Text>
                  <Image source={card} style={styles.cardStyle} />
                </View>
                <View>
                  <Text>The Back</Text>
                  <Image source={card} style={styles.cardStyle} />
                </View>
              </FlipCard>
            </View>
          </View>
        </Modal>
      </View>
      

      
      <View>
        <TouchableOpacity onPress={toggleModal} style={styles.cards}>
          <Image source={Cards} />
          <Modal isVisible={isModalVisible}>
            <View style = {styles.modalStyle}>
              <ImageBackground source={crystalBackground} style={styles.crystalBackground}>
                <View style={styles.getCrystalContainer}>
                  <TouchableOpacity onPress={toggleModal}>
                    <Image source={xButton} style={styles.xbutton} />
                  </TouchableOpacity>
                  <TouchableOpacity onPressIn={toggleModal} onPress={() => navigation.navigate('Subscription')}>
                    <Image source={getCrystals} style={styles.getCrystalImage} />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>

      
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

function SubscriptionScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {/*<ImageBackground source={subBackgorund1} style={styles.subBackgroundImage}>*/}
        <Image source={subscriptionDescription} style={{marginTop: 60}}/>
        <TouchableOpacity>
          <Image source={sub1} style={styles.subButton1}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={sub2} style={styles.subButton2} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={sub3} style={styles.subButton2}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={sub4} style={styles.subButton2}/>
        </TouchableOpacity>
        <Image source={Ellipse1} style={styles.ellipse3} />
        <Image source={Ellipse2} style={styles.ellipse4} />
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={{bottom: -94, left:-130}}>
          <Image source={Favorites} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{top: -20, left: -0}}>
          <Image source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={{top: -20,right: -130}}>
          <Image source={Shop} />
        </TouchableOpacity>
      {/*</ImageBackground>*/}
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
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#070631' }}>
        <View style={styles.authContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={backButton} style={{marginRight: 160}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={useAVirtualCoffee} style={{marginTop:13}}/>
          </TouchableOpacity>
        </View>
      {/*<RNCamera ref={ref => {this.camera = ref;}} style={{flex: 1, width: '100%'}}>
      </RNCamera>
      */}
      <Image source={virtualImage} />
      <TouchableOpacity>
        <Image source={submitPhoto} style={{marginTop:30}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={photoGallery} style={{marginTop:30}} />
      </TouchableOpacity>
    </View>
  )
}

function FortuneModal() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Fortune Modal</Text>
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
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundPicture} style={styles.backgroundImage}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={backButton} style={{marginLeft: 50, marginBottom: 10}}/>
        </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.login}> Login</Text>
          </TouchableOpacity>
        </Text>
      </ImageBackground>
    </View>
  )
}

function SavedFortunes() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#070631' }}>
      <View style={styles.authContainer}>
        <TouchableOpacity>
          <Image source={backButton} style={{marginRight: 200}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Image source={SignInButton} style={{marginTop:13}}/>
        </TouchableOpacity>
      </View>
      <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 230, marginTop: 20}}>SavedFortunes</Text>
      <TextInput style={styles.savedFortuneTextBox}
          label="Name"
          placeholder="                                   Enter name here"
          placeholderTextColor='#DCDCDC'
      />
      <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 190, marginTop: 20}}>Relationship Status</Text>
      <TextInput style={styles.savedFortuneTextBox}
          label="Relationship Status"
          placeholder="                       Enter relationship status here"
          placeholderTextColor='#DCDCDC'
      />
      <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 110, marginTop: 20}}>Enter employment status here</Text>
      <TextInput style={styles.savedFortuneTextBox}
          label="EmploymentStatus"
          placeholder="                   Enter employment status here"
          placeholderTextColor='#DCDCDC'
      />
      <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 110, marginTop: 20}}>Enter employment status here</Text>
      <TextInput style={styles.savedFortuneTextBox}
          label="Gender"
          placeholder="                       Enter gender here"
          placeholderTextColor='#DCDCDC'
      />
      <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 280, marginTop: 20}}>Birthday</Text>
      <View style={styles.authContainer}>
        <TextInput style={styles.savedFortuneTextBox2}
          label="Month"
          placeholder="      00"
          placeholderTextColor='#DCDCDC'
        />
        <TextInput style={styles.savedFortuneTextBox2}
          label="Day"
          placeholder="      00"
          placeholderTextColor='#DCDCDC'
        />
        <TextInput style={styles.savedFortuneTextBox3}
          label="Year"
          placeholder="      00"
          placeholderTextColor='#DCDCDC'
        />
      </View>

      <TouchableOpacity onPress={() => console.log('log in pressed')}>
      <Image source={continueImage} style={{marginTop: 0}}/>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity onPress={() => console.log('log in pressed')}>
      <Image source={skipImage} />
      </TouchableOpacity>
    </View>
  )
}

function Profile() {
  return (
    <ImageBackground source={profile_bg} style={styles.subBackgroundImage}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.authContainer}>
          <TouchableOpacity style={styles.authButton1}>
            <Image source={backButton} style={{marginRight: 80}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authButton2}>
            <Image source={pageButton} />
          </TouchableOpacity>
        </View>
        <Text style={{marginBottom: 30}}></Text>
        <Image source={profileImage} />
        <Input placeholder="Name" >
        {/*<Image source={pencil} />*/}
        </Input>  
        <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 300}}>Username</Text>
        <Input placeholder="Username" >
        </Input>
        <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 300}}>First name</Text>
        <Input placeholder="First name" >
        </Input> 
        <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 300}}>Last Name</Text>
        <Input placeholder="Last Name" >
        </Input>  
        <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 285}}>Date of Birth</Text>
        <Input placeholder="Date of Birth" >
        </Input>  
        <Image source={Ellipse1} style={styles.ellipse1} />
        <Image source={Ellipse2} style={styles.ellipse2} />
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={{bottom:-175,left: -130}}>
          <Image source={Favorites} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{top: 60,left: -0}}>
          <Image source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={{top: 60,right: -130}}>
          <Image source={Shop} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

function SignInScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundPicture} style={styles.backgroundImage}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={backButton} style={{marginLeft: 50, marginBottom: 10}}/>
        </TouchableOpacity>
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
        <TouchableOpacity onPress={() => console.log('Log in pressed')}>
          <Image source={login} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.underSignup}>
          Forgot Password?{"\n"}
          Create a new
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.login}> account</Text>
          </TouchableOpacity>
        </Text>
        <Text style={{marginBottom: 100}}></Text>
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
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Fortune" component={FortuneModal} />
        <Stack.Screen name="SavedFortunes" component={SavedFortunes} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;