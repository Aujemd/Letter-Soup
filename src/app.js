import React, { Component } from 'react'
import Home from '../src/screens/home/containers/home'
import Categories from '../src/screens/categories/containers/categories'
import Game from '../src/screens/soup/containers/soup'
import { connect } from 'react-redux'
import Login from './login'
import EndGame from './screens/endgame'
import Instructions from './instructions'

function mapStateToProps(state) {
    return {
        inSelectionCategories: state.inSelectionCategories,
        inGame: state.inGame,
        user: state.user,
        level: state.level,
        finalLevel: state.finalLevel,
        inInstructions: state.inInstructions,
    }
}

class AppLayout extends Component {
    render() {
        if (this.props.inSelectionCategories) {
            return <Categories />
        } else if (this.props.inGame) {
            return <Game />
        } else if (this.props.user === '') {
            return <Login />
        } else if (this.props.inGame === false && this.props.level === this.props.finalLevel) {
            return <EndGame />
        } else if (this.props.inInstructions) {
            return <Instructions />
        }
        return <Home />
    }
}

export default connect(mapStateToProps)(AppLayout);