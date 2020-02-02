import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, StyleSheet, View, TextInput } from 'react-native'


class Login extends Component {
    state = {
        user: '',
    }

    handleSubmit = () => {
        this.props.dispatch({
            type: 'SET_USER',
            payload: {
                user: this.state.user,
            }
        })
    }

    handleChangedText = user => {
        this.setState({
            user
        });
    }

    render() {
        return (
            <>
                <Text style={{ fontSize: 50 }}>🙋‍♂️</Text>
                <Text style={{ color: 'white', margin: 10 }}>Escribe tu nombre</Text>
                <TextInput
                    placeholder="✏ ..."
                    underlineColorAndroid="green"
                    autoCapitalize="none"
                    onSubmitEditing={this.handleSubmit}
                    onChangeText={this.handleChangedText}
                    style={styles.input}
                >
                </TextInput>
            </>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
    }
})

export default connect(null)(Login)