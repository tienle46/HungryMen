import React, {Component} from 'react'
import {createStackNavigator} from "react-navigation"
import {Image} from 'react-native'

import RouteNames from './RouteNames'
import MenuScreen from '../screens/MenuScreen'
import AddMealScreen from '../screens/AddMealScreen'
import ContentStack from './ContentStack'
import AddFoodScreen from '../screens/AddFoodScreen'
const homeIcon = require('../assets/images/home.png')


const MealStack = createStackNavigator(
    {
        [RouteNames.Menu]: {
            screen: MenuScreen,
        },
        [RouteNames.AddMeal]: {
            screen: AddMealScreen
        },
        [RouteNames.AddFood]: {
            screen: AddFoodScreen
        }
    },
    {
        initialRouteName: RouteNames.Menu
    },
    
);
MealStack.navigationOptions = {
     tabBarOptions: {
            showLabel: false,
            activeTintColor: '#00e0ff',
            inactiveTintColor: 'black',
        },
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={homeIcon}
            style={{width:35, height:40, tintColor: tintColor}}
        />
        ),
}

export default MealStack;