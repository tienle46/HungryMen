import React, {Component} from 'react'
import {StackNavigator} from "react-navigation"
import {Image} from 'react-native'

import RouteNames from './RouteNames'
import ChallengeScreen from '../screens/ChallengeScreen'
import HowToDoScreen from '../screens/HowToDoScreen'
import DoAChallengeScreen from '../screens/DoAChallengeScreen'
const challengeIcon = require('../assets/images/challenges.png')

const ChallengeStack = StackNavigator(
    {
        [RouteNames.Challenge]: {
            screen: ChallengeScreen,
        },
        [RouteNames.HowToDo]: {
            screen: HowToDoScreen,
        },
        [RouteNames.DoAChallenge]: {
            screen: DoAChallengeScreen
        }
    },
    {
        initialRouteName: RouteNames.Challenge
    }
);
ChallengeStack.navigationOptions = {
     tabBarOptions: {
            showLabel: false,
            activeTintColor: '#00e0ff',
            inactiveTintColor: 'black',
        },
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={challengeIcon}
            style={{width:40, height:40, tintColor: tintColor}}
        />
        ),
}

export default ChallengeStack;