import React,{useState,useEffect} from "react";

const Inputfield = ({skillname,skillrating,skillvalue,skilrvalue,onchange})=>{
    const [ skillV,SetSkillValue] = useState()
    
    useEffect(()=>{
            SetSkillValue({value:skillvalue, rating:skilrvalue})
    },[skillvalue])

   return <>
    
    <input 
    type='text' 
    value={skillV &&skillV.value} 
    name={skillname} 
    required 
    style={{width:"50vw"}}
    onChange={(e)=> SetSkillValue(skillV&&  skillV.value)}
    placeholder='Skill Name'
    />
    <input 
    style={{width:"10vw"}}
    type='number' 
    value={skillV &&skillV.rating} 
    onChange={(e)=> SetSkillValue(skillV&& skillV.rating)}
    name={skillrating} 
    max={5} 
    min={0} 
    
    required 
    placeholder='Rating'/>
    <label style={{position:"absolute", margin:"5px"}}> / 5</label><br/>
    </>
}

const Inputfieldtwo = ({title,desc,titleplaceh,
    descplaceh,projectUrl, titlevalue,descvalue,projurlvalue})=>{

        const [ iptwo,SetiptwoValue] = useState()
    
        useEffect(()=>{
                SetiptwoValue({title:titlevalue, desc:descvalue, url:projurlvalue })
        },[titlevalue])
    return <>
    
    <input 
    type='text' 
    value={iptwo&& iptwo.title} 
    onChange={(e)=> SetiptwoValue(iptwo && iptwo.title)}
    name={title} 
    required 
    placeholder= {titleplaceh? titleplaceh : 'Title'}
    /> <br/>

   {desc&& <> <input 
    type='text' 
    name={desc} 
    value={iptwo&& iptwo.desc} 
    onChange={(e)=> SetiptwoValue(iptwo&& iptwo.desc)}
    required placeholder={descplaceh? 
    descplaceh :'Description'}
    /> <br/> </> } 

    { projectUrl && <>
    <input 
    type='text' 
    name={projectUrl} 
    value={iptwo&& iptwo.url}   
    onChange={(e)=> SetiptwoValue(iptwo&& iptwo.url)}
    required placeholder={desc?'Git Url | Live Url':"Relevant Url"}
    /> <br/>
       </> }
    </>
}


const Inputfield2 = ({descplaceh,exptitle,expdesc,
    titlevalue,descvalue,startmvalue,endmvalue,startyvalue,
    endyvalue,expvalue,
    startmonth,startyear,
    endmonth,endyear, Present,
    exptype,ondelete})=>{

        const [ ip2,Setip2Value] = useState()
    
        useEffect(()=>{
            Setip2Value({title:titlevalue, 
                    desc:descvalue, 
                    startm:startmvalue,
                    endm: endmvalue?  endmvalue : "null",
                    starty : startyvalue,
                    endy: endyvalue? endyvalue : "null",
                    exptype: expvalue
                 })
        },[titlevalue])

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    var yearArr = []

    for(let i=0;i<=35;i++){
        let year = 1990+i
        yearArr.push(year)
    }
    const [showEnd,setShowend] = useState(false)
    return <>

    {/* <button onClick={(e)=>ondelete(e)}>Delete</button> */}
    
    <input 
    type='text' 
    value={ip2&& ip2.title}   
    onChange={(e)=> Setip2Value(ip2&& ip2.title)}
    name={exptitle} 
    required 
    placeholder='Title'
    /> <br/>

    <textarea 
    name={expdesc} 
    value={ip2&& ip2.desc}   
    onChange={(e)=> Setip2Value(ip2&& ip2.desc)}
    required 
    placeholder= {descplaceh? descplaceh :'Description: List Your Major duties and successes, skills used.'}
    /> <br/>

    { exptype && <> <label> Experience Type </label>
    <select 
        required 
        value={ip2&& ip2.exptype}   
         onChange={(e)=> Setip2Value(ip2&& ip2.exptype)}
        name={exptype}>
        <option value="" disabled selected>
            Type
        </option>
        <option>Part Time</option>
        <option>Intership</option>
        <option>Full Time</option>
    </select> <br/> </>}
   <>
   <label> Start Date </label> <br/>
   <select
    required 
    value={ip2&& ip2.startm}   
    onChange={(e)=> Setip2Value(ip2&& ip2.startm)}
     name={startmonth}>
    <option value="" disabled selected>
           Month
        </option>
       {months.map((month)=>{
       return <option key={month}>{month}</option>
       })}
    </select>
    <select
     required 
     value={ip2&& ip2.starty}   
     onChange={(e)=> Setip2Value(ip2&& ip2.starty)}
     name={startyear}>
    <option value="" disabled selected>
           Year
        </option>
       {yearArr.reverse().map((year)=>{
       return <option key={year}>{year}</option>
       })}
    </select> <br/>
   </>
 
  <div>
  <input type="checkbox" value={"Present"} onChange={()=>setShowend((prev)=> !prev)}  name={Present}/> I am currently doing. <br/>
  </div>
 
    <>
    <label style={{display:showEnd&&"none"}}> End Date </label>  <br/>
    
   <select 
   required 
   style={{display:showEnd&&"none"}}
   value={ip2&& ip2.endm }   
   onChange={(e)=> Setip2Value(ip2&& ip2.endm)}
   name={endmonth}>
    <option value="null" disabled selected>
           Month
        </option>
       {months.map((month)=>{
       return <option  key={month}>{month}</option>
       })}
    </select>
    <select 
    required 
    style={{display:showEnd&&"none"}} 
    value={ip2&& ip2.endy}   
    onChange={(e)=> Setip2Value(ip2&& ip2.endy)}
    name={endyear}>
    {/* <option value="null" disabled selected>
           Year
        </option> */}
       {yearArr.map((year)=>{
       return <option key={year}>{year}</option>
       })}
    </select> <br/>
    </>

    </>
}
export  {Inputfield,Inputfield2,Inputfieldtwo}