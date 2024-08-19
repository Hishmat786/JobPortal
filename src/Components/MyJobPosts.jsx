import React from 'react';

const MyJobPosts = ({ email }) => {
    // Retrieve jobs from local storage
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Filter jobs based on the current logged-in user's email
    const myJobs = jobs.filter(job => job.email === email);

    return (
        <div className='p-4'>
            <h2 className='text-2xl font-semibold mb-4'>My Job Posts</h2>
            {myJobs.length > 0 ? (
                <ul className='space-y-4'>
                    {myJobs.map((job) => (
                        <li key={job.id} className='p-4 border border-gray-300 rounded-md'>
                            <h3 className='text-xl font-semibold'>{job.jobTitle}</h3>
                            <p className='text-gray-700'>{job.jobDescription}</p>
                            <p className='text-gray-700'><strong>Location:</strong> {job.location}</p>
                            <p className='text-gray-700'><strong>Salary:</strong> {job.salary}</p>
                            <p className='text-gray-700'><strong>Requirements:</strong> {job.requirements}</p>
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
