import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions
    } from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'


export default class ChallengeDetail extends Component {
    constructor() {
        super()
    }

    _shortenChallengeDetail = (challengeDetail) => {
        if (challengeDetail.length > 40) {
            return this._setCharAt(challengeDetail,40,'...')
        }
    }

    _setCharAt = (str,index,chr) => {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr;
    }


    render() {
        this._shortenChallengeDetail(this.props.challengeName)
        const styleSheet = StyleSheet.create({
            container: {    
                height: 60,
                backgroundColor: 'transparent',
                alignItems: 'center',
                
            },
            mainContent: {
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                alignItems: 'center',
                width: Dimensions.get('window').width * 0.95,
                height: 50,
            },
            challengeNameText: {
                fontSize: 18,
                color: 'rgb(80,198,209)',
                letterSpacing:1,
                width: Dimensions.get('window').width * 0.7,
                marginLeft: 10,
            },
            challengeExp: {
                fontSize: 18,
                color: 'rgb(80,198,209)',
                letterSpacing:1
            }
        })

        return(
            <View style = {styleSheet.container}>
                <TouchableOpacity onPress = {this.props.onPress}>
                    <View style = {styleSheet.mainContent}>
                        <View>
                            <Text style = {styleSheet.challengeNameText}>{this._shortenChallengeDetail(this.props.challengeName)}</Text>
                        </View>
                        <View>
                            <Text style = {styleSheet.challengeExp}>{this.props.challengeExp} XP</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}