
import React, { useRef, useEffect, useState, useCallback, Componenet, useFocusEffect } from 'react';

import './fixtimerbug';
import {fortunesArray} from './fortunesArray';

import { Button, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, ImageBackground, StyleSheet, FlatList, ScrollView, SafeAreaView, StatusBar , Animated, Easing, InteractionManager } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

////////////////////
// Firebase //
////////////////////
import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase-firestore'
import { firebaseConfig } from './config';

//checks to see if app is already initialized before running again
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// const database = firebase.database();
// const user = firebase.auth().currentUser;

// logic for checking if user is logged in for main screen
checkIfLoggedIn = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.props.navigation.navigate('HomeLoggedIn');
    } else {
      this.props.navigation.navigate('Home')
    }
  })
}

function SignUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      const userId = firebase.auth().currentUser.uid
      // add time stamp 
      return firebase.database().ref('users/' + userId).set({
        email: email,
        subscriptionLevel: 0,
        // increment based on timestamp 
        totalGems: 0
      })
    })
    .catch(error => console.log(error))
}

////////////////////
// IMAGES & ICONS //
////////////////////

//NAVBAR//
import Ellipse1 from './assets/FortuneCoffeePNGassets/HomePage/ellipse.png';
import Home from './assets/FortuneCoffeePNGassets/HomePage/Home.png';
import Shop from './assets/FortuneCoffeePNGassets/HomePage/Shop.png';
import Favorites from './assets/FortuneCoffeePNGassets/HomePage/Favorites.png';

//HOMEPAGE//
import TakePhoto from './assets/FortuneCoffeePNGassets/HomePage/TakePhoto.png';
import VirtualCoffee from './assets/FortuneCoffeePNGassets/HomePage/VirtualCoffee.png';
import SignInButton from './assets/FortuneCoffeePNGassets/HomePage/SignInButton.png';
import SignUpButton from './assets/FortuneCoffeePNGassets/HomePage/SignUpButton.png';
import LargeTitleApp from './assets/FortuneCoffeePNGassets/HomePage/FortuneCoffeeTitle.png';
import PickCard from './assets/FortuneCoffeePNGassets/HomePage/PickCard.png';
import Cards from './assets/FortuneCoffeePNGassets/HomePage/allCards.png';

//SHOP PAGE// 
import shop from './assets/FortuneCoffeePNGassets/shopPage/Shop.png';
import galaxy from './assets/FortuneCoffeePNGassets/shopPage/galaxy.png';
import originalPhoto from './assets/FortuneCoffeePNGassets/shopPage/originalPhoto.png';
import originalBuyButton from './assets/FortuneCoffeePNGassets/shopPage/originalBuyButton.png';
import coconutPhoto from './assets/FortuneCoffeePNGassets/shopPage/coconutPhoto.png';
import coconutButton from './assets/FortuneCoffeePNGassets/shopPage/coconutBuyButton.png';
import coffeeCaramelPhoto from './assets/FortuneCoffeePNGassets/shopPage/coffeeCaramelPhoto.png';
import coffeeCaramelButton from './assets/FortuneCoffeePNGassets/shopPage/coffeeCaramelButton.png';
import hazelnutPhoto from './assets/FortuneCoffeePNGassets/shopPage/hazelnutPhoto.png';
import hazelnutButton from './assets/FortuneCoffeePNGassets/shopPage/hazelnutButton.png';
import coffeeChocolatePhoto from './assets/FortuneCoffeePNGassets/shopPage/coffeeChocolatePhoto.png';
import coffeeChocolateButton from './assets/FortuneCoffeePNGassets/shopPage/coffeeChocolateButton.png';
import strawberryPhoto from './assets/FortuneCoffeePNGassets/shopPage/strawberryPhoto.png';
import strawberryButton from './assets/FortuneCoffeePNGassets/shopPage/strawberryButton.png';

//SIGN// 
import facebookTitle from './assets/FortuneCoffeePNGassets/Sign/ContinueFacebook.png';
import googleTitle from './assets/FortuneCoffeePNGassets/Sign/ContinueGoogle.png';
import signTitle from './assets/FortuneCoffeePNGassets/Sign/signTitle.png';
import signBackground from './assets/FortuneCoffeePNGassets/Sign/SignBackground.png';

// SIGN UP PAGE //
import signUpButton from './assets/FortuneCoffeePNGassets/Sign/signUpButton.png';
import haveAcctText from './assets/FortuneCoffeePNGassets/Sign/haveAcctText.png';
import loginText from './assets/FortuneCoffeePNGassets/Sign/loginText.png';
import signEmailText from './assets/FortuneCoffeePNGassets/Sign/signEmailText.png';
import signUpBelowTitle from './assets/FortuneCoffeePNGassets/Sign/signUpbelowTitle.png';
// SIGN IN PAGE //
import loginButton from './assets/FortuneCoffeePNGassets/Sign/LogInButton.png';
import forgotPasswordText from './assets/FortuneCoffeePNGassets/Sign/forgotPasswordText.png';
import createNewText from './assets/FortuneCoffeePNGassets/Sign/createaNewText.png';
import accoutText from './assets/FortuneCoffeePNGassets/Sign/accountText.png';
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
import userImg from './assets/FortuneCoffeePNGassets/reading/user.png';
import yourFortune from './assets/FortuneCoffeePNGassets/reading/yourFortune.png';

// FAVORITES PAGE //
// galaxy
// backButton
import fortuneBox from './assets/FortuneCoffeePNGassets/savedFortunes/Box.png';
import etcButton from './assets/FortuneCoffeePNGassets/savedFortunes/etcButton.png';
import savedFortunesTitle from './assets/FortuneCoffeePNGassets/savedFortunes/savedFortuneTitle.png';


// SUBSCRIPTION PAGE //
import sub1 from './assets/FortuneCoffeePNGassets/Subscription/subscription1.png';
import sub2 from './assets/FortuneCoffeePNGassets/Subscription/subscription2.png';
import sub3 from './assets/FortuneCoffeePNGassets/Subscription/subscription3.png';
import sub4 from './assets/FortuneCoffeePNGassets/Subscription/subscription4.png';
import subscriptionDescription from './assets/FortuneCoffeePNGassets/Subscription/subscriptionDescription.png';
import subBackground from './assets/FortuneCoffeePNGassets/Subscription/subscriptionBackground.png'

// Fortune Page //
import Modal from 'react-native-modal';
import FlipCard from 'react-native-flip-card';
import card from './assets/FortuneCoffeePNGassets/MiddleCard-1.png';
import card2 from './assets/FortuneCoffeePNGassets/MiddleCard-2.png';

// GET CRYSTAL PAGE //
import crystalBackground from './assets/FortuneCoffeePNGassets/crystalBackground.png';
import getCrystals from './assets/FortuneCoffeePNGassets/getCrystals.png';
import xButton from './assets/FortuneCoffeePNGassets/bi_x.png';

//TAKE PHOTO //
'use strict';
import * as ImagePicker from 'expo-image-picker';
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
import pencil from './assets/pencil.png';
import pageButton from './assets/pageButton.png';

//random cards
import {cardsAndMeaning} from './fortunesCardArray';
//import {cardsFrontReversed, cardsAndMeaning, cardsMeaning, cardsFront} from './fortunesCardArray';
import dummyPath from './assets/pencil.png';

////////////////////
// Styling  //
////////////////////

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17
  },
  mainContainer: {
    flex:1,
    backgroundColor: '#070631',
    width:'100%'
  },
  shopContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070631',
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
    fontWeight: 'bold',
    marginTop: 250,
  },
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
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
  ellipse: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    paddingBottom: 50,
    borderRadius: 30,
  }, 
  getCrystalImage: {
    width: 300,
    height: 38,
    paddingBottom: 50,
    borderRadius: 30,
    marginTop: 265
  },
  instructions: {
    color: '#888',
    fontSize: 18,
  },
  underTitle: {
    color: '#0080ff',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
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
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  textBox: {
    margin: 15,
    height: "7%",
    width: '87%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  backgroundImage: {
    flex: 1,
    resizeMode:'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    opacity: 0.7,
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
  flexInRows: {
    position:'absolute',
    top: 0, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    padding: 16,
  },
  flexInRowsCoffee: {
    flex: 1,
    paddingTop: '20%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width:'100%',
    alignItems:'flex-end',
  },
  readingTableContainer: {
    flex: 1, 
    width:'100%',
    alignContent:'stretch',
    padding: 15,
  },
  helloUserTextContainer: {
    fontSize:35,
    fontStyle:'normal',
    fontWeight:'bold',
    color:'#FFFFFF',
    textShadowColor: 'rgba(47, 145, 211, 0.76)',
    textShadowOffset: {
      width:2,
      height:2
    },
    textShadowRadius:1
  },
  coffeeImageDimension: {
    width: 370,
    height: 550,
    resizeMode: 'contain', 
  },
  coffeeBuyButton: {
    width: 310,
    height: 40,
    resizeMode:'contain',
    position: 'absolute',
    bottom: 25,
    left: 35, 
  },
  shopBackgroundContainer: {
    position:'absolute', 
    width:'100%', 
    height:'100%'
  },
  shopScreenTitle: {
    position:'absolute', 
    alignSelf:'center', 
    right:'47%', 
    bottom:'5%'
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
  savedFortuneTextBox: {
    height: "7%",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  savedFortuneTextBox2: {
    height: "90%",
    width: "20%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  savedFortuneTextBox3: {
    height: "90%",
    width: "50%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  flexRowX: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    paddingTop: '10%',
    padding: 12,
  },
  backButtonStyle: {
    position: 'absolute', 
    top: 10,
    left: 15
  }
});

////////////////////
// Screen Layouts //
////////////////////

// Completed and Ready for code review
//ReadingAnimation back to PhotoReading 
global.arr = [dummyPath, dummyPath, dummyPath];
function HomeScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //const [randomFortune, setRandomFortune] = useState('');
  const toggleModal2 = () => {
    setModalVisible(!isModalVisible);
    let random = Math.floor((Math.random() * cardsAndMeaning.length));
    arr[0] = cardsAndMeaning[random][0];
    //arr[1] = cardsFrontReversed[random];
    arr[2] = cardsAndMeaning[random][1];
    console.log(arr[2]);
  }
 
  state = {
    open: true,
  };
  toggleImage = () => {
    this.setState(state => ({ open: !state.open}));
  }
  return (
    <View style={styles.mainContainer}>
      <View style={{flex:1, alignItems: 'center'}}>
        <View style={{flexDirection:'row', width:'100%',justifyContent:'space-between', padding: 25}}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Image source={SignUpButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Image source={SignInButton} />
          </TouchableOpacity>
        </View>
        <Image source={LargeTitleApp} style={{width:'100%'}}/>
        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={() => navigation.navigate('VirtualOne')}>
            <Image source={VirtualCoffee} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Virtual')}> 
            <Image source={TakePhoto} />
          </TouchableOpacity>
        </View>
        <Image source={PickCard} style={{margin:8}}/>
        <TouchableOpacity onPress={toggleModal2} style={styles.cards}>
            <Image source={Cards} />
       {/* </TouchableOpacity> <Button title="Show modal!" onPress={toggleModal2} /> */}
        <Modal isVisible={isModalVisible} style = {{alignItems: "center", flex: 1}}>
          <View>
            <Text style = {styles.tapCard}>Tap card to flip</Text>
            <Button title="Hide modal" onPress={toggleModal} />
            <View style={{marginBottom:500}}>
              <FlipCard
                flipHorizontal={true}
                flipVertical={false}>
                <View style={styles.face}>
                  <Text>The Face</Text>
                  <Image source={arr[0]} style={styles.cardStyle} />
                </View>
                <View>
                  <Text>The Back</Text>
                  <Image source={arr[2]} style={styles.cardStyle} />
                </View>
              </FlipCard>
            </View>
          </View>
        </Modal>
        </TouchableOpacity>
      {/*<View>
        <TouchableOpacity onPress={toggleModal} style={styles.cards}>
          <Image source={Cards} />
           <Modal isVisible={isModalVisible} style = {{alignItems: "center"}}>
            <View>
              <Text style = {styles.tapCard}>Tap card to flip</Text>
              <Button title="Hide modal" onPress={toggleModal} />
              <View style={{marginBottom:500}}>
                <FlipCard
                  flipHorizontal={true}
                  flipVertical={false}>
                  <View style={styles.face}>
                    <Text>The Face</Text>
                    <Image source={arr[0]} style={styles.cardStyle} />
                  </View>
                  <View>
                    <Text>The Back</Text>
                    <Image source={arr[2]} style={styles.cardStyle} />
                  </View>
                </FlipCard>
              </View>
            </View>
          </Modal> 
        </TouchableOpacity>
      </View>*/}
      <NavBar />
      </View>
    </View>
  );
  
  // function getRandomFortuneCard() {
  //   let random = Math.floor((Math.random() * cardsFront.length));
  //   let fortuneFront = cardsFront[random];
  //   console.log(fortuneFront);
  //   let fortuneFrontReversed = cardsFrontReversed[random];
  //   console.log(fortuneFrontReversed);
  //   let fortuneCardsMeaning = cardsMeaning[random];
  //   console.log(fortuneCardsMeaning);
  //   let fortunePaths = [fortuneFront, fortuneFrontReversed, fortuneCardsMeaning];
  //   //console.log(fortune);
  //   return fortunePaths;
  //   // console.log(fortunesArray[2])
  // }
}

function HomeScreenLoggedIn({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.appTitle}>
        <Image source={LargeTitleApp} />
      </View>
      <View style={styles.circleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ReadingAnimation')}>
          <Image source={TakePhoto} style={styles.circleL} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VirtualOne')}>
          <Image source={VirtualCoffee} style={styles.circleR} />
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
    <View style={{flex:1, backgroundColor:'#070631', height:'30%', alignItems:'center', alignContent:'center'}}>
      <Image source={Ellipse1} style={styles.ellipse} />
      <View style={{flexDirection:'row', width:'80%', justifyContent: 'space-between', position:'absolute', bottom: 0, paddingBottom:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Image source={Favorites}/>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => checkIfLoggedIn()}>
            <Image source={Home} style={{bottom:'80%'}}/>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
            <Image source={Shop} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

let favoriteDatabase = [
  {
    date: 'October 13, 2020',
    fortune: 'This is your fortune. This is your fortune. This is your fortune. This is your fortune. This is your fortune.'
  },
  {
    date: 'October 13, 2020',
    fortune: 'This is your fortune. This is your fortune. This is your fortune. This is your fortune. This is your fortune.'
  },
]

function FavoritesScreen() {
  const navigation = useNavigation();
  const [favoritesData, setFavoritesData] = useState([])

  // this hook calls getFavorites function when the page is focused. Wasn't able to get this to work. Maybe you could make it async so it arrives like you did for the random fortune before?
    useFocusEffect(useCallback(() => {
      getFavorites()
      return () => console.log("screen loses focus");
    }, []));

  return (
    <View style={{flexGrow:1, justifyContent:'space-between'}}>
      <ScrollView contentContainerStyle={styles.shopContainer}>
        <View style={{flexDirection:'row', width:'100%', position: 'relative', left:0, top:75, marginBottom: 65}} >
          <TouchableOpacity onPress={()=>navigation.popToTop()} style={styles.backButtonStyle}>
            <Image source={backButton} />
            
          </TouchableOpacity>
          
            <Image source={savedFortunesTitle} style={{position:'absolute', alignSelf:'center', right:'28%', bottom:'5%'}} />
        </View>
        <Image source={ galaxy } style={styles.shopBackgroundContainer} />
        {
          favoritesData.map((item, index) => {
            // favorites data is showing up in the console.log but not populating on the screen
            // this needs to be changed from a map to something else to correctly access the fortunes. 
            console.log(` favoritesData: ${favoritesData}`)
            return(
              <View key={index} style={{padding:30}}>
                <Image source={fortuneBox} />
                <View style={{flexDirection:'row', position: 'absolute', bottom:500, right:0, alignItems:'center', padding:12}}>
                  <Text style={{color:'black', fontWeight:'bold', fontSize: 21, right: 75}}>{item.date}</Text>
                    <Image source={etcButton} style={{right:50}}/>
                </View>
                <View style={{position:'absolute', top:150, left: 60, width:'90%'}}>
                  <Text style={{fontSize:17}}>{item.fortune}</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )

  // Can't get this to populate on the favorites page. See above comment for where I am putting it
  // async function getFavorites() {
  //   await db.collection('users').doc(firebase.auth().currentUser.uid)
  //     .get()
  //     .then(documentSnapshot => {
  //       const userData = documentSnapshot.data();
  //       console.log(`Retrieved data: ${JSON.stringify(userData.favorites)}`)
  //       setFavoritesData(userData.favorites)
  //     })
  //     .catch(error => console.log(error))
  // }
  async function getFavorites() {

    const userId = firebase.auth().currentUser.uid
    return firebase.database().ref('users/' + userId + '/favorites').once('value').then((snapshot) => {
      console.log(snapshot)
      setFavoritesData(snapshot)
    })
    
  }

}

function ReadMore(){
  return(
    <View style={{flex:1, backgroundColor:'#070631'}}>
      <Text>
        Hello
      </Text>
    </View>
  )
}

let ShopDatabase = [
  {
    name: 'OriginalCoffee',
    img: originalPhoto,
    buyButton: originalBuyButton 
  },
  {
    name: 'CoconutCoffee',
    img: coconutPhoto,
    buyButton: coconutButton
  },
  {
    name: 'StrawberryCoffee',
    img: strawberryPhoto,
    buyButton: strawberryButton
  },
  {
    name: 'HazelnutCoffee',
    img: hazelnutPhoto,
    buyButton: hazelnutButton
  },
  {
    name: 'CoffeeCaramel',
    img: coffeeCaramelPhoto,
    buyButton: coffeeCaramelButton
  },
  {
    name: 'CoffeeChocolate',
    img: coffeeChocolatePhoto,
    buyButton: coffeeChocolateButton
  }
]

function SubscriptionScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.virtualContainer}>
      <ImageBackground source={subBackground} style={styles.virtualOne}>
      
        <View style={ styles.flexInRows }>
          <TouchableOpacity onPress={()=>navigation.popToTop()} style={styles.backButtonStyle}>
            <Image source={backButton} />
          </TouchableOpacity>
        </View>
        <Image source={subscriptionDescription}/>
        <ScrollView>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity onPress={ () => console.log('Amethyst Pressed')} >
            <Image source={sub1} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => console.log('Amethyst Pressed')}>
            <Image source={sub2}  />
          </TouchableOpacity >
          <TouchableOpacity onPress={ () => console.log('Amethyst Pressed')}>
            <Image source={sub4} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => console.log('Amethyst Pressed')}>
            <Image source={sub3} />
          </TouchableOpacity>
        </View>
        </ScrollView>
        <NavBar/>
      </ImageBackground>
      
    </View>
  )
}

// Mostly done. Still need back button and add onPress with href to shopify site
function ShopScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.shopContainer}>
      <Image source={ galaxy } style={styles.shopBackgroundContainer} />
      <View style={ styles.flexInRows }>
        <TouchableOpacity onPress={()=>navigation.popToTop()} style={styles.backButtonStyle}>
          <Image source={backButton} />
        </TouchableOpacity>
        <Image source={shop} style={styles.shopScreenTitle} />
      </View>
      {
        ShopDatabase.map((item, index) =>{
          return(
            <View key={index} style={{padding:30}}>
              <Image source={item.img} style={styles.coffeeImageDimension} />
              <TouchableOpacity onPress={()=>{console.log(item.name)}}>
               <Image source={item.buyButton} style={styles.coffeeBuyButton} />
              </TouchableOpacity>
            </View>
          )
        })
      }
      <View style={{paddingBottom:150}}></View>
      <NavBar/>
    </ScrollView>
  )
}

function VirtualCoffeeReadingScreen() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#070631' }}>
        <View style={styles.authContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButtonStyle} >
            <Image source={backButton}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={useAVirtualCoffee} style={{marginTop:13}}/>
          </TouchableOpacity>
        </View>
      {/*<RNCamera ref={ref => {this.camera = ref;}} style={{flex: 1, width: '100%'}}>
      </RNCamera>
      */}
      <Image source={virtualImage} />
      <TouchableOpacity onPress={() => navigation.navigate('ReadingAnimation')}>
        <Image source={submitPhoto} style={{marginTop:30}} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openImagePickerAsync}>
      <Image source={photoGallery} style={{marginTop:30}} />
      </TouchableOpacity>
    </View>
  )
}

function FortuneModal() {
  return (
    <View style={styles.virtualContainer}>
      <Text> Hello </Text>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Fortune Modal</Text>
    </View>
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
        <TouchableOpacity onPress={ () => navigation.navigate('ReadingAnimation')}>
          <Image source={ coffee_v } />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

function VirtualFive(){
  const navigation = useNavigation();

  {/* ASYNCHRONOUSLY FIND RANDOM FORTUNE */}
  // BUG: redirects to fortunes away from subscription page if subscription button was pressed
  setTimeout( () => { navigation.navigate('Reading') }, 15000);
  
  return( 
    <View style={styles.virtualContainer}>
      <ImageBackground source={backgroundFive} style={ styles.virtualOne }>
        <Image source={ pysicReadingText } style={{ margin: '40%'}}/>
        <Image source={ dontWantToWaitText } style={{ marginBottom:10 }} />
        <TouchableOpacity onPress={ () => navigation.navigate('Subscription')}>
          <Image source={ getCrystalsButton } />
        </TouchableOpacity>
        <NavBar/>
      </ImageBackground>
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

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.virtualContainer}>
      <ImageBackground source={signBackground} style={styles.virtualOne}>
        <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.backButtonStyle}>
          <Image source={backButton}/>
        </TouchableOpacity>
        <Image source={signTitle} style={{marginTop:'20%'}}/>
        <Image source={signUpBelowTitle} style={{marginBottom:12, marginTop:12}} />
{/*
        <View style={{marginTop:8, marginBottom:20}}>
          <TouchableOpacity onPress={() => console.log('google pressed')} style={{marginBottom:20}}>
            <Image source={googleTitle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('facebook pressed')}>
            <Image source={facebookTitle} />
          </TouchableOpacity>
        </View>
        <Image source={signEmailText} style={{marginBottom:8}}/>
*/}
        <TextInput style={styles.textBox}
          label="Email"
          placeholder="    Email address"
          placeholderTextColor='#DCDCDC'
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={email => setEmail(email)}
        />
        <TextInput style={styles.textBox} secureTextEntry={true}
          label="Password"
          placeholder="    Password"
          placeholderTextColor='#DCDCDC'
          autoCapitalize='none'
          passwordRules='required: lower; required: upper; required: digit; required: [-], minlength:5'
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
        <TextInput style={styles.textBox} secureTextEntry={true}
          label="Re-enter Password"
          placeholder="    Re-enter Password"
          placeholderTextColor='#DCDCDC'
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => { SignUp(email, password), navigation.navigate('HomeLoggedIn')} }>
          <Image source={signUpButton} style={styles.buttonImage}  />
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginTop:20}} >
          <Image source={haveAcctText} style={{marginRight:10}}/>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Image source={loginText} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

// TODO need to hook this up to a button after signed in

function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#070631' }}>
      <View style={ styles.flexInRows }>
        <TouchableOpacity onPress={()=>navigation.popToTop()}>
          <Image source={backButton} />
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#FFFFFF', fontSize: 18, textAlign: 'left', alignSelf: 'stretch', marginLeft: 20}}>Name</Text>
      <TextInput style={styles.savedFortuneTextBox}
        label="Name"
        placeholder="   Enter name here"
        placeholderTextColor='#DCDCDC'
      />
      <Text style={{ color: '#FFFFFF', fontSize: 18, marginTop: 20, textAlign: 'left', alignSelf: 'stretch', marginLeft: 20}}>Relationship Status</Text>
      <TextInput style={styles.savedFortuneTextBox}
        label="Relationship Status"
        placeholder="   Enter relationship status here"
        placeholderTextColor='#DCDCDC'
      />
      <Text style={{ color: '#FFFFFF', fontSize: 18, marginTop: 20, textAlign: 'left', alignSelf: 'stretch', marginLeft: 20}}>Employment Status</Text>
      <TextInput style={styles.savedFortuneTextBox}
        label="EmploymentStatus"
        placeholder="   Enter employment status here"
        placeholderTextColor='#DCDCDC'
      />
      <Text style={{ color: '#FFFFFF', fontSize: 18, marginTop: 20, textAlign: 'left', alignSelf: 'stretch', marginLeft: 20}}>Gender</Text>
      <TextInput style={styles.savedFortuneTextBox}
        label="Gender"
        placeholder="   Enter gender here"
        placeholderTextColor='#DCDCDC'
      />
      <Text style={{ color: '#FFFFFF', fontSize: 18, marginTop: 20, textAlign: 'left', alignSelf: 'stretch', marginLeft: 20}}>Birthday</Text>
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
        <Image source={continueImage} />
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity onPress={() => console.log('log in pressed')}>
        <Image source={skipImage} />
      </TouchableOpacity>
    </View>
  )

}

//   const navigation = useNavigation();
//   return (
//     <ImageBackground source={profile_bg} style={styles.subBackgroundImage}>
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <View style={styles.authContainer}>
//           <TouchableOpacity style={styles.authButton1}>
//             <Image source={backButton} style={{marginRight: 80}}/>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.authButton2}>
//             <Image source={pageButton} />
//           </TouchableOpacity>
//         </View>
//         <Text style={{marginBottom: 30}}></Text>
//         <Image source={profileImage} />
//         <Input placeholder="Name" >
//         {/*<Image source={pencil} />*/}
//         </Input>  
//         <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 300}}>Username</Text>
//         <Input placeholder="Username" >
//         </Input>
//         <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 300}}>First name</Text>
//         <Input placeholder="First name" >
//         </Input> 
//         <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 300}}>Last Name</Text>
//         <Input placeholder="Last Name" >
//         </Input>  
//         <Text style={{color: '#FFFFFF', fontSize: 18, marginRight: 285}}>Date of Birth</Text>
//         <Input placeholder="Date of Birth" >
//         </Input>  
//         <Image source={Ellipse1} style={styles.ellipse1} />
//         {/* <Image source={Ellipse2} style={styles.ellipse2} /> */}
//         <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={{bottom:-175,left: -130}}>
//           <Image source={Favorites} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{top: 60,left: -0}}>
//           <Image source={Home} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={{top: 60,right: -130}}>
//           <Image source={Shop} />
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   )
// }

function SignInScreen() {
  const navigation = useNavigation();
// copy and paste
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.virtualContainer}>
      <ImageBackground source={signBackground} style={styles.virtualOne}>
        <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.backButtonStyle}>
          <Image source={backButton}/>
        </TouchableOpacity>
        <Image source={signTitle}  style={{marginTop:'20%', marginBottom:40}}/>
{/*
        <View style={{marginTop:8, marginBottom:20}}>
          <TouchableOpacity onPress={() => console.log('google pressed')} style={{marginBottom:20}}>
            <Image source={googleTitle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('facebook pressed')}>
            <Image source={facebookTitle} />
          </TouchableOpacity>
        </View>
        <Image source={signEmailText} style={{marginBottom:8}}/>
*/}
        <TextInput style={styles.textBox}
          label="Email"
          placeholder="    Email address"
          placeholderTextColor='#DCDCDC'
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={email => setEmail(email)}
        />
        <TextInput style={styles.textBox} secureTextEntry={true}
          label="Password"
          placeholder="    Password"
          placeholderTextColor='#DCDCDC'
          autoCapitalize='none'
          passwordRules='required: lower; required: upper; required: digit; required: [-], minlength:5'
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => { onLogin(email, password) } }>
          <Image source={loginButton} style={styles.buttonImage} />
        </TouchableOpacity>
        <Image source={forgotPasswordText} style={{marginTop:20}}/>
        <View style={{flexDirection:'row', marginTop:12}}>
          <Image source={createNewText} style={{marginRight:4}}/>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Image source={accoutText}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  )
  // copy and paste
  function onLogin () {
    firebase.auth().signInWithEmailAndPassword(email, password)
    navigation.navigate('HomeLoggedIn')
  }
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
  InteractionManager.runAfterInteractions(() => navigation.navigate("VirtualFive"));

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

// ADDED
function Reading({}){
  const navigation = useNavigation();
  var userName = 'user';

  const [randomFortune, setRandomFortune] = useState('');
  return (
    <View style={styles.virtualContainer}>
      <ImageBackground source={readingBackground} style={styles.virtualOne}>
        <View style={styles.flexInRows}>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Image source={backButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={userImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.flexInRowsCoffee}>
          <TouchableOpacity onPress={() => onSaveFortune()}>
              <Image source={saveButton} />
            </TouchableOpacity>
            <View>
              <Text style={styles.helloUserTextContainer}> Hello {userName} </Text>
              <Image source={coffeeImg} style={{ marginTop: 20 }} />
            </View>
            <TouchableOpacity onPress={() => console.log("SHARE")}>
              <Image source={shareButton} style={{ alignSelf: 'flex-end' }} />
            </TouchableOpacity>
        </View>
          <View style={styles.readingTableContainer}>
            <Image source={yourFortune} style={{marginBottom:12}} />
            <ScrollView>
            <Text style={{fontSize:17, color:'white'}}> {randomFortune}  </Text>
            {/* // add onPress decrement gem counter  */}
              <Button
                onPress={() => {
                  setRandomFortune(getRandomFortune)
                }}
                title='Fortune Ready Click To View!'
              >
              </Button>
            </ScrollView>
          </View>
          <NavBar/>
      </ImageBackground>
    </View>
  )
  
  function getRandomFortune() {
    let random = Math.floor((Math.random() * fortunesArray.length))
    console.log(random);
    let fortune = fortunesArray[random];
    console.log(fortune);
    return fortune;
  }

  // the structure is pretty bad this way as well. Not sure how to get it to populate like a simple array.
  function onSaveFortune() {
    const userId = firebase.auth().currentUser.uid
    firebase.database().ref('users/' + userId + '/favorites').push({
      randomFortune
    })
    // navigation.navigate('Favorites')
  }
}

////////////////////
// Navigation Stack //
////////////////////
const Stack = createStackNavigator();

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
        <Stack.Screen name="HomeLoggedIn" component={HomeScreenLoggedIn} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Virtual" component={VirtualCoffeeReadingScreen} />
        <Stack.Screen name="VirtualOne" component={VirtualOne} options={{ cardStyleInterpolator:forFade}} />
        <Stack.Screen name="VirtualTwo" component={VirtualTwo} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="VirtualThree" component={VirtualThree} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="VirtualFour" component={VirtualFour} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="VirtualFive" component={VirtualFive} options={{ cardStyleInterpolator:forFade}}/>
        <Stack.Screen name="VirtualLoading" component={VirtualLoadingScreen} />
        <Stack.Screen name="PhotoReading" component={PhotoReadingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ReadingAnimation" component={ReadingAnimationScreen} />
        <Stack.Screen name="Reading" component={Reading} />
        <Stack.Screen name="ReadMore" component={ReadMore} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Fortune" component={FortuneModal} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;