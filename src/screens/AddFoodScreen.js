import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { createBottomTabNavigator } from 'react-navigation'
import HeaderTitle from '../components/HeaderTitle'
import DropdownMenu from 'react-native-dropdown-menu';
import Toast, {positions, durations} from '../components/Toast'

var SQLite = require('react-native-sqlite-storage')
db = SQLite.openDatabase({name: 'qwe', createFromLocation : "~www/hungrymen.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});
export default class AddFoodScreen extends Component {

    constructor() {
        super()
        this.foodList = [[]]
        this.foodNameList = [[]]
        this.state = {
            foodSelection: 0,
            foodAmount: 0
        }
    }
    static navigationOptions = {
        headerTitle:(
        <HeaderTitle 
            title = 'ADD FOOD'
        />
        ),
        headerStyle: {
        backgroundColor: 'rgb(32,32,32)',
        },
    }
    _directToMenu() {
        Router.back(this.props.navigation)
    }

    componentDidMount() {
        var sql = "SELECT * FROM food"
        db.transaction((tx) => {
            try {
                    tx.executeSql(sql, [], (tx,results) => {
                        var len = results.rows.length
                        for (var i = 0; i < len; i++) {
                            var row = results.rows.item(i)
                            this.foodList[0].push({name: row.name, calories: row.calories})
                        }
                        for (var i = 0; i < this.foodList[0].length; i++) {
                            this.foodNameList[0].push(this.foodList[0][i].name)
                        }
                    })
                }catch(e) {
                    console.log('error:' + e)
                }
        })
        
    }

    inputCheck(text){
        let newText = '';
        let numbers = '0123456789';

        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                Toast.show('Amount need to be number');
            }
        }
        this.setState({ foodAmount: newText });
    }

    onSubmitButtonClicked = () => {
        this.inputCheck(this.state.foodAmount)
        var mealId = Router.getParam(this, 'mealId')
        var foodSec = this.state.foodSelection + 1
        var calories = this.foodList[0][this.state.foodSelection].calories * this.state.foodAmount /100
        var insertSql = 'INSERT INTO Dish (foodId, amount, calories, mealId, foodName) VALUES(' + foodSec + ','+ this.state.foodAmount + ',' + calories + ',' + mealId + ',\'' + this.foodList[0][this.state.foodSelection].name + '\')'
        db.transaction((tx) => {
            try {
                tx.executeSql(insertSql, [], (tx,results) => {
                Toast.show('Successfully added food')
                this._directToMenu()
                })
            }catch(e) {
                console.log('error:' + e)
            }
        })
    }

    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
                <View style = {styles.inputGroup}>
                    <View style = {styles.foodSelect}>
                        <Text style={styles.foodSelectText}>Select Food:</Text>
                        <DropdownMenu
                            style={{flex: 0}}
                            bgColor={'white'}
                            tintColor={'rgb(80,198,209)'}
                            activityTintColor={'rgb(80,198,209)'}
                            optionTextStyle={{color: 'black', fontSize: 24}}
                            titleStyle={{fontSize: 24, color: 'white'}}
                            maxHeight={300} 
                            handler={(selection,row) => this.setState({foodSelection: row})}
                            data={this.foodNameList}
                        />
                    </View>
                    <View style = {styles.foodAmount}>
                        <Text style={styles.foodAmountText}>Amount:</Text>
                        <TextInput
                            style= {styles.foodAmountTextInput}
                            onChangeText={(foodAmount) => this.setState({foodAmount})}
                            keyboardType = 'numeric'
                        />
                    </View>
                </View>
                <View style ={{alignItems: 'center'}}>
                    <TouchableOpacity style ={styles.btnLogin} onPress = {this.onSubmitButtonClicked}>
                        <Text style={styles.text}>Add food</Text>
                    </TouchableOpacity>
                </View>
                
                
            </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'rgba(32,32,32,1)',
        borderWidth: 1
    },
    foodAmount: {
        zIndex: 0,
        flexDirection: 'row'
    },
    foodAmountTextInput: {
        width: 200,
        height: 50,
        borderRadius: 10,
        fontSize: 24,
        paddingLeft: 25,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 25
    },
    foodSelectText: {
        marginTop: 6,
        color: 'white',
        fontSize: 24,
        marginRight: 20,
    },
    foodAmountText: {
        marginTop: 7,
        marginRight: 50,
        color: 'white',
        fontSize: 24,
    },
    inputGroup: {
        flexDirection: 'column',
        paddingLeft: 20,
        marginTop: 120,
        marginBottom: 90,
        height:265
    },
    foodSelect: {
        flexDirection: 'row',
        marginBottom: 50,
        zIndex:1,
        marginRight:20
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
        fontWeight: 'bold'
    },
    btnLogin: {
        width: 150,
        height: 60,
        borderRadius: 45,
        backgroundColor: 'rgba(80,198,209,0.8)',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    input: {
        width: 70,
        height: 40,
        fontSize: 16,
        paddingLeft: 25,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 25
    },
});
