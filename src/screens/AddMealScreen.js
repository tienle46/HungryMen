import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { createBottomTabNavigator } from 'react-navigation'
import HeaderTitle from '../components/HeaderTitle'
import DropdownMenu from 'react-native-dropdown-menu';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import Toast, {positions, durations} from '../components/Toast'

var SQLite = require('react-native-sqlite-storage')
db = SQLite.openDatabase({name: 'abc', createFromLocation : "~www/hungryman.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});
export default class AddMealScreen extends Component {
    constructor() {
        super()
        this.state = {
            mealTypeSelection: 1,
            date: null
        }
    }
    
    static navigationOptions = {
        headerTitle:(
        <HeaderTitle 
            title = 'ADD MEAL'
        />
        ),
        headerStyle: {
        backgroundColor: 'rgb(32,32,32)',
        },
    }
    _directtoMenu() {
        Router.navigate(RouteNames.Menu)
    }

    onBtnSubmitClicked = () => {
        if (this.state.date === null) {
            Toast.show('Please select time')
        }
        var dateToUnix = moment(this.state.date,"YYYY-MM-DD, hh:mm").unix()
        console.warn(Router.getParam(this,'userId'))
        // var insertSql = 'INSERT INTO Meal (type, date, userId) VALUES(\'' + this.state.username + '\',\'' + this.state.password + '\',' + this.state.curWeight +',' + this.state.goal + ')'

        //     try {
        //       tx.executeSql(insertSql, [], (tx,results) => {
        //         Toast.show('Successfully registered')
        //         this._directtoLogin()
        //       })
        //     }
        //     catch(e) {
        //       console.log('error:' + e)
        //     }
    }



    render() {
        var mealTypeSelection = [["Breakfast", "Brunch" ,"Lunch","Dinner","Midnight-snack"]]
        return(
            <View style = {styles.container}>
                <ImageBackground style={styles.backgroundContainer}>
                    <View style = {styles.dateSelect}>
                        <Text style={styles.datePickerText}>Time:</Text>
                        <DatePicker 
                        style={{width: 200}}
                        date={this.state.date}
                        mode="datetime"
                        placeholder="select time"
                        format="YYYY-MM-DD, hh:mm"
                        minDate="2018-10-01"
                        maxDate= {moment().format('YYYY-MM-DD')}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon = {false}
                        customStyles={{
                        placeholderText: {
                            color: 'white'
                        },
                        dateText: {
                            color: 'white'
                        }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    <View style = {styles.typeSelect}>
                        <Text style={styles.nocolorWord}>Meal Type:</Text>
                        <DropdownMenu
                            style={{flex: 0}}
                            bgColor={'transparent'}
                            tintColor={'rgb(80,198,209)'}
                            activityTintColor={'rgb(80,198,209)'}
                            optionTextStyle={{color: 'black', fontSize: 24}}
                            titleStyle={{fontSize: 24, color: 'white'}}
                            handler={(selection,row) => this.setState({mealTypeSelection: row})}
                            data={mealTypeSelection}
                        />
                    </View>
                    <View style = {styles.button}>
                        <TouchableOpacity style ={styles.btnLogin} onPress = {this.onBtnSubmitClicked}>
                            <Text style={styles.text}>Add Meal</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    typeSelect: {
        flexDirection: 'row',
        paddingLeft: 20,
        marginTop: 30,
        height:265
    },

    dateSelect: {
        flexDirection: 'row',
        paddingLeft: 20,
    },
    button: {
        paddingTop: 100,
        alignItems: 'center',
    },
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
    datePickerText: {
        color: 'white',
        fontSize: 24,
        marginRight: 100,
        marginTop: 6,
    },
    nocolorWord: {
        marginTop: 6,
        color: 'white',
        fontSize: 24,
    },
    nocolorWordTitle: {
        color: 'white',
        fontSize: 20
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    btnLogin: {
        width: 100,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'rgba(80,198,209,0.8)',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    input: {
        width: 70,
        height: 40,
        fontSize: 16,
        paddingLeft: 25,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 25
    },
});