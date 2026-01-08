import React, { FC } from 'react'
import Breadcrumb from '@/components/Common/Breadcrumb'
import { getImgPath } from '@/utils/image'
import { BreadcrumbLink } from '@/types/breadcrumb'
import { Url } from 'next/dist/shared/lib/router/router'
import { ImgProps } from 'next/dist/shared/lib/get-img-props'

interface HeroSubProps {
  title: string
  description: string
  breadcrumbLinks?: BreadcrumbLink[]
}

const HeroSub: FC<HeroSubProps> = ({ title, description }) => {
  return (
    <>
      <section className='text-center md:py-24 py-16 md:pt-44 pt-36 dark:bg-darkmode'>
        <h2 className='dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text'>
          {title} 
        </h2>
        <p className='md:text-xl text-lg text-grey dark:text-white/50 font-normal max-w-45 w-full mx-auto my-[1.875rem] sm:px-0 px-4'>
          {description}
        </p>
        <Breadcrumb pageName={title} pageDescription={description} />
      </section>
    </>
  )
}

export default HeroSub
