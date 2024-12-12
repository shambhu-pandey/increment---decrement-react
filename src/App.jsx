import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import './index.css'

const App = () =>{

  const[count , setCount] = useState(0);
   
  const increment_value = () =>{
    if(count<20){
    setCount(count+1);
    }
    else{
      alert("you reached at high valu")
    }
  }

  const decrement_value = () =>{
    if(count>0){
    setCount(count-1);
    }
    else{
      alert("you reached at low value")
    }
  }
  return (
    <>
    <div className="main_container">
    <div className="container">
      <h1 className="output"> {count}</h1>

      <button className="increment_button" onClick={increment_value}><AddIcon /></button>
      <button className="decrement_button" onClick={decrement_value}><DeleteIcon /></button>
      </div>
    </div>
    </>
  );
}

export default App;