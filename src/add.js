
import React, { useEffect, useState } from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import Axios  from 'axios';

function Add() {
   
    const [data,setdata]=useState({name:"",about:"",img:""})
 
 function ondata(event){
  setdata({...data,[event.target.name]:event.target.value})}
let submitted=async ()=>{
  
await Axios.post("http://localhost:4000/adddata",data
)  .then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
}

  return (
    <div id="root3">
  <h1>Add your fav character</h1>
  <form onSubmit={submitted}>
  <input name='name' placeholder=' Enter Character name ' onChange={ondata} type='text'  ></input>
  <input name='about' placeholder=' Enter details ' onChange={ondata} type='text' ></input>
  <input name='img' placeholder=' Enter img url ' onChange={ondata} type='text' ></input>
<button id="sbut" type="submit">Submitt</button>
</form>
    </div>
  )

}

export default Add
