import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { createBottomTabNavigator } from 'react-navigation'
import MealGroup from '../components/MealGroup'

export default class MenuScreen extends Component {
    constructor() {
        super()
    }

    _directtoAddFood() {
        Router.navigate(RouteNames.Add)
    }
    _directtoFood() {
        Router.navigate(RouteNames.Food)
    }
    _directtoProfile(){
        Router.navigate(RouteNames.Profile)
    }

    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
                {/* <View style={styles.reminder}>
                    <Text style={styles.nocolorWord}>Next meal in <Text style={styles.coloredWord}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord}> 1000 </Text> </Text>
                </View> */}
                <MealGroup/>

                <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoFood()}}>
                    <Text style={styles.text}>Food Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoProfile()}}>
                    <Text style={styles.text}>Profile Page</Text>
                </TouchableOpacity>
                
            </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
backgroundContainer: {
    justifyContent: 'center',
    backgroundColor: 'rgb(38,38,38)',
    flex: 1,
  },  
coloredWord: {
    color: 'rgba(80,198,209,0.8)',
    fontSize: 15,
    borderColor: 'white',
    borderWidth: 5,
    alignItems: 'center'
},
nocolorWord: {
    color: 'white',
    fontSize: 15,
    alignItems: 'flex-start',
    borderColor: 'white',
    borderWidth: 1
},
nocolorWordTitle: {
    color: 'white',
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'flex-start'
},
logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
},
reminder: {
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,

},
number: {
    alignItems: 'flex-end'
},

meal: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
},
nocolorWordTitle1: {
    justifyContent: 'flex-start'
},
number1: {
    justifyContent: 'flex-end'
}
});
