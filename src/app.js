import React, { Component } from 'react'
import Home from '../src/screens/home/containers/home'
import Categories from '../src/screens/categories/containers/categories'
import Game from '../src/screens/soup/containers/soup'
import { connect } from 'react-redux'
import Login from './login'

function mapStateToProps(state) {
    return {
        inSelectionCategories: state.inSelectionCategories,
        inGame: state.inGame,
        user: state.user,
    }
}

class AppLayout extends Component {
    render() {
        if (this.props.inSelectionCategories) {
            return <Categories />
        } else if (this.props.inGame) {
            return <Game />
        } else if (this.props.user === '') {
            return <Login/>
        }
        return <Home />
    }
}

export default connect(mapStateToProps)(AppLayout);