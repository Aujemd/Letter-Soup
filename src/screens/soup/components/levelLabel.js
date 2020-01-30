import React from 'react'
import {Text, StyleSheet, View , TouchableOpacity} from 'react-native'

const levelLabel = props => {
    const {level} = props
    return(
        <View style = {Styles.container}>
            <Text style = {Styles.letter}>Nivel {level}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    letter: {
        color : 'white',
        fontSize: 30,
        fontWeight: 'bold'
        
    },
    container: {
        backgroundColor : '#00B9FF',
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        margin: 10,

    },

})

export default levelLabel;