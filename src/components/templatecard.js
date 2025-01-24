import React from "react";
import "../App.css"
import Tem1 from "../img/tem1.png"

const Templatecard = ({recmm,timg,onclick})=>{
    return <div className="templatecard" >
      
        <img src={timg} alt="tem" />    
        <button onClick={onclick} > Use Template </button>
       {recmm && <h3>Recommended</h3>}
    </div>
}

export default Templatecard