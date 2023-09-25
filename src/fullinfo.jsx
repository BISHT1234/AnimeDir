
function Info(pops){

    return (
        
        <div className="full">
            
            <div className="subhead">
            <h1 >{pops.name}</h1>
         </div>
        <p>{pops.about}
       </p>
        <img src={pops.img}></img>
        </div>
    )
}

export default Info