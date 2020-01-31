import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator,
}from 'react-native';

const Loading = props => {
    return(
        <View style = {Styles.container}>
            <Text style = {Styles.icon}>🍲</Text>
            <Text style = {Styles.letter}>Cargando ...</Text>
            <ActivityIndicator
             size = {50}
             color = {'white'}
            ></ActivityIndicator> 
        </View>
    );
}

const Styles = StyleSheet.create({
    icon: {
        fontSize: 150,
    }, 
    letter: {
        color: 'white',
        fontSize: 40,
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    }


});

export default Loading;