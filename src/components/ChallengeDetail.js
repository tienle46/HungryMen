import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions
    } from 'react-native'


export default class ChallengeDetail extends Component {
    constructor() {
        super()
    }

    shortenChallengeDetail = (challengeDetail) => {
        if (challengeDetail.length > 40) {
            return this.setCharAt(challengeDetail,40,'...')
        }
    }

    setCharAt = (str,index,chr) => {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr;
}

    render() {
        this.shortenChallengeDetail(this.props.challengeName)
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
                width:300,
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
                <View style = {styleSheet.mainContent}>
                    <TouchableOpacity>
                        <View>
                            <Text style = {styleSheet.challengeNameText}>{this.shortenChallengeDetail(this.props.challengeName)}</Text>
                        </View>
                        <View>
                            <Text style = {styleSheet.challengeExp}>{this.props.challengeExp} XP</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}