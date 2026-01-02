import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { navMenu } from '../assets/assets'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full h-[65px] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo*/}
        <h1 className="text-2xl font-bold text-white">AYUSH</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 border border-gray-200 rounded-full px-8 py-3">
          {navMenu.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="text-white hover:text-indigo-400">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="https://drive.google.com/file/d/1VUhMtPTlP4ayo8sX-ERdulVgO8y0rfMr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-8 py-3 border border-gray-200 rounded-full text-white hover:text-indigo-400 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-sm py-6">
          <ul className="flex flex-col items-center gap-5">
            {navMenu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-white text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
            <a
              href="https://drive.google.com/file/d/1VUhMtPTlP4ayo8sX-ERdulVgO8y0rfMr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-8 py-3 border border-gray-200 rounded-full text-white hover:text-indigo-400 transition"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar