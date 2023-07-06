import React, { useState } from 'react'
import { Text,Input, Box } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { changeStatus, deleteTodo } from '../Redux/action'
const TodoCard = (props) => {
    console.log(props.mode)
    const {title,status,id}=props.props
    const [complete,setComplete]=useState(status)
    const store=useSelector(store=>store.todos)
    const dispatch=useDispatch()


    const handleStatus=()=>{
        setComplete(prev=>!prev)
        let todosStaus=store.map(el=>{
         if(el.id==id){
           el.status=!complete 
         }
         return el
        })
        console.log(todosStaus)
    // dispatch(changeStatus(todosStaus))
    }


    const handleEdit=()=>{
console.log("edit")
    }
   
    const handleDelete=()=>{
        let filtertodos=store.filter(el=>{
            return el.id!==id
        })
       dispatch(deleteTodo(filtertodos))
    }
  return (
        <Box>
        <Box maxW='500px' borderWidth='1px' borderRadius='lg' display='flex' justifyContent={"space-around"} border={`1px solid ${props.mode?"white":"black"}`} margin={"auto"} alignItems={"center"}>
        <Box width={"120px"} display='flex' justifyContent={"space-evenly"} >
        <input type="checkbox"  checked={complete} onChange={handleStatus}/>
        <Text as={complete?"s":"b"}>{title}</Text>
        </Box>
        <Text onClick={handleEdit}>edit</Text>
        <Text onClick={handleDelete}>Delete</Text>
      
        </Box>
      
     </Box>
  )
}

export default TodoCard