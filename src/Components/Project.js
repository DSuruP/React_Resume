import React from 'react'
import { Link } from "react-router-dom";

export const Project = () => {

    const handleClick = () => {
        window.open("https://to-do-list153.netlify.app/");
      };
    const handleClick1 = () => {
        window.open("https://tictacteo-react.netlify.app/");
      };
    const handleClick2 = () => {
        window.open("https://guessthenumber1-20.netlify.app/");
      };
    const handleClick3 = () => {
        window.open("https://scoregame1.netlify.app/");
      };

    return (
        <div style={{paddingLeft:60}}>
            <hr />
            <p style={{fontSize:30}}><b>---------------</b>Project</p>

            <p style={{fontSize:15}}><b>To-Do List</b> | Newton School <Link style={{color:"blue"}} onClick={handleClick} to="/">Link</Link></p>
            <ul style={{fontSize:15}}>
                <li>Note-App is web application, where users can keep track of their notes.</li>
                <li>Features: Add notes, Update notes, Delete notes, View notes, Search notes.</li>
                <li>Role: Developer | Tech Stack: React, Javascript, HTML, CSS, Bootstrap.</li>
            </ul>

            <p style={{fontSize:15}}><b>Tic-Tac_toe</b> | Newton School <Link style={{color:"blue"}} onClick={handleClick1} to="/">Link</Link></p>
            <ul style={{fontSize:15}}>
                <li>This project was chosen because it's a game which engages user with the game and other users as well.</li>
                <li>Keeping them entertained and it can be played anywhere in almost any operating system.</li>
                <li>Role: Developer | Tech Stack: Javascript, HTML, CSS.</li>
            </ul>

            <p style={{fontSize:15}}><b>Gusse-My-Number</b> | Newton School <Link style={{color:"blue"}} onClick={handleClick2} to="/">Link</Link></p>
            <ul style={{fontSize:15}}>
                <li>This project was chosen because the game itself is logical and keeps the player entertained intellectually.</li>
                <li>It's suitable for smaller age group people also.</li>
                <li>Role: Developer | Tech Stack: Javascript, HTML, CSS.</li>
            </ul>

            <p style={{fontSize:15}}><b>Gaming Score</b> | Newton School <Link style={{color:"blue"}} onClick={handleClick3} to="/">Link</Link></p>
            <ul style={{fontSize:15}}>
                <li>It helps in logical building ability.</li>
                <li>It is good for entertainment resulting in engagement of the user/player.</li>
                <li>Role: Developer | Tech Stack: Javascript, HTML, CSS.</li>
            </ul>

            <p style={{fontSize:15}}><b>TechQuera</b> | Ypsilon IT Solutions Pvt. Ltd.</p>
            <ul style={{fontSize:15}}>
                <li>Technology related queries.</li>
                <li>Everyone can use it, very easy to login.</li>
                <li>Role: Developer | Tech Stack: Python(Django), HTML, CSS.</li>
            </ul>
        </div>
    )
}
