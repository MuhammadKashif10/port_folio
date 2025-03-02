import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='logo' className='w-36 mx-auto mb-2 '/>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6'/>mkashifshah10@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Muhammad Kashif.All Rights Reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a  target='-blank'  href='https://www.facebook.com/share/1BUrmgdMuu/'>Facebook</a></li>
          <li><a  target='-blank'  href='https://www.linkedin.com/in/muhammad-kashif-867223229/'>Linkeldn</a></li>
          <li><a  target='-blank'  href='https://github.com/MuhammadKashif10'>Github</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
