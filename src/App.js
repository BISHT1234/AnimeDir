import React, { useEffect, useState } from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import Card from './card';
import characters from './characters'
import  Axios  from 'axios';
let id,searching=false,founddata=false,searchdata
function creatcard(characters){
 
id=characters.name
  return(
    <div> 
         <Card
        // key={characters.key}
         name={characters.name}
         about={characters.about}
         img={characters.img}
         ></Card>
       </div>
     )
}

function App() {
  const [data,addata]=useState([{name:"",about:"",img:""}])
  const[foundit,setfound]=useState([{}])
async function getdata(){
await Axios.get("http://localhost:4000/getdata").then(res=>{
  addata(res.data)
 })
     }
  document.getElementById('searchinput').addEventListener('change',(event)=>{
    searching=true
setfound(data.find((element)=>{
  let presentdata=element.about.toLowerCase()
  let reqdata=event.target.value
  if(element.about.includes(event.target.value)){
    founddata=true
    return element
  }
  else if(presentdata.includes(reqdata)){
    founddata=true
    return element
  }

}))
  })
useEffect(()=>{
  getdata()
    },[])

  return (
    <div id="root2">
   {searching?founddata?creatcard({...foundit}):<h1>No Match Found!!!!</h1>:data.map(creatcard) }
 </div> 
  )
}

export default App;
