import { Link } from "react-router-dom";

import Axios from 'axios'
let name;
function Card(pops){
   
   async function  delet(){
await Axios.post("http://localhost:4000/deletedata",{
    name:pops.name
}).then(response =>{
    console.log(response)
}).catch(error=>{
    console.log(error)
})
window.location.reload(true);
 }
    console.log(window.location) 
    let abt=pops.about
name=pops.name
    return (
    
        <div  className="cards">
          
            <div className="subhead">
            <h1 >{pops.name}</h1>
         </div>
        <p>{abt.substring(0,200)}
       <br></br> <Link to={`/${pops.name}`}>Read more...</Link></p>
        <img id="dp" src={pops.img}></img>
        <svg id="del" onClick={delet} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>

</svg>
        </div>
    
    )
}

export default Card