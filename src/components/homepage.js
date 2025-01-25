import React,{useState,useEffect} from "react";
import Logo from "../img/rmlgo.webp"
import "../App.css"
import Templatecard from "./templatesdiv";
import Inputform from "./inputform"
import { Menus,templates } from "./constants";
import Templatefirst from "./templates/templatesone";
import Templatetwo from "./templates/templatetwo";
import Templatethree from "./templates/templatethree";
import { BrowserRouter as Router , Routes, Route,useLocation } from 'react-router-dom';
const Homepage = ()=>{

    const location = useLocation()

    const isHomepage = location.pathname ==="/"
    const [showEdit,setShowEdit] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem("imsresumemakerdata")){
            setShowEdit(true)
        }

    },[])

    const isSmallScreen = ()=> window.innerWidth<=900

    return <div style={{gridTemplateColumns: isSmallScreen() && !isHomepage && "100%" }} className="homepagemaindiv">
        <div style={{display: isSmallScreen() && !isHomepage && "none" }} className="homeleftdiv">
            <div className="leftdivtop" >
            <img  src={Logo} alt="logo" />
            <hr style={{width:"80%"}} />
            </div>
        <div  className="leftdivmenu" >
            {Menus.map((itms,index)=>{
                return <button onClick={()=>  window.open(itms.url, "_self", "noopener,noreferrer")} key={index+itms.name}>{itms.name}</button>
            })}
             <hr style={{width:"80%"}} />

             <p>Create your resume in just a few clicks <span style={{color:"yellow",fontSize:"1.4rem"}}> no login, no signup, no limits.</span>  IMS Resume Maker makes it simple, fast, and hassle-free for everyone.</p>
             <hr style={{width:"80%"}} />
        </div>

        <div className="leftdivbottom">
            <h4 style={{textAlign:"center"}}>Made With 🤍 for you </h4>
            
        </div>
            
        </div>

        <div className="homerightdiv" >
           <div className="rightdivtop" >
   
            <h1 style={{cursor:"pointer"}}  onClick={()=> window.open("/","_self")} > IMS RESUME MAKER <span>Resume Building Made Easy!</span></h1>
           {showEdit&& <button onClick={()=> window.open("/enterdetails","_self")} >View Info... </button>}
           </div>

           <div className="rightdivmain" >
           
                <Routes>
                    <Route path="/" element={<Templatecard/>}/>
                    <Route path="/enterdetails" element={<Inputform/>}/>
                    <Route path="/classictemplate1" element={<Templatefirst/>}/>
                    <Route path="/classictemplate2" element={<Templatetwo/>}/>
                    <Route path="/classictemplate3" element={<Templatethree/>}/>

                </Routes>
               
    
          


            {/* <Inputform/> */}
             {/* <Templatefirst/> */}
           

           </div>

        </div>
    </div>
}

export default Homepage