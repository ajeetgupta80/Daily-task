import React from "react";

function Plan(props)
{
    return <>
   <li className="shadow p-2 my-2 col-sm-9 "  style={{ color: 'black', fontWeight: 'bold', fontFamily: 'FredokaOne-Regular'}}>{props.value}</li>
   <button className="btn btn-danger my-2 col-sm-2 offset-1 " onClick={()=>{props.sendData(props.id)}}>X</button>

  
    </>
}

export default Plan;