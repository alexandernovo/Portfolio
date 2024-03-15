import React from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
    return (
        <div className='flex justify-between items-center py-7 p-3 sticky top-0 bg-gray-900 z-10'>
            <div>
                <h1 className='lg:text-4xl font-semibold text-white tracking-widest text-[25px]'>AEN</h1>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex inline list-none flex space-x-9 text-white text-[15px]'>
                    <li className='cursor-pointer text-teal-500 hover:border-b-2 border-transparent hover:border-teal-500 transition duration-300'>
                        <Link to="home" smooth={true}>Home</Link>
                    </li>
                    <li className='cursor-pointer hover:border-b-2 border-transparent hover:border-teal-500 transition duration-300'>
                        <Link to="about" smooth={true}>About</Link>
                    </li>
                    <li className='cursor-pointer hover:border-b-2 border-transparent hover:border-teal-500 transition duration-300'>
                        <Link to="timeline" smooth={true}>Timeline</Link>
                    </li>
                    <li className='cursor-pointer hover:border-b-2 border-transparent hover:border-teal-500 transition duration-300'>
                        <Link to="project" smooth={true}>Project</Link>
                    </li>
                    <li className='cursor-pointer hover:border-b-2 border-transparent hover:border-teal-500 transition duration-300'>
                        <Link to="contact" smooth={true}>Contact</Link>
                    </li>
                </ul>
            </div>
            <button className='outline-none block md:hidden lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

        </div>
    )
}

export default Navigation
