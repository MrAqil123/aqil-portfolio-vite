import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer: FC = () => {
  return (
    <footer>
      
      <div id='main2' className='grid gap-y-2  border-t-1 border-white/20'>
        <div className=' xl:px-20 sm:px-2  xl:flex xl:justify-between xl:items-center xl:flex-cols'>
          <span className='flex flex-row  text-white/50 xl:flex sm:hidden'><Icon icon="ci-location" className='text-xl flex align-center' /> Herat , Afghanistan</span>
          <ul className='xl:w-96 sm:flex  xl:flex sm:w-full    xl:*:bg-transparent xl:*:text-white/50  sm:gap-y-2 sm:grid-rows-5 w-full   sm:*:text-white/50  sm:*:py-2 xl:justify-center justify-between  xl:gap-x-16 sm:justify-center sm:gap-x-8 '>
            <li className='text-base text-white/50'>
              <Link href='/#about' className='hover:text-light-mode-a'>
                About
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/#services' className='hover:text-light-mode-a'>
                Services
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/portfolio' className='hover:text-light-mode-a'>
                Portfolio
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/blog' className='hover:text-light-mode-a'>
                Blog
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/contact' className='hover:text-light-mode-a'>
                Contact
              </Link>
            </li>
          </ul>
            <div className='xl:flex md:flex hidden '>
          <Link className='hover:text-blue-500 text-current/40' href={"https://www.facebook.com/share/17HG9TK76r/"}><Icon icon="ic:baseline-facebook" width="24" height="24" /></Link>

          <Link className='hover:text-blue-700 text-current/40' href={"##"}><Icon icon="mdi:linkedin" width="24" height="24" /></Link>


          <Link className='hover:text-blue-500 text-current/40' href={"https://x.com/eftek77109"}><Icon icon="mdi:twitter" width="24" height="24" /></Link>



          <Link className='hover:text-blue-500 text-current/40' href={"https://t.me/Aqil2027abcd"}><Icon icon="mdi:telegram" width="24" height="24" /></Link>



          <Link className='hover:text-gray-900 text-current/40' href={"https://www.facebook.com/share/17HG9TK76r/"}><Icon icon="mdi:github" width="24" height="24" /></Link>
            </div>
        </div>
        <div className='text-center'>
          <p className='text-base text-white/50'>
            Copyright © {new Date().getFullYear()} Aqil Eftekhary ــ Portfolio Website. All Rights reserved. 
      
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
