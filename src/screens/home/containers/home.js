import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Home extends Component {

    render() {
        return (
            <View>
                <View style={Styles.mainTitleContainer}>
                    <Text style={Styles.mainTitle}> Sopa De Letras 🍲</Text>
                </View>
                <View style={Styles.mainTitleContainer}>
                    <Text style={Styles.mainTitle}> ▶ Jugar </Text>
                </View>
                <View style={Styles.mainTitleContainer}>
                    <Text style={Styles.mainTitle}> 👁‍🗨 Instrucciones</Text>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    mainTitleContainer: {
        backgroundColor: '#00B9FF',
        borderRadius: 5,
        margin: 10,
        padding: 5,
    },
    mainTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
})

export default Home;