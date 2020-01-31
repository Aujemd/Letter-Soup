import {createStore} from 'redux'

import reducer from './reducers/soup'

const store = createStore(reducer, {
    level: 1,
});

export default store;