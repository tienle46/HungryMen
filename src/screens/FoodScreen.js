import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'

export default class FoodScreen extends Component {
    _directtoMenu() {
  Router.navigate(RouteNames.Menu)
}
   _directtoProfile(){
  Router.navigate(RouteNames.Profile)      
    }

    render() {
        return(
        <ImageBackground style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>FOODS</Text>
            </View>

            <View style={styles.reminder}>
                <Text style={styles.nocolorWord}>Next meal in <Text style={styles.coloredWord}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord}> 1000 </Text> </Text>
            </View>
            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Suggested foods</Text>
                <Text style={styles.coloredWord}>Broccoli</Text>
                <Text style={styles.coloredWord}>Nuts</Text>
                <Text style={styles.coloredWord}>Greek yogurt</Text>
            </View>


            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Latest foods</Text>
                <Text style={styles.coloredWord}>Eggs</Text>
                <Text style={styles.coloredWord}>Oatmeal</Text>
            </View>

            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Favorite foods</Text>
                <Text style={styles.coloredWord}>Eggs</Text>
            </View>


            <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoMenu()}}>
                <Text style={styles.text}>Menu Screen</Text>
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
    fontWeight: 'bold',
    alignSelf: 'center'
},
reminder: {
    justifyContent: 'center'
}
});
