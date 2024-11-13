import React from 'react'
import Image from 'next/image';
import sponsors from '../assets/sponsors.png';

function Sponsors() {
  return (
    <div className='w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px] gap-[100px]'>
      <div className='w-[1482px] h-[87px]'><h2 className='font-bold text-black text-[70px] leading-[87.14px] tracking-[-0.02em] text-center'>
        Our sponsers</h2></div>
        <div className='flex justify-between mt-10'>
        <Image src={sponsors} alt= 'sponsers'/>
        </div>
    </div>
  )
}

export default Sponsors