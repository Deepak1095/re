import { ADDTODO, CHANGESTATUS, DELETETODO } from "./actionTypes"


const init = {
    todos: [
    ]
}
export const reducer = (state = init, action) => {
    switch (action.type) {
        case ADDTODO:  return {
            ...state,todos:[...state.todos,action.payload]
        }
        case CHANGESTATUS:return {
            ...state,todos:action.payload
        }
        case DELETETODO:return {
            ...state,todos:action.payload
        }
        
        default: return state
    }

}