"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import './index.css'
import GridRevealOverlay from '../../SharedComponent/GridRevealOverlay'
import { Icon } from '@iconify/react/dist/iconify.js'
const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // toggle visibility on enter/exit (works for scroll up and down)
        setIsVisible(entry.isIntersecting)
      })
    }, { threshold: 0.35 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
    <div style={{height:150+'px'}} aria-labelledby='cvSection'></div>
    
    <section id='cvSection' className="about-section py-14 md:py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div ref={sectionRef} className={`grid md:grid-cols-2 gap-8 items-center about-fade ${isVisible ? 'is-visible' : ''}`}>
          {/* Left image */}
          <div className="relative">
            <div className="about-img-wrapper rounded-2xl overflow-hidden shadow-xl fade-child" style={{ animationDelay: '0.08s' }}>
              <GridRevealOverlay spacing={14} thickness={1} color="255,255,255" spotSize={90} edgeRadius={62} transitionDuration={1000} className="w-full 2xl:h-[8  00px] h-[420px] md:h-[580px]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://i.ibb.co/CK5k3LzR/aqil.png" 
                    alt="About image"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover bg-top  transition-img h-full"
                  />
                </div>
              </GridRevealOverlay>
            </div>

            {/* Badge */}
            <div>
                  <div className="sm:scale-70 xl:scale-100  rounded-full text-xs md:text-sm bg-white absolute bottom-30 left-20 cursor-pointer selection:bg-transparent text-black font-bold py-2  px-2">
                  <div className="font-medium">Design , Quality. Trust.</div>  
                </div>
                  <div className="sm:scale-70 xl:scale-100  rounded-full text-xs md:text-sm bg-white absolute top-10 right-20  cursor-pointer selection:bg-transparent text-black font-bold py-2  px-2">
                  <div className="font-medium">Professional by design.</div>  
                </div>
            </div>
              </div>

          {/* Right content */}
          <div className="card bg-white/90 overflow-hidden h-full   rounded-2xl p-6 md:p-10 shadow fade-child" style={{ animationDelay: '0.16s' }}>
            <div className=' grid grid-cols-4 '>
            <h2 className=" col-span-3 text-2xl md:text-3xl font-extrabold text-light-mode-a mb-3">Empowering Journeys, Inspiring Growth</h2>

            <p className="col-span-3 text-sm md:text-base text-slate-600 mb-6">
    I build clean, efficient, and user-centered web solutions. Check out my CV to see my work and skills in action
            </p>
             
              <Image 
              src={"https://url-shortener.me/58L2"}
              alt='no picture'
              fill
                    sizes="(max-width: 38px) 10vw, 30vw"
                    className="object-contain scale-x-[-1] opacity-25 -z-20 bg-right translate-x-43 translate-y-26  transition-img "
              />
            </div>
            <div className='flex justify-start'>
            <button onClick={() => window.open('/Aqileftekhary.pdf')} className="inline-flex items-center gap-3 bg-light-mode-a hover:bg-dark-mode-a text-white px-4 py-2 sm:rounded-xl xl:rounded-full font-medium transition-image">
              Download CV
              <Icon icon={"ci:download"} className="text-white text-2xl"/>
            </button>
            <span className=' mx-2 px-6 underline decoration-2 decoration-dotted underline-offset-6 py-2'>
            <a href="#contact" className='text-light-mode-a font-bold '>Contact Now</a>
            </span></div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
