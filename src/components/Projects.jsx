import React from 'react'

import onion from '../assets/Onion.png'
import sprint from '../assets/Sprint.png'

import FaGithub from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='w-full'>

        //TODO: Adjust height (h-[x]) to fit the page after adding all projects

        <div className='w-full h-[1500px] bg-slate-900 absolute mix-blend-overlay'></div>
        <div className='max-w-[1500px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-5xl font-bold'>Projects</h2>
            </div>
            <div className='wrap w-5/6 mx-auto relative'>
                <div className='grid grid-cols-10 py-12'>
                    <div className='row-span-full col-start-1 col-span-8 self-center'>
                        <img src={onion} alt="/" />
                    </div>
                    <div className='row-span-full col-span-6 col-end-11 self-center
                    bg-white text-slate-900 m-4 p-4 rounded-xl shadow-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde vero, eum sint, repudiandae inventore doloribus consectetur deserunt similique autem porro. Quaerat dolore in officiis laborum maiores id tenetur. In id aliquam obcaecati consequatur quis non totam sint, quasi, qui est nihil maxime iste aliquid incidunt at earum quod nesciunt.
                    </div>
                </div>
                <div className='grid grid-cols-10 py-12'>
                    <div className='row-span-full col-end-11 col-span-8 self-center'>
                        <img src={sprint} alt="/" />
                    </div>
                    <div className='row-span-full col-span-6 col-start-1 self-center
                    bg-white text-slate-900 m-4 p-4 rounded-xl shadow-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde vero, eum sint, repudiandae inventore doloribus consectetur deserunt similique autem porro. Quaerat dolore in officiis laborum maiores id tenetur. In id aliquam obcaecati consequatur quis non totam sint, quasi, qui est nihil maxime iste aliquid incidunt at earum quod nesciunt.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects