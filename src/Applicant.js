import React from 'react';

export default function Applicant({ applicant }) {
  return (
    <div>
        {applicant.name} - {applicant.job}
    </div>
  )
}