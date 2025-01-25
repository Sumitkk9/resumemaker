import React,{useState} from "react";


const Inputfield = ({skillname,skillrating,skillvalue,skilrvalue})=>{
    return <>
    
    <input type='text' value={skillvalue&& skillvalue} name={skillname} required placeholder='Skill Name'/>
    <input type='number' value={skilrvalue&& skilrvalue} name={skillrating} max={5} min={0} required placeholder='Rating'/>
    <label> /5</label><br/>
    </>
}

const Inputfieldtwo = ({title,desc,titleplaceh,
    descplaceh,projectUrl, titlevalue,descvalue,projurlvalue})=>{
    return <>
    
    <input type='text' value={titlevalue&&titlevalue} name={title} required placeholder= {titleplaceh? titleplaceh : 'Title'}/> <br/>
    <input type='text' name={desc} value={descvalue&&descvalue}  required placeholder={descplaceh? descplaceh :'Description'}/> <br/>
    <input type='text' name={projectUrl} value={projurlvalue&&projurlvalue}  required placeholder={'Git Url | Live Url'}/> <br/>

    </>
}


const Inputfield2 = ({descplaceh,exptitle,expdesc,
    titlevalue,descvalue,startmvalue,endmvalue,startyvalue,
    endyvalue,expvalue,
    startmonth,startyear,
    endmonth,endyear, Present,
    exptype,ondelete})=>{
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
    
    <input type='text' value={titlevalue&& titlevalue}  name={exptitle} required placeholder='Title'/> <br/>
    <textarea name={expdesc} value={descvalue&& descvalue}  required placeholder= {descplaceh? descplaceh :'Description: List Your Major duties and successes, skills used.'}/> <br/>
    { exptype && <> <label> Experience Type </label>
    <select required value={expvalue&& expvalue} name={exptype}>
        <option value="" disabled selected>
            Type
        </option>
        <option>Part Time</option>
        <option>Intership</option>
        <option>Full Time</option>
    </select> <br/> </>}
   <>
   <label> Start Date </label> <br/>
   <select required value={startmvalue&& startmvalue} name={startmonth}>
    <option value="" disabled selected>
           Month
        </option>
       {months.map((month)=>{
       return <option key={month}>{month}</option>
       })}
    </select>
    <select required value={startyvalue&& startyvalue} name={startyear}>
    <option value="" disabled selected>
           Year
        </option>
       {yearArr.reverse().map((year)=>{
       return <option key={year}>{year}</option>
       })}
    </select> <br/>
   </>
 
  {/* <div>
  <input type="checkbox" value={showEnd} onChange={()=>setShowend((prev)=> !prev)}  name={Present}/> I am currently doing. <br/>
  </div> */}
    <>
    <label> End Date </label>  <br/>
    
   <select required value={endmvalue&& endmvalue} name={endmonth}>
    <option value="null" disabled selected>
           Month
        </option>
       {months.map((month)=>{
       return <option  key={month}>{month}</option>
       })}
    </select>
    <select required  value={ endyvalue&& endyvalue} name={endyear}>
    <option value="null" disabled selected>
           Year
        </option>
       {yearArr.map((year)=>{
       return <option key={year}>{year}</option>
       })}
    </select> <br/>
    </>
    

    </>
}
export  {Inputfield,Inputfield2,Inputfieldtwo}