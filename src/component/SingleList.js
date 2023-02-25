import React from "react";

const SingleList=({expenses})=>{
    return(
        <div>
            <h1 >    {expenses.title}        
            </h1>
            <h3>{expenses.description}</h3>
            <h2>{expenses.price}</h2>
        </div>
    )
}

export default SingleList