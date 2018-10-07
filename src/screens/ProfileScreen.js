import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'

export default class ProfileScreen extends Component {
    _directtoMenu() {
  Router.navigate(RouteNames.Menu)
}
   _directtoFood(){
  Router.navigate(RouteNames.Food)      
    }

    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Profile</Text>
            </View>
            <View style={styles.reminder}>
                <Text style={styles.nocolorWord}>Next meal in <Text style={styles.coloredWord}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord}> 1000 </Text> </Text>
            </View>
            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Level 160/200</Text>
            </View>


            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Name <Text style={styles.coloredWord}> John Doe</Text></Text>
            </View>

            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Age <Text style={styles.coloredWord}> 31</Text></Text>
            </View>

            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Height <Text style={styles.coloredWord}> 180cm</Text></Text>
            </View>

            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Weight<Text style={styles.coloredWord}>80kg</Text></Text>
            </View>

            <View style={styles.meal}>
                <Text style={styles.nocolorWordTitle}>Last meal<Text style={styles.coloredWord}>Fish soup</Text></Text>
            </View>



            <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoMenu()}}>
                <Text style={styles.text}>Menu page</Text>
            </TouchableOpacity>

            <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoFood()}}>
                <Text style={styles.text}>Food page</Text>
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
});
