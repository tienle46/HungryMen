import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Picker, Dimensions, ListView} from 'react-native'
import Router from '../routes/Router'
import RouteNames from '../routes/RouteNames'
import { createBottomTabNavigator } from 'react-navigation'
import MealGroup from '../components/MealGroup'
import HeaderTitle from '../components/HeaderTitle'
import moment from 'moment';
import Storage from '../cores/Storage'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

var SQLite = require('react-native-sqlite-storage')
db = SQLite.openDatabase({name: 'dtb', createFromLocation : "~www/hungrymen.sqlite", location: 'Library'}, (open) => {console.log('asdasd')}, (e) => {console.log(e)});
export default class MenuScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {
        super()
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows([]),
            mealsCalories: 0,
            fill: 0,
            prefill: 0
        }
    }

    _fetchData() {
        Storage.get("userId").then(res => {
            var userId = res
            var today = moment().format("MM-DD-YYYY")
            var meals = []
            db.transaction((tx) => {
                var sql = 'SELECT * FROM  Meal WHERE userId=' + userId
                try {
                    tx.executeSql(sql, [],(tx,results) => {
                        var len = results.rows.length
                        var totalCalories = 0
                        for (var i = 0; i < len; i++) {
                            var row = results.rows.item(i)
                            var mealTime = moment(row.date*1000).format("MM-DD-YYYY")
                            if (mealTime === today) {
                                var meal = {id: row.id, type: row.type, date:row.date, calories: row.calories}
                                meals.push(meal)
                                totalCalories = totalCalories + row.calories
                            }
                        }
                        this.setState({
                            dataSource: this.ds.cloneWithRows(meals),
                            mealsCalories: totalCalories,
                            fill: this.calculateProgress(totalCalories)
                        })
                    })
                }
                catch(e) {
                    console.log('error:' +e)
                }
            })
        })
    }

    calculateProgress = (calories) => {
        return calories/2000 <= 1 ? calories/2000 * 100 : 100
    }

    
    componentWillMount() {

    }
    componentDidMount() {
        this._fetchData()
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
            this._fetchData()
        });
    }

    componentDidUpdate(prevProv,prevState) {
        if(prevState.fill !== this.state.fill) {
            this.setState({
                prefill: prevState.fill
            })
        }
     }

    componentWillUnmount() {
        this._subscribe.remove()
    }

    onButtonAddMealClick = () => {
        Router.navigate(RouteNames.AddMeal)
    }

    _directtoAddFood() {
        Router.navigate(RouteNames.Add)
    }
    _directtoFood() {
        Router.navigate(RouteNames.Food)
    }
    _directtoProfile(){
        Router.navigate(RouteNames.Profile)
    }

    mealTypeToString(index) {
        switch(index) {
            case 1: 
                return 'Breakfast'
            case 2: 
                return 'Brunch'
            case 3: 
                return 'Lunch'
            case 4: 
                return 'Dinner'
            case 5: 
                return 'Midnight-snack'
        }
    }

    render() {
        return(
            <ImageBackground style={styles.backgroundContainer}>
                <View style = {styles.header}>
                    <HeaderTitle title = 'HOME' />
                    <View style={styles.reminder}>
                        <Text style={styles.nocolorWord}>Next meal in <Text style={styles.coloredWord}> 20 min </Text> | Daily calories left <Text style={styles.coloredWord}> 1000 </Text> </Text>
                    </View>
                </View>
                <ListView 
                    dataSource={this.state.dataSource}
                    enableEmptySections
                    renderRow={(rowData) => {
                        var typeMeal = this.mealTypeToString(rowData.type)
                        var mealTime = moment(rowData.date * 1000).format("hh:mm")
                        return(
                            <MealGroup 
                            mealTime = {mealTime}
                            mealName = {typeMeal}
                            id = {rowData.id}
                            navigation = {this.props.navigation}
                            />
                        )
                    }}
                />
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity onPress = {this.onButtonAddMealClick}>
                        <Text style = {styles.addFoodBtnText}>+ Add Meal</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.progressWrapper}>
                    <AnimatedCircularProgress
                        size={130}
                        width={10}
                        rotation = {0}
                        fill={this.state.fill}
                        prefill = {this.state.prefill}
                        tintColor="#00e0ff"
                        backgroundColor="#3d5875">
                        
                        {
                            (fill) => (
                                <View style={styles.circle}>
                                    <Text style={styles.points}>{this.state.mealsCalories}/2000</Text>
                                    <Text style={styles.pointText}>Daily Calories</Text>
                                </View>
                            )
                        }
                    </AnimatedCircularProgress>
                </View>
            </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'rgb(38,38,38)',
        flex: 1
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
        alignItems: 'flex-start',
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
    reminder: {
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
        marginTop: 10,
        marginBottom: 20
    },
    progressWrapper: {
        alignItems: 'center',
        width: Dimensions.get('window').width,
        marginBottom: 20
    },
    points: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#00e0ff"
    },
    pointText: {
        fontSize: 14,
        color: "#00e0ff"
    },
    circle: {
        alignItems: 'center'
    }
});
