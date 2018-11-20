import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions
    } from 'react-native'

type PropsType = {
    challengeType: String,
    remainChallenge: String,
}

export default class ChallengeHeader extends Component {
    constructor() {
        super()
    }

    render() {
        const styleSheet = StyleSheet.create({
            container: {    
                height: 35,
                backgroundColor: 'rgb(32,32,32)',
                alignItems: 'center',
                width: Dimensions.get('window').width,
                marginBottom:10
            },
            mainContent: {
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                alignItems: 'center',
                width: Dimensions.get('window').width * 0.95,
                height: 35
            },
            nameTimeGroup: {
                flexDirection: 'row'
            },
            challengeTypeText: {
                color: 'white',
                fontSize: 20,
                letterSpacing: 1
            },
            remainChallengeText: {
                color: 'rgb(80,198,209)',
                fontSize: 20,
                letterSpacing: 1
            },
        })

        return(
            <View style = {styleSheet.container}>
                <View style = {styleSheet.mainContent}>
                    <View style = {styleSheet.nameTimeGroup}>
                        <View style = {{marginRight: 10}}>
                            <Text style = {styleSheet.challengeTypeText}>{this.props.challengeType}</Text>
                        </View>
                        <View>
                            <Text style = {styleSheet.remainChallengeText}>{this.props.remainChallenge}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}