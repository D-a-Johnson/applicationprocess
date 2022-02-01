import React from 'react';

export default function Applicant({ applicant, advanceApp }) {

  function handleAppClick() {
      advanceApp(applicant.id)
  }

  return (
    <div>
        <label>
        {applicant.name} - {applicant.job} - {applicant.stage}<br/>
        <button onClick={handleAppClick}>Advance</button><button>Delete</button>
        </label>
    </div>
  )
}