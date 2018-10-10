import React, {Component} from 'react'
import {createStackNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import MenuScreen from '../screens/MenuScreen'
import AddMealScreen from '../screens/AddMealScreen'
import ContentStack from './ContentStack'


const MealStack = createStackNavigator(
    {
        [RouteNames.Menu]: {
            screen: MenuScreen,
        },
        [RouteNames.AddMeal]: {
            screen: AddMealScreen
        }
    },
    {
        initialRouteName: RouteNames.Menu
    }
);

export default MealStack;