import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions
    } from 'react-native'

type PropsType = {
    
}

export default class FoodDetail extends Component {
    constructor() {
        super()
    }

    render() {
        const styleSheet = StyleSheet.create({
            container: {    
                height: 40,
                backgroundColor: 'transparent',
                alignItems: 'center'
            },
            mainContent: {
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                alignItems: 'center',
                width: Dimensions.get('window').width * 0.95,
                height: 40
            },
            foodNameText: {
                fontSize: 16,
                color: 'white'
            },
            foodCaloriesText: {
                fontSize: 16,
                color: 'white'
            }
        })

        return(
            <View style = {styleSheet.container}>
                <View style = {styleSheet.mainContent}>
                    <View>
                        <Text style = {styleSheet.foodNameText}>{this.props.foodName}</Text>
                    </View>
                    <View>
                        <Text style = {styleSheet.foodCaloriesText}>{this.props.foodCalories}</Text>
                    </View>
                </View>
            </View>
        )
    }
}