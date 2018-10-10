import React, {Component} from 'react'
import {createStackNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import AuthStack from './AuthStack'
import ContentStack from './ContentStack'
import MenuScreen from '../screens/MenuScreen'
import LoginScreen from '../screens/LoginScreen'


const AppStack = createStackNavigator(
    {
        [RouteNames.Login]: {
            screen: LoginScreen,
        },
        [RouteNames.Menu]: {
            screen: MenuScreen,
        },
    },
    {
        initialRouteName: RouteNames.AuthStack
    }
);

export default AppStack;