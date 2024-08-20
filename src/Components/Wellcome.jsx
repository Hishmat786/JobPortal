import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import welcome from '../assets/welcome.png';

function Wellcome() {
  return (
    <div>
      <Header />
      <div className='flex flex-col lg:flex-row justify-around gap-8 p-6 lg:p-10'>
        <div className='grid gap-6 lg:gap-10 lg:ml-16'>
          <div className='ml-2 lg:ml-7 mt-10 lg:mt-20'>
            <h1 className='font-dancing text-2xl lg:text-3xl text-cyan-800'>
              <span className='text-red-600 text-4xl lg:text-5xl'>Welcome to Job Portal!</span>
              <br />
              Discover your dream job and advance your career with ease.
              <br />
              <br /> Happy job hunting!
            </h1>
          </div>
          <div className='flex flex-col sm:flex-row justify-start gap-4 sm:gap-7 p-3'>
            <Link to="/job-seeker">
              <button className='bg-slate-500 p-3 h-12 sm:h-14 text-lg sm:text-xl text-white border rounded-full cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-slate-500'>
                Job Seeker
              </button>
            </Link>
            <Link to="/employer">
              <button className='bg-slate-500 p-3 h-12 sm:h-14 text-lg sm:text-xl text-white border rounded-full cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-slate-500'>
                Employer
              </button>
            </Link>
          </div>
        </div>
        <div className='flex justify-center lg:ml-10 mt-8 lg:mt-0'>
          <img src={welcome} alt="Welcome" className='w-full max-w-xs md:max-w-md lg:max-w-lg' />
        </div>
      </div>
    </div>
  );
}

export default Wellcome;
