import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'

export default class RegisterScreen extends Component {
    _directtoLogin() {
  Router.navigate(RouteNames.Login)
}
    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>REGISTER</Text>
        </View>


        <View style={styles.inputContainer}>
        <Text style={styles.userText}>Email *</Text>
          <TextInput
              style={styles.input}

          />

        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.userText}>Password *</Text>
          <TextInput
              style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.userText}>Current bodyweight</Text>
          <TextInput
              style={styles.input}
          />
        </View>
         <View style={styles.inputContainer}>
          <Text style={styles.userText}>Goal</Text>
          <TextInput
              style={styles.input}
          />
        </View>
        
        <TouchableOpacity style ={styles.btnSignup} onPress = {() => {this._directtoLogin()}}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

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
    marginBottom: 30
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
    marginHorizontal: 20
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
    backgroundColor: '#89cff0',
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
    color: 'white'
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