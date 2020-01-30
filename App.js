import React, { Component } from 'react';
import Soup from './src/screens/soup/containers/soup';
import Categories from './src/screens/categories/containers/categories'
import {Provider} from 'react-redux'
import store from './store'
import {View, StyleSheet} from 'react-native';

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
      <View style = {Styles.container}>
        <Categories/>
      </View>
      </Provider>
    ) 
  }

}

const Styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#1B4F72',
      justifyContent: 'center',
      alignItems: 'center',
  }
})

export default App;