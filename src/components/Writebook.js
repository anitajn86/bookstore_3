import { useState } from "react";
import React from "react";
import app from "../firebaseConfig";
import {getDatabase,ref,set,push} from "firebase/database";
import './Form.css'
import Readbook from "./Readbook";

function Writebook() {

    let [inputValue1,setinputValue1]=useState("");
    let [inputValue2,setinputValue2]=useState("");
    let [inputValue3,setinputValue3]=useState("");

    const subscribe=async()=>{
        const db=getDatabase(app);
        const newDocRef=push(ref(db,"Title/Genre/Author"));
        set(newDocRef,{
           Title:inputValue1,
           Genre:inputValue2,
           Author:inputValue3
        }).then(()=>{
            alert("Details saved successfully")
        }).catch((error)=>{
            alert("error:");
        })
    }

    return(
       <div className="Login-form">
            <div className="inputs">
                <div className="input1">TITLE
                  <div>
                        <input type='text' value={inputValue1} 
                        onChange={(e)=>setinputValue1(e.target.value)} />
                  </div>
                </div>

                <div className="input2"> GENRE
                    <div>
                        <input type='text' value={inputValue2} 
                        onChange={(e)=>setinputValue2(e.target.value)} />
                    </div>
                </div>

                <div className="input3">AUTHOR
                    <div>
                        <input type='text' value={inputValue3} 
                        onChange={(e)=>setinputValue3(e.target.value)} /> <br/>
                    </div>
                </div>

                <button onClick={subscribe}>ADD BOOK</button>
                
            </div>
            <div className='about-store'>
                    <Readbook />
            </div>
       </div>
    )
}
export default Writebook