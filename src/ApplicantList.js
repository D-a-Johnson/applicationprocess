import React from 'react';
import Applicant from './Applicant';

export default function ApplicantList({applicants}) {
    return (
        applicants.map(applicant => {
            return <Applicant key={applicant.id} applicant={applicant} />
        })
    )
}
