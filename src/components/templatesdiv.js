import React,{useState} from "react";
import Templatecard from "./templatecard";
import { templates } from "./constants";
import Dialog from "./dialog";

const TemplateDiv = ()=>{

    const [showdialog,setDialog] = useState(false)
    const onclicked = (url)=>{
        let data = JSON.parse(localStorage.getItem("imsresumemakerdata"))
        if(data){
            window.open(url,"_self")
            
        }else{
            setDialog(true)
        }
    }
    const onCncl = ()=>{
        setDialog(false)
    }
    return<> {showdialog? <Dialog oncancel={onCncl}/> : <> <h3>Resume Templates</h3>
          
    <div className="templateDiv" >

    {templates.map((template,index)=>{
        return <Templatecard
        key={"templates"+index}
        timg={template.tempImg}
        recmm={template.tempRecomm}
        onclick={()=>onclicked(template.tempUrl)}
        />
    })}
    </div>
    </> 
}

    </> 
}

export default TemplateDiv