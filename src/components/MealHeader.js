import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions
    } from 'react-native'

type PropsType = {
    mealName: String,
    mealTime: String,
    mealCalories: number
}

export default class MealHeader extends Component {
    constructor() {
        super()
    }

    render() {
        const styleSheet = StyleSheet.create({
            container: {    
                height: 35,
                backgroundColor: 'rgb(32,32,32)',
                alignItems: 'center',
                width: Dimensions.get('window').width
            },
            mainContent: {
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                alignItems: 'center',
                width: Dimensions.get('window').width * 0.95,
                height: 35
            },
            nameTimeGroup: {
                flexDirection: 'row'
            },
            mealNameText: {
                color: 'white',
                fontSize: 20
            },
            mealTimeText: {
                color: 'rgb(80,198,209)',
                fontSize: 20
            },
            mealCaloriesText: {
                color: 'white',
                fontSize: 20
            }
        })

        return(
            <View style = {styleSheet.container}>
                <View style = {styleSheet.mainContent}>
                    <View style = {styleSheet.nameTimeGroup}>
                        <View style = {{marginRight: 10}}>
                            <Text style = {styleSheet.mealNameText}>{this.props.mealName}</Text>
                        </View>
                        <View>
                            <Text style = {styleSheet.mealTimeText}>{this.props.mealTime}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {styleSheet.mealCaloriesText}>{this.props.mealCalories}</Text>
                    </View>
                </View>
            </View>
        )
    }
}