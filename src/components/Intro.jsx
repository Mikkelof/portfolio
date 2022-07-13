import React from 'react'

import person from '../assets/person.png'

import {
    FaGithub,
    FaLinkedin

} from 'react-icons/fa'

import {
    CgFileDocument
} from 'react-icons/cg'

import {
    FiMail
} from 'react-icons/fi'

const Intro = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center w-full px-2 py-8'>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Hi, I'm Mikkel.</h1>
                    <div className='flex flex-col py-2 bg-zinc-300 border border-slate-300
                    rounded-xl text-center shadow-xl max-w-[240px]'>
                        <div className='flex justify-between flex-wrap'>
                            <a href="mailto:mikkel.ofrim@gmail.com" rel="noopener noreferrer" target="_blank"><FiMail size={40} className="hover:text-blue-900" /></a>
                            <a href="https://github.com/Mikkelof" rel="noopener noreferrer" target="_blank"><FaGithub size={40} className="hover:text-blue-900" /></a>
                            <a href="https://www.linkedin.com/in/mikkelofrim/" rel="noopener noreferrer" target="_blank"><FaLinkedin size={40} className="hover:text-blue-900" /></a>
                            <a href="" rel="noopener noreferrer" target="_blank"><CgFileDocument size={40} className="hover:text-blue-900" /></a>
                        </div>
                    </div>
                </div>
            <div>
                <img className='w-full' src={person} alt="Illustration" />
            </div>
        </div>
    </div>
  )
}

export default Intro