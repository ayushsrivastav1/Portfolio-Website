import React from 'react'
import { skillsData } from '../assets/assets'

const Skills = () => {
  return (
    <div id='Skills' className='py-20'>
      <div className='max-w-7xl mx-auto px-6 py-6'>
        <div className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              TECHNICAL
                <span className='text-indigo-300'> SKILLS</span>   
            </h2>
            <p className='text-xl mb-6 max-w-3xl mx-auto'>A set of technologies and tools I use to build responsive, modern, and user-friendly web applications.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 mb-12'>
            {
                skillsData.map((skill, index)=>(
                    <div key={index} className='p-6 border-2 border-[#9b3db8]/60 shadow-[0_0_25px_rgba(111,31,133,0.35)] rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-[#c084fc] hover:border-r-4 hover:border-r-[#a855f7]  hover:-translate-y-1 transition-all duration-300'>
                        <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-around shadow-[0_0_20px_rgba(168,85,247,0.6)] border border-gray-300 bg-gray-50 mb-4'>
                            <skill.icon className='w-8 h-8 text-blue-600'/>
                        </div>
                        <h3 className='text-xl mb-2 font-bold'>{skill.title}</h3> 
                        <p className='text-sm'>
                            {skill.technologies.join(", ")}
                        </p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Skills
