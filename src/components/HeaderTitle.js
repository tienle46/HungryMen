import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        Image
    } from 'react-native'
const icon = require('../assets/images/logo.png')

export default class HeaderTitle extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Image style = {styles.image} source = {icon} />
                <Text style = {styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        height: 30,
        width: 38,
        marginRight: 9,
    },
    text: {
        fontSize: 30,
        color: 'white',
    }
})