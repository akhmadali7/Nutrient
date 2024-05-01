import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='py-10 text-white bg-primary'>
      <div className='responsive-x-padding'>
        <div className='flex flex-col gap-y-10'>
          <h1 className='w-2/4 pt-32 text-4xl font-bold'>Connecting end-to-end agriculture solution to help the world thrive</h1>
          <div className='flex flex-col w-1/2 ml-32 gap-y-10'>
            <p> With exploration Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque harum quam laborum, voluptate laboriosam magni nam ius unde veritatis aliquid?</p>
            <Link href={'/'} className='font-medium underline'>Contact Us</Link>
          </div>
        </div>
        <div className='flex flex-row items-end justify-between pt-32'>
          <Link href={'/'} className='flex flex-row items-center px-3 py-1 font-medium rounded-lg gap-x-3 hover:invert bg-primary'> <span><Image src='/icons/atr_white.svg' alt='icons' width={20} height={20}></Image></span>Get to know more about us</Link>
          <div className='flex flex-col items-end'>
            <p className='text-sm'>We Lorem ipsum dolor sit.</p>
            <p className='font-medium'>South East Asia, Africa and <span><Link href={'/'}>many more</Link></span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero