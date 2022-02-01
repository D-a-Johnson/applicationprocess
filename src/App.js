import React, {useState} from 'react';
import ApplicantList from './ApplicantList';

function App() {
  const [applicants, setApplicants] = useState([{id: 1, name: 'Derek', job: 'workswise',stage: 1}])
  return (
    <>
    <ApplicantList applicants = {applicants}/>
    <input type="text" />
    <button>Add Applicant</button>
    <button>Clear Applicant</button>
    <div>0 Applicants</div>
    </>
     )
}

export default App;
