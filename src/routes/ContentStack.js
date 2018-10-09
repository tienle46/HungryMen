import React, {Component} from 'react'
import {createBottomTabNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import MenuScreen from '../screens/MenuScreen'
import FoodScreen from '../screens/FoodScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AddFoodScreen from '../screens/AddFoodScreen'
import FoodStack from './FoodStack'


const ContentStack = createBottomTabNavigator(
    {
        Meal: {
            screen: MenuScreen,
        },
        Food: {
            screen: FoodScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
    
);

export default ContentStack;