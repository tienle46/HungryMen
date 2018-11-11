import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions, AppRegistry} from 'react-native';
import bgImage from '../assets/images/background2.jpg'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { StackNavigator } from 'react-navigation'
import Toast, {positions, durations} from '../components/Toast'
import HeaderTitle from '../components/HeaderTitle'
import Storage from '../cores/Storage'
const icon = require('../assets/images/logo.png')

//import logo from './images/logo.jpg'
var SQLite = require('react-native-sqlite-storage')
db = SQLite.openDatabase({name: 'database', createFromLocation : "~www/hungryman.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});
export default class LoginScreen extends Component {
  static navigationOptions = {
        header: null
    }

  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  _directtoRegister() {
    Router.navigate(RouteNames.Register)
  }

  _directtoMenu() {
    Router.navigate(RouteNames.ContentStack)
  }

  onLoginBtnClicked = () => {
    db.transaction((tx) => {
      var sql = 'SELECT * FROM user WHERE username =\'' + this.state.username + '\''
      try {
        tx.executeSql(sql, [],(tx,results) => {
          var len = results.rows.length
          if (len == 0) {
            Toast.show('Invalid account')
          } else {
            var row = results.rows.item(0)
            if (this.state.password == row.password) {
              Storage.save('userId', row.id)
              this._directtoMenu()
            } else {
              Toast.show('Wrong password')
            }
          }
        })
      }
      catch(e) {
        console.log('error:' +e)
      }
    })
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundContainer}>
        <View style = {styles.header}>
          <HeaderTitle title = 'Login' />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.userText}>Email</Text>
          <TextInput
              style={styles.input}
              onChangeText = {username => this.setState({username})}

          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.userText}>Password</Text>
          <TextInput
              style={styles.input}
              onChangeText = {password => this.setState({password})}
              secureTextEntry = {true}
          />
          <TouchableOpacity style ={styles.btnLogin} onPress = {this.onLoginBtnClicked}>
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
    alignItems: 'stretch',
    backgroundColor: '#262626',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'rgb(32,32,32)',
    flexDirection: 'column',
    paddingTop: 20,
    height: 90
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
