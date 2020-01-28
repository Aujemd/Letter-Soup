import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native'

class Letter extends Component {

    letterStyle = level => {

        switch(level) {
            case 1 :
                return {
                    fontSize: 30,
                }
            case 2 :
                return{
                    fontSize: 25,
                } 
            default: 
                return{
                    fontSize: 20,
                } 
        }
    }

    containerStyle = level => {
        switch(level) {
            case 1 :
                return {
                    width: 45,
                }
            case 2 :
                return{
                    width: 40,
                }
            case 3 :
                return{
                    width: 35,
                }
            case 4 :
                return{
                    width: 32,
                }
            case 5 :
                return{
                    width: 30,
                }
            case 6 :
                return{
                    width: 27,
                }            
            default: 
            return
        }
    }

    render() {
        const {level, children, onPress} = this.props
        return (
            <TouchableOpacity style = {this.containerStyle(level)} onPress = {onPress}>
                <Text style = {this.letterStyle(level)}>{children}</Text>
            </TouchableOpacity>
        )
    }
}

export default Letter;