import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Letter from './letter'
import GenerateSoup from '../../../../utils/generateSoup';

class Board extends Component {

    render() {

        return (
            <View style={Styles.container}>
                {this.props.children}
            </View>
        );
    }

}
var Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})



export default Board; 