import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
    style={{backgroundImage: "URL('/header_img.png')"}} id='Header'>
    <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[64px] inline-block max-w-3xl font-semibold pt-20'>Smart Cooling Solutions for a Modern Home.</h2>
        <div className='space-x-6 mt-16'>
        <a href="#Products" className='border border-white px-8 py-3 rounded'>Products</a>
        <a href="#Services"className='bg-[#f04f24] px-8 py-3 rounded'>Book a service</a>
        </div>
      </div>
    </div>
  )
}

export default Header