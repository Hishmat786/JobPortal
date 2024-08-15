import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wellcome from './Components/Wellcome'
import JobSeekerLogIn from './Components/JobSeekerLogIn';
import Employeer from './Components/Employeer';
import JobSeekerRegister from './Components/JobSeekerRegister';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Wellcome />} />
          <Route path="/job-seeker" element={<JobSeekerLogIn />} />
          <Route path="/employer" element={<Employeer />} />
          <Route path="/registerJob" element={<JobSeekerRegister/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
