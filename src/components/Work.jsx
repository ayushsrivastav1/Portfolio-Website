import React from 'react'
import { projectData } from '../assets/assets'

const Work = () => {
    return (
        <div id='Work' className='py-20'>
            <div className='max-w-7xl mx-auto px-6 py-6'>
                <div className='mb-16 text-center'>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-6'>Featured
                        <span className='text-indigo-300'> Projects</span>
                    </h2>

                    <p className='text-xl max-w-3xl mx-auto'>Here are some of my selected projects that demonstrate my frontend skills, problem-solving ability, and experience with modern web technologies.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-items-center'>
                    {
                        projectData.map((projects, index) => (
                            <div
                                key={index}
                                className='group rounded-xl overflow-hidden cursor-pointer border-2 border-[#9b3db8]/60 shadow-[0_0_25px_rgba(111,31,133,0.35)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full'
                            >

                                {/* Image */}
                                <div className='relative'>
                                    <img
                                        className='w-full h-65 object-cover'
                                        src={projects.image}
                                        alt={projects.title}
                                    />
                                </div>

                                {/* Content */}
                                <div className='p-6 flex-1'>
                                    <h3 className='text-xl font-bold mb-2'>
                                        {projects.title}
                                    </h3>

                                    <p className='text-white text-sm mb-4'>
                                        {projects.description}
                                    </p>

                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            projects.tech.map((language, index) => (
                                                <span
                                                    key={index}
                                                    className='px-3 py-1 border border-indigo-400 text-xs rounded-full'
                                                >
                                                    {language}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className='flex justify-around items-center p-4 mt-auto'>
                                    <a
                                        className='border-2 py-2 px-4 rounded-3xl border-gray-500 hover:border-indigo-400 transition'
                                        href={projects.demo}
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        className='border-2 py-2 px-4 rounded-3xl border-gray-500 hover:border-indigo-400 transition'
                                        href={projects.repo}
                                    >
                                        Github Repo
                                    </a>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Work
