import React, {Component} from 'react'
import {createBottomTabNavigator} from "react-navigation"

import RouteNames from './RouteNames'
import MenuScreen from '../screens/MenuScreen'
import FoodScreen from '../screens/FoodScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AddFoodScreen from '../screens/AddFoodScreen'
import FoodStack from './FoodStack'
import MealStack from './MealStack'
import ChallengeStack from './ChallengeStack'


const ContentStack = createBottomTabNavigator(
    {
        Meal: {
            screen: MealStack,
        },
        Food: {
            screen: FoodScreen,
        },
        Challenge: {
            screen: ChallengeStack,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
    
);
ContentStack.navigationOptions = {
    header:null
}

export default ContentStack;