import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [mode , setMode]=useState(false)
  return (
    <div className="App" style={{backgroundColor:mode?"black":"white",color:mode?"white":"black",height:"100vh"}}>
      <Button width={"100px"} borderRadius={"20px"} marginTop={"40px"}  onClick={()=>setMode(prev=>!prev)}>{mode?"Light Mode":"Dark Mode"}</Button>
    <Todo mode={mode}/>
    </div>
  );
}

export default App;
