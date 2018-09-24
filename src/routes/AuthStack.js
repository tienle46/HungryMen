import React, {Component} from 'react'
import {StackNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const AuthStack = StackNavigator(
    {
        [RouteNames.Login]: {
            screen: LoginScreen,
        },
        [RouteNames.Register]: {
            screen: RegisterScreen,
        },
    },
    {
        initialRouteName: RouteNames.Login
    }
);

export default AuthStack;