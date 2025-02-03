import react from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiRes = async(input)=>{

    try {
        const genAI = new GoogleGenerativeAI("AIzaSyC5Gmx_DfgXg4R6B6SnZKK5RzEazBtH33o");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = input;
       
        const obj =  " Rewrite the following sentence and fix any grammar issues. "
        const result = await model.generateContent( obj  + prompt);
        return result.response.text()
    } catch (error) {
        console.log(error)
    }
   
}

export default AiRes