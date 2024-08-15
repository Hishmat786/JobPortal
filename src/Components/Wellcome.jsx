import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import welcome from '../assets/welcome.png'

function Wellcome() {
  return (
    <div>
      <Header/>
      <div className='flex flex-row justify-around gap-8 p-10'>
        <div className='grid  gap-10 ml-16'>
            <div className='ml-7  mt-20 '>
                <h1 className='font-dancing text-3xl text-cyan-800'><span className='text-red-600 text-5xl'>Welcome to Job Portal!</span><br/> Discover your dream job and advance your career with ease.<br/> <br></br>Happy job hunting!</h1>
            </div>
            <div className='flex flex-row justify-start gap-7 p-3'>
              <Link to="/job-seeker">
                <button className='bg-slate-500 p-3 h-14 text-xl text-white border rounded-full cursor-pointer translate transition-transform hover:scale-105 hover:shadow-lg hover:shadow-slate-500'>Job Seeker</button>
              </Link>                
              <Link to="/employer">
                <button className='bg-slate-500 p-3 h-14 text-xl text-white border rounded-full cursor-pointer translate transition-transform hover:scale-105 hover:shadow-lg hover:shadow-slate-500'>Employeer</button>
              </Link>
                
                
            </div>
        </div>
        <div className='ml-10'>
            <img src={welcome} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Wellcome
