import React from 'react'

import person from '../assets/person.png'

import {
    FaGithub,
    FaLinkedin

} from 'react-icons/fa'

import {
    GrDocumentText
} from 'react-icons/gr'

import {
    FiMail
} from 'react-icons/fi'

//TODO: Hover effects and onClick for contact icons

const Intro = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center w-full px-2 py-8'>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Hi, I'm Mikkel.</h1>
                    <div className='flex flex-col py-2 bg-zinc-300 border border-slate-300
                    rounded-xl text-center shadow-xl max-w-[240px]'>
                        <div className='flex justify-between flex-wrap'>
                            <FiMail size={40} />
                            <FaGithub size={40} />
                            <FaLinkedin size={40} />
                            <GrDocumentText size={40} />
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