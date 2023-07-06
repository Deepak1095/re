import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text,Input, Box, Button } from '@chakra-ui/react'
import TodoCard from './TodoCard'
import { addTodo, deleteTodo } from '../Redux/action'
const init={
    title:"",
    status:false,
}
const Todo = ({mode}) => {
    console.log(mode)
    const store=useSelector(store=>store.todos)
    console.log(store)
    const [todos,setTodos]=useState(store)
    const [newTodo,setNewTodo]=useState({})
    const dispatch=useDispatch()
useEffect(()=>{
setTodos(store)
},[store])
    const handleInput=(e)=>{
        const payload={
            title:e.target.value,
            status:false,
            id:todos.length+1
        }
        setNewTodo(payload)
    }
const handleSubmit=()=>{
    dispatch(addTodo(newTodo))
  
}
const handleFilter=(e)=>{
if(e=="All"){
    setTodos(store)
}
else if(e=="Active"){
    let filteredTodos=store.filter((el)=>{
       return el.status==false
    })
    setTodos(filteredTodos)
}
else if(e=="Complete"){
   let  filteredTodos=store.filter((el)=>{
      return  el.status==true
    })
    setTodos(filteredTodos)
}
else if(e=="Clear_Complete"){
    let  filteredTodos=store.filter((el)=>{
       return  el.status==false
     })
     dispatch(deleteTodo(filteredTodos))
 }
}

  return (
    <div>
        <h1>TODO</h1>
        <Box display={"flex"} margin={"auto"} marginBottom={"10px"} width="500px">
        <Input type="text" placeholder='Create a New Todo...' onChange={handleInput} width={"450px"} height={"40px"} />
        <button onClick={handleSubmit}>submit</button>
        </Box>
      
        {todos.map((el)=>
        <div key={el.id}>
              <TodoCard props={el} mode={mode}/>
            </div>
           
        )}
        <Box display={"flex"} justifyContent={"space-around"} margin={"auto"} marginBottom={"10px"} width="500px" border={`1px solid ${mode?"white":"black"}`}>
            <Box>
            <Text>{`${todos.length} items left`}</Text>
            </Box>
        <Box display={"flex"} gap={20}>
        <Text onClick={()=>handleFilter("All")}>All</Text>
            <Text onClick={()=>handleFilter("Active")}>Active</Text>
            <Text onClick={()=>handleFilter("Complete")}>Complete</Text>
        </Box>
        <Box>   
            <Text onClick={()=>handleFilter("Clear_Complete")}>Clear Completed</Text>

        </Box>
         
        </Box>
    </div>
  )
}

export default Todo