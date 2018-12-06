import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker, Dimensions} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import HeaderTitle from '../components/HeaderTitle'

export default class HowToDoScreen extends Component {
    _directtoMenu() {
        Router.navigate(RouteNames.Menu)
    }
    _directtoProfile(){
        Router.navigate(RouteNames.Profile)      
    }
    static navigationOptions = {
        headerTitle:(
        <HeaderTitle 
            title = 'HOW TO DO'
        />
        ),
        headerStyle: {
        backgroundColor: 'rgb(32,32,32)',
        },
    }
    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
                <View style = {styles.instruction}>
                    <View style = {styles.above}>
                        <View style = {styles.one}> 
                            <Text style={styles.nocolorWord}>1. Follow the steps of thinking.</Text>
                        </View>
                        <View style = {styles.two}> 
                            <Text style={styles.nocolorWord}>2. You can interrept the steps in what ever way you want.</Text>
                        </View>
                        <View style={styles.three}>
                            <Text style={styles.nocolorWord}>3. It is a way of gamifying selection of food and manner of eating.</Text>
                        </View>
                    </View>    
                    <View style={styles.example}>
                        <View style={styles.four}>
                            <Text style={styles.nocolorWord}>EXAMPLE</Text>
                        </View>
                        <View style={styles.five}>    
                            <Text style={styles.nocolorWord}>1. Find an object close to you within 2 meters. -> Piece of paper</Text>
                        </View>
                        <View style={styles.six}>    
                            <Text style={styles.nocolorWord}>2. What is the first color that comes to your mind. -> Green</Text>
                        </View>
                        <View style={styles.seven}>    
                            <Text style={styles.nocolorWord}>3. What food could it be? -> Salad.</Text>
                        </View>
                        <View style={styles.eight}>   
                            <Text style={styles.nocolorWord}>4. Please eat it today.</Text>
                        </View>
                    </View>    
                </View>    
            </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'rgb(38,38,38)',
        flex: 1,
        alignItems: 'center'
    },  
    coloredWord: {
        color: 'rgba(80,198,209,0.8)',
        fontSize: 15,
        borderColor: 'white',
        borderWidth: 5,
        alignItems: 'center',
        letterSpacing: 1

    },
    nocolorWord: {
        color: 'white',
        fontSize: 15,
        letterSpacing: 1
    },
    nocolorWordTitle: {
        color: 'white',
        fontSize: 20,
        justifyContent: 'flex-start',
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    number: {
        alignItems: 'flex-end'
    },
    meal: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    nocolorWordTitle1: {
        justifyContent: 'flex-start'
    },
    number1: {
        justifyContent: 'flex-end'
    },
    header: {
            alignItems: 'center',
            backgroundColor: 'rgb(32,32,32)',
            flexDirection: 'column',
            paddingTop: 20,
            height: 90
    },
    addFoodBtnText: {
        color: 'rgb(80,198,209)',
        fontSize: 18
    },
    buttonContainer: {
        width: Dimensions.get('window').width * 0.95,
        marginTop: 10
    },
    instruction: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width * 0.9
    },
    two: {
        marginTop: 10
    },
    three: {
        marginTop: 10
    },
    four: {
        marginTop: 20
    },
    five: {
        marginTop: 10
    },
    six: {
        marginTop: 10
    },
    seven: {
        marginTop: 10
    },
    eight: {
        marginTop: 10
    },
    example: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 150
    },
    above: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,
    }

});


