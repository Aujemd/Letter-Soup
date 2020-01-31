import React, { Component } from 'react'
import {connect } from 'react-redux'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

class NewGame extends Component{

    buttonHandle(){
        this.props.dispatch({
            type: 'SET_NEW_GAME',
            payload:{
                inGame: false,
                category: null,
                level: 1,
            }
        })
    }

    render(){
        return(
            <TouchableOpacity style = {Styles.container}
                onPress={ () => {
                    this.buttonHandle()
                }}
            >
                <Text style = {Styles.letter}>➕ Nuevo Juego</Text>
            </TouchableOpacity>
        )
    }
}

const Styles = StyleSheet.create({
    letter:{
        color: 'white',
    },
    container:{
        padding: 5,
        borderRadius: 2,
        margin: 20,
        borderColor: 'white',
        borderWidth: 1,
        
    }
})


export default connect(null)(NewGame)