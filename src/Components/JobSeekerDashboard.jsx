import React, { useState, useEffect } from 'react';
import Header from './Header';
import profile from '../assets/profile.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faComment, faPlusCircle, faBriefcase, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function JobSeekerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [view, setView] = useState('applyJobs');
  
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  useEffect(() => {
    // Fetch all jobs from local storage
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(storedJobs);
  }, []);

  const handleApply = (job) => {
    const applied = JSON.parse(localStorage.getItem('appliedJobs')) || {};
    if (!applied[email]) {
      applied[email] = [];
    }
    
    // Check if the job is already applied
    const alreadyApplied = applied[email].some(appliedJob => appliedJob.id === job.id);
    
    if (alreadyApplied) {
      alert('You have already applied for this job.');
    } else {
      applied[email].push(job);
      localStorage.setItem('appliedJobs', JSON.stringify(applied));
      alert('Successfully Applied');
    }
  };

  const viewAppliedJobs = () => {
    const applied = JSON.parse(localStorage.getItem('appliedJobs')) || {};
    setAppliedJobs(applied[email] || []);
    setView('appliedJobs');
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  // Handle Logout
  const handleLogout = () => {
    navigate('/');
  };
  
  const Withdraw = (job) => {
    const applied = JSON.parse(localStorage.getItem('appliedJobs')) || {};
    if (applied[email]) {
      const updatedAppliedJobs = applied[email].filter(appliedJob => appliedJob.id !== job.id);
      applied[email] = updatedAppliedJobs;
      localStorage.setItem('appliedJobs', JSON.stringify(applied));
      setAppliedJobs(updatedAppliedJobs);
    }
  };

  return (
    <div>
      <Header />
      <div className='flex flex-row w-full'>
        <div className='w-1/5 h-screen bg-slate-600 rounded-lg lg:w-1/5 md:w-1/6 sm:w-16'>
          <aside className='flex flex-col'>
            <div className='flex flex-row gap-5 p-3 m-2 bg-slate-400 rounded-xl overflow-hidden sm:gap-2'>
              <img src={profile} alt="profile" className='w-10 h-10 rounded-full sm:w-8 sm:h-8' />
              <h2 className='font-poppins text-2xl mt-1 text-zinc-700 w-full truncate sm:hidden'>{email.split('@')[0].toUpperCase()}</h2>
            </div>
            <div className='m-2 p-3 bg-slate-500 rounded-xl'>
              <p className='text-white hidden sm:block'>Overview</p>
              <div className='flex flex-col p-2 gap-3'>
                <div className='flex flex-row gap-4 items-center transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer'>
                  <FontAwesomeIcon icon={faTachometerAlt} className='text-white text-2xl' />
                  <h1 className='text-xl font-poppins text-zinc-700 hidden sm:block'>Dashboard</h1>
                </div>
                <div className='flex flex-row gap-4 items-center transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer'>
                  <FontAwesomeIcon icon={faComment} className='text-white text-2xl' />
                  <h1 className='text-xl text-zinc-700 hidden sm:block'>Chat</h1>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 m-2 p-3 bg-slate-500 rounded-xl'>
              <p className='text-white hidden sm:block'>Manage Hiring</p>
              <div
                onClick={() => handleViewChange('applyJobs')}
                className='flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer'
              >
                <FontAwesomeIcon icon={faPlusCircle} className='text-white text-2xl' />
                <span className='text-xl text-zinc-700 hidden sm:block'>Apply For Jobs</span>
              </div>
              <div
                onClick={viewAppliedJobs}
                className='flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer'
              >
                <FontAwesomeIcon icon={faBriefcase} className='text-white text-2xl' />
                <span className='text-xl text-zinc-700 hidden sm:block'>Applied Jobs</span>
              </div>
            </div>
            <div className='flex flex-col gap-4 m-2 p-3 bg-slate-500 rounded-xl'>
              <p className='text-white hidden sm:block'>Settings</p>
              <div className='flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer'>
                <FontAwesomeIcon icon={faUser} className='text-white text-2xl' />
                <span className='text-xl text-zinc-700 hidden sm:block'>My Profile</span>
              </div>
              <div
                onClick={handleLogout}
                className='flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer'
              >
                <FontAwesomeIcon icon={faSignOutAlt} className='text-white text-2xl' />
                <span className='text-xl text-zinc-700 hidden sm:block'>Logout</span>
              </div>
            </div>
          </aside>
        </div>
        
        <div className='w-4/5 h-screen bg-white overflow-y-auto p-4 lg:w-4/5 md:w-5/6 sm:w-full'>
          {view === 'applyJobs' && (
            <div>
              <h2 className='text-2xl font-semibold mb-4'>Available Jobs</h2>
              <div className='grid grid-cols-1 gap-4'>
                {jobs.map((job, index) => (
                  <div key={index} className='p-4 border rounded-lg shadow'>
                    <h3 className='text-xl font-bold'>{job.jobTitle}</h3>
                    <p>{job.jobDescription}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Requirements:</strong> {job.requirements}</p>
                    <button
                      onClick={() => handleApply(job)}
                      className='mt-2 bg-slate-400 text-white px-4 py-2 rounded-3xl hover:bg-slate-500'
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === 'appliedJobs' && (
            <div>
              <h2 className='text-2xl font-semibold mb-4'>Applied Jobs</h2>
              <div className='grid grid-cols-1 gap-4'>
                {appliedJobs.map((job, index) => (
                  <div key={index} className='p-4 border rounded-lg shadow'>
                    <div className='flex flex-row justify-between'>
                      <h3 className='text-xl font-bold'>{job.jobTitle}</h3>
                      <p
                        onClick={() => Withdraw(job)}
                        className='flex flex-row justify-center items-center border rounded-3xl w-6 h-6 hover:bg-green-500 hover:cursor-pointer'
                      >
                        X
                      </p>
                    </div>
                    <p>{job.jobDescription}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Requirements:</strong> {job.requirements}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobSeekerDashboard;
