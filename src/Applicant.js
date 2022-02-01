import React from 'react';

export default function Applicant({ applicant }) {
  return (
    <div>
        <label>
        {applicant.name} - {applicant.job} <br/>
        <button>Advance</button><button>Delete</button>
        </label>
    </div>
  )
}