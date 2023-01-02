import React from 'react'
import {FcCopyright} from "react-icons/fc";

const Footer = () => {
  return (
    <>
    <hr className='border-1 border-rose-300'/>
    <div className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='text-lime-400 '>
        <div className='flex items-center justify-center gap-1'>
            <FcCopyright/>
            <p className="cursor-pointer capitalize hover:underline">bishnu datt badu</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
