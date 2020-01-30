import React, { Component } from 'react';
import Soup from './src/screens/soup/containers/soup';
import {Provider} from 'react-redux'
import store from './store'

class App extends Component{

  componentDidMount(){
    
    const level = 1
    
    store.dispatch({
      type: 'SET_LEVEL',
      payload:{
        level,
      }
    })
    
  }

  render(){
    return (
      <Provider
      store = {
        store
      }
      >
        <Soup/>
      </Provider>
    ) 
  }

}

export default App;