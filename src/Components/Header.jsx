import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png'
function Header() {
    const Links = [
        { name: 'Home', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' }
    ]
    return (
        <div className='flex flex-row justify-around w-full h-20 p-4'>
            <div className='flex flex-row justify-start gap-4' >
                <img src={logo} alt="logo" className='w-10 h-10' />
                <h1 className='font-eduBeginner text-3xl'>Job Portal</h1>
            </div>
            <div>
                <ul className='flex flex-row gap-4 text-2xl font-mono '>
                    {
                        Links.map((item, index) => (
                            <li key={index} className='cursor-pointer'>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-row my-1">
                    <div className="flex flex-row my-1 items-center relative">
                        <i className="fas fa-search absolute left-3 mx-1 text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Find Jobs"
                            className="rounded-xl pl-10 pr-2 py-2 mx-2 border border-gray-300 text-black w-full"
                        />
                    </div>
                </div>
        </div>
    )
}

export default Header
