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

const styles = StyleSheet.create({
    
})

const AppRoute = SwitchNavigator(
    {
        [RouteNames.Auth]: AuthStack,
        [RouteNames.FoodStack]: FoodStack,
        [RouteNames.ContentStack]: ContentStack
    },
    {
        initialRouteName: RouteNames.Auth
    }
)

export default AppRoute