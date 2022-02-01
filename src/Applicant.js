import React from 'react';

export default function Applicant({ applicant, advanceApp, handleClear }) {

  function handleAppClick() {
      advanceApp(applicant.id)
  }

  function handleClearClick(){
      handleClear(applicant.id)
  }

  return (
    <div>
        <label>
        {applicant.name} - {applicant.job} - {applicant.stage}<br/>
        <button onClick={handleAppClick}>Advance</button><button onClick={handleClearClick}>Delete</button>
        </label>
    </div>
  )
}