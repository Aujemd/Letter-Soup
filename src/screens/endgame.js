import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NewGame from './soup/components/newGame'

const EndGame = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.icon}>😎</Text>
            <Text style={Styles.letter}>¡Felicidades Completaste el Juego!</Text>
            <NewGame />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 50,
    },
    letter: {
        color: 'white',
        fontSize: 20,
    }

})
export default EndGame