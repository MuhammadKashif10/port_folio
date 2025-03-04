import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-5 sm:px-10 md:px-[10%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
      <h2 className='text-center text-3xl sm:text-4xl md:text-5xl'>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base'>
        I am an experienced WordPress and Frontend Developer with 2 years of expertise in website creation, customization, and maintenance.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index} className='border border-gray-400 rounded-lg px-6 py-10 sm:px-8 sm:py-12 transition-transform duration-500 hover:shadow-lg hover:-translate-y-1'>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read More <Image alt='' src={assets.right_arrow} className='w-4' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
