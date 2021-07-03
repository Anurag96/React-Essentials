/*
import React,{useState,useEffect} from 'react';
import './App.css';
function App() {
  const [emotion, setEmotion] =useState("happy");
  const [secondary,setSecondary]=useState("tired")

  useEffect(() => {
    console.log(`It's ${emotion} around here`)
    }
    ,[emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`)
    }
    ,[secondary]);

 return(
 <> 
 <h1>Current emotion is {emotion} & {secondary}</h1>
 <button onClick={()=>{setEmotion("frustated")}}>Frustated</button>
 <button onClick={()=>{setEmotion("enthusiastic")}}>Enthusiastic</button>
 <button onClick={()=>{setEmotion("happy")}}>happy</button>
 <button onClick={()=>{setSecondary("crabby")}}>Crabby</button>
 
 <button onClick={()=>{setSecondary("tired")}}>tired</button>
 </>
 
 )
}

export default App;*/
