import { assets } from '../assets/assets'
import heroBg from '../assets/Hero.bg.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {

  const [text] = useTypewriter({
    words: ['frontend developer', 'react developer'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
    delaySpeed: 1500,
  })

  return (
    <div id='Home' className='min-h-screen flex items-center pt-16 bg-cover bg-center'
      style={{backgroundImage: `url(${heroBg})`}}
    >
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

          {/* text section */}
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-10'>
              <span className='text-white'>I am </span>
              <br />
              <span className='text-indigo-400'>
                {text}
              </span>
              <Cursor/>

            </h1>

            <p className='text-xl text-white mb-6'>
              I craft immersive web experiences at the
              intersection of design and technology.
            </p>

            <div className='flex flex-col md:flex-row items-center gap-4'>
              <a href='#Work' className='flex gap-2 items-center px-10 py-4 bg-black hover:bg-black/80 rounded-full text-slate-200 hover:text-white'>
                View My Work
              </a>

              <a href='#Contact' className='flex items-center gap-2 border-2 border-[#9b3db8]/60 hover:text-indigo-400 rounded-full px-10 py-4 transition'>
                Contact Me
              </a>
            </div>
          </div>

          {/* image section */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating">
              <div className="absolute inset-0 rounded-4xl overflow-hidden border-2 border-indigo-400/50 glow">
                <img
                  className="w-full h-full object-cover"
                  src={assets.profileImg}
                  alt="Profile"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
