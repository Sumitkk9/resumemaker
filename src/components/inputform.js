import react,{useState,useEffect} from 'react'
import {Inputfield,Inputfield2,Inputfieldtwo} from './inputfield.js'
import "../App.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Inputform = ()=>{

    const [localData,setLocaldata] = useState()
    const [formDataState,setFormData] = useState([])

    const [show, setShow] = useState(false);
    const [certification, setCert] = useState([[]]);
    const [skillAddMore, setskillAddMore] = useState([[]])
    const [expAddMore, setExpMore] = useState([[]])
    const [pproject,setPp] = useState([[]])
    const [edu,setEdu] = useState([[]])
    const [achiev,setAchiev] = useState([[]])


    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("imsresumemakerdata"))
        if(data){
            setLocaldata(data)
        }
        if(data){
            setEdu(data.educations)
        }
        if(data){
            setPp(data.pproject)
        }

        if(data){
            setExpMore(data.exp)
        }
        if(data){
            setskillAddMore(data.skill)
        }

        if(data){
             setCert(data.certification)
        }
        if(data){
            setAchiev(data.Achievements)
        }
        
    },[])

    

        const addMore = (e,field)=>{
            e.preventDefault()
            

            if(field ==="skill"){
                setskillAddMore( (prev)=> [...prev,[]])
                    
            }
            if(field ==="pp"){
                setPp((prev)=> [...prev,[]])
                    
            }
            if(field ==="edu"){
                setEdu((prev)=> [...prev,[]])
                    
            }

            if(field ==="cert"){
                setCert((prev)=> [...prev,[]])
                    
            }
            
            if(field ==="exp"){
                setExpMore((prev)=> [...prev,[]])
                    
            } 

            if(field ==="Achievements"){
                setAchiev((prev)=> [...prev,[]])
                    
            } 


        }

    
        const [percent,setPercent] = useState(2)
    const onsubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target); // Get form data
            const formObject = {};
            const skillarr = []
            const expArr = []
            const pprojectarr = []
            const Educationarr = []
            const certArr = []
            const achievArr = []
            let skillNo =0
            let expNo = 0
            let pprojno = 0
            let eduno = 0
            let certno = 0
            let achievno = 0
            let obj = {}

            formData.forEach((value, key) => {

                if(key.includes("skill") ){
                    if(key.includes("skill") ){ 
                        skillNo++
                        obj[key] =value 

                        if(skillNo>1){
                            skillarr.push(obj)
                            obj = {}
                            skillNo=0
                        } 
                    } 
                formObject.skill = skillarr
                  
                  
                } else if(key.includes("exp") ){
                    if(key.includes("exp") ){ 
                        expNo++
                        obj[key] =value 
                        if(expNo>6){
                            expArr.push(obj)
                            obj = {}
                            expNo=0
                        } 
                    } 
                formObject.exp = expArr
                  
                  
                } else if(key.includes("pp") ){
                    if(key.includes("pp") ){ 
                        pprojno++
                        obj[key] =value 

                        if(pprojno>2){
                            pprojectarr.push(obj)
                            obj = {}
                            pprojno=0
                        } 
                    } 
                formObject.pproject = pprojectarr
                  
                  
                }  else if(key.includes("edu") ){
                    if(key.includes("edu") ){ 
                        eduno++
                        obj[key] =value 
                        if(eduno>5){
                           
                            Educationarr.push(obj)
                            obj = {}
                            eduno=0
                        } 
                    } 
                formObject.educations = Educationarr
                  
                  
                } else if(key.includes("cert") ){
                    if(key.includes("cert") ){ 
                        certno++
                        obj[key] =value 
                        if(certno>1){
                           
                            certArr.push(obj)
                            obj = {}
                            certno=0
                        } 
                    } 
                formObject.certification = certArr
                  
                  
                }  else if(key.includes("Achievements") ){
                    if(key.includes("Achievements") ){ 
                        achievno++
                        obj[key] =value 
                            achievArr.push(obj)
                            obj = {}
                            achievno=0  
                    } 
                formObject.Achievements = achievArr
                  
                  
                } else{
                    formObject[key] = value;
                }
                
                
            });

            // console.log(formObject)

        setFormData([formObject])
        localStorage.setItem( "imsresumemakerdata",JSON.stringify(formObject))
        setShow(true)
        setTimeout(()=>{
            
            clearInterval(widthinterval)
             window.open("/","_self")
        },2000)
      
       const widthinterval =  setInterval(()=>{
            setPercent((prev)=>prev+2)
        },21)
    }


    const [check,setCheck] = useState(true)

    const ondelete = (e,no,sec)=>{
        e.preventDefault() 

      
       if(sec==="skill"){
        const ind =  skillAddMore.indexOf(no)
        if (ind !== -1) {
            skillAddMore.splice(ind,1)
            setCheck(false)
           }
       }

       if(sec==="pp"){
        const ind =  pproject.indexOf(no)
        if (ind !== -1) {
            pproject.splice(ind,1)
            setCheck(false)
           }
       }
       if(sec==="exp"){
        const ind =  expAddMore.indexOf(no)
        if (ind !== -1) {
            expAddMore.splice(ind,1)
            setCheck(false)
           }
       }
       if(sec==="edu"){
        const ind =  edu.indexOf(no)
        if (ind !== -1) {
            edu.splice(ind,1)
            setCheck(false)
           }
       }
       
       if(sec==="cert"){
        const ind =  certification.indexOf(no)
        if (ind !== -1) {
            certification.splice(ind,1)
            setCheck(false)
           }
       }

       if(sec==="Achievements"){
        const ind =  achiev.indexOf(no)
        if (ind !== -1) {
            achiev.splice(ind,1)
            setCheck(false)
           }
       }
      
       
       setTimeout(() => {
        setCheck(true)
       }, 100);
    }

    const resetForm = (e)=>{
        e.preventDefault()
        alert("Do you really want to reset your info?")
        localStorage.removeItem("imsresumemakerdata")
        window.location.reload();

    }

    
    return(
        <div className='maindivfrom' >
            {show&&  <div style={{
            background:"white",
            padding:"5px",
            justifyContent:"center",
            alignItems:"center",
            transition:"ease-in-out 5ms",
            position:"fixed",
            top:"50px",
            right:"20px",
            zIndex:10,
            boxShadow:"1px 1px 5px 2px grey"
         }}>
            <div style={{
                width: percent,
                background:"green",
                height:"2px",
               
            }}></div>
            <h6 style={{textAlign:"center",margin:"0px",background:"transparent",fontSize:"1rem"}}>Information Saved ✅ <br/> Now Create Your Resume </h6>
            </div>} 
            
            <form  onSubmit={onsubmit} >
            <div className='Formdiv' >
           {localData&& <> <button  
            style={{
                position:"absolute",
                right:"10px",
                width:"100px",
                backgroundColor:"red"
            }} 
            onClick={(e)=>resetForm(e)}  
            >Reset Form</button> <br/> </>}

                <h2>Personal info</h2>
                <input 
                value = { localData&& localData.fullname} 
                type='text' 
                name='fullname' 
                onChange={()=> setLocaldata(localData&&localData.fullname)}
                required 
                contentEditable={true}
                placeholder='Enter Full Name'/><br/>

                <input 
                value={ localData&& localData.role} 
                onChange={()=> setLocaldata(localData&&localData.role)}
                type='text' 
                name='role' 
                placeholder='Role: eg. frontend,backend etc..'/><br/>
                
                <textarea value={ localData&& localData.summary} 
                 name='summary' 
                 placeholder='Summary' /> <br/>

                <input type='text' 
                    maxLength={10} 
                    required 
                    value={ localData&& localData.phoneno} 
                    onChange={()=> setLocaldata(localData&&localData.phoneno)}
                    name='phoneno'
                    placeholder='Phone No.' 
                    pattern="\d{10}" 
                    title="Phone number should be 10 digits" 
                    onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}/>
               
                <input 
                type='email' 
                name='email' 
                required 
                placeholder='Email id'
                value={ localData&& localData.email} 
                onChange={()=> setLocaldata(localData&&localData.email)}
                /><br/>
            </div>

            <div className='Formdiv' >
                <h2>Your Social's</h2>
                <input
                 type='text' 
                 name='linkedinurl'  
                 placeholder='Linkedin url'
                 value={ localData && localData.linkedinurl} 
                 onChange={()=> setLocaldata(localData&&localData.linkedinurl)}
                 /><br/>
                <input 
                type='text' 
                name='githuburl' 
                placeholder='GitHub url'
                value={ localData&& localData.githuburl} 
                onChange={()=> setLocaldata(localData&&localData.githuburl)}

                /><br/>
                <input 
                type='text'  
                name='portfoliourl' 
                placeholder='Portfolio url'
                value={ localData&& localData.portfoliourl} 
                onChange={()=> setLocaldata(localData&&localData.portfoliourl)}
                /><br/>
            
             </div>

             <div className='Formdiv' >
                <h2>Your Technical Skills</h2>

                {check && skillAddMore.map((skill,index)=>{
                    let no =0
                    return <> <hr/> 
                    <span style={{
                        position:"absolute",
                        marginTop:"-21px",
                        marginLeft:"-40px",
                        backgroundColor:"black",
                        color:"white",
                        borderRadius:"50px",
                        width:"20px"
                    }}>{index+1}</span>  
                     <div className='delete' style={{
                        position:"absolute",
                        marginTop:"10px",
                        marginLeft:"-80px",
                        right:"5vw",
                        color:"black",
                        cursor:"pointer",
                       
                    }} 
                    onClick={(e)=>ondelete(e,skill,"skill")}
                    ><DeleteForeverIcon style={{fontSize:"1.5rem",display:"inline"}}/></div> 
                    <Inputfield
                    key={"skill"+index}
                  
                    skillvalue={skill[`skill`]}
                    skilrvalue={skill[`skillr`]}
                    skillname={"skill"}
                    skillrating={"skillr"}
                    /> </>
                })}
               
                <button onClick={(e)=> addMore(e,"skill")}  >Add More</button> <br/>
             </div>


             <div className='Formdiv' >
                <h2>Your Experience</h2>
               {expAddMore.map((edu,index)=>{
                let expNo = index
                return <> <hr/> 
                <span style={{
                    position:"absolute",
                    marginTop:"-21px",
                    marginLeft:"-40px",
                    backgroundColor:"black",
                    color:"white",
                    borderRadius:"50px",
                    width:"20px"
                }}>{index+1}</span>    
                <div className='delete' style={{
                        position:"absolute",
                        marginTop:"10px",
                        marginLeft:"-80px",
                        right:"5vw",
                        color:"black",
                        cursor:"pointer",
                       
                    }} 
                    onClick={(e)=>ondelete(e,edu,"exp")}
                    ><DeleteForeverIcon 
                    style={{fontSize:"1.5rem",display:"inline"}}/>
                    </div> 
                <Inputfield2
                key={"exp"+index}
                titlevalue={edu[`exptitle`]}
                descvalue={edu[`expdesc`]}
                startmvalue={edu[`expstartmonth`]}
                startyvalue={edu[`expstartyear`]}
                endmvalue={edu[`expendmonth`]}
                endyvalue={edu[`expendyear`]}
                expvalue={edu[`expexptype`]}
                Present={"expdoing"}
                exptitle={"exptitle"}
                expdesc={"expdesc"}
                startmonth={"expstartmonth"}
                startyear={"expstartyear"}
                endmonth={"expendmonth"}
                endyear={"expendyear"}
                exptype={"expexptype"}
                ondelete={(e)=>ondelete(e,edu)}
               
                />    </>
               })}
                <button onClick={(e)=> addMore(e,"exp")}  >Add More</button> <br/>
             </div>

             <div className='Formdiv' >
                <h2>Your Personal Projects</h2>
                {pproject.map((pp,index)=> {
                    let no=0
                    return <> <hr/> 
                    <span style={{
                        position:"absolute",
                        marginTop:"-21px",
                        marginLeft:"-40px",
                        backgroundColor:"black",
                        color:"white",
                        borderRadius:"50px",
                        width:"20px"
                    }}>{index+1}</span> 
                     <div className='delete' style={{
                        position:"absolute",
                        marginTop:"10px",
                        marginLeft:"-80px",
                        right:"5vw",
                        color:"black",
                        cursor:"pointer",
                       
                    }} 
                    onClick={(e)=>ondelete(e,pp,"pp")}
                    ><DeleteForeverIcon 
                    style={{fontSize:"1.5rem",display:"inline"}}/>
                    </div> 
                     <Inputfieldtwo
                    
                    titlevalue={pp[`ppt`]}
                    descvalue={pp[`ppd`]}
                    projurlvalue={pp[`ppurl`]}
                    key={"pp"+index}
                    title={"ppt"}
                    desc={"ppd"}
                    projectUrl={"ppurl"}
                    titleplaceh={"Project Name"}
                    />
                    
                    </> 
                })}
                <button onClick={(e)=> addMore(e,"pp")}  >Add More</button> <br/>
             </div>

             <div className='Formdiv' >
                <h2>Your Educational Qualifications</h2>
                {edu.map((edu,index)=> {
                    let no=0
                    return <> <hr/> 
                    <span style={{
                        position:"absolute",
                        marginTop:"-21px",
                        marginLeft:"-40px",
                        backgroundColor:"black",
                        color:"white",
                        borderRadius:"50px",
                        width:"20px"
                    }}>{index+1}</span> 
                     <div className='delete' style={{
                        position:"absolute",
                        marginTop:"10px",
                        marginLeft:"-80px",
                        right:"5vw",
                        color:"black",
                        cursor:"pointer",
                       
                    }} 
                    onClick={(e)=>ondelete(e,edu,"edu")}
                    ><DeleteForeverIcon 
                    style={{fontSize:"1.5rem",display:"inline"}}/>
                    </div> 
                      <Inputfield2
                    key={"edu"+index}
                    titlevalue={edu[`edut`]}
                    descvalue={edu[`edud`]}
                    startmvalue={edu[`edusrtmonth`]}
                    startyvalue={edu[`edusrtyear`]}
                    endmvalue={edu[`eduendmonth`]}
                    endyvalue={edu[`eduendyear`]}
                    Present={"edudoing"}
                    exptitle={"edut"}
                    expdesc={"edud"}
                    startmonth={"edusrtmonth"}
                    startyear={"edusrtyear"}
                    endmonth={"eduendmonth"}
                    endyear={"eduendyear"}
                    descplaceh={"college name or more info's"}
                    />
                    </>
                })}
                                <button onClick={(e)=> addMore(e,"edu")}  >Add More</button> <br/>
             </div>

             <div className='Formdiv' >
                <h2>Certifications</h2>
                {certification.map((cert,index)=> {
                  
                    return <> <hr/> 
                    <span style={{
                        position:"absolute",
                        marginTop:"-21px",
                        marginLeft:"-40px",
                        backgroundColor:"black",
                        color:"white",
                        borderRadius:"50px",
                        width:"20px"
                    }}>{index+1}</span> 
                     <div className='delete' style={{
                        position:"absolute",
                        marginTop:"10px",
                        marginLeft:"-80px",
                        right:"5vw",
                        color:"black",
                        cursor:"pointer",
                       
                    }} 
                    onClick={(e)=>ondelete(e,cert,"cert")}
                    ><DeleteForeverIcon 
                    style={{fontSize:"1.5rem",display:"inline"}}/>
                    </div> 
                     <Inputfieldtwo
                    
                    titlevalue={cert[`cert-title`]}
                    projurlvalue={cert[`cert-url`]}
                    key={"cert"+index}
                    title={"cert-title"}
                    projectUrl={"cert-url"}
                    titleplaceh={"Certification Name"}
                    />
                    
                    </> 
                })}
                <button onClick={(e)=> addMore(e,"cert")}  >Add More</button> <br/>
             </div>

             <div className='Formdiv' >
                <h2>Achievements</h2>
                {achiev.map((ach,index)=> {
                    let no=0
                    return <> <hr/> 
                    <span style={{
                        position:"absolute",
                        marginTop:"-21px",
                        marginLeft:"-40px",
                        backgroundColor:"black",
                        color:"white",
                        borderRadius:"50px",
                        width:"20px"
                    }}>{index+1}</span> 
                     <div className='delete' style={{
                        position:"absolute",
                        marginTop:"10px",
                        marginLeft:"-80px",
                        right:"5vw",
                        color:"black",
                        cursor:"pointer",
                       
                    }} 
                    onClick={(e)=>ondelete(e,ach,"Achievements")}
                    ><DeleteForeverIcon 
                    style={{fontSize:"1.5rem",display:"inline"}}/>
                    </div> 
                    <Inputfieldtwo
                    
                    titlevalue={ach[`Achievements`]}
                    key={"Achievements"+index}
                    title={"Achievements"}
                    titleplaceh={"Achievements"}
                    />
                    </> 
                })}
                <button onClick={(e)=> addMore(e,"Achievements")}  >Add More</button> <br/>
             </div>


            
             <div style={{
                textAlign:"center",
                margin:"20px"
             }}>
             <input style={{
                padding:"5px",
                fontSize:"1.2rem",
                width:"200px",
                backgroundColor:"#3275e0",
                color:"white",
                border:"none",
                borderRadius:"20px",
                cursor:"pointer"
             }} 
             type='submit' 
             name='submit' 

             />
             </div>
             
            </form>
        </div>
    )
}
export default Inputform