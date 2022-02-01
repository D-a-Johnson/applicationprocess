import React, {useState, useRef, useEffect} from 'react';
import ApplicantList from './ApplicantList';
import Dashboard from './Dashboard';
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY = 'applicantsApp'

function App() {
  const [applicants, setApplicants] = useState([{name: 'asasdf', job: 'asdf', stage: 1, id: uuidv4()}, {id: uuidv4(), name: 'Derek', job: 'workswise',stage: 2}])
  const applicantName = useRef()
  const applicantJob = useRef()
  //{id: 1, name: 'Derek', job: 'workswise',stage: 1}

  useEffect(() => {
    const storedApplicants = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) //loads applicants
    if (storedApplicants) setApplicants(storedApplicants)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(applicants)) //saves applicants to local storage
  } , [applicants])

  function handleAddApplicant(n,j) { //adds an applicant
    const name = applicantName.current.value
    const job = applicantJob.current.value
    if ((name === '') || (job === '')) return //checks that values exist
    setApplicants(prevApplicants => {
      return [...prevApplicants, {id: uuidv4(), name: name, job: job,stage: 1}]
    })
    applicantName.current.value = null
    applicantJob.current.value = null
  }

  function advanceApp(id){ //Advance the application stage
    const newApp = [...applicants] //copy to modify before setting new state
    const applicant = newApp.find(applicant => applicant.id === id)
    applicant.stage = applicant.stage + 1
    setApplicants(newApp)
   }

   function handleClear(id){ //Deletes Applicant
    const newApp = applicants.filter((applicant) => (applicant.id !== id))//copy to modify before setting new state
    setApplicants(newApp)
   }
//<ApplicantList applicants = {applicants} advanceApp={advanceApp} handleClear={handleClear}></ApplicantList>
  return ( //displays applicant list
    
    <>
    <Dashboard applicants = {applicants} advanceApp={advanceApp} handleClear={handleClear}/>
    
    <header>
      Name <input ref={applicantName} type="text" /> <br/>
      Job <input ref={applicantJob} type="text" /> <br/>
      <button onClick={handleAddApplicant}>Add Applicant</button>
    </header>
    </>
     )
}

export default App;
