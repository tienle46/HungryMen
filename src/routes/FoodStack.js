import React, {Component} from 'react'
import {StackNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import MenuScreen from '../screens/MenuScreen'
import FoodScreen from '../screens/FoodScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AddFoodScreen from '../screens/AddFoodScreen'


const FoodStack = StackNavigator(
    {
        [RouteNames.Food]: {
            screen: FoodScreen,
        },
    },
    {
        initialRouteName: RouteNames.Food
    }
);

export default FoodStack;