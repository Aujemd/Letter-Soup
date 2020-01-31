import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import AppLayout from './src/app'
import {View, StyleSheet} from 'react-native'

class App extends Component{

  render(){
    return (
      <Provider
      store = {
        store
      }
      >
        <View style = {Styles.container}>
          <AppLayout/>
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