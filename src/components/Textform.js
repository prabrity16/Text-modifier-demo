import React from 'react'
import {useState} from 'react';



export default function Textform(props) {

    

    const handleUpClick=()=>{
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase" , "success")
    }
    const handleOnChange=(event)=>{
       setText(event.target.value)
    }

    const handleLowClick=()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase" , "success")
    }
    const capitalize=()=>{
        let q = "";
        let f = text.split(" ");
        for(let i =0;i<f.length;i++){
            let t = f[i].charAt(0).toUpperCase();
            let w = f[i].slice(1);
            let y = t+w;
             q = q +" "+ y;
            let newText = q
            setText(newText)
        }
        props.showAlert("first letters are capitalized" , "success")
    
    }

    const copy=()=>{
        
        let newText=text+" "+text.slice(0)
        console.log(newText)
        setText(newText);
        props.showAlert("text is copied" , "success")
    }
    const clear=()=>{
        setText("")
        props.showAlert("text is cleared" , "success")
    }

    
    const [text, setText] =  useState('');
    
    return (
        <>
        
        <div className="container">
         <h1  my-2 style={{color:props.mode==="light"?"black":"white"}}>{props.heading} </h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"":"rgb(43 87 131)" , color: props.mode==="light"?"black":"white"}} id="mybox" rows="8"></textarea>
                    
            </div>
            <button   disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{color:props.mode==="light"?"black":"white"}} onClick={handleUpClick}>convert to uppercase</button>
            <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-2" style={{color:props.mode==="light"?"black":"white"}} onClick={handleLowClick}>convert to lowercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" style={{color:props.mode==="light"?"black":"white"}} onClick={capitalize}>convert first letters to capital</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" style={{color:props.mode==="light"?"black":"white"}} onClick={copy}>copy text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" style={{color:props.mode==="light"?"black":"white"}} onClick={clear}>clear text</button>
        </div>
        <div className={`container my-3  text-${props.mode==="light"?"dark":"light"}`}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
