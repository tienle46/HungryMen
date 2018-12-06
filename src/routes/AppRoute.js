import React, {Component} from 'react'
import {  
    StyleSheet,
    Platform
} from 'react-native';

import {SwitchNavigator} from "react-navigation"

import AuthStack from "./AuthStack"
import FoodStack from "./FoodStack"
import RegisterScreen from "../screens/RegisterScreen"
import RouteNames from './RouteNames'
import ContentStack from './ContentStack'
import MealStack from './MealStack'
import AddMealScreen from "../screens/AddMealScreen"
import FoodScreen from "../screens/FoodScreen"
import LoginScreen from "../screens/LoginScreen"
import MenuScreen from "../screens/MenuScreen"
import ProfileScreen from "../screens/ProfileScreen"
import AddFoodScreen from "../screens/AddFoodScreen"
import ChallengeScreen from "../screens/ChallengeScreen"
import HowToDoScreen from "../screens/HowToDoScreen"
import ChallengeStack from "./ChallengeStack"

const styles = StyleSheet.create({
    
})

const AppRoute = SwitchNavigator(
    {
        [RouteNames.Auth]: AuthStack,
        [RouteNames.ContentStack]: ContentStack,
        [RouteNames.ProfileScreen]: ProfileScreen,
        [RouteNames.MealStack]: MealStack,
        [RouteNames.ChallengeStack]: ChallengeStack
    },
    {
        initialRouteName: RouteNames.AuthStack
    }
)

export default AppRoute