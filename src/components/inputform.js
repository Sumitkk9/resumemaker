import react,{useState,useEffect} from 'react'
import {Inputfield,Inputfield2,Inputfieldtwo} from './inputfield.js'
import "../App.css"
const Inputform = ()=>{

    const [localData,setLocaldata] = useState()
    const [formDataState,setFormData] = useState([])
    const [skillNo, setSkillNo] = useState(2);
    const [show, setShow] = useState(false);

    const [skillAddMore, setskillAddMore] = useState([[]])
    const [expAddMore, setExpMore] = useState([[]])
    const [pproject,setPp] = useState([[]])
    const [edu,setEdu] = useState([[]])


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
        
    },[])

    const ondelete = (e,no)=>{
        e.preventDefault() 
        // e.target.parentElement.style.display="none" 
    
        const updatedItems = expAddMore.filter((item) => item !== item.key==`"${no}`);
        // setexpSkillMore(updatedItems)
        
      //
    }

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

           

            if(field ==="exp"){
                setExpMore((prev)=> [...prev,[]])
                    
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
            let skillNo =0
            let expNo = 0
            let pprojno = 0
            let eduno = 0
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
                  
                  
                }  else{
                    formObject[key] = value;
                }
                
                
            });

            console.log(formObject)

        setFormData([formObject])
        localStorage.setItem( "imsresumemakerdata",JSON.stringify(formObject))
        setShow(true)
        setTimeout(()=>{
            
            clearInterval(widthinterval)
             window.open("/","_self")
        },3000)
      
       const widthinterval =  setInterval(()=>{
            setPercent((prev)=>prev+2)
        },32)
    }

    const [value,setValue] = useState()

    const onchnage = (e)=>{
        setValue(e.target.value)
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
            
            <form onSubmit={onsubmit} >
            <div className='Formdiv' >
                <h2>Personal info</h2>
                <input 
                value = { localData&& localData.fullname} 
                type='text' 
                name='fullname' 
                required 
                contentEditable={true}
                placeholder='Enter Full Name'/><br/>

                <input 
                value={ localData&& localData.role} 
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
                /><br/>
            </div>

            <div className='Formdiv' >
                <h2>Your Social's</h2>
                <input
                 type='text' 
                 name='linkedinurl'  
                 placeholder='Linkedin url'
                 value={ localData && localData.linkedinurl} 
                 /><br/>
                <input 
                type='text' 
                name='githuburl' 
                placeholder='GitHub url'
                value={ localData&& localData.githuburl} 
                /><br/>
                <input 
                type='text'  
                name='portfoliourl' 
                placeholder='Portfolio url'
                value={ localData&& localData.portfoliourl} 
                /><br/>
            
             </div>

             <div className='Formdiv' >
                <h2>Your Technical Skills</h2>

                {skillAddMore.map((skill,index)=>{
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
                    }}>{index+1}</span>  <Inputfield
                    key={"skill"+index}
                    skillvalue={skill[`skill${index}${no+1}`]}
                    skilrvalue={skill[`skill${index}${no+1}r`]}
                    skillname={"skill"+index+1}
                    skillrating={"skill"+index+1+"r"}
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
                }}>{index+1}</span>    <Inputfield2
                key={"exp"+index}
                titlevalue={edu[`exp${expNo}title`]}
                descvalue={edu[`exp${expNo}desc`]}
                startmvalue={edu[`exp${expNo}startmonth`]}
                startyvalue={edu[`exp${expNo}startyear`]}
                endmvalue={edu[`exp${expNo}endmonth`]}
                endyvalue={edu[`exp${expNo}endyear`]}
                expvalue={edu[`exp${expNo}exptype`]}
                // present={"exp"+expNo+"doing"}
                exptitle={"exp"+expNo+"title"}
                expdesc={"exp"+expNo+"desc"}
                startmonth={"exp"+expNo+"startmonth"}
                startyear={"exp"+expNo+"startyear"}
                endmonth={"exp"+expNo+"endmonth"}
                endyear={"exp"+expNo+"endyear"}
                exptype={"exp"+expNo+"exptype"}
                ondelete={(e)=>ondelete(e,expNo)}
               
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
                    }}>{index+1}</span>  <Inputfieldtwo
                    
                    titlevalue={pp[`pp${index+1}t`]}
                    descvalue={pp[`pp${index}${no+1}d`]}
                    projurlvalue={pp[`pp${index}${no+1}url`]}
                    key={"pp"+index}
                    title={"pp"+(index+1)+"t"}
                    desc={"pp"+index+1+"d"}
                    projectUrl={"pp"+index+1+"url"}
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
                    }}>{index+1}</span>   <Inputfield2
                    key={"edu"+index}
                    titlevalue={edu[`edu${index+1}t`]}
                    descvalue={edu[`edu${index}${no+1}d`]}
                    startmvalue={edu[`edu${index}${no+1}srtmonth`]}
                    startyvalue={edu[`edu${index}${no+1}srtyear`]}
                    endmvalue={edu[`edu${index}${no+1}endmonth`]}
                    endyvalue={edu[`edu${index}${no+1}endyear`]}
                    // Present={"edu"+(index+1)+"doing"}
                    exptitle={"edu"+(index+1)+"t"}
                    expdesc={"edu"+index+1+"d"}
                    startmonth={"edu"+index+1+"srtmonth"}
                    startyear={"edu"+index+1+"srtyear"}
                    endmonth={"edu"+index+1+"endmonth"}
                    endyear={"edu"+index+1+"endyear"}
                    descplaceh={"college name or more info's"}
                    />
                    </>
                })}
                                <button onClick={(e)=> addMore(e,"edu")}  >Add More</button> <br/>
             </div>

             {/* <div className='Formdiv' >
                <h2>Let’s start with your personal info</h2>
               
             </div> */}
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