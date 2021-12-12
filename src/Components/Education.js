import React from 'react'
import '../App.css';

export const Education = () => {
    return (
        <div style={{paddingLeft:60}}>
            <hr />
            <p style={{fontSize:30}}><b>---------------</b>Education</p>
            <table>
            <tr style={{fontSize:20}}>
                <th>Year</th>
                <th>Degree/Examination</th>
                <th>Institution/Board</th>
                <th>CGPA/Percentage</th>
            </tr>
            <tr style={{fontSize:15}}>
                <td style={{textAlign:"center"}}>2021</td>
                <td>MCA</td>
                <td>LNCT - Lakshmi Narain College of Technology, Bhopal</td>
                <td style={{textAlign:"center"}}>8.3/10.0</td>
            </tr>
            <tr style={{fontSize:15}}>
                <td style={{textAlign:"center"}}>2019</td>
                <td>BCA</td>
                <td>BSSS - Bhopal School of Social Sciences. Bhopal</td>
                <td style={{textAlign:"center"}}>6.2/10.0</td>
            </tr>
            <tr style={{fontSize:15}}>
                <td style={{textAlign:"center"}}>2016</td>
                <td>Commerce with Computer</td>
                <td>Queen Mary Hr. Sce. School, Bhopal</td>
                <td style={{textAlign:"center"}}>5.8/6.2</td>
            </tr>
            <tr style={{fontSize:15}}>
                <td style={{textAlign:"center"}}>2014</td>
                <td> All Subjects</td>
                <td>Queen Mary Hr. Sce. School, Bhopal</td>
                <td style={{textAlign:"center"}}>5.5/5.8</td>
            </tr>
            </table>
        </div>
    )
}
