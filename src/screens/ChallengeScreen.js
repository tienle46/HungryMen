import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker, Dimensions, ListView} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { createBottomTabNavigator } from 'react-navigation'
import MealGroup from '../components/MealGroup'
import HeaderTitle from '../components/HeaderTitle'
import moment from 'moment';
import Storage from '../cores/Storage'

var SQLite = require('react-native-sqlite-storage')
db = SQLite.openDatabase({name: 'dtb', createFromLocation : "~www/hungryman.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});


export default class ChallengeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {
        super()
        
    }

    _renderRow(rowData){
        return <Text style={styles.nocolorWord}>{rowData.detail}</Text>
    }

     _directtoInstruction() {
    Router.navigate(RouteNames.HowToDo)
  }

    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
                <View style = {styles.header}>
                    <HeaderTitle title = 'CHALLENGES' />
                    <View style={styles.reminder}>
                        <Text style={styles.nocolorWord}>Next meal in <Text style={styles.coloredWord}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord}> 1000 </Text> </Text>
                    </View>
                </View>
            </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'rgb(38,38,38)',
        flex: 1
    },  
    coloredWord: {
        color: 'rgba(80,198,209,0.8)',
        fontSize: 15,
        borderColor: 'white',
        borderWidth: 5,
        alignItems: 'center',
        letterSpacing: 1

    },
    nocolorWord: {
        color: 'white',
        fontSize: 15,
        alignItems: 'flex-start',
        letterSpacing: 1
    },
    nocolorWordTitle: {
        color: 'white',
        fontSize: 20,
        justifyContent: 'flex-start',
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
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
    },
    header: {
            alignItems: 'center',
            backgroundColor: 'rgb(32,32,32)',
            flexDirection: 'column',
            paddingTop: 20,
            height: 90
    },
    addFoodBtnText: {
        color: 'rgb(80,198,209)',
        fontSize: 18
    },
    buttonContainer: {
        width: Dimensions.get('window').width * 0.95,
        marginTop: 10
    },
    infoDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    info: {
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 15
    }
});
