import React, { useState } from "react"


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

      <button className="increment_button" onClick={increment_value}>add</button>
      <button className="decrement_button" onClick={decrement_value}>delete</button>
      </div>
    </div>
    </>
  );
}

export default App;