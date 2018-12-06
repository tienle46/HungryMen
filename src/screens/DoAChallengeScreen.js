import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker, Dimensions, ListView, TouchableWithoutFeedback} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import HeaderTitle from '../components/HeaderTitle'
import Challenges from '../components/Challenges'
import Toast, {positions, durations} from '../components/Toast'
import Storage from '../cores/Storage'
const lid = require('../assets/images/gift.png')
const bottom = require('../assets/images/gift2.png')

export default class DoAChallengeScreen extends Component {
    static navigationOptions = {
        headerTitle:(
        <HeaderTitle 
            title = 'Do a challenge'
        />
        ),
        headerStyle: {
        backgroundColor: 'rgb(32,32,32)',
        },
    }

    constructor() {
        super()
        this.state = {
            completeButtonClicked: false,
            input: null,
            boxClicked: false,
            currentExp: null
        }
    }
    
    componentDidMount() {
        this._fetchData()
    }

    _fetchData() {
        Storage.get("userId").then(res => {
            var userId = res
            db.transaction((tx) => {
                var sql = 'SELECT * FROM User WHERE id =' + userId
                try {
                    tx.executeSql(sql, [],(tx,results) => {
                        const result = results.rows.item(0)
                        this.setState({
                            currentExp: result.exp,
                        })
                    })
                }
                catch(e) {
                    console.log('error:' +e)
                }
            })
        })
    }

    _updateExp() {
        var newExp = this.state.currentExp + this._getChallengeExp()
        Storage.get("userId").then(res => {
            var userId = res
            var sql = `UPDATE USER SET exp = ${newExp} WHERE id =${userId}`
            db.transaction((tx) => {
                try {
                    tx.executeSql(sql)
                }
                catch(e) {
                    console.log('error:' +e)
                }
            })
        })
    }

    _getChallenge = (id) => {
        var list = []
        if(Router.getParam(this, 'type') === 'daily') {
            list = Challenges.daily
        } else if (Router.getParam(this, 'type') === 'weekly') {
            list = Challenges.weekly
        }
        for (var i = 0; i < list.length; i++) {
            if(list[i].index === id) {
                return list[i]
            }
        }
    }

    _getChallengeExp = () =>{
        return this._getChallenge(Router.getParam(this, 'challengeId')).xp
    }

    onCompleteButtonClick = () => {
        if(this.state.input)
            this.setState({
                completeButtonClicked: true
            })
        else 
            Toast.show('Please fill the food you ate')

        this._updateExp()
    }

    onBoxClicked = () => {
        this.setState({
            boxClicked: true
        })
    }
    
    onFinishClicked = () => {
        Router.navigate(RouteNames.Challenge)
    }

    render() {
        return(
            <View style = {styles.container}>
                {this.state.boxClicked ? 
                <TouchableOpacity
                    style = {{width: '100%', height: '100%', position: 'absolute', zIndex: 10000}}
                    onPress = {this.onFinishClicked}>
                </TouchableOpacity> 
                : null}
                <View style = {styles.detailGroup}>
                    <Text style = {styles.detailText}>{this._getChallenge(Router.getParam(this, 'challengeId')).detail}</Text>
                </View>
                <View>
                    {!this.state.completeButtonClicked ? 
                    <View style = {styles.inputGroup}>
                        <Text style = {styles.detailText}>I ate</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText = {input => this.setState({input: input})}
                        />
                    </View> : 
                    <View>
                        <Text style = {styles.detailText}>I ate {this.state.input}</Text>
                    </View>
                    }
                </View>
                <View style = {{marginTop: Dimensions.get('window').height* 0.02}}>
                    {!this.state.completeButtonClicked ? 
                    <TouchableOpacity style ={styles.btnComplete} onPress = {this.onCompleteButtonClick}>
                        <Text style={styles.text}>Complete challenge</Text>
                    </TouchableOpacity> :
                    <View style ={styles.completed}>
                        <Text style={styles.text}>Challenge completed</Text>
                    </View>
                    }
                </View>
                
                <View>
                    {this.state.completeButtonClicked ? 
                        <View>
                            {!this.state.boxClicked ?
                            <TouchableOpacity onPress = {this.onBoxClicked} style = {{width: Dimensions.get('window').width * 0.7, alignItems: 'center'}}>
                                <Image source = {lid} style = {styles.box}/>
                            </TouchableOpacity> :
                            <View style = {{flexDirection: 'column', width: Dimensions.get('window').width * 0.7}}>
                                <View style = {{width: Dimensions.get('window').width * 0.7, alignItems: 'center'}}>
                                    <Image source = {lid} style = {styles.box}/>
                                    <ImageBackground source = {bottom} style = {styles.boxBottom}>
                                        <Text style = {styles.rewardText}>{this._getChallengeExp()} XP</Text>
                                    </ImageBackground>
                                </View>
                                <View style = {styles.finishText}>
                                    <Text style = {styles.detailText}>Do a challenge tomorrow</Text>
                                    <Text style = {styles.detailText}>for extra XP points!</Text>
                                </View>
                            </View>}
                        </View>
                    : null
                    }
                </View>
                
            </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,32,32)',
        flex:1,
        alignItems: 'center',
    },
    detailText: {
        color: 'white',
        fontSize: 18,
        letterSpacing: 1
    },
    detailGroup: {
        width: Dimensions.get('window').width * 0.9,
        marginTop: Dimensions.get('window').height* 0.02,
        marginBottom: Dimensions.get('window').height* 0.02
    },
    input: {
        width: 150,
        height: 25,
        fontSize: 18,
        marginLeft: 25,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 25
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnComplete: {
        width: Dimensions.get('window').width* 0.7,
        height: Dimensions.get('window').height* 0.1,
        borderRadius: 100,
        backgroundColor: 'rgba(80,198,209,1)',
        justifyContent: 'center',
    },
    completed: {
        width: Dimensions.get('window').width* 0.7,
        height: Dimensions.get('window').height* 0.1,
        borderRadius: 100,
        backgroundColor: 'rgba(151,151,151,1)',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        letterSpacing: 1
    },
    box: {
        width: 200,
        height: 200,
        marginTop:-Dimensions.get('window').height* 0.04,
    },
    boxBottom: {
        width: 200,
        height: 200,
        marginTop: -87,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rewardText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    finishText: {
        width: Dimensions.get('window').width * 0.7,
        alignItems: 'center'
    }
});
