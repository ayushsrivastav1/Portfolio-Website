import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="py-12 border-t border-[#9b3db8]/60">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left - Name */}
                    <div>
                        <span className="uppercase text-2xl font-bold tracking-wide">
                            Ayush
                        </span>
                    </div>

                    {/* Right - Social Links */}
                    <div className="flex space-x-6 text-2xl text-white">
                        <a
                            href="https://github.com/ayushsrivastav1"
                            target="_blank"
                            className="hover:text-indigo-500 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ayush7488/"
                            target="_blank"
                            className="hover:text-indigo-500 transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-8 text-center text-sm text-zinc-400">
                    © {new Date().getFullYear()} Ayush. All rights reserved.
                </div>

            </div>
        </footer>
    )
}

export default Footer
