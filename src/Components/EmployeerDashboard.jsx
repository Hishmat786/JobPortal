import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import profile from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faComment, faPlusCircle, faBriefcase, faClipboardList, faCalendarCheck, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import PostJobForm from './PostJobForm';
import MyJobPosts from './MyJobPosts';

function EmployeerDashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');

    const [currentView, setCurrentView] = useState('dashboard');

    const addJob = (job) => {
        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        jobs.push(job);
        localStorage.setItem('jobs', JSON.stringify(jobs));
    };

    const handleViewChange = (view) => {
        setCurrentView(view);
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div>
            <Header />
            <div className="flex flex-row w-full">
                <div className="w-1/5 h-screen bg-slate-400 rounded-lg lg:w-1/5 md:w-1/6 sm:w-16">
                    <aside className="flex flex-col">
                        <div className="flex flex-row gap-5 p-3 m-2 bg-slate-300 rounded-xl overflow-hidden sm:gap-2">
                            <img src={profile} alt="profile" className="w-10 h-10 rounded-full sm:w-8 sm:h-8" />
                            <h2 className="font-poppins text-2xl mt-1 text-zinc-700 truncate ">
                                {email.split('@')[0].toUpperCase()}
                            </h2>
                        </div>
                        <div className="m-2 p-3 rounded-xl border border-slate-600">
                            <p className="text-white hidden sm:block">Overview</p>
                            <div className="flex flex-col p-2 gap-3 ">
                                <div
                                    onClick={() => handleViewChange('dashboard')}
                                    className="flex flex-row gap-4 items-center transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={faTachometerAlt} className="text-white text-2xl" />
                                    <h1 className="text-xl font-poppins text-zinc-700 hidden sm:block">Dashboard</h1>
                                </div>
                                <div
                                    onClick={() => handleViewChange('chat')}
                                    className="flex flex-row gap-4 items-center transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={faComment} className="text-white text-2xl" />
                                    <h1 className="text-xl text-zinc-700 hidden sm:block">Chat</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 m-2 p-3 rounded-xl border border-slate-600">
                            <p className="text-white hidden sm:block">Manage Hiring</p>
                            <div
                                onClick={() => handleViewChange('postJob')}
                                className="flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faPlusCircle} className="text-white text-2xl" />
                                <span className="text-xl text-zinc-700 hidden sm:block">Post a Job</span>
                            </div>
                            <div
                                onClick={() => handleViewChange('myJobs')}
                                className="flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faBriefcase} className="text-white text-2xl" />
                                <span className="text-xl text-zinc-700 hidden sm:block">My Job Posts</span>
                            </div>
                            <div
                                onClick={() => handleViewChange('applications')}
                                className="flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faClipboardList} className="text-white text-2xl" />
                                <span className="text-xl text-zinc-700 hidden sm:block">Applications</span>
                            </div>
                            <div
                                onClick={() => handleViewChange('interviews')}
                                className="flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faCalendarCheck} className="text-white text-2xl" />
                                <span className="text-xl text-zinc-700 hidden sm:block">Interviews</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 m-2 p-3 rounded-xl border border-slate-600">
                            <p className="text-white hidden sm:block">Settings</p>
                            <div
                                onClick={() => handleViewChange('profile')}
                                className="flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
                                <span className="text-xl text-zinc-700 hidden sm:block">My Profile</span>
                            </div>
                            <div
                                onClick={handleLogout}
                                className="flex items-center gap-4 transition transform hover:scale-105 hover:bg-slate-400 hover:p-2 hover:rounded-xl hover:cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} className="text-white text-2xl" />
                                <span className="text-xl text-zinc-700 hidden sm:block">Logout</span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="w-4/5 h-screen bg-white overflow-y-auto lg:w-4/5 md:w-5/6 sm:w-full">
                    {currentView === 'postJob' && <PostJobForm email={email} addJob={addJob} />}
                    {currentView === 'myJobs' && <MyJobPosts email={email} />}
                </div>
            </div>
        </div>
    );
}

export default EmployeerDashboard;
