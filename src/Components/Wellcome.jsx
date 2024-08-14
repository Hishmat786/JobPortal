import React from 'react'
import Header from './Header'
import welcome from '../assets/welcome.png'

function Wellcome() {
  return (
    <div>
      <Header/>
      <div className='flex flex-row justify-around gap-8 p-10'>
        <div className='grid place-items-center items-center gap-10'>
            <div className='ml-7'>
                <h1 className='font-dancing text-3xl text-cyan-800'><span className='text-red-600'>Welcome to Job Portal!</span><br/> Discover your dream job and advance your career with ease.<br/> <br/>Happy job hunting!</h1>
            </div>
            <div className='flex flex-row gap-7 p-3'>
                <button className='bg-slate-500 p-3 text-xl text-white border rounded-full cursor-pointer'>Job Seeker</button>
                <button className='bg-slate-500 p-3 text-xl text-white border rounded-full cursor-pointer'>Employeer</button>
            </div>
        </div>
        <div>
            <img src={welcome} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Wellcome
