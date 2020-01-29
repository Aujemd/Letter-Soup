import React, { Component } from 'react'
import {View , StyleSheet} from 'react-native'
import Board from '../components/board'
import WordsLabel from '../components/wordsLabel'

class Soup extends Component {

    render(){
        return(
            <View style = {Styles.container}>
                <Board level = {1}></Board>
            </View>
        )
    }

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#1B4F72'
    }
})

export default Soup;