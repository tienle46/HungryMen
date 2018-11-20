import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        Image,
        ImageBackground,
        ActivityIndicator,
        Dimensions
    } from 'react-native'

const EXP_PER_LEVEL = 200
const bronzeShield = require('../assets/images/shield-bronze.png')
const silverShield = require('../assets/images/shield-silver.png')
const goldShield = require('../assets/images/shield-gold.png')
const diamondShield = require('../assets/images/shield-diamond.png')
const ultimateShield = require('../assets/images/shield-ultimate.png')
export default class LevelComponent extends Component {
    
    constructor() {
        super()
        this.state = {
            currentLevel:null,
            expToNextLevel:null,
            percentage:null,
            shield: ultimateShield,
            isLoading: true
        }
    }

    componentDidUpdate(previousProps, previousState) {
    if (previousProps.currentExp !== this.props.currentExp) {
        this.calculateLevel(this.props.currentExp)
    }
}

    calculateShield = (currentLevel) => {
        var shield = ultimateShield
        if(currentLevel >0 && currentLevel <=5)
            shield = bronzeShield
        else if (currentLevel >5 && currentLevel <=10)
            shield = silverShield
        else if (currentLevel >10 && currentLevel <=15)
            shield = goldShield
        else if (currentLevel >15 && currentLevel <=20)
            shield = diamondShield

        return shield
    }

    calculateLevel = (currentExp) => {
        var currentLevel = Math.floor(currentExp/EXP_PER_LEVEL) + 1
        var expToNextLevel = currentExp % EXP_PER_LEVEL
        var percentage = expToNextLevel/200
        this.setState({
            currentLevel:currentLevel,
            expToNextLevel:expToNextLevel,
            percentage:percentage,
            shield: this.calculateShield(currentLevel),
            isLoading: false
        })
        return {currentLevel, currentExp, percentage}
    }
    render() {
        if(this.state.isLoading) {
            return(
                <ActivityIndicator/>
            )
        }
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                height: 50,
                alignItems: 'center'
            },
            expBar: {
                flexDirection: 'row',
                height: 18,
                width: 180,
                marginRight: 10
            },
            borderView: {
                flex:1,
                borderColor: "rgba(80,198,209,0.8)",
                borderWidth: 3
            },
            barView: {
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: this.state.percentage*180,
                backgroundColor: 'rgba(80,198,209,0.8)'
            },
            shield: {
                width: 33.4,
                height: 39.54,
                marginRight: 10,
                alignItems: 'center',
                justifyContent: 'center'
            },
            shieldLevel: {
                fontSize: 18,
                color: 'white',
                letterSpacing: 1,
                fontWeight: 'bold'
            },
            progressText: {
                color: 'rgba(80,198,209,0.8)',
                fontSize: 18,
                letterSpacing: 1
            },
        })
        
        return(
            <View style = {styles.container}>
                <ImageBackground 
                source = {this.state.shield} 
                style = {styles.shield}
                >
                    <Text style = {styles.shieldLevel}>
                        {this.state.currentLevel}
                    </Text>
                </ImageBackground>
                <View style = {styles.expBar}>
                    <View style = {styles.borderView}>
                        <View style = {[StyleSheet.absoluteFill, {
                            backgroundColor: "rgba(38,38,38,1)"
                        }]}/>
                        <View style = {styles.barView}/>
                    </View>
                </View>
                <Text style = {styles.progressText}>{this.state.expToNextLevel}/{EXP_PER_LEVEL}</Text>
            </View>
            
        )
    }
}

