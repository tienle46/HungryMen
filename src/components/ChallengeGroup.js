import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions,
        ListView
    } from 'react-native'
import ChallengeHeader from '../components/ChallengeHeader'
import ChallengeDetail from '../components/ChallengeDetail'
import Challenges from '../components/Challenges'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'

export default class ChallengeGroup extends Component {
    constructor() {
        super()
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: this.ds.cloneWithRows([]),
        }
    }

    getRandomChallenge(challengeList) {
        var tmp = challengeList.slice(challengeList);
        var randomChallengeList = [];
        
        for (var i = 0; i < 3; i++) {
            var index = Math.floor(Math.random() * tmp.length);
            console.log(index)
            var removed = tmp.splice(index, 1);
            // Since we are only removing one element
            randomChallengeList.push(removed[0]);
        }
        return randomChallengeList;  
    }

    componentDidMount() {
        if(this.props.challengeType === 'Daily Challenges') {
            this.setState({
                dataSource: this.ds.cloneWithRows(this.getRandomChallenge(Challenges.daily))
            })
        } else if (this.props.challengeType === 'Weekly Challenges') {
            this.setState({
                // dataSource: this.ds.cloneWithRows(this.getRandomChallenge(Challenges.weekly))
            })
        }
    }

    render() {
        const styleSheet = StyleSheet.create({
            container: {
                alignItems: 'center'
            },
            addFoodBtnText: {
                color: 'rgb(80,198,209)',
                fontSize: 18
            },
            buttonContainer: {
                width: Dimensions.get('window').width * 0.95,
            }
        })
        return(
            <View style = {styleSheet.container}>
                <ChallengeHeader
                    challengeType = {this.props.challengeType}
                    remainChallenge = /*{this.props.remainChallenge}*/ '3/3'
                />
                <ListView 
                    dataSource={this.state.dataSource}
                    enableEmptySections
                    renderRow={(rowData) => {
                        return(
                            <ChallengeDetail 
                            challengeName = {rowData.detail}
                            challengeExp = {rowData.xp}
                            />
                        )
                    }}
                />
                
            </View>
        )
    }
}