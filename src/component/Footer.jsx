import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {MdContactSupport} from 'react-icons/md'
function Footer() {
  return (
    <>
    <div className='h-full w-screen mb-4'>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-center border-t-2  border-black'>
            <div className='mt-8 text-[15px]'>© Copyright name 2023 All rights reserved</div>
            <div className='mt-8 flex gap-4'>
                <h1 className='text-[15px]'>Follow us on:</h1>
                 <FaFacebook className='cursor-pointer' size={'23px'}/>
                 <FaInstagram className='cursor-pointer' size={'23px'}/>
                 <FaLinkedinIn className='cursor-pointer' size={'23px'}/>
            
            </div>
            <div className='mt-8 text-[15px] text-[#08AEEA] font-[700] flex cursor-pointer'>
                <MdContactSupport size={'30px'}/>
                Support Center
                </div>
        </div>

    </div>
    </>
  )
}

export default Footer