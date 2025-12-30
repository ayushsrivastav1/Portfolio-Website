import React from 'react'
import { assets, profileData } from '../assets/assets'
import { FaCode } from 'react-icons/fa6'

const About = () => {
    return (
        <div id='About' className='py-20'>
            <div className='max-w-7xl mx-auto px-6 py-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='order-1'>
                        <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                            <span>About</span>
                            <span className='text-indigo-400'> Me</span>
                        </h2>
                        <p className='text-md mb-2 leading-8'>
                            I have a strong foundation in HTML, CSS, JavaScript (ES6+), and hands-on experience with React.js and Tailwind CSS. I focus on writing clean, reusable code and following best UI/UX practices to create smooth and engaging user experiences.
                        </p>

                        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mt-6'>
                            {
                                profileData.map((data, index) => (
                                    <div key={index} className='w-full h-55 sm:w-50 p-6 border-2 border-[#9b3db8]/60 shadow-[0_0_25px_rgba(111,31,133,0.35)] rounded cursor-pointer hover:border-b-4 hover:border-b-[#c084fc] hover:border-r-[#a855f7] transition duration-300 hover:-translate-y-1'>
                                        <FaCode className='text-3xl mb-4' />
                                        <h1 className='text-xl font-bold mb-4'>
                                            {data.title}
                                        </h1>
                                        {data.technologies.join(', ')}
                                    </div>
                                ))
                            }
                        </div>
                        <button className='px-8 py-4 mt-6 text-white rounded-full cursor-pointer bg-[#6f1f85] hover:bg-[#8b3db8] transition-colors duration-300'>
                            Download Resume
                        </button>
                    </div>

                    <div className='order-1 lg:order-2 flex justify-center'>
                        <div className='relative w-full max-w-md'>
                            <div className='round overflow-hidden shadow-[0_0_25px_rgba(111,31,133,0.35)]'>
                                <img className='w-full h-full object-cover'
                                    src={assets.profileImg} alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
