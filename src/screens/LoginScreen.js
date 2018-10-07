import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions, AppRegistry} from 'react-native';
import bgImage from '../assets/images/background2.jpg'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { StackNavigator } from 'react-navigation'


//import logo from './images/logo.jpg'

export default class LoginScreen extends Component {
_directtoRegister() {
  Router.navigate(RouteNames.Register)
}

_directtoMenu() {
  Router.navigate(RouteNames.Menu)
}

  render() {
    return (
      <ImageBackground style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>LOGIN</Text>
        </View>


        <View style={styles.inputContainer}>
        <Text style={styles.userText}>Email</Text>
          <TextInput
              style={styles.input}

          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.userText}>Password</Text>
          <TextInput
              style={styles.input}
          />
          <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoMenu()}}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.do}>Do not have an account?</Text>
        </View>
        
        <TouchableOpacity style ={styles.btnSignup} onPress = {() => {this._directtoRegister()}}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}


var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(32,32,32,1)'
  },
  logoContainer: {
    alignItems: 'center',
    //backgroundColor: 'rgba(32,32,32,0.8)',
    backgroundColor: 'transparent'
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
  },
  inputContainer:{
    marginTop: 20
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 25,
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 25
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnLogin: {
    width: 100,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'rgba(80,198,209,0.8)',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 220
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  do: {
    marginTop: 100,
    color: 'rgba(250,248,245,0.8)',
    fontSize: 20
  },
  btnSignup: {
    width: 100,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'rgba(80,198,209,0.8)',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 2
  },
  userText: {
    fontSize: 17,
    marginLeft: 30,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold'
  }
});
