import React from "react";
import "../assets/listexpenses.css"

const Expens=({expenses=[]})=>{
    return(
        <div className="listExpenses">
              {expenses.map(expens=>(  
                <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Malzeme Adı</th>
            <th scope="col">Ücreti</th>
            <th scope="col">AVM Adı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{expens.title}</td>
            <td>{expens.place}</td>
            <td>{expens.price}</td>
          </tr>
          
        </tbody>
      </table>
        
           ))}
        </div>
    )
}

export default Expens