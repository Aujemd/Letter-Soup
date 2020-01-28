import React from 'react'
import {Text, StyleSheet, View , TouchableOpacity} from 'react-native'

const WordsLabel = props => {
    const {words} = props
    return(
        <View style = {Styles.container}>
            {words.map((word, key) => <TouchableOpacity style = {Styles.letterContainer}><Text style={Styles.letter}>{word}</Text></TouchableOpacity>)}       
        </View>
    )
}

const Styles = StyleSheet.create({
    letter: {
        color : 'white',
        
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letterContainer: {
        width: 80,
    }
})

export default WordsLabel;