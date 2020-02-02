import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Instructions extends Component {

    goBack() {
        this.props.dispatch({
            type: 'SET_LEVEL',
            payload: {
                inInstructions: false,
            }
        })
    }
    render() {
        return (
            <>
                <Text style={{ color: 'white', fontSize: 20 }}>
                    Instrucciones
                    </Text >
                <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>- Debe presionar en secuencia las letras de la sopa para poder formar una de las palabras ocultas en la misma</Text>
                <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>- Puede presionar el boton de las pistas para que le sean reveladas las letras de inicio de cada palabra oculta en la sopa</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.goBack()
                    }}
                ><Text style={{ color: 'white', fontSize: 50, }}>⬅</Text></TouchableOpacity>

            </>
        )
    }
}

export default connect(null)(Instructions)