import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker, Dimensions, ListView} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { createBottomTabNavigator } from 'react-navigation'
import MealGroup from '../components/MealGroup'
import HeaderTitle from '../components/HeaderTitle'
import moment from 'moment';

var SQLite = require('react-native-sqlite-storage')
db = SQLite.openDatabase({name: 'abc', createFromLocation : "~www/hungryman.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});
var meals = []
export default class MenuScreen extends Component {

    constructor() {
        super()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows(meals),
        }
    }

    componentDidMount() {
        console.warn(Router.getParam(this,'dmm'))
        var userId = Router.getParam(this, 'userId')
        var today = moment().format("MM-DD-YYYY")
        db.transaction((tx) => {
        var sql = 'SELECT * FROM meal WHERE userId=' + userId
        try {
            tx.executeSql(sql, [],(tx,results) => {
                var len = results.rows.length
                for (var i = 0; i <= len; i++) {
                    var row = results.rows[i]
                    var mealTime = moment(row.date).format("MM-DD-YYYY")
                    if (mealTime === today) {
                        var meal = {type: row.type, date:row.date, calories: row.calories}
                        meals.push(meal)
                    }
                }
            })
        }
        catch(e) {
            console.log('error:' +e)
        }
        })
    }

    onButtonAddMealClick = () => {
        
        Router.navigate(RouteNames.AddMeal, {userId: Router.getParam(this,'userId')})
    }

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
                <View style = {styles.header}>
                    <HeaderTitle title = 'HOME' />
                    <View style={styles.reminder}>
                        <Text style={styles.nocolorWord}>Next meal in <Text style={styles.coloredWord}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord}> 1000 </Text> </Text>
                    </View>
                </View>
                <MealGroup/>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity onPress = {this.onButtonAddMealClick}>
                        <Text style = {styles.addFoodBtnText}>+ Add Meal</Text>
                    </TouchableOpacity>
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
        alignItems: 'center'
    },
    nocolorWord: {
        color: 'white',
        fontSize: 15,
        alignItems: 'flex-start',
    },
    nocolorWordTitle: {
        color: 'white',
        fontSize: 20,
        justifyContent: 'flex-start'
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    reminder: {
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
    },
    addFoodBtnText: {
        color: 'rgb(80,198,209)',
        fontSize: 18
    },
    buttonContainer: {
        width: Dimensions.get('window').width * 0.95,
        marginTop: 10
    }
});
