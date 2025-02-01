import react,{useRef,useState,useEffect} from "react"
import PdfDownload from "../downloadpdf"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const Templatefive = ()=>{

    const [data,setData] = useState()
    const localData = JSON.parse(localStorage.getItem("imsresumemakerdata"))
    useEffect(()=>{
        setData(localData&& localData)
    },[])
    
    const DivRef = useRef()

    const donwloadHandler = ()=>{

        console.log(data)
        PdfDownload(DivRef)
    }
     const isSmallScreen = ()=> window.innerWidth<=900

    return <div style={{
        width:"100%",
        marginBottom:"100px"
        }} > 
         <h3 style={{position:"sticky",
            top:"0px",
            backgroundColor:"#3275e0",
            padding:"10px",
            color:"white"
            }} > {data&&data.fullname} - Resume</h3>
        { !data? <h1>loading</h1> :
        <div style={{
        width:isSmallScreen()?"95vw":"70vw",
        justifySelf:"center",
        border:"1px solid black",
        }}>
     <div ref={DivRef} style={{
        padding:"30px",
        margin:"5px",
        backgroundColor:"white",
        fontFamily: "Wix Madefor Text"
    }}>
        <div style={{
            marginTop:"10px",
        }}>
             <div style={{
                fontSize:"15px",
                display:"grid",
                textAlign:"left",
                justifyContent:"left",
                fontWeight:"500",
            }}>
                <a href={data&&data.linkedinurl}> <LinkedInIcon style={{fontSize:"12px"}}/>LinkedIn</a> 
                <a href={data&&data.githuburl}><GitHubIcon style={{fontSize:"12px"}}/>GitHub</a> 
                <a href={data&&data.portfoliourl}><LanguageIcon style={{fontSize:"12px"}}/>Portfolio</a> 
                <a href={`tell:${data&&data.phoneno}`}> <LocalPhoneIcon style={{fontSize:"12px"}}/>+91 {data&&data.phoneno}</a>
                <a href={`mailto:${data&&data.email}`}><EmailIcon style={{fontSize:"12px"}}/>{data&&data.email}</a>
            </div>

            <h2 style={{
                fontSize:"35px",
                margin:"0px",
                color:"black",
                marginTop:"10px"
            }} >{data&&data.fullname} <span style={{fontSize:"1rem"}}>({data&&data.role})</span> </h2>
        </div>
        <hr style={{border:"5px solid black"}}/>
        <div>
            <h4 style={{
                fontSize:"16px",
                margin:"0px"
            }}>Summary</h4>
            <p style={{
                fontSize:"15px",
                margin:"0px"
            }}>{data&&data.summary}</p>
        </div>

        <div>
        <h4 style={{
                fontSize:"16px",
                marginBottom:"0px"
            }}>Technical Skills</h4>
        <div style={{
            display:"grid",
            gridTemplateColumns:"80% 20%",
            margin:"0px"
        }}>
            <div >
                <ul style={{
                fontSize:"15px",
                margin:"0px"
            }} >
                   {data&&data.skill.map((item,index)=>{
                    let no=0
                    return <li>{item[`skill`]}</li>
                   })}
                    
                </ul>
            </div>

            <div>
                <ul style={{
                fontSize:"15px",
                margin:"0px"
            }} >
                    {data&&data.skill.map((item,index)=>{
                        let no =0
                    return <li>{item[`skillr`]}/5</li>
                   })}
                </ul>
            </div>
        </div>
        </div>

        <div>
            <h4 style={{
                fontSize:"16px",
                marginBottom:"0px"
            }}>Experience</h4>

                {data&&data.exp.map((item,index)=>{
                    return <>
                    <h4 style={{
                fontSize:"15px",
                margin:"0px",
                color:"navy"
            }}> {item[`exptitle`]}  | {item[`expstartmonth`]} {item[`expstartyear`]} – {item[`expendmonth`]} {item[`expendyear`]} </h4>
            <p style={{
                fontSize:"15px",
                margin:"0px"
            }}>{item[`expdesc`]}</p>
                    </>
                   })}
                   
            
        </div>


        <div>
        <h4 style={{
                fontSize:"16px",
                marginBottom:"0px",
            }}>Personal Projects</h4>
       
        <ul style={{
                fontSize:"15px",
                margin:"0px",
            }}>

                
                {data&&data.pproject.map((item,index)=>{
                   let no=0
                   return  <li> <a href={item[`ppurl`]}>{item[`ppt`]}</a> : {item[`ppd`]}</li>
                   })}
       
       
        </ul>
           
        </div>
            {/* <li>{item[`skill`]}</li> */}
        <div>
        <h4 style={{
                fontSize:"16px",
                marginBottom:"0px",
            }}>Education</h4>
       
        <ul style={{
                fontSize:"15px",
                margin:"0px",
                
            }}>

                    {data&&data.educations.map((item,index)=>{
                         let no=0;
                    return <>
                     <li style={{
                            fontWeight:"600" ,       
                            }}>{item[`edut`]}</li>
                            <p style={{margin:"0px"}}> {item[`edud`]} | {item[`edusrtmonth`]} {item[`edusrtyear`]}– {item[`eduendmonth`]} {item[`eduendyear`]}</p>
                    </>
                   })}
       
       
        </ul>
           
        </div>

        { data.certification &&
        <div>
        <h4 style={{
                fontSize:"16px",
                marginBottom:"0px",
            }}>Certifications</h4>
       
        <ul style={{
                fontSize:"15px",
                margin:"0px",
            }}>

                
                {data&&data.certification.map((item,index)=>{
                   return  <li key={"cert"+index}> <a href={item[`cert-url`]}>{item[`cert-title`]}</a></li>
                   })}
       
       
        </ul>
           
         </div>
            }
        { data.Achievements &&
        <div>
        <h4 style={{
                fontSize:"16px",
                marginBottom:"0px",
            }}>Achievements</h4>
       
        <ul style={{
                fontSize:"15px",
                margin:"0px",
            }}>

                
                {data&&data.Achievements.map((item,index)=>{
                   return  <li key={"achiv"+index}> {item.Achievements}</li>
                   })}
       
       
        </ul>
           
        </div>
        }
       

    </div>
    <div style={{
     width:"100%",
     textAlign:"center",
    
    }} >
    <button className="downloadBtn" style={{
       position:"fixed",
        bottom:"40px",
        right:"20px",
        alignItems:"center",
        backgroundColor:"#3275e0",
        border:"none",
        padding:"10px",
        fontSize:"1.1rem",
        color:"white",
        borderRadius:"5px",
        fontWeight:"600",
        cursor:"pointer"
    }} onClick={donwloadHandler} > Download As Pdf ⬇️</button>
    </div>
   
    </div>
}
    </div>
}

export default Templatefive