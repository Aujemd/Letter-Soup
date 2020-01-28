import React, { Component } from 'react'
import {View , StyleSheet} from 'react-native'
import Board from '../components/board'
import WordsLabel from '../components/wordsLabel'

class Soup extends Component {

    render(){
        return(
            <View style = {Styles.container}>
                <WordsLabel words = {['SAL', 'CARNE', 'POLLO', 'MANI', 'PAN', 'PEZ', 'ARROZ', 'UVA' , 'HARINA', 'PAPA', 'PERA', 'PASTA', 'MAIZ', 'DONA', 'LECHE', 'AJO']}/>
                <Board></Board>
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