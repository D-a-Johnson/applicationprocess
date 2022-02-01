import React, {useEffect, useState} from 'react';
import ApplicantList from './ApplicantList';

function splitStage(applicantList){
    var anything = [];
    for (let i = 1;i < 5; i++){
        anything.push(applicantList.filter((applicants) => { 
            console.log("applicants", applicants);
            return applicants.stage === i; })); 
    }
    return anything
}

export default function Dashboard({applicants, advanceApp, handleClear}) {    
    const [splitApps, setSplitApplicants] = useState([])
    useEffect(() => {setSplitApplicants(splitStage(applicants))},[applicants])
    if(splitApps.length === 0){ return null; } 
    console.log(splitApps)
    return (
        <>
        <div class="row">
            {splitApps.map((columns) => columns.map((col) => {return <div class='column'>{col.name}</div>}) )}
        </div>
        </>
    )
}

//<div id='1' class="column">{splitApps[0][0].name}</div>
//            <div id='2' class="column">{splitApps[1].name}</div>
//            <div id='3' class="column">{splitApps[2].name}</div>
//            <div id ='4' class="column">{splitApps[3].name}</div>