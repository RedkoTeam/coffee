
import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import navBar from '../components/navBar.js';

////////////////////
// IMAGES & ICONS //
////////////////////
import FavHeart from '../assets/FortuneCoffeePNGassets/NavTargetFavorites.png';
import HomeIcon from '../assets/FortuneCoffeePNGassets/HomeIcon.png';
import ShopIcon from '../assets/FortuneCoffeePNGassets/ShopIcon.png';
import TakePhoto from '../assets/FortuneCoffeePNGassets/TakePhoto.png';
import Home from '../assets/FortuneCoffeePNGassets/Home.png';
import Shop from '../assets/FortuneCoffeePNGassets/Shop.png';
import Favorites from '../assets/FortuneCoffeePNGassets/Favorites.png';
import VirtualCoffee from '../assets/FortuneCoffeePNGassets/VirtualCoffee.png';
import SignInButton from '../assets/FortuneCoffeePNGassets/SignInButton.png';
import SignUpButton from '../assets/FortuneCoffeePNGassets/SignUpButton.png';
import LargeTitleApp from '../assets/FortuneCoffeePNGassets/LargeTitleApp.png';
import PickCard from '../assets/FortuneCoffeePNGassets/PickCard.png';
import RightCard from '../assets/FortuneCoffeePNGassets/RightCard.png';
import MiddleCard from '../assets/FortuneCoffeePNGassets/MiddleCard.png';
import LeftCard from '../assets/FortuneCoffeePNGassets/LeftCard.png';
import Love from '../assets/FortuneCoffeePNGassets/Love.png';
import Work from '../assets/FortuneCoffeePNGassets/Work.png';
import Wish from '../assets/FortuneCoffeePNGassets/Wish.png';

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
  cardTitleContainer: {
    flex: .01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
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
  love: {
    position: 'absolute',
    bottom: -50,
    left: -160
  },
  wish: {
    position: 'absolute',
    bottom: -25,
    left: -25
  },
  work: {
    position: 'absolute',
    bottom: -50,
    right: -160
  },
  iconContainer: {
    flex: 0.25,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  
});

export default function HomeScreen({navigation}) {
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
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={{ alignItems: 'center'}}>
          <Image source={FavHeart}/>
          <Image source={Favorites}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ bottom: 30 , alignItems: 'center'}}>
          <Image source={HomeIcon} style={{ marginBottom:7 }}/>
          <Image source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={{ alignItems: 'center'}}>
          <Image source={ShopIcon}/>
          <Image source={Shop} />
        </TouchableOpacity>
      </View>
  
    </View>
  );
}

