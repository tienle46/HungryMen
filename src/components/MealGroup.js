import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions
    } from 'react-native'
import MealHeader from '../components/MealHeader'
import FoodDetail from '../components/FoodDetail'

var SQLite = require('react-native-sqlite-storage')
db = SQLite.openDatabase({name: 'abc', createFromLocation : "~www/hungryman.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});
export default class MealGroup extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        // db.transaction((tx) => {
        // var sql = 'SELECT * FROM user WHERE username =\'' + this.state.username + '\''
        // try {
        //     tx.executeSql(sql, [],(tx,results) => {
        //     var len = results.rows.length
        //     if (len == 0) {
        //         Toast.show('Invalid account')
        //     } else {
        //         var row = results.rows.item(0)
        //         if (this.state.password == row.password) {
        //         this._directtoMenu()
        //         } else {
        //         Toast.show('Wrong password')
        //         }
        //     }
        //     })
        // }
        // catch(e) {
        //     console.log('error:' +e)
        // }
        // })
    }

    render() {
        const styleSheet = StyleSheet.create({
            container: {
                alignItems: 'center'
            },
            addFoodBtnText: {
                color: 'rgb(80,198,209)',
                fontSize: 18
            },
            buttonContainer: {
                width: Dimensions.get('window').width * 0.95,
            }
        })
        return(
            <View style = {styleSheet.container}>
                <MealHeader
                    mealTime = {this.props.mealTime}
                    mealName = {this.props.mealName}
                    mealCalories = {this.props.mealCalories}
                />
                <FoodDetail
                    foodName = 'Eggs'
                    foodCalories = {150}
                />
                <FoodDetail
                    foodName = 'Eggs'
                    foodCalories = {150}
                />
                <View style = {styleSheet.buttonContainer}>
                    <TouchableOpacity>
                        <Text style = {styleSheet.addFoodBtnText}>+ Add food</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}