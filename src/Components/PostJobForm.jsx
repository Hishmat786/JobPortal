import React, { useState } from 'react';

const PostJobForm = ({ email, addJob }) => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [requirements, setRequirements] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new job object
        const newJob = {
            id: Date.now(),
            email,
            jobTitle,
            jobDescription,
            location,
            salary,
            requirements,
            category: 'Technology',
        };

        // Add job to local storage
        addJob(newJob);

        // Clear the form
        setJobTitle('');
        setJobDescription('');
        setLocation('');
        setSalary('');
        setRequirements('');
    };

    return (
        <div className='p-4'>
            <h2 className='text-2xl font-semibold mb-4'>Post a New Job</h2>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Job Title</label>
                    <input
                        type='text'
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                        placeholder='Job Title'
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Job Description</label>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                        placeholder='Job Description'
                        rows='4'
                    ></textarea>
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Location</label>
                    <input
                        type='text'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                        placeholder='Location'
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Salary</label>
                    <input
                        type='text'
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                        placeholder='Salary'
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Requirements</label>
                    <textarea
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                        placeholder='Requirements'
                        rows='4'
                    ></textarea>
                </div>
                <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default PostJobForm;
