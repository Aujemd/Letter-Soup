import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const Categorie = props => {

    const { contain, icon, style, onPress } = props
    const { container } = Styles

    const currentStyle = StyleSheet.flatten([container, style])

    return (
        <TouchableOpacity style={currentStyle} onPress={onPress}>
            <Text style={Styles.icon}>{icon}</Text>
            <Text style={Styles.text}>{contain}</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#00B9FF',
        width: 250,
        display: 'flex',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 100,
        margin: 10,
        padding: 6,
    },
    icon: {
        fontSize: 42,
        backgroundColor: 'white',
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        marginRight: 10,
    },
    text: {
        color: 'white',
        fontSize: 40,
    }
})
export default Categorie;