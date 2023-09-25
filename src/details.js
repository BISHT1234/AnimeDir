import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import characters from "./characters";
import Axios from 'axios'
import Info from "./fullinfo";
let aim
function creatcard(characters){
if(characters.name===aim){
    return(
   <div> 
        <Info
        name={characters.name}
        about={characters.about}
        img={characters.img}
        ></Info>
      </div>
    )}
  }
  
function Details(){

    const {name}= useParams();
    aim=name
    const [data,addata]=useState([{name:"",about:"",img:""}])
    async function getdata(){
    await Axios.get("http://localhost:4000/getdata").then(res=>{
      addata(res.data)
     })
         }
      
    
    useEffect(()=>{
      getdata()
        },[])
    return(
        <div>
   {data.map(creatcard)}
        </div>
    )
}
export default Details