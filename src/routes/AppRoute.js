import React, {Component} from 'react'
import {  
    StyleSheet,
    Platform
} from 'react-native';

import {SwitchNavigator} from "react-navigation"

import AuthStack from "./AuthStack"
import RegisterScreen from "../screens/RegisterScreen"
import RouteNames from './RouteNames'

const styles = StyleSheet.create({
    
})

const AppRoute = SwitchNavigator(
    {
        [RouteNames.Auth]: AuthStack,
    },
    {
        initialRouteName: RouteNames.Auth
    }
)

export default AppRoute