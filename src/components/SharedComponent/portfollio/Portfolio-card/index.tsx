'use client'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' 
import { portfolioinfo } from '@/app/api/data'
import { Icon } from '@iconify/react/dist/iconify.js'
const PortfolioCard = () => {
  
  const [click , SetClick] = useState(false);
  const [likedId, setLikedId] = useState<number | null>(null)
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
    const [hover , setHover]= useState(false)

  const settings = {
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500, // سرعت حرکت اسلاید
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1600, // صفحه خیلی بزرگ
      settings: { slidesToShow: 4, slidesToScroll: 1 }
    },
    {
      breakpoint: 1320, // صفحه بزرگ
      settings: { slidesToShow: 3, slidesToScroll: 1 }
    },
    {
      breakpoint: 1024, // لپ‌تاپ
      settings: { slidesToShow: 2, slidesToScroll: 1 }
    },
    {
      breakpoint: 768, // تبلت
      settings: { slidesToShow: 1, slidesToScroll: 4 }
    },
    {
      breakpoint: 480, // موبایل
      settings: { slidesToShow: 1, slidesToScroll: 1 }
    },
  ],
  }

  return (
    <div id="portfolio" className='py-20 px-10'>
      <div className=" m-auto px-0 max-w-[1600px]  slider-container">
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <div className='pl-6'>
              <div className="relative    overflow-hidden h-full   rounded-t-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <div className='h-full bg-linear-180 p-22  from-black/20 to-transparent hidden'/>
                <span className=' absolute w-full h-60 bg-linear-180 from-black/90 via-black/10 to-transparent'></span>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: '50%' }}
                  className="group-hover:scale-110   transition-transform duration-500"
                  />
                     <div key={index} className="group  cursor-pointer absolute left-10 top-10 scale-140 xl:scale-100 xl:left-4 xl:top-2 " onClick={() => setFullscreenImage(item.image)}>
                  <Icon icon="mdi:fullscreen"  width="30" height="30" className="text-white "/>
                  </div>
                  <div className=' xl:scale-100 scale-140 absolute top-10 right-10 xl:top-2 xl:right-4 '>
                   <button
    onClick={() =>
      setLikedId(likedId === item.id ? null : item.id)
    }
  >
    <Icon
      icon={
        likedId === item.id
          ? 'mdi:cards-heart'
          : 'mdi:cards-heart-outline'
      }
      width="30"
      height="30"
      className={`transition-all duration-300 ${
        likedId === item.id
          ? 'text-red-500 scale-110'
          : 'text-white'
      }`}
    />
  </button>
                  </div>
               
              </div>
              <div className="p-4 bg-gray-900  rounded-b-lg transform group-hover:-translate-y-2 transition-all duration-500">
                <h4 className="text-2xl font-bold text-white  group-hover:text-primary">
                  {item.title}
                </h4>
                <p className="text-sm font-[roboto regular] text-white/70  group-hover:text-primary">
                  {item.info}
                </p>
                {/* skill */}
                               
                               <div className=' flex items-end justify-around'>
                <button onClick={() => {
window.open(item.link)
                }} className={` text-xl bg-light-mode-a rounded  mt-4 w-full block py-2  justify-center px-6 `}>
                  preview 
                </button>
                 <span className=' relative  mt-2 flex justify-center w-full h-full ml-1  '>
                                  {item.figma_prototype && <a href={`${item.figma_prototype}`}  className='py-2'><Icon icon='logos:figma' width={25} height={25}/>
                                  </a>}
                {item.gitLink && <a href={`${item.gitLink}`}> <Icon icon='mdi:github' width={40} height={40}/></a>}
                </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Fullscreen overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black   bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setFullscreenImage(null)}
        >
          <Image

            src={fullscreenImage}
            alt="Fullscreen"
            width={1600}
            height={900}
            style={{ maxWidth: '70%', maxHeight: '100%' }}
            className="animate-fadeIn object-cover mt-20  rounded-2xl"
            />
        </div>
      )}
    </div>
  )
}

export default PortfolioCard
