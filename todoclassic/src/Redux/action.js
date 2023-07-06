
import { ADDTODO, DELETETODO ,CHANGESTATUS} from "./actionTypes"

export const addTodo=(params)=>(dispatch)=>{
     dispatch({type:ADDTODO,payload:params})
}

export const deleteTodo=(payload)=>(dispatch)=>{
  console.log(payload)
    dispatch({type:DELETETODO,payload:payload})
}

export const changeStatus=(payload)=>(dispatch)=>{
    console.log(payload)
      dispatch({type:CHANGESTATUS,payload:payload})
  }