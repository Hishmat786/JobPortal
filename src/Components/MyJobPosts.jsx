import React, { useState } from 'react';

const MyJobPosts = ({ email }) => {
    // Retrieve jobs from local storage
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) || []);
    const [editingJob, setEditingJob] = useState(null);
    const [formData, setFormData] = useState({
        jobTitle: '',
        jobDescription: '',
        location: '',
        salary: '',
        requirements: ''
    });

    // Filter jobs based on the current logged-in user's email
    const myJobs = jobs.filter(job => job.email === email);

    const handleDelete = (jobId) => {
        const updatedJobs = jobs.filter(job => job.id !== jobId);
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    };

    const handleEdit = (job) => {
        setEditingJob(job.id);
        setFormData({
            jobTitle: job.jobTitle,
            jobDescription: job.jobDescription,
            location: job.location,
            salary: job.salary,
            requirements: job.requirements
        });
    };

    const handleSaveEdit = () => {
        const updatedJobs = jobs.map(job =>
            job.id === editingJob
                ? { ...job, ...formData }
                : job
        );
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        setEditingJob(null);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='p-4'>
            <h2 className='text-2xl font-semibold mb-4'>My Job Posts</h2>
            {myJobs.length > 0 ? (
                <ul className='space-y-4'>
                    {myJobs.map((job) => (
                        <li key={job.id} className='p-4 border border-gray-300 rounded-md'>
                            {editingJob === job.id ? (
                                <div>
                                    <input
                                        type='text'
                                        name='jobTitle'
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        placeholder='Job Title'
                                        className='mb-2 p-2 border border-gray-300 rounded-md w-full'
                                    />
                                    <textarea
                                        name='jobDescription'
                                        value={formData.jobDescription}
                                        onChange={handleChange}
                                        placeholder='Job Description'
                                        className='mb-2 p-2 border border-gray-300 rounded-md w-full'
                                    />
                                    <input
                                        type='text'
                                        name='location'
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder='Location'
                                        className='mb-2 p-2 border border-gray-300 rounded-md w-full'
                                    />
                                    <input
                                        type='text'
                                        name='salary'
                                        value={formData.salary}
                                        onChange={handleChange}
                                        placeholder='Salary'
                                        className='mb-2 p-2 border border-gray-300 rounded-md w-full'
                                    />
                                    <input
                                        type='text'
                                        name='requirements'
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        placeholder='Requirements'
                                        className='mb-2 p-2 border border-gray-300 rounded-md w-full'
                                    />
                                    <button
                                        onClick={handleSaveEdit}
                                        className='bg-blue-500 text-white p-2 rounded-md'>
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className='text-xl font-semibold'>{job.jobTitle}</h3>
                                    <p className='text-gray-700'>{job.jobDescription}</p>
                                    <p className='text-gray-700'><strong>Location:</strong> {job.location}</p>
                                    <p className='text-gray-700'><strong>Salary:</strong> {job.salary}</p>
                                    <p className='text-gray-700'><strong>Requirements:</strong> {job.requirements}</p>
                                    <button
                                        onClick={() => handleEdit(job)}
                                        className='bg-yellow-500 text-white p-2 rounded-md mr-2'>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(job.id)}
                                        className='bg-red-500 text-white p-2 rounded-md'>
                                        Delete
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You have not posted any jobs yet.</p>
            )}
        </div>
    );
};

export default MyJobPosts;
