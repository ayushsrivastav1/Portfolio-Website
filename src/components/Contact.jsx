import React, { useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify'
import emalJs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {

    const form = useRef()
    const [isSet, setIsSet] = useState();

    const sendEmail = (e) => {
        e.preventDefault()

        emalJs.sendForm(
            "service_dt6scd1",
            "template_cwl0ny8",
            form.current,
            "FfQrtGhVNBdk90iBu"
        )
            .then(
                () => {
                    setIsSet(true)
                    form.current.reset();
                    toast.success("message send succesfully", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark,"
                    });
                },
                (error) => {
                    toast.error("Error Sending Message.", error);
                    toast.error("Faild to Send Message. Please Try Again", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark,"
                    });
                }
            )

    }


    return (
        <div id='Contact' className='py-20'>
            <ToastContainer />
            <div className='max-w-7xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl sm:text-5xl font-bold mb-6'>CONTACT
                        <span className='text-indigo-400'> US</span>
                    </h1>
                    <p className='mb-2'>Feel free to reach out if you’d like to collaborate, discuss a project, or have any opportunities to share.</p>
                </div>

                <div className='max-w-3xl mx-auto'>
                    <form ref={form} onSubmit={sendEmail} action="" className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <input
                                    className='px-4 py-3 w-full border-2 border-[#8b3db8]/60 rounded outline-none'
                                    placeholder='Enter name'
                                    type="text" 
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    className='px-4 py-3 w-full border-2 border-[#8b3db8]/60 rounded outline-none'
                                    placeholder='Enter email'
                                    type="email"
                                    required 
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                className='px-4 py-3 h-50 w-full border-2 border-[#8b3db8]/60 rounded outline-none'
                                placeholder='Enter subject'
                                required
                            />
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='flex items-center gap-2 px-8 py-4 bg-[#6f1f85] hover:bg-[#8b3db8] text-white text-center cursor-pointer transition rounded-full'>
                                Send Message
                                <FaArrowRight className='text-sm' />
                            </button>

                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Contact
