import React from 'react';
import Applicant from './Applicant';

export default function ApplicantList({applicants, advanceApp, handleClear}) {
    return (
        applicants.map(applicant => {
            return <Applicant key={applicant.id} advanceApp={advanceApp} handleClear={handleClear} applicant={applicant} />
        })
    )
}
