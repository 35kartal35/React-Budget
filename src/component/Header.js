import React from "react";
import "../assets/header.css"
import logo from "../images/logo.gif"

const Header =()=>{
    return(
        <div className="headerContainer">
            
            <div className="headerWrapper">
            <div className="headerImages">
                <img src={logo}/>
            </div>
            <h1>
                MY BUDGET APP
            </h1>
            </div>
        </div>
    )
}

export default Header