import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import Letter from './letter'
import GenerateSoup from '../../../../utils/generateSoup';

const level = "6";
class Board extends Component{


    render(){
        return(
            <View style = {Styles.container}>
                {GenerateSoup.generate().map((letra, key) => (<Letter level = {level}>{letra}</Letter>))}
            </View>
        );
    }

}
var Styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        margin: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Board; 