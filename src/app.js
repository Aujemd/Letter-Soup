import React, { Component } from 'react'
import {Text ,StyleSheet, View} from 'react-native'
import Home from '../src/screens/home/containers/home'
import Categories from '../src/screens/categories/containers/categories'
import Game from '../src/screens/soup/containers/soup'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return{
        inSelectionCategories: state.inSelectionCategories,
        inGame: state.inGame,
    }
}

class AppLayout extends Component {
    render(){

        if(this.props.inSelectionCategories){
            return <Categories/>
        }else if(this.props.inGame){
            return <Game/>
        }else{
            return <Home/>
        }

    }
}



export default connect(mapStateToProps)(AppLayout);