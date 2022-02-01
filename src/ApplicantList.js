import React from 'react';
import Applicant from './Applicant';

export default function ApplicantList({applicants, advanceApp}) {
    return (
        applicants.map(applicant => {
            return <Applicant key={applicant.id} advanceApp={advanceApp} applicant={applicant} />
        })
    )
}
