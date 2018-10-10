import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import HeaderTitle from '../components/HeaderTitle'

export default class FoodScreen extends Component {
    _directtoMenu() {
        Router.navigate(RouteNames.Menu)
    }
    _directtoProfile(){
        Router.navigate(RouteNames.Profile)      
    }

    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
                <View style = {styles.header}>
                    <HeaderTitle title = 'FOOD' />
                </View>
                <View style={styles.reminder}>
                    <Text style={styles.nocolorWord}>    Next meal in <Text style={styles.coloredWord}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord}> 1000 </Text> </Text>
                </View>
                <TextInput style={styles.searchInput} />
                <View style={styles.suggested}>
                    <Text style={styles.nocolorWordTitle}> Suggested foods</Text>
                </View>
                <View style={styles.suggestedContent}> 
                    <Text></Text>
                    <Text style={styles.coloredWord}> + Broccoli </Text>
                    <Text style={styles.coloredWord}> + Nuts </Text>
                    <Text style={styles.coloredWord}> + Greek yogurt </Text>
                    <Text></Text>
                </View>


                <View style={styles.latest}>
                    <Text style={styles.nocolorWordTitle}> Latest foods</Text>
                </View>
                <View style={styles.latestContent}> 
                    <Text></Text>   
                    <Text style={styles.coloredWord}> + Eggs</Text>
                    <Text style={styles.coloredWord}> + Oatmeal</Text>
                    <Text></Text>
                </View>

                <View style={styles.favorite}>
                    <Text style={styles.nocolorWordTitle}> Favorite foods</Text>
                </View>
                <View style={styles.favoriteContent}> 
                    <Text></Text>   
                    <Text style={styles.coloredWord}> + Eggs</Text>
                </View>


                <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoMenu()}}>
                    <Text style={styles.text}>Menu Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.btnLogin} onPress = {() => {this._directtoProfile()}}>
                    <Text style={styles.text}>Profile Page</Text>
                </TouchableOpacity>
                
            </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#262626',
        borderWidth: 1
    },  
    logoContainer: {
        backgroundColor: 'rgba(32,32,32,1)',
        flex:0.1,
    },  
    coloredWord: {
        color: 'rgba(80,198,209,0.8)',
        fontSize: 15
    },
    nocolorWord: {
        color: 'white',
        fontSize: 15
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
    reminder: {
        alignSelf: 'stretch',
        backgroundColor: 'rgba(32,32,32,1)',

    },
    suggestedContent: {
        flexDirection: 'column',
        flex: 0.2,
        justifyContent: 'space-between', 
        height: 100
    },
    latestContent: {
        flexDirection: 'column',
        flex: 0.2,
        justifyContent: 'space-between',
    },
    suggested: {
        backgroundColor: 'rgba(32,32,32,1)',
        height: 30
    },
    latest: {
        backgroundColor: 'rgba(32,32,32,1)',
        height: 30
    },
    favorite: {
        backgroundColor: 'rgba(32,32,32,1)',
        height: 30
    },
    searchInput: {
        width: 300,
        height: 35,
        fontSize: 16,
        paddingLeft: 25,
        backgroundColor: '#262626',
        color: 'white',
        marginHorizontal: 25
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'rgb(32,32,32)',
        flexDirection: 'column',
        paddingTop: 20
    }

});
