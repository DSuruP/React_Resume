import React from 'react'
import { Link } from "react-router-dom";

export const Details = () => {

    const handleClick = () => {
        window.open("https://www.linkedin.com/in/survesh-pandit-05b2601b5/");
      };
    const handleClick1 = () => {
        window.open("https://github.com/DSuruP");
      };

    return (
        <>
            {/* <div style={{paddingLeft:60}}>
                <p style={{fontSize:40}}>Survesh Pandit</p>
                <p style={{fontSize:20, marginTop:-22}}>Contact No: +917566007436
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;                
                LinkedIn: <Link style={{color:"blue"}} onClick={handleClick} to="/">survesh-pandit-05b2601b5</Link>
                </p>
                <p style={{fontSize:20, marginTop:-15}}>Email: surveshpandit0@gmail.com
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                Github: <Link style={{color:"blue"}} onClick={handleClick1} to="/">DSuruP</Link>
                </p> 
            </div> */}

            <div>
                <p style={{paddingLeft:60, fontSize:40}}>Survesh Pandit</p>
                <p style={{paddingLeft:60, fontSize:20, marginTop:-22}}>Contact No: +917566007436</p>
                <p style={{float:"right", marginTop:-50}}>LinkedIn: <Link style={{color:"blue"}} onClick={handleClick} to="/">survesh-pandit-05b2601b5</Link>
                </p>
                <p style={{paddingLeft:60, fontSize:20, marginTop:-15}}>Email: surveshpandit0@gmail.com</p>
                <p style={{float:"right", paddingRight:150, marginTop:-50}}>Github: <Link style={{color:"blue"}} onClick={handleClick1} to="/">DSuruP</Link>
                </p> 
            </div>
        </>
    )
}
