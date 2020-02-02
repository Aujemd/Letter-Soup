import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import AppLayout from './src/app'
import { View, StyleSheet } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './src/loading'

class App extends Component {

  render() {
    return (
      <Provider
        store={
          store
        }
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <View style={Styles.container}>
            <AppLayout />
          </View>
        </PersistGate>
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