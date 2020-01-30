function soup(state = {}, action){
    switch(action.type){
        case 'SET_LEVEL':{
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
}

export default soup;