import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'

class Home extends Component {

    inSelectionCategory = () => {
        this.props.dispatch({
            type: 'IN_SELECTION_CATEGORIES',
            payload: {
                inSelectionCategories: true,
            }
        })
    }

    render() {
        return (
            <View>
                <View style={Styles.mainTitleContainer}>
                    <Text style={Styles.mainTitle}>LettersSoup 🍲</Text>
                </View>
                <TouchableOpacity style={Styles.optionItem} 
                    onPress = { () => {
                        this.inSelectionCategory()
                    }}
                >
                    <Text style={Styles.mainTitle}>▶ Jugar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.optionItem}>
                    <Text style={Styles.mainTitle}>💭 Instrucciones</Text>
                </TouchableOpacity>
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    mainTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    optionItem: {
        backgroundColor: "#1DD69A",
        margin: 10,
        borderRadius: 100,
        padding: 15,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    } 
})

export default connect(null)(Home);