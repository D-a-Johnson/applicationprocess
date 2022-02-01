import React, {useState} from 'react';
import ApplicantList from './ApplicantList';

function App() {
  const [applicants, setApplicants] = useState([])
  return (
    <>
    <ApplicantList />
    <input type="text" />
    <button>Add Applicant</button>
    <button>Clear Applicant</button>
    <div>0 Applicants</div>
    </>
     )
}

export default App;
