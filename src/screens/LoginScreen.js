import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import bgImage from '../assets/images/background2.jpg'
import Router from '../routes/Router'
import RouterNames from '../routes/RouteNames'
//import logo from './images/logo.jpg'

export default class LoginScreen extends Component {
  constructor(){
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

showPass = () => {
  if (this.state.press == false){
    this.setState({ showPass: false, press: true})
  } else {
    this.setState({ showPass: true, press: false})
  }
}

direct() {
  Router.navigate(RouteNames.Register)
}

  render() {
    return (
      <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
            {/* <Image source={logo} style={styles.logo} /> */}
            <Text style={styles.logoText}>HUNGER MAN BUDDY</Text>
        </View>


        <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry={this.state.showPass}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          />
          <TouchableOpacity style ={styles.btnLogin} onClick = {() => {direct()}}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.do}>Do not have an account?</Text>
        </View>
        <TouchableOpacity style ={styles.btnSignup}>
          <Text style={styles.text}>Sign Up</Text>
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
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
  inputContainer:{
    marginTop: 10
  },
  input: {
    width: 300,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#808080',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 25
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
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
    backgroundColor: '#808080',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 2
  }
});
