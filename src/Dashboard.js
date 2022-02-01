import React from 'react';
import ApplicantList from './ApplicantList';

var lists = []

function splitStage(applicantList){
    for (let i = 1;i < 5; i++){
        lists.push(applicantList.filter(i)); 
    }
}

export default function Dashboard({applicants, advanceApp, handleClear}) {    
    splitStage(applicants)  
    return (
        <>
        <div class="row">
            <div id='1' class="column">{lists[0]}</div>
            <div id='2' class="column">{lists[1]}</div>
            <div id='3' class="column">{lists[2]}</div>
            <div id ='4' class="column">{lists[3]}</div>
        </div>
        </>
    )
}