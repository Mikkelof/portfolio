import React from 'react'

import portfolio from '../assets/Portfolio.png'
import onion from '../assets/Onion.png'
import sprint from '../assets/Sprint.png'
import booking from '../assets/Booking.jpg'
import drikkelek from '../assets/Drikkelek.jpg'
import blodsukkerkalk from '../assets/Blodsukkerkalk.png'

import {FaGithub, FaPlay} from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='mx-auto py-12 bg-slate-900'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-5xl font-bold'>Projects</h2>
            </div>
            <div className='wrap w-5/6 mx-auto max-w-[1500px]'>
                <div className='grid grid-cols-10 py-12'>
                    <div className='row-span-full col-start-1 col-span-8 self-center'>
                        <img src={portfolio} alt="/" />
                    </div>
                    <div className='row-span-full col-span-4 col-end-11 self-center items-center
                    bg-white text-slate-900 m-4 p-4 rounded-xl shadow-2xl border border-slate-900'>
                        <p className='text-4xl py-3 flex text-center'>Portfolio<span className='text-lg text-slate-500 flex flex-col justify-end px-2'>07.2022</span></p>
                        <p className='py-2'>A portfolio website I made in order to showcase some of my previous projects. It was made using React.js and Tailwind CSS.</p>
                        <a href='https://github.com/Mikkelof/portfolio' rel="noopener noreferrer" target="_blank" className='uppercase flex bg-slate-900 border border-slate-900 hover:bg-transparent hover:text-slate-900 
                        rounded-md text-white p-2 drop-shadow-md max-w-[168px]'><FaGithub className='h-6' /> <span className='px-1'>View on github</span></a>
                    </div>
                </div>
                <div className='grid grid-cols-10 py-12'>
                    <div className='row-span-full col-end-11 col-span-8 self-center'>
                        <img src={onion} alt="/" />
                    </div>
                    <div className='row-span-full col-span-4 col-start-1 self-center
                    bg-white text-slate-900 m-4 p-4 rounded-xl shadow-2xl border border-slate-900'>
                        <p className='text-4xl py-3 flex text-center'>Onion Routing<span className='text-lg text-slate-500 flex flex-col justify-end px-2'>04.2022</span></p>
                        <p className='py-2'>A portfolio website I made in order to showcase some of my previous projects. It was made using React.js and Tailwind CSS.</p>
                        <a href='https://github.com/Mikkelof/Onion-routing' rel="noopener noreferrer" target="_blank" className='uppercase flex bg-slate-900 border border-slate-900 hover:bg-transparent hover:text-slate-900 
                        rounded-md text-white p-2 drop-shadow-md max-w-[168px]'><FaGithub className='h-6' /> <span className='px-1'>View on github</span></a>
                    </div>
                </div>
                <div className='grid grid-cols-10 py-12'>
                    <div className='row-span-full col-start-1 col-span-8 self-center'>
                        <img src={sprint} alt="/" />
                    </div>
                    <div className='row-span-full col-span-4 col-end-11 self-center
                    bg-white text-slate-900 m-4 p-4 rounded-xl shadow-2xl border border-slate-900'>
                        <p className='text-4xl py-3 flex text-center'>NTNUI Sprint<span className='text-lg text-slate-500 flex flex-col justify-end px-2'>02.2021-01.2022</span></p>
                        <p className='py-2'>A portfolio website I made in order to showcase some of my previous projects. It was made using React.js and Tailwind CSS.</p>
                    </div>
                </div>
                <div className='grid grid-cols-10 py-12'>
                    <div className='row-span-full col-end-11 col-span-8 self-center'>
                        <img src={booking} alt="/" />
                    </div>
                    <div className='row-span-full col-span-4 col-start-1 self-center
                    bg-white text-slate-900 m-4 p-4 rounded-xl shadow-2xl border border-slate-900'>
                        <p className='text-4xl py-3 flex text-center'>Booking Script<span className='text-lg text-slate-500 flex flex-col justify-end px-2'>02.2021</span></p>
                        <p className='py-2'>A portfolio website I made in order to showcase some of my previous projects. It was made using React.js and Tailwind CSS.</p>
                        <a href='https://github.com/Mikkelof/SitBookingScript' rel="noopener noreferrer" target="_blank" className='uppercase flex bg-slate-900 border border-slate-900 hover:bg-transparent hover:text-slate-900 
                        rounded-md text-white p-2 drop-shadow-md max-w-[168px]'><FaGithub className='h-6' /> <span className='px-1'>View on github</span></a>
                    </div>
                </div>
                <div className='grid grid-cols-10 py-12'>
                    <div className='row-span-full col-start-1 col-span-8 self-center'>
                        <img src={drikkelek} alt="/" />
                    </div>
                    <div className='row-span-full col-span-4 col-end-11 self-center
                    bg-white text-slate-900 m-4 p-4 rounded-xl shadow-2xl border border-slate-900'>
                        <p className='text-4xl py-3 flex text-center'>Drinking Game<span className='text-lg text-slate-500 flex flex-col justify-end px-2'>01.2021</span></p>
                        <p className='py-2'>A portfolio website I made in order to showcase some of my previous projects. It was made using React.js and Tailwind CSS.</p>
                        <span className='flex'><a href='https://github.com/Mikkelof/BlinkGame' rel="noopener noreferrer" target="_blank" className='uppercase flex bg-slate-900 border border-slate-900 hover:bg-transparent hover:text-slate-900 
                        rounded-md text-white p-2 drop-shadow-md max-w-[168px] py-2'><FaGithub className='h-6' /> <span className='px-1'>View on github</span></a>
                        <a href='https://www.youtube.com/watch?v=yVyEQ5xTnZs' rel="noopener noreferrer" target="_blank" className='uppercase flex bg-slate-900 border border-slate-900 hover:bg-transparent hover:text-slate-900 
                        rounded-md text-white p-2 drop-shadow-md max-w-[168px] py-2'><FaPlay className='h-6' /> <span className='px-1'>View a demo</span></a></span>
                    </div>
                </div>
                <div className='grid grid-cols-10 py-12'>
                    <div className='row-span-full col-end-11 col-span-8 self-center'>
                        <img src={blodsukkerkalk} alt="/" />
                    </div>
                    <div className='row-span-full col-span-4 col-start-1 self-center
                    bg-white text-slate-900 m-4 p-4 rounded-xl shadow-2xl border border-slate-900'>
                        <p className='text-4xl py-3 flex text-center'>Insulin Calculator<span className='text-lg text-slate-500 flex flex-col justify-end px-2'>08.2019</span></p>
                        <p className='py-2'>A portfolio website I made in order to showcase some of my previous projects. It was made using React.js and Tailwind CSS.</p>
                        <a href='https://github.com/Mikkelof/InsulinCalc' rel="noopener noreferrer" target="_blank" className='uppercase flex bg-slate-900 border border-slate-900 hover:bg-transparent hover:text-slate-900 
                        rounded-md text-white p-2 drop-shadow-md max-w-[168px]'><FaGithub className='h-6' /> <span className='px-1'>View on github</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects