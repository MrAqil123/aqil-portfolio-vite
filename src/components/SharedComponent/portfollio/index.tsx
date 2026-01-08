import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio'  className=' bg-dark-mode-a mt-10  border-t-1 border-white/30 '>
      <div className='text-center lg:px-0 px-8'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-light-mode-a'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Portfolio
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-left'
          data-aos-delay='500'
          data-aos-duration='1000'>
          My Works
        </h2>
        <div className='pb-16  inline-flex' id='portfolio-section'>
          <p className=' w-[1200px] font-normal text-grey dark:text-white/90'>
            Here you can see some of the projects I’ve worked on. Each one shows a bit of my journey, what I’ve learned, and how I enjoy turning ideas into real, usable things. I’m always exploring new ways to grow, improve, and create better experiences.
          </p>
        </div>
      </div>
      <PortfolioCard />
    </section>
  )
}

export default Portfolio
