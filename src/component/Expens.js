import React from "react";
import "../assets/listexpenses.css"

const Expens=({expenses=[]})=>{
    return(
        <div className="listExpenses">
            
           {expenses.map(expens=>(
            <h3>
            {expens.title}-{expens.place}-{expens.price}
        </h3>
        
           ))}
        </div>
    )
}

export default Expens