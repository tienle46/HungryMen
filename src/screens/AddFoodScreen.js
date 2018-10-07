import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { createBottomTabNavigator } from 'react-navigation'

export default class AddFoodScreen extends Component {
    _directtoMenu() {
  Router.navigate(RouteNames.Menu)
}



    render() {
        return(
        <ImageBackground style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>ADD FOOD</Text>
            </View>
            <View>
                <Text style={styles.nocolorWord}>Brocolli</Text>
                <TextInput style={styles.input} placeholder = 'gram' /> 
            </View>
            <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoMenu()}}>
                <Text style={styles.text}>Add food</Text>
            </TouchableOpacity>
            
        </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(32,32,32,1)',
    borderWidth: 1
  },  
coloredWord: {
    color: 'rgba(80,198,209,0.8)',
    fontSize: 15
},
nocolorWord: {
    color: 'white',
    fontSize: 15
},
nocolorWordTitle: {
    color: 'white',
    fontSize: 20
},
logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
},
btnLogin: {
    width: 100,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'rgba(80,198,209,0.8)',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 200
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  input: {
    width: 70,
    height: 40,
    fontSize: 16,
    paddingLeft: 25,
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 25
  },
});
