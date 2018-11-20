import React, {Component} from 'react'
import {StackNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import FoodScreen from '../screens/FoodScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AddFoodScreen from '../screens/AddFoodScreen'
import ChallengeScreen from '../screens/ChallengeScreen'
import HowToDoScreen from '../screens/HowToDoScreen'


const ChallengeStack = StackNavigator(
    {
        [RouteNames.Challenge]: {
            screen: ChallengeScreen,
        },
        [RouteNames.HowToDo]: {
            screen: HowToDoScreen,
        },
    },
    {
        initialRouteName: RouteNames.Challenge
    }
);

export default ChallengeStack;