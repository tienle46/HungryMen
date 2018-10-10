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
import AppStack from './AppStack'
import MealStack from './MealStack'
import AddMealScreen from "../screens/AddMealScreen"
import FoodScreen from "../screens/FoodScreen"
import LoginScreen from "../screens/LoginScreen"
import MenuScreen from "../screens/MenuScreen"
import ProfileScreen from "../screens/ProfileScreen"

const styles = StyleSheet.create({
    
})

const AppRoute = SwitchNavigator(
    {
        [RouteNames.Auth]: AuthStack,
        [RouteNames.AppStack]: AppStack,
        [RouteNames.FoodStack]: FoodStack,
        [RouteNames.ContentStack]: ContentStack,
        [RouteNames.AddMealScreen]: AddMealScreen,
        [RouteNames.FoodScreen]: FoodScreen,
        [RouteNames.LoginScreen]: LoginScreen,
        [RouteNames.MenuScreen]: MenuScreen,
        [RouteNames.ProfileScreen]: ProfileScreen,
        [RouteNames.RegisterScreen]: RegisterScreen,
        [RouteNames.MealStack]: MealStack
    },
    {
        initialRouteName: RouteNames.AuthStack
    }
)

export default AppRoute