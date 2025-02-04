import React from "react";
import "../App.css"
import { demoData } from "./constants";

const Dialog = ({oncancel})=>{

    const onclick = ()=>{
      window.open("/enterdetails","_self")
    }

    const ondemoData = ()=>{
        localStorage.setItem("imsresumemakerdata",JSON.stringify(demoData))
        window.open("/enterdetails","_self")
    }
    return <div className="dialogbox" style={{
       justifyItems:"center",
       marginTop:"10%" 
    }} >
            <div 
            style={{
                    width:"60vw",
                    height:"120px",
                   
                    padding:"10px",
                    borderRadius:"10px",
                    background:"white",
                   
                }} >
                   <h3 style={{
                    margin:"0px",
                   }} >Enter Your Details</h3>
                   <p style={{
                    margin:"0px",
                    fontSize:"1rem",
                    fontWeight:"500"
                   }} >Enter your details once and download any resume of your choice afterward.</p>
                   <div style={{
                    marginTop:"10px",
                    display:"flex",
                    gap:"10px",
                    justifyContent:"right"

                   }} >
                    <button style={{
                        padding:"10px",
                        width:"100px",
                        cursor:"pointer",
                        background:"none",
                        borderRadius:"5px",
                        border:"1px solid grey",
                         fontWeight:"600"
                    }} onClick={oncancel} >Cancel</button>

                    <button style={{
                        padding:"10px",
                        cursor:"pointer",
                        background:"none",
                        borderRadius:"5px",
                        border:"1px solid grey",
                        fontWeight:"600"
                    }} onClick={ondemoData} >Use Demo Data</button>
                    <button 
                    onClick={onclick}
                    style={{
                        padding:"10px",
                        width:"150px",
                        cursor:"pointer",
                        background:"#1ca095",
                        borderRadius:"5px",
                        border:"none",
                        color:"white",
                        fontWeight:"600"
                    }}
                    
                    >Enter Details</button>
                   </div>
                </div>
    </div> 
}

export default Dialog