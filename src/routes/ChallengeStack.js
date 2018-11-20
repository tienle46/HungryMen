import React, {Component} from 'react'
import {StackNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import ChallengeScreen from '../screens/ChallengeScreen'
import HowToDoScreen from '../screens/HowToDoScreen'
import DoAChallengeScreen from '../screens/DoAChallengeScreen'


const ChallengeStack = StackNavigator(
    {
        [RouteNames.Challenge]: {
            screen: ChallengeScreen,
        },
        [RouteNames.HowToDo]: {
            screen: HowToDoScreen,
        },
        [RouteNames.DoAChallenge]: {
            screens: DoAChallengeScreen
        }
    },
    {
        initialRouteName: RouteNames.Challenge
    }
);

export default ChallengeStack;