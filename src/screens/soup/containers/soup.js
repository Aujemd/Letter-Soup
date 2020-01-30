import React, { Component } from 'react'
import {View , StyleSheet, Text} from 'react-native'
import Board from '../components/board'
import {connect} from 'react-redux'
class Soup extends Component {
                //<Board level = {this.props.level}></Board>

    render(){
        const {level} = this.props
        return(
            <View style = {Styles.container}>
                <Board level = {level}></Board>
            </View>
        )
    }

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#1B4F72'
    }
})

function mapStateToProps(state){
    return {
        level: state.level
    }
}

export default connect(mapStateToProps)(Soup);