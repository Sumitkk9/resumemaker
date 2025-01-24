import react,{useRef,useState,useEffect} from "react"
import PdfDownload from "../downloadpdf"
const Templatefirst = ()=>{

    const [data,setData] = useState()
    const localData = JSON.parse(localStorage.getItem("imsresumemakerdata"))
    useEffect(()=>{
        setData(localData&& localData)
    },[])
    
    const DivRef = useRef()

    const donwloadHandler = ()=>{

        console.log(data)
        // PdfDownload(DivRef)
    }
    return <div style={{
        width:"100%",
        justifyItems:"center",
        }} > 
        { !data? <h1>loading</h1> :
        <div style={{
        width:"50vw",
        alignItems:"center",
        border:"1px solid black"
        }}>
     <div ref={DivRef} style={{
        
        
        padding:"5px",
        backgroundColor:"white",
        
        fontFamily: "Wix Madefor Text"
    }}>
        <div style={{
            textAlign:"center",
            marginTop:"10px",
        }}>
            <h2 style={{
                fontSize:"29px",
                margin:"0px",
                   
            }} >{data&&data.fullname}</h2>
            <h3 style={{
                fontSize:"15px",
                margin:"0px"
            }}>{data&&data.role}</h3>
            <div style={{
                fontSize:"15px",
                display:"flex",
                gap:"10px",
                justifyContent:"center"
            }}>
                <a href={data&&data.linkedinurl}>LinkedIn</a>
                <a href={data&&data.githuburl}>GitHub</a>
                <a href={data&&data.portfoliourl}>Portfolio</a>
            </div>
            <div style={{
                fontSize:"15px",
                display:"flex",
                gap:"10px",
                justifyContent:"center"
            }}>
            <a href={"tell:"+ data&&data.phoneno}>+91 {data&&data.phoneno}</a>
            <a href={"mailto:"+ data&&data.email}>{data&&data.email}</a>
            </div>
        </div>

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
                    return <li>{item[`skill${index}${no+1}`]}</li>
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
                    return <li>{item[`skill${index}${no+1}r`]}/5</li>
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
            }}> {item[`exp${index}title`]}  | {item[`exp${index}startmonth`]} {item[`exp${index}startyear`]} – {item[`exp${index}endmonth`]} {item[`exp${index}endyear`]} </h4>
            <p style={{
                fontSize:"15px",
                margin:"0px"
            }}>{item[`exp${index}desc`]}</p>
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
                   return  <li> <a href={item[`pp${index}${no+1}url`]}>{item[`pp${index + 1}t`]}</a> : {item[`pp${index}${no+1}d`]}</li>
                   })}
       
       
        </ul>
           
        </div>
 {/* <li>{item[`skill${index + 1}`]}</li> */}
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
                            }}>{item[`edu${index + 1}t`]}</li>
                            <p style={{margin:"0px"}}> {item[`edu${index}${no+1}d`]} | {item[`edu${index}${no+1}srtmonth`]} {item[`edu${index}${no+1}srtyear`]}– {item[`edu${index}${no+1}endmonth`]} {item[`edu${index}${no+1}endyear`]}</p>
                    </>
                   })}
       
       
        </ul>
           
        </div>

       

    </div>
    <div style={{
     width:"100%",
     textAlign:"center",
    
    }} >
    <button style={{
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

export default Templatefirst