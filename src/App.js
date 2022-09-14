
import './App.css';
import {useEffect, useState} from "react"
import Card from './components/Card';
import Button from './components/Button';

function App() {
const [state , setState]=useState(null)
const [aleatorio , setAleatorio]= useState(1)
 
const getRandom =(min , max)=> Math.floor(Math.random() * (max - min)) + min;
const random = getRandom(1 , 151)

const initialUrl = "https://pokeapi.co/api/v2/pokemon/" + random

const fetchData = async (initialUrl)=>{

  const data = await fetch(initialUrl)
  const dataJson = await data.json()
  setState(dataJson)
}

useEffect(()=>{
   fetchData(initialUrl)
   },[aleatorio])


const handleClick =()=> setAleatorio(aleatorio + 1)
 


  return (
 <div>
  <h1 className='title'>Pokemon Random</h1>
  <Card  state ={state} />
  <Button  searchClick ={handleClick } />
 </div>
  );
}

export default App;
