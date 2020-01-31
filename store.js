import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import reducer from './reducers/soup'

import {AsyncStorage} from 'react-native'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, {
    level: 1,
    user: '',
})

const persistor = persistStore(store)

export {store, persistor}
