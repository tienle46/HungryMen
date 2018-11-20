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
db = SQLite.openDatabase({name: 'tramy', createFromLocation : "~www/hungryman.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});


export default class ChallengeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {
        super()
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: this.ds.cloneWithRows([
            {
                type: 'daily',
                detail: 'Stop where you are, look to your right. What is the first color that you see? What vegetable/fruit it reminds you? Eat That!',
                xp: '100'
            },
            {
                type: 'daily',
                detail: 'Open your browser and close your eyes. Press 1 letter. Based on that letter find an item with vitamin D. If failed: try again.',
                xp: '100'
            },
            {
                type: 'daily',
                detail: 'Think of the candy that you are craving. Find something of the same color. Form shape of candy with that food. Eat it with your hands',
                xp: '100'
            },
            {
                type: 'daily',
                detail: 'Walk through place that doesn’t have any vehicles. Take a breath. How does it smell? What food comes to your mind. Make food from it. ',
                xp: '100'
            },
            {
                type: 'daily',
                detail: 'Open your fridge and grab first thing that you see. Think some food that you can make from it. Make that food.',
                xp: '100'
            },
            {
                type: 'weekly',
                detail: 'Go to grocery store. Go to vegetable section. Think last vegetable/fruit that you bought. Take next vegetable/fruit beside it. ',
                xp: '200'
            },
            {
                type: 'weekly',
                detail: 'Walk to somewhere. Put your music away. Listen to sounds/voices. If you hear something that reminds you about food remember it. Do meal concerning to this. ',
                xp: '200'
            },
            {
                type: 'weekly',
                detail: 'You are thirsty, look around what kind of drink comes to your mind? Drink it!',
                xp: '200'
            },
            {
                type: 'weekly',
                detail: 'Listen to some music, what kind of fruit/vegetable does the song remind you of? Eat it!',
                xp: '200'
            },
            {
                type: 'weekly',
                detail: 'Open your phone, check photos, pick one, what kind of fruit/vegetable does it remind you? Eat it!',
                xp: '200'
            }
        ]),
        }
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
                        <Text style={styles.nocolorWord}>Daily Challenges</Text>
                    </View>
                    <TouchableOpacity style={styles.instruction} onPress = {() => {this._directtoInstruction()}}>
                        <Text>?</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.info}>
                    <View style={styles.infoDetail}>
                        <ListView
                            dataSource = {this.state.dataSource}
                            renderRow = {this._renderRow}
                        />
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
