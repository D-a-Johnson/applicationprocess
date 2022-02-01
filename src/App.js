import React, {useState, useRef} from 'react';
import ApplicantList from './ApplicantList';

function App() {
  const [applicants, setApplicants] = useState([])
  const applicantName = useRef()
  const applicantJob = useRef()
  //{id: 1, name: 'Derek', job: 'workswise',stage: 1}

  function handleAddApplicant(n,j) {
    const name = applicantName.current.value
    const job = applicantJob.current.value
    if ((name === '') || (job === '')) return
    setApplicants(prevApplicants => {
      return [...prevApplicants, {id: 1, name: name, job: job,stage: 1}]
    })
    applicantName.current.value = null
    applicantJob.current.value = null
  }

  return (
    <>
    <ApplicantList applicants = {applicants}/>
    Name <input ref={applicantName} type="text" /> <br/>
    Job <input ref={applicantJob} type="text" /> <br/>
    <button onClick={handleAddApplicant}>Add Applicant</button>
    <button>Clear Applicant</button>
    <div>0 Applicants</div>
    </>
     )
}

export default App;
