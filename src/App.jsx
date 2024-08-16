import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wellcome from './Components/Wellcome'
import JobSeekerLogIn from './Components/JobSeekerLogIn';
import Employeer from './Components/Employeer';
import EmployeerDashboard from './Components/EmployeerDashboard';
import JobSeekerDashboard from './Components/JobSeekerDashboard';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Wellcome />} />
          <Route path="/job-seeker" element={<JobSeekerLogIn />} />
          <Route path="/employer" element={<Employeer />} />
          <Route path="/employer-dashboard" element={<EmployeerDashboard/>} /> 
          <Route path="/job-seeker-dashboard" element={<JobSeekerDashboard/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
