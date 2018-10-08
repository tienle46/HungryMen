import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions
    } from 'react-native'
import MealHeader from '../components/MealHeader'
import FoodDetail from '../components/FoodDetail'

export default class MealGroup extends Component {
    constructor() {
        super()
    }

    render() {
        const styleSheet = StyleSheet.create({
            container: {
                alignItems: 'center'
            },
            addFoodBtnText: {
                color: 'rgb(80,198,209)',
                fontSize: 16
            },
            buttonContainer: {
                width: Dimensions.get('window').width * 0.95,
            }
        })
        return(
            <View style = {styleSheet.container}>
                <MealHeader
                    mealTime = '8:00'
                    mealName = 'Breakfast'
                    mealCalories = {300}
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