'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className='fixed top-0 right-0 w-full -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href='#top'>
          <p className='w-28 cursor-pointer mr-14'>Kashif</p>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li><a href='#top'>Home</a></li>
          <li><a href='#about'>About me</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#mywork'>My Work</a></li>
          <li><a href='#contact'>Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4'>
            Contact <Image src={assets.arrow_icon} alt='' className='w-3' />
          </a>
          <button className='block md:hidden ml-3' onClick={() => setMenuOpen(true)}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul className={`fixed md:hidden flex flex-col gap-4 py-20 px-10 top-0 bottom-0 w-64 h-screen bg-rose-50 transition-transform duration-500 ease-in-out transform ${menuOpen ? "translate-x-0 right-0" : "translate-x-full right-0"}`}>
          <div className='absolute right-6 top-6' onClick={() => setMenuOpen(false)}> 
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a href='#top' onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href='#about' onClick={() => setMenuOpen(false)}>About me</a></li>
          <li><a href='#services' onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href='#mywork' onClick={() => setMenuOpen(false)}>My Work</a></li>
          <li><a href='#contact' onClick={() => setMenuOpen(false)}>Contact Me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
