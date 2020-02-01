function soup(state = {}, action){
    switch(action.type){
        case 'SET_LEVEL':{
            return {...state, ...action.payload}
        }
        case 'IN_SELECTION_CATEGORIES':{
            return{...state, inSelectionCategories: action.payload.inSelectionCategories}
        }
        case 'SET_CATEGORY':{
            return{...state, 
                category: action.payload.category,
                inSelectionCategories: action.payload.inSelectionCategories,
                inGame: action.payload.inGame,
                board: action.payload.board,
                limitWords: action.payload.limitWords,
                win: action.payload.win,
                founded: action.payload.founded,
                words: action.payload.words,
            }
        }
        case 'SET_USER':{
            return{...state, user: action.payload.user
            }
        }
        case 'SET_NEW_GAME':{
            return {...state, ...action.payload}
        }
        case 'PUT_WORD':{
            return{...state, ...action.payload}
        }
        default:
            return state;
    }

}

export default soup;