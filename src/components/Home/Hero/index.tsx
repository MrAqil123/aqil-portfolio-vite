'use client'
import { TypeAnimation } from 'react-type-animation';
import GridRevealOverlay from '../../SharedComponent/GridRevealOverlay';

const Hero = () => {
  return (
    <section className={`relative md:pt-30 pt-10 min-h-[100vh]  overflow-hidden  bg-cover text-white 
   bg-dark-mode-a`}>
    <img src={`${'https://i.ibb.co/TMQQyC23/hero-section.jpg'}`} className='absolute   scale-y-[-1] top-0 right-0 w-full h-full' alt="no image" />
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className=' md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-up'  
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className=' flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-golden'></span>
            <span className='font-medium  text-sm text-white/90'>
              build everything
            </span>
          </div>
          <h1 className='text-midnight_text-white font-bold dark:text-white   text-4xl  md:text-5xl md:leading-[1.15] '> 
            Hey, i'm Aqil ـــ  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a  Front-End Developer',
        2000, 
        'a Creative designer',
        2000, 
        'a UI/UX Designer',
        3000
      ]}
      wrapper="span"
      style={{animationDuration:'4000'}}
      className='text-4xl md:text-5xl'
      repeat={Infinity}
    />
          </h1>
          <p className='text-white/80 text-xl font-semibold'>
            I help brands shine with clean design, smooth user experiences, and modern React-based websites.
          </p>
          <br/>
          <br/>
          <a
            href='#'
            className='py-3 border-2 border-light-mode-a text-light-mode-a rounded-md hover:bg-light-mode-a hover:text-white transition duration-300 px-8'>
            Get Started
          </a>
          <br/>
        </div>
          <GridRevealOverlay spacing={14} thickness={1} color="255,255,255" spotSize={90} edgeRadius={62} transitionDuration={2000} className='xl:col-span-5 sm:col-span-8 hover:shadow-2xl shadow-purple-500/90 transition-all duration-[.4s] xl:translate-x-30 rounded-full  xl:h-full xl:w-[25vw] w-[80vw]'>
          <img className="translate-y-10  scale-120"
            src='https://i.ibb.co/cPYn0CY/profile.png'
            alt='hero-image'
            width={100}
            height={150}
            style={{ width: '100%', height: 'auto'}}
          />
          </GridRevealOverlay>
</div>
    </section>
  )
}

export default Hero
