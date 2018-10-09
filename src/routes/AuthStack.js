import React, {Component} from 'react'
import {StackNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import FoodScreen from '../screens/FoodScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AddFoodScreen from '../screens/AddFoodScreen'


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