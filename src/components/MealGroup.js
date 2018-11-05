import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions,
        ListView
    } from 'react-native'
import MealHeader from '../components/MealHeader'
import FoodDetail from '../components/FoodDetail'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'

var SQLite = require('react-native-sqlite-storage')
db = SQLite.openDatabase({name: 'tienle', createFromLocation : "~www/hungryman.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});
export default class MealGroup extends Component {
    constructor() {
        super()
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: this.ds.cloneWithRows([]),
        mealCalories: 0,
        }
    }

    _directToAddFood = () => {
        Router.navigate(RouteNames.AddFood, {mealId: this.props.id})
    }

    _fetchData() {
        var dishes = []
            db.transaction((tx) => {
                var sql = 'SELECT * FROM Dish WHERE mealId =' + this.props.id
                try {
                    tx.executeSql(sql, [],(tx,results) => {
                        var len = results.rows.length
                        var mealCalories = 0
                        for (var i = 0; i < len; i++) {
                            var row = results.rows.item(i)
                            mealCalories = mealCalories + row.calories
                            var dish = {foodName: row.foodName, calories: row.calories}
                            dishes.push(dish)
                        }
                        var num = Number(mealCalories)
                        var newMealCalories = Number(num.toFixed(2))
                        this.setState({
                            dataSource: this.ds.cloneWithRows(dishes),
                            mealCalories: newMealCalories
                        })
                        var updateSql = "UPDATE Meal SET calories =" + this.state.newMealCalories + " WHERE id =" + this.props.id
                        try {
                            tx.executeSql(updateSql)
                        } catch(e) {
                            console.log('e:' + e)
                        }
                    })
                }
                catch(e) {
                    console.log('error:' +e)
                }
            })
    }

    componentDidMount() {
        this._fetchData()
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
            this._fetchData()
        });
    }

    componentWillUnmount() {
        this._subscribe.remove()
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
                    mealCalories = {this.state.mealCalories}
                />
                <ListView 
                    dataSource={this.state.dataSource}
                    enableEmptySections
                    renderRow={(rowData) => {
                        return(
                            <FoodDetail 
                            foodName = {rowData.foodName}
                            foodCalories = {rowData.calories}
                            />
                        )
                    }}
                />
                <View style = {styleSheet.buttonContainer}>
                    <TouchableOpacity>
                        <Text style = {styleSheet.addFoodBtnText} onPress = {this._directToAddFood}>+ Add food</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}