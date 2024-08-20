import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const Links = [
        { name: 'Home', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-20 p-4">
    
            <div className="flex items-center justify-between w-full md:w-auto">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="logo" className="w-10 h-10" />
                    <h1 className="font-eduBeginner text-2xl md:text-3xl">Job Portal</h1>
                </div>

            
                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    <i className="fas fa-bars text-3xl"></i>
                </div>
            </div>

            <div className={`md:flex md:flex-row gap-4 text-xl md:text-2xl font-mono ${isOpen ? 'flex flex-col' : 'hidden'}`}>
                <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-center">
                    {
                        Links.map((item, index) => (
                            <li key={index} className="cursor-pointer">
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="flex flex-col md:flex-row my-1 md:my-0 w-full md:w-auto">
                <div className="flex items-center relative w-full md:w-auto">
                    <i className="fas fa-search absolute left-3 text-gray-400"></i>
                    <input
                        type="text"
                        placeholder="Find Jobs"
                        className="rounded-xl pl-10 pr-2 py-2 mx-2 border border-gray-300 text-black w-full md:w-64"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
