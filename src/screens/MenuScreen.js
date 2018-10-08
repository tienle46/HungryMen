import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { createBottomTabNavigator } from 'react-navigation'

export default class MenuScreen extends Component {

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
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>HOME</Text>
            </View>
            <View style={styles.reminder}>
                <Text style={styles.nocolorWord}>Next meal in <Text style={styles.coloredWord}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord}> 1000 </Text> </Text>
            </View>
            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Breakfast <Text style={styles.coloredWord}> 8:00</Text> <Text style={styles.number}>300</Text></Text>
            </View>

            <View style={styles.breakfastContent}>
                <Text style={styles.nocolorWord}>Eggs <Text style={styles.number}>150</Text></Text>
                <Text style={styles.nocolorWord}>Oatmeal <Text style={styles.number}> 150</Text></Text>
            </View>

            <TouchableOpacity style={styles.addFood} onPress = {() => {this._directtoAddFood()}}>
                <Text style={styles.coloredWord}>+ Add food</Text>
            </TouchableOpacity>


            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Lunch <Text style={styles.coloredWord}> 12:00</Text> 700</Text>
            </View>

            <View style={styles.breakfastContent}>
                <Text style={styles.nocolorWord}>Rice <Text style={styles.number}>280</Text></Text>
                <Text style={styles.nocolorWord}>Teriyaki chicken 300</Text>
                <Text style={styles.nocolorWord}>Carrots 120</Text>
            </View>

            <TouchableOpacity style={styles.addFood} onPress = {() => {this._directtoAddFood()}}>
                <Text style={styles.coloredWord}>+ Add food</Text>
            </TouchableOpacity>

            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Dinner <Text style={styles.coloredWord}> 18:00</Text></Text>
            </View>

            <TouchableOpacity style={styles.addFood} onPress = {() => {this._directtoAddFood()}} >
                <Text style={styles.coloredWord}>+ Add food</Text>
            </TouchableOpacity>



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
    backgroundColor: 'rgba(32,32,32,1)',
    borderWidth: 1,
    flex: 1,
    borderColor: 'white'
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
