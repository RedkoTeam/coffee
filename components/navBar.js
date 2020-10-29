import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import ElipseOne from '../assets/FortuneCoffeePNGassets/Ellipse6.png'
import ElipseTwo from '../assets/FortuneCoffeePNGassets/Ellipse7.png'
import FavHeart from '../assets/FortuneCoffeePNGassets/NavTargetFavorites.png';
import HomeIcon from '../assets/FortuneCoffeePNGassets/HomeIcon.png';
import ShopIcon from '../assets/FortuneCoffeePNGassets/ShopIcon.png';
import Home from '../assets/FortuneCoffeePNGassets/Home.png';
import Shop from '../assets/FortuneCoffeePNGassets/Shop.png';
import Favorites from '../assets/FortuneCoffeePNGassets/Favorites.png';

const styles = StyleSheet.create({
    navBarIcons: {
        flex: 0.25,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})

class navBar extends Component{
    render(){
        return (
            <View style={styles.navBarIcons}>
                
            </View>
        )
    }
}

export default navBar;