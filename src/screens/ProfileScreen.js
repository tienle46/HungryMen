import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import HeaderTitle from '../components/HeaderTitle'
import Storage from '../cores/Storage'
const profileImageBackground = require('../assets/images/background2.jpg')
const userIcon = require('../assets/images/user_icon.png')
const editButton = require('../assets/images/edit.png')

export default class ProfileScreen extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: null,
            weight: null,
            height: null,
            goal: null,
        }
    }
    
    _directtoMenu() {
        Router.navigate(RouteNames.Menu)
    }
    _directtoFood(){
        Router.navigate(RouteNames.Food)      
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
                            name: result.name === '' ? result.name : result.username,
                            age: result.age ? result.age : 'Please fill your age',
                            weight: result.weight ? result.weight + ' kg' : 'Please fill your weight',
                            height: result.height ? result.height + ' cm' : 'Please fill your height',
                            goal: result.goal ? result.goal + ' kg': 'Please fill your goal',
                        })
                    })
                }
                catch(e) {
                    console.log('error:' +e)
                }
            })
        })
    }
    
    componentDidMount() {
        this._fetchData()
    }

    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
                <View style = {styles.header}>
                    <HeaderTitle title = 'PROFILE' />
                    <View style={styles.reminder}>
                        <Text style={styles.nocolorWord1}>Next meal in <Text style={styles.coloredWord1}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord1}> 1000 </Text> </Text>
                    </View>
                </View>
                <View>
                    <ImageBackground source = {profileImageBackground} style = {styles.profileImageBackground}>
                        <View style = {{position: 'absolute', top:0,right:0,bottom:0,left:0, backgroundColor:'rgba(255,255,255,.1)'}}/>
                        <TouchableOpacity style = {styles.shadow}>
                            <Image source = {userIcon} style = {styles.userIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.editButton}>
                            <Image source = {editButton} style = {{width:40, height:40}}/>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style = {styles.info}>
                    <View style = {styles.infoDetail}>
                        <Text style = {styles.nocolorWord}>Name</Text>
                        <Text style = {styles.coloredWord}>{this.state.name}</Text>
                    </View>
                    <View style = {styles.infoDetail}>
                        <Text style = {styles.nocolorWord}>Age</Text>
                        <Text style = {styles.coloredWord}>{this.state.age}</Text>
                    </View>
                    <View style = {styles.infoDetail}>
                        <Text style = {styles.nocolorWord}>Height</Text>
                        <Text style = {styles.coloredWord}>{this.state.height}</Text>
                    </View>
                    <View style = {styles.infoDetail}>
                        <Text style = {styles.nocolorWord}>Weight</Text>
                        <Text style = {styles.coloredWord}>{this.state.weight}</Text>
                    </View>
                    <View style = {styles.infoDetail}>
                        <Text style = {styles.nocolorWord}>Goal</Text>
                        <Text style = {styles.coloredWord}>{this.state.goal}</Text>
                    </View>
                </View>
            </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'rgba(38,38,38,1)',
    },
    infoDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    info: {
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 15
    },
    profileImageBackground: {
        width: '100%',
        height: 150,
        backgroundColor: 'rgba(255,0,0,0.1)',
        alignItems:'center',
        justifyContent:'center',
    },
    userIcon: {
        height: 100,
        width: 100,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 100/2,
        backgroundColor: 'white',
        
    },
    shadow: {
        shadowOffset:{  width: 2,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.8,
    },
    editButton: {
        height:20,
        width:20,
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    coloredWord: {
        color: 'rgba(80,198,209,0.8)',
        fontSize: 18,
        letterSpacing: 1
    },
    coloredWord1: {
        color: 'rgba(80,198,209,0.8)',
        fontSize: 15,
        letterSpacing: 1
    },
    nocolorWordTitle: {
        color: 'white',
        fontSize: 20
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'rgb(32,32,32)',
        flexDirection: 'column',
        paddingTop: 20,
        height: 90
    },
    nocolorWord: {
        color: 'white',
        fontSize: 18,
        alignItems: 'flex-start',
        letterSpacing: 1
    },
    nocolorWord1: {
        color: 'white',
        fontSize: 15,
        alignItems: 'flex-start',
        letterSpacing: 1
    }
});
