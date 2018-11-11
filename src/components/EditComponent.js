import React, { Component } from 'react'
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        Dimensions,
        Image,
        TextInput
    } from 'react-native'
const closeButton = require('../assets/images/close.png')

export default class EditComponent extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress = {this.props.onCloseButtonPress}>
                    <Image
                    source = {closeButton}
                    style = {styles.closeButton}
                    />
                </TouchableOpacity>
                <View style = {styles.editGroup}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.userText}>Name</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText = {name => {
                            this.setState({name})
                            this.props.nameChange(name)
                            }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.userText}>Age</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText = {age => {
                            this.setState({age})
                            this.props.ageChange(age)
                            }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.userText}>Height</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText = {height => {
                            this.setState({height})
                            this.props.heightChange(height)
                            }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.userText}>Weight</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText = {weight => {
                            this.setState({weight})
                            this.props.weightChange(weight)
                            }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.userText}>Goal</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText = {goal => {
                            this.setState({goal})
                            this.props.goalChange(goal)
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity style ={styles.btnConfirm} onPress = {this.props.onSubmitButtonPress}>
                    <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 550,
        borderWidth: 1,
        backgroundColor: 'rgba(32,32,32,1)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [
            {translateX: -400/2},
            {translateY: -480/2}
        ],
        zIndex: 100
    },
    closeButton: {
        width:25,
        height:25,
        position: 'absolute',
        top: 5,
        right: 5
    },
    inputContainer:{
        marginTop: 20
    },
    input: {
        width: 300,
        height: 40,
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 25,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 20
    },
    userText: {
        fontSize: 17,
        marginLeft: 30,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1
    },
    editGroup: {
        marginLeft: 20,
        marginTop: 20
    },
    btnConfirm: {
        width: 100,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'rgba(80,198,209,0.8)',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 2,
        position: 'absolute',
        left: '50%',
        bottom: '3%',
        transform: [
            {translateX: -100/2}
        ]
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
})